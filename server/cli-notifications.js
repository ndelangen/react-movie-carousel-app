const chalk = require('chalk');
const readline = require('readline');
const port = global.__PORT__ || process.env.PORT || 3000;

const startTime = new Date();
const logTime = (date) => chalk.gray(`[${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}]`)

const renderProgressBar = (percentage) => {
	const length = 10;
	const complete = Array(Math.floor(length * percentage)).fill('◼︎').join('');
	const incomplete = Array(Math.ceil(length - (length * percentage))).fill('◼︎').join('');
	return `${chalk.green(complete)}${chalk.gray(incomplete)}`;
}

const removeWebpackProgress = (data) => {
	Object.keys(data).forEach(() => {
		readline.moveCursor(process.stdout, 0, -1);
		readline.clearScreenDown(process.stdout);
	});
};
const logWebpackProgress = (data) => {
	Object.keys(data).forEach((key) => {
		const item = data[key];
		switch (item.stage) {
			case 'starting':
				console.info(`${chalk.blue('◉')}  - starting compiling ${key}`);
				return;
			case 'compiling':
				console.info(`${chalk.yellow('◉')}  - compiling ${key} ${renderProgressBar(item.percentage)}`);
				return;
			case 'building modules':
				console.info(`${chalk.yellow('◉')}  - building ${key}: ${renderProgressBar(item.percentage)}`);
				return;
			case 'sealing':
			case 'optimizing':
			case 'module optimization':
			case 'advanced module optimization':
			case 'basic chunk optimization':
			case 'chunk optimization':
			case 'advanced chunk optimization':
			case 'module and chunk tree optimization':
			case 'module reviving':
			case 'module order optimization':
			case 'module id optimization':
			case 'chunk reviving':
			case 'chunk order optimization':
			case 'chunk id optimization':
			case 'hashing':
			case 'module assets processing':
			case 'chunk assets processing':
			case 'additional chunk assets processing':
			case 'recording':
			case 'additional asset processing':
			case 'chunk asset optimization':
			case 'asset optimization':
			case 'emitting':
				console.info(`${chalk.yellow('◉')}  - optimizing ${key}: ${renderProgressBar(item.percentage)}`);
				// console.info(`${chalk.yellow('◉')}  - optimizing ${key}: ${item.percentage}`);
				return;
			case '':
				console.info(`${chalk.green('◉')}  - finished ${key}: ${renderProgressBar(item.percentage)}`);
				return;
			default:
				console.log('?');
		}
	});
};

module.exports = function cliNotify (type, data) {
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
			logWebpackProgress(data);
			return;
		case 'webpack-progress':
			removeWebpackProgress(data);
			logWebpackProgress(data);
			return;


		case 'webpack-start-server':
			console.info(`${chalk.blue('◉')}  - Webpack server started.       ${logTime(new Date())}`);
			return;
		case 'webpack-start-client':
			console.info(`${chalk.blue('◉')}  - Webpack client started.       ${logTime(new Date())}`);
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
