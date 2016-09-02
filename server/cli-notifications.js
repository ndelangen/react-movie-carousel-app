const chalk = require('chalk');
const readline = require('readline');
const port = global.__PORT__ || process.env.PORT || 3000;

const { width: terminalWidth } = require('window-size');
const stringPadding = Array(terminalWidth).fill(' ').join('');

const startTime = new Date();
const logTime = (date) => chalk.gray(`[${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}]`)

const progressBarWidth = terminalWidth - 24;
const renderProgressBar = ({ percentage, progress, activity }) => {
	const string = `${renderPercentage(percentage)} ${progress} ${activity}${stringPadding}`;
	const completeLength = Math.ceil(progressBarWidth * percentage);

	const complete = string.substring(0, completeLength);
	const incomplete = string.substring(completeLength, progressBarWidth);
	return `${chalk.bgYellow.black(complete)}${chalk.bgWhite.black(incomplete)}`;
};


const renderStage = ({stage}, length = 10) => {
	if (stage.length < length) {
		return stage.concat(Array(length).fill(' ').join('')).substr(0, length);
	} else {
		return stage.substr(0, 9).concat('…');
	}
};

const renderPercentage = percentage => `${Math.ceil(100 * percentage)}%`;

const removeWebpackProgress = (data) => {
	Object.keys(data).forEach(() => {
		readline.moveCursor(process.stdout, 0, -1);
	});
  readline.clearScreenDown(process.stdout);
};
const logWebpackProgress = (data) => {
	Object.keys(data).forEach((key) => {
		const item = data[key];
		switch (item.stage) {
			case 'starting':
				console.info(`${chalk.blue('◉')}  - ${key} ${renderStage(item)} ${renderProgressBar(item)}`);
				return;
			case 'compiling':
				console.info(`${chalk.yellow('◉')}  - ${key} ${renderStage(item)} ${renderProgressBar(item)}`);
				return;
			case 'building modules':
				console.info(`${chalk.yellow('◉')}  - ${key} ${renderStage(item)} ${renderProgressBar(item)}`);
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
				console.info(`${chalk.blue('◉')}  - ${key} ${renderStage(item)} ${renderProgressBar(item)}`);
				return;
			case '':
				console.info(`${chalk.green('◉')}  - finished ${key}`);
				return;
			default:
				console.log(`? ${key}`);
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
			const colors = ['green', 'cyan', 'blue', 'yellow', 'red'];
			const colorIndex = Math.floor(Math.max(0, Math.min((data - 3770) / 2000, 4)));
			const timestamp = chalk[colors[colorIndex]];
			console.info(`${chalk.green('◉')}  - Webpack completed in ${timestamp(data + 'ms')}   ${logTime(new Date())}`);
			return;
		case 'webpack-results':
			console.log('');
			console.info(data);
			console.log('');
			return;
		case 'webpack-problems':
			console.log('');
			if (data.errors) {
				data.errors.forEach((item) => console.log(item));
				console.log('');
			}
			if (data.warnings) {
				data.warnings.forEach((item) => console.log(item));
				console.log('');
			}
			return;
		case 'develop-on':
			console.log('');
			console.log('🤓  - Happy developing! Open up http://localhost:%s/ in your browser.', port)
			console.log('');
			return;
	}
};
