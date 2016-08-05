#!/usr/bin/env node
require('babel-core/register');

global.__ENVIRONMENT__ = process.env.NODE_ENV = 'development';
global.__PORT__ = process.env.PORT = 3000;

const minimist = require('minimist');
const chokidar = require('chokidar');

const scriptArguments = minimist(process.argv.slice(2));

const appConfig = require('../app/config/' + global.__ENVIRONMENT__);

require('css-modules-require-hook')(appConfig.cssModules);

const webServer = require('../server/main');
const notify = require('../server/cli-notifications');
const developmentMiddleware = require('../server/developmentMiddleware');
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


Promise.all([webServer.ready, developmentMiddleware.ready]).then(() => {
  notify('server-ready');
  notify('develop-on');

  webServer.server.use(developmentMiddleware.middleware);
  // TODO figure this out
  // server.use(express.static(path.resolve(__dirname, 'dist')));
  // server.use(express.static(path.resolve(__dirname, 'dev')));

  // webServer.server.get('/', regularMiddleware.middleware);


  webServer.server.get('*', (req, res, next) => {
		return require('../app/index').serverMiddleware(req, res, next);
	});

  watchNodeModules();
});
