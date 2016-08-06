'use strict';

var path = require('path');
var webpack = require('webpack');
// var SplitByPathPlugin = require('webpack-split-by-path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
	target: 'node',
	externals: [nodeExternals()],
	// devtool: '#source-map',
	entry: {
		server: [
			// 'webpack-hot-middleware/client',
			'./app/index.js'
		],
	},
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, 'dev'),
		filename: '[name].js',
		chunkFilename: "[name].js",
		jsonpFunction: 'wpck'
	},
	plugins: [
		// new webpack.ProgressPlugin(),
		// new SplitByPathPlugin([
    //   {
    //     name: 'vendor',
    //     path: path.join(__dirname, 'node_modules')
    //   }
    // ], {
    //   manifest: 'app-entry'
    // }),
		// new webpack.optimize.DedupePlugin(),
		// new webpack.optimize.OccurrenceOrderPlugin(),
		// new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compressor: {
		// 		warnings: false,
		// 		screw_ie8: true
		// 	}
		// })
	],
	module: {
		// noParse: [/\/node_modules\//],
		loaders: [
			{
				test: /\.css$/,
				include: path.join(__dirname, 'app'),
				loader: 'fake-style!css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'
			},
      {
        test: /\.json$/,
        loader: "json-loader" },
			{
				test: /\.js?$/,
				loader: 'babel',
				include: path.join(__dirname, 'app'),
			}
		]
	},
	// externals: {
  //   // Use external version of React
  //   // "react": "React",
  //   // "react-dom": "ReactDOM"
  // },
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
