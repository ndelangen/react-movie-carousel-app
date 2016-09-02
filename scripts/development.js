#!/usr/bin/env node
require('babel-core/register');

global.__ENVIRONMENT__ = process.env.NODE_ENV = 'development';
global.__PORT__ = process.env.PORT || 3000;

const minimist = require('minimist');
const chokidar = require('chokidar');
const Promise = require('bluebird');

const scriptArguments = minimist(process.argv.slice(2));

const webServer = require('../server/main');
const notify = require('../server/cli-notifications');
const webpackRunner = require('../server/webpack-runner');

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

const appConfig = require('../app/config/' + global.__ENVIRONMENT__);

const onAppChange = () => {
  const serverHotModules = Object.keys(require.cache)
    .filter(isDevModule)
    .map(deleteFromCacheAndReturn);

  if (serverHotModules.length) {
    notify('server-hmr-app', serverHotModules);
    require('../build/server'); // reload it
  }
};
const onNodeModulesChange = () => {
  const serverHotModules = Object.keys(require.cache)
    .filter(isNodeModule)
    .map(deleteFromCacheAndReturn);

  if (serverHotModules.length) {
    notify('server-hmr-node', serverHotModules);
  }
};

const webpackCompilers = webpackRunner.run([
  {
    options: { progress: true },
    compiler: require('../server/client-compiler'),
  },
  {
    options: { progress: true, watch: true, watchCallback: onAppChange },
    compiler: require('../server/server-compiler'),
  },
]);

const watchNodeModules = () => {
  const options = {
    depth: 2,
    followSymlinks: true,
    ignoreInitial: true,
    ignorePermissionErrors: true
  };

  chokidar
    .watch('./node_modules/**/package.json', options)
    .on('all', onNodeModulesChange);
};

const developmentMiddleware = require('../server/dev-middleware');
const regularMiddleware = require('../server/routes');

Promise.all(webpackCompilers.map(c => c.ready).concat([webServer.ready])).then(() => {
  notify('server-ready');
  notify('develop-on');

  webServer.server.use(developmentMiddleware.middleware);

  webServer.server.use(regularMiddleware.middleware);

  webServer.server.use((req, res, next) => {
    return require('../build/server').serverMiddleware(req, res, next);
  });

  watchNodeModules();
});
