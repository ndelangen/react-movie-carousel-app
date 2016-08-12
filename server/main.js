const express = require('express');
const Promise = require('bluebird');

const notify = require('./cli-notifications');
const port = global.__PORT__;

const server = express();

const isListening = new Promise((resolve, reject) => {
	notify('server-start');
	server.listen(port, 'localhost', (error) => {
		error ? reject(error) : resolve(server);
	});
});

module.exports = {
  server,
  ready: isListening,
};
