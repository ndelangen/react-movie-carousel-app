const webpack = require('webpack');
const Promise = require('bluebird');

const config = require('../webpack.server.config.js');

const compiler = webpack(config);
const hasCompiled = new Promise(resolve => compiler.plugin("done", resolve));

// compiler.plugin("compile", function(params) {
//   console.log("The compiler is starting to compile...");
// });
// compiler.plugin("done", (stats) => {
//   console.log('server-compile done');
// });
// compiler.plugin("failed", function(error) {
//   console.log("The compilation has failed...");
//   console.error(error);
// });

module.exports = {
  compiler,
  ready: hasCompiled
};
