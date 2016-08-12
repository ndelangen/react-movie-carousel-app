#!/usr/bin/env node
require('babel-core/register');

global.__ENVIRONMENT__ = process.env.NODE_ENV = 'production';
global.__PORT__ = process.env.PORT || 3000;

const minimist = require('minimist');
const Promise = require('bluebird');

const scriptArguments = minimist(process.argv.slice(2));

const appConfig = require('../app/config/' + global.__ENVIRONMENT__);

const webServer = require('../server/main');
const notify = require('../server/cli-notifications');
const webpackRunner = require('../server/webpack-runner');

const webpackCompilers = webpackRunner.run([
  {
    options: { progress: true, run: true },
    compiler: require('../server/client-compiler'),
  },
  {
    options: { progress: true, run: true },
    compiler: require('../server/server-compiler'),
  },
]);

const assetsMiddleware = require('../server/assets');
const regularMiddleware = require('../server/routes');

Promise.all(webpackCompilers.map(c => c.ready).concat([webServer.ready])).then(() => {
  notify('server-ready');

  webServer.server.use(assetsMiddleware.middleware);

  webServer.server.use(regularMiddleware.middleware);

  webServer.server.use(require('../build/server').serverMiddleware);
});
