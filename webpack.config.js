'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: '#source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./app/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.js',
		publicPath: 'http://localhost:3000/'
	},
	plugins: [
		new ExtractTextPlugin('app.css', {
			allChunks: true
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
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
	resolve: {
		extensions: [
			'',
			'.js'
		]
	}
};
