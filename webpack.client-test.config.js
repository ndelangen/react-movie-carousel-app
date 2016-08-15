const path = require('path');

const appConfig = require('./app/config/' + global.__ENVIRONMENT__);

const SplitByPathPlugin = require('webpack-split-by-path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;
const DedupePlugin = require('webpack').optimize.DedupePlugin;
const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;
const NoErrorsPlugin = require('webpack').NoErrorsPlugin;
const DefinePlugin = require('webpack').DefinePlugin;

const isDev = global.__ENVIRONMENT__ === 'development';
const isProd = global.__ENVIRONMENT__ === 'production';

const nodeExternals = require('webpack-node-externals');

const devtool = isDev ? { devtool: '#source-map' } : {};

const plugins = isDev ? [
  new SplitByPathPlugin([
    {
      name: 'vendor',
      path: path.join(__dirname, 'node_modules'),
    }
  ], {
    manifest: 'app-entry',
  }),
  new HotModuleReplacementPlugin(),
  new NoErrorsPlugin(),
] : [
  new DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new CommonsChunkPlugin({
    name: 'vendor',
    async: true,
    minChunks: Infinity,
    chunks: [nodeExternals()],
  }),
  new ExtractTextPlugin({
    filename: 'app.css',
    allChunks: true,
  }),
  new DedupePlugin(),
  new NoErrorsPlugin(),
  new UglifyJsPlugin({
    compressor: {
      warnings: false,
      screw_ie8: true,
    },
  }),
];

module.exports = {
  target: 'web',
  entry: {
    app: (isDev ? ['webpack-hot-middleware/client'] : []).concat([
      './app/index.js',
    ]),
    vendor: [
      './app/index.js',
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'http://localhost:3000/assets/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    // chunkFilename: '[name]-[chunkhash].js',
    jsonpFunction: 'wpck',
  },

  ...devtool,
  plugins: [ ...plugins ],

  externals: {
  },
  resolve: {
    root: [
      path.resolve('./app'),
    ],
    extensions: [
      '',
      '.js',
    ]
  },
  module: {
    loaders: isDev ? [
      {
        test: /\.css$/,
        include: path.join(__dirname, 'app'),
        loader: `style!css?modules&importLoaders=1&localIdentName=${appConfig.cssModules.generateScopedName}`,
      },
      Object.assign({
        test: /\.js?$/,
        loader: 'babel',
        include: path.join(__dirname, 'app'),
      }, {
        query: {
          plugins: [
            ['react-transform', {
              'transforms': [{
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module'],
              }],
            }],
            ['transform-object-assign'],
          ],
        },
      })
    ] : [
      {
        test: /\.css$/,
        include: path.join(__dirname, 'app'),
        loader: ExtractTextPlugin.extract({
          fallbackLoader: `style!css?modules&importLoaders=1&localIdentName=${appConfig.cssModules.generateScopedName}`,
          loader: `css?modules&importLoaders=1&localIdentName=${appConfig.cssModules.generateScopedName}`,
        })
      },
      {
        test: /\.js?$/,
        loader: 'babel',
        include: path.join(__dirname, 'app'),
        query: {
          plugins: [
            'transform-es2015-template-literals',
            'transform-es2015-literals',
            'transform-es2015-function-name',
            'transform-es2015-arrow-functions',
            'transform-es2015-block-scoped-functions',
            'transform-es2015-classes',
            'transform-es2015-object-super',
            'transform-es2015-shorthand-properties',
            'transform-es2015-computed-properties',
            'transform-es2015-for-of',
            'transform-es2015-sticky-regex',
            'transform-es2015-unicode-regex',
            'check-es2015-constants',
            'transform-es2015-spread',
            'transform-es2015-parameters',
            'transform-es2015-destructuring',
            'transform-es2015-block-scoping',
            'transform-es2015-typeof-symbol',
            ['transform-regenerator', { async: false, asyncGenerators: false, }],
            'transform-object-assign'
          ],
        },
      },
    ],
  },
};
