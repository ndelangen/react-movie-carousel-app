#!/usr/bin/env node
require('babel-core/register');

global.__ENVIRONMENT__ = process.env.NODE_ENV = 'development';
global.__PORT__ = process.env.PORT || 3000;

const minimist = require('minimist');
const chokidar = require('chokidar');
const Promise = require('bluebird');

const scriptArguments = minimist(process.argv.slice(2));

const appConfig = require('../app/config/' + global.__ENVIRONMENT__);

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
  colors: false,
  hash: false,
  assets: false,
  version: false,
  cached: false,
  cachedAssets: false,
  timings: false,
  chunks: false,
  chunkModules: false,
  entrypoints: false,
  modules: false,
	errorDetails: true,
};
const resultsOptions = Object.assign({}, statOptions, { colors: true, assets: true });
const timeOptions = Object.assign({}, statOptions, { timings: true });

notify('webpack-start', output);

const serverCompiler = require('../server/server-compiler');
serverCompiler.progress((percentage, stage, progress, activity, path) => {
  output.server = { percentage, stage, progress, activity, path };
  notify('webpack-progress', output);
});
serverCompiler.compiler.watch({}, (error, stats) => {
  const serverHotModules = Object.keys(require.cache)
    .filter(isDevModule)
    .map(deleteFromCacheAndReturn);

  if (serverHotModules.length) {
    notify('server-hmr-app', serverHotModules);
  }
});

const clientCompiler = require('../server/client-compiler');
clientCompiler.progress((percentage, stage, progress, activity, path) => {
  output.client = { percentage, stage, progress, activity, path };
  notify('webpack-progress', output);
});

Promise.all([clientCompiler.ready, serverCompiler.ready]).spread((clientStats, serverStats) => {
	notify('webpack-results', clientStats.toString(resultsOptions));
	notify('webpack-ready', clientStats.toJson(timeOptions).time);

	notify('webpack-results', serverStats.toString(resultsOptions));
	notify('webpack-ready', serverStats.toJson(timeOptions).time);
});


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

const developmentMiddleware = require('../server/dev-middleware');
const regularMiddleware = require('../server/routes');

Promise.all([webServer.ready, clientCompiler.ready, serverCompiler.ready]).then(() => {
  notify('server-ready');
  notify('develop-on');

  webServer.server.use(developmentMiddleware.middleware);

  webServer.server.use(regularMiddleware.middleware);

  webServer.server.use((req, res, next) => {
		return require('../dev/server').serverMiddleware(req, res, next);
	});

  watchNodeModules();
});
