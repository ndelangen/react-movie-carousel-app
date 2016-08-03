'use strict';

var path = require('path');
var webpack = require('webpack');
var del = require('del');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var SplitByPathPlugin = require('webpack-split-by-path');

class CleanPlugin {
	constructor(options) {
		this.options = options;
	}

	apply () {
		del.sync(this.options.files);
	}
}

module.exports = {
	entry: {
		app: './app/index'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: 'http://localhost:3000/',
		chunkFilename: "[name].js"
	},
	plugins: [
		new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
		new SplitByPathPlugin([
      {
        name: 'vendor',
        path: path.join(__dirname, 'node_modules')
      }
    ], {
      manifest: 'app-entry'
    }),
		new ExtractTextPlugin({
			filename: 'app.css',
			allChunks: true
		}),
		new CleanPlugin({
			files: ['dist/*']
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false,
				screw_ie8: true
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.css$/,
				include: path.join(__dirname, 'app'),
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style',
					loader: 'css?modules&importLoaders=1&localIdentName=[hash:base64:5]'
				})
			},
			{
				test: /\.js?$/,
				loader: 'babel',
				include: path.join(__dirname, 'app'),
				query: {
					plugins: [
						['transform-object-assign']
					]
				}
			}
		]
	}
};
