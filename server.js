require('babel-core/register');

global.__ENVIRONMENT__ = process.env.NODE_ENV || 'development';

const chalk = require('chalk');
const chokidar = require('chokidar');

const startTime = new Date();
const logTime = (date) => chalk.gray(`[${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}]`)

const notify = function(type, data) {
	switch (type) {
		case 'script-start':
			console.info(``);
			return;
		case 'server-start':
			console.info(`${chalk.blue('◉')}  - Server started.               ${logTime(startTime)}`);
			return;
		case 'server-ready':
			console.info(`${chalk.green('◉')}  - Server ready.                 ${logTime(new Date())}`);
			return;
		case 'server-hmr-app':
			console.info(`${chalk.green('◉')}  - Server HMR: ${chalk.cyan('/app/*')}            ${logTime(new Date())}`);
			return;
		case 'server-hmr-node':
			console.info(`${chalk.green('◉')}  - Server HMR: ${chalk.cyan('/node_modules/*')}   ${logTime(new Date())}`);
			return;
		case 'server-down':
			process.stdout.clearLine();
			process.stdout.cursorTo(0);
			console.warn(`${chalk.red('◉')}  - Server shut down.            ${logTime(new Date())}`);
			return;
		case 'webpack-start':
			console.info(`${chalk.blue('◉')}  - Webpack started.              ${logTime(new Date())}`);
			return;
		case 'webpack-ready':
			const time = parseInt(data.match(/[0-9]+/)[0], 10);
			const colors = ['green', 'cyan', 'blue', 'yellow', 'red'];
			const colorIndex = Math.floor(Math.max(0, Math.min((time - 3770) / 2000, 4)));
			const timestamp = chalk[colors[colorIndex]];
			console.info(`${chalk.green('◉')}  - Webpack completed in ${timestamp(time + 'ms')}   ${logTime(new Date())}`);
			return;
		case 'webpack-results':
			console.log('');
			console.info(data);
			console.log('');
			return;
		case 'develop-on':
			console.log('');
			console.log('🤓  - Happy developing! Open up http://localhost:%s/ in your browser.', port)
			console.log('');
			return;
	}
};

const path = require('path');
const Promise = require('bluebird');

const express = require('express');

const webpack = require('webpack');
const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const appConfig = require('./app/config/' + global.__ENVIRONMENT__);

const port = process.env.PORT || 3000;
const server = express();

// Otherwise errors thrown in Promise routines will be silently swallowed.
// (e.g. any error during rendering the app server-side!)
process.on('unhandledRejection', (reason, p) => {
	if (reason.stack) {
		console.error(reason.stack);
	} else {
		console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
	}
});


const exitHandler = (err) => {
	notify('server-down');
  if (err) {
		console.error(err.stack);
	}
	process.exit();
}

//do something when app is closing
// process.on('exit', exitHandler);

//catches ctrl+c event
process.on('SIGINT', exitHandler);

//catches uncaught exceptions
process.on('uncaughtException', exitHandler);


const moduleMatchExpressions = {
	node: new RegExp('/node_modules/'),
	app: new RegExp('/app/'),
}
const isNodeModule = id => id.match(moduleMatchExpressions.node);
const isAppModule = id => id.match(moduleMatchExpressions.app);
const deleteFromCacheAndReturn = id => {
	delete require.cache[id];
	return id;
};

const serverState = new Promise((resolve, reject) => {
	notify('server-start');
	server.listen(port, 'localhost', (error) => {
		error ? reject(error) : resolve(server);
	});
});

const compilerState = new Promise((resolve, reject) => {
	if (process.env.NODE_ENV === 'development') {
		notify('webpack-start');

		const devOptions = {
			publicPath: config.output.publicPath,
			quiet: true,
			noInfo: true,
			stats: 'errors-only'
		};
		const hotOptions = {
			path: "/__webpack_hmr",
			publicPath: config.output.publicPath,
			timeout: 2000,
			overlay: true,
			reload: false,
			log: false,
			warn: true
		};
		const statOptions = {
			colors: true,
			hash: false,
			assets: true,
			version: false,
			cached: false,
			cachedAssets: false,
			timings: false,
			chunks: false,
			chunkModules: false,
			entrypoints: false,
			modules: false
		};

		const compiler = webpack(config);
		const devMiddleware = dev(compiler, devOptions);
		const hotMiddleware = hot(compiler, hotOptions);

		compiler.plugin("done", (stats) => {
			notify('webpack-results', stats.toString(statOptions));
			notify('webpack-ready', stats.toString(Object.assign({}, statOptions, { timings: true, assets: false, colors: false })));

			const serverHotModules = Object.keys(require.cache)
				.filter(isAppModule)
				.map(deleteFromCacheAndReturn);

			if (serverHotModules.length) {
				notify('server-hmr-app', serverHotModules);
			}

			resolve();
		});

		server.use(devMiddleware);
		server.use(hotMiddleware);
	} else {
		resolve();
	}
});


// Short-circuit the browser's annoying favicon request. You can still
// specify one as long as it doesn't have this exact name and path.
server.get('/favicon.ico', (req, res) => {
	res.writeHead(404, { 'Content-Type': 'image/x-icon' });
	res.end();
});

server.use(express.static(path.resolve(__dirname, 'dist')));

Promise.all([serverState, compilerState]).then((x, compiler) => {
	notify('server-ready');

	server.get('*', (req, res, next) => {
		console.log(`${chalk.blue('☆')} ${req.url}`);

		return require('./app/index').serverMiddleware(req, res, next);
	});


	if (process.env.NODE_ENV === 'development') {
		notify('develop-on');

		const watcher = chokidar.watch('./node_modules/**/package.json', {
			depth: 2,
			followSymlinks: true,
			ignoreInitial: true,
			ignorePermissionErrors: true
		});
		watcher.on('ready', () => {
		  watcher.on('all', () => {
				const serverHotModules = Object.keys(require.cache)
					.filter(isNodeModule)
					.map(deleteFromCacheAndReturn);

				if (serverHotModules.length) {
					notify('server-hmr-node', serverHotModules);
				}
		  });
		});

	}
});
