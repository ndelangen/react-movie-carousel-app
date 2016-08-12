const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const base = '/assets';

router.use(`${base}/`, (req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=63113852'); // 2 years
  return next();
});

router.get(`${base}/*`, (req, res) => {
  const path = './build/' + req.params[0];
  fs.exists(path, (exists) => {
    exists ? res.sendFile(path, {root: './'}) : res.status(404).send('Not found');
  });
});

module.exports = {
  middleware: router
};
