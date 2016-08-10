const webpack = require('webpack');
const Promise = require('bluebird');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');

const config = require('../webpack.server.config.js');

const compiler = webpack(config);
const hasCompiled = new Promise(resolve => compiler.plugin("done", resolve));

const progress = callback => compiler.apply(new ProgressPlugin(callback));

module.exports = {
  name: 'server',
  compiler,
  progress,
  ready: hasCompiled
};
