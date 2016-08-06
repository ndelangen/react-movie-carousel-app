const Promise = require('bluebird');
const webpack = require('webpack');
const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');

const config = require('../webpack.client.config.js');
const notify = require('./cli-notifications');


const moduleMatchExpressions = {
	node: new RegExp('/node_modules/'),
	app: new RegExp('/app/'),
};
const isNodeModule = id => id.match(moduleMatchExpressions.node);
const isAppModule = id => id.match(moduleMatchExpressions.app);
const deleteFromCacheAndReturn = id => {
	delete require.cache[id];
	return id;
};


const devOptions = {
  publicPath: config.output.publicPath,
  quiet: true,
  noInfo: true,
  stats: 'errors-only'
};
const hotOptions = {
  path: "/__webpack_hmr",
  publicPath: config.output.publicPath,
  timeout: 2000,
  overlay: true,
  reload: false,
  log: false,
  warn: true
};

const compiler = require('./client-compiler').compiler;
const devMiddleware = dev(compiler, devOptions);
const hotMiddleware = hot(compiler, hotOptions);
const middleware = [devMiddleware, hotMiddleware];
const hasCompiled = new Promise(resolve => compiler.plugin("done", resolve));

module.exports = {
  compiler,
  middleware,
  ready: hasCompiled,
};
