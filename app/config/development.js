require('css-modules-require-hook')({
  generateScopedName: '[name]_[local]_[hash:base64:5]',
});

const config = {
	greeting: 'Hello, this app is running with default settings'
};

module.exports = Object.assign({}, require('./base'), config);
