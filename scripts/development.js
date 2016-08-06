#!/usr/bin/env node
require('babel-core/register');

global.__ENVIRONMENT__ = process.env.NODE_ENV = 'development';
global.__PORT__ = process.env.PORT = 3000;

const minimist = require('minimist');
const chokidar = require('chokidar');

const scriptArguments = minimist(process.argv.slice(2));

const appConfig = require('../app/config/' + global.__ENVIRONMENT__);

// require('css-modules-require-hook')(appConfig.cssModules);

const webServer = require('../server/main');
const notify = require('../server/cli-notifications');

const moduleMatchExpressions = {
	node: new RegExp('/node_modules/'),
  app: new RegExp('/app/'),
  dev: new RegExp('/dev/'),
};
const isNodeModule = id => id.match(moduleMatchExpressions.node);
const isAppModule = id => id.match(moduleMatchExpressions.app);
const isDevModule = id => id.match(moduleMatchExpressions.dev);
const deleteFromCacheAndReturn = id => {
	delete require.cache[id];
	return id;
};


const output = {
  client: {
    percentage: 0,
    stage: 'starting',
    progress: '0/0 modules',
    activity: '0 active',
    path: undefined
  },
  server: {
    percentage: 0,
    stage: 'starting',
    progress: '0/0 modules',
    activity: '0 active',
    path: undefined
  },
};

const statOptions = {
  colors: true,
  hash: false,
  assets: true,
  version: false,
  cached: false,
  cachedAssets: false,
  timings: false,
  chunks: false,
  chunkModules: false,
  entrypoints: false,
  modules: false
};


notify('webpack-start', output);

var ProgressPlugin = require('webpack/lib/ProgressPlugin');

const serverCompiler = require('../server/server-compiler');
serverCompiler.compiler.apply(new ProgressPlugin((percentage, stage, progress, activity, path) => {
  output.server = { percentage, stage, progress, activity, path };
  notify('webpack-progress', output);
}));
serverCompiler.compiler.watch({}, (error, stats) => {
  clientCompiler.ready.then(() => {
    notify('webpack-results', stats.toString(statOptions));
    notify('webpack-ready', stats.toString(Object.assign({}, statOptions, { timings: true, assets: false, colors: false })));

    const serverHotModules = Object.keys(require.cache)
      .filter(isDevModule)
      .map(deleteFromCacheAndReturn);

    if (serverHotModules.length) {
      notify('server-hmr-app', serverHotModules);
    }
  });
});

const clientCompiler = require('../server/client-compiler');
clientCompiler.compiler.apply(new ProgressPlugin((percentage, stage, progress, activity, path) => {
  output.client = { percentage, stage, progress, activity, path };
  notify('webpack-progress', output);
}));
clientCompiler.compiler.plugin("done", (stats) => {
  serverCompiler.ready.then(() => {
    notify('webpack-results', stats.toString(statOptions));
    notify('webpack-ready', stats.toString(Object.assign({}, statOptions, { timings: true, assets: false, colors: false })));

    const serverHotModules = Object.keys(require.cache)
      .filter(isAppModule)
      .map(deleteFromCacheAndReturn);

    if (serverHotModules.length) {
      notify('server-hmr-app', serverHotModules);
    }
  });
});


const developmentMiddleware = require('../server/dev-middleware');
const regularMiddleware = require('../server/routes');


const watchNodeModules = () => {
  const options = {
    depth: 2,
    followSymlinks: true,
    ignoreInitial: true,
    ignorePermissionErrors: true
  };

  chokidar
    .watch('./node_modules/**/package.json', options)
    .on('all', () => {
      const serverHotModules = Object.keys(require.cache)
        .filter(isNodeModule)
        .map(deleteFromCacheAndReturn);

      if (serverHotModules.length) {
        notify('server-hmr-node', serverHotModules);
      }
    });
};


Promise.all([webServer.ready, clientCompiler.ready, serverCompiler.ready]).then(() => {
  notify('server-ready');
  notify('develop-on');

  webServer.server.use(developmentMiddleware.middleware);
  // TODO figure this out
  // server.use(express.static(path.resolve(__dirname, 'dist')));
  // server.use(express.static(path.resolve(__dirname, 'dev')));

  // webServer.server.get('/', regularMiddleware.middleware);


  webServer.server.get('*', (req, res, next) => {
		// console.log(require('../dev/server'));
		return require('../dev/server').serverMiddleware(req, res, next);
	});

  watchNodeModules();
});
