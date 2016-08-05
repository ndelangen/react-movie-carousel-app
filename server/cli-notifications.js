const chalk = require('chalk');

const port = global.__PORT__ || process.env.PORT || 3000;

const startTime = new Date();
const logTime = (date) => chalk.gray(`[${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}]`)

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
