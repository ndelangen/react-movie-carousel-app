const webpack = require('webpack');
const Promise = require('bluebird');

const config = require('../webpack.client.config.js');

const compiler = webpack(config);
const hasCompiled = new Promise(resolve => compiler.plugin("done", resolve));

module.exports = {
  compiler,
  ready: hasCompiled
};
