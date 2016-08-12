var path = require('path');

const appConfig = require('./app/config/' + global.__ENVIRONMENT__);

const NoErrorsPlugin = require('webpack').NoErrorsPlugin;
const nodeExternals = require('webpack-node-externals');

const isDev = global.__ENVIRONMENT__ === 'development';
const isProd = global.__ENVIRONMENT__ === 'production';

module.exports = {
  target: 'node',
  externals: [nodeExternals()],

  entry: {
    server: [
      './app/index.js'
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    jsonpFunction: 'wpck'
  },
  plugins: [
    new NoErrorsPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    // 	compressor: {
    // 		warnings: false,
    // 		screw_ie8: true
    // 	}
    // })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.join(__dirname, 'app'),
        loader: `fake-style!css?modules&importLoaders=1&localIdentName=${appConfig.cssModules.generateScopedName}`
      },
      {
        test: /\.json$/,
        loader: 'json-loader' },
      {
        test: /\.js?$/,
        loader: 'babel',
        include: path.join(__dirname, 'app'),
      }
    ]
  },
  resolve: {
    root: [
      path.resolve('./app'),
    ],
    extensions: [
      '',
      '.js'
    ]
  }
};
