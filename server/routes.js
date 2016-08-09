const express = require('express');
const route = express.Router();

// Short-circuit the browser's annoying favicon request. You can still
// specify one as long as it doesn't have this exact name and path.
route.get('/favicon.ico', (req, res) => {
	res.writeHead(201, { 'Content-Type': 'image/x-icon' });
	res.end();
});

module.exports = {
	middleware: route
};
