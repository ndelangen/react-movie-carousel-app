const express = require('express');
const router = express.Router();

// Short-circuit the browser's annoying favicon request. You can still
// specify one as long as it doesn't have this exact name and path.
router.get('/favicon.ico', (req, res) => {
  res.writeHead(204, { 'Content-Type': 'image/x-icon' });
  res.end();
});

module.exports = {
  middleware: router,
};
