'use strict';

var path = require('path');
var webpack = require('webpack');
var SplitByPathPlugin = require('webpack-split-by-path');

module.exports = {
	// devtool: '#source-map',
	entry: {
		app: [
			'webpack-hot-middleware/client',
			'./app/index.js'
		],
		// vendor:
	},
	output: {
		path: path.join(__dirname, 'dev'),
		filename: '[name].js',
		publicPath: 'http://localhost:3000/',
		chunkFilename: "[name]-[chunkhash].js"
	},
	plugins: [
		new SplitByPathPlugin([
      {
        name: 'vendor',
        path: path.join(__dirname, 'node_modules')
      }
    ], {
      manifest: 'app-entry'
    }),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compressor: {
		// 		warnings: false,
		// 		screw_ie8: true
		// 	}
		// })
	],
	module: {
		// noParse: [/\/react\//, /\/react-dom\//],
		loaders: [
			{
				test: /\.css$/,
				include: path.join(__dirname, 'app'),
				loader: 'style!css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'
			},
			{
				test: /\.js?$/,
				loader: 'babel',
				include: path.join(__dirname, 'app'),
				query: {
					plugins: [
						['react-transform', {
							'transforms': [{
								transform: 'react-transform-hmr',
								// If you use React Native, pass 'react-native' instead:
								imports: ['react'],
								// This is important for Webpack HMR:
								locals: ['module']
							}]
						}],
						['transform-object-assign']
					]
				}
			}
		]
	},
	externals: {
    // Use external version of React
    // "react": "React",
    // "react-dom": "ReactDOM"
  },
	resolve: {
		extensions: [
			'',
			'.js'
		]
	}
};
