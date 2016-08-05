const Promise = require('bluebird');
const webpack = require('webpack');
const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');

const config = require('../webpack.config.js');
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

notify('webpack-start');
const compiler = webpack(config);
const devMiddleware = dev(compiler, devOptions);
const hotMiddleware = hot(compiler, hotOptions);
const middleware = [devMiddleware, hotMiddleware];
const hasCompiled = new Promise(resolve => compiler.plugin("done", resolve));

compiler.plugin("done", (stats) => {
  notify('webpack-results', stats.toString(statOptions));
  notify('webpack-ready', stats.toString(Object.assign({}, statOptions, { timings: true, assets: false, colors: false })));

  const serverHotModules = Object.keys(require.cache)
    .filter(isAppModule)
    .map(deleteFromCacheAndReturn);

  if (serverHotModules.length) {
    notify('server-hmr-app', serverHotModules);
  }
});



module.exports = {
  compiler,
  middleware,
  ready: hasCompiled,
};
