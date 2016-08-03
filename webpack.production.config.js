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
						['transform-regenerator', { async: false, asyncGenerators: false }],
						'transform-object-assign'
					]
				}
			}
		]
	}
};
