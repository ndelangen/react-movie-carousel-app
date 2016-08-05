require('css-modules-require-hook')({
});

const cssModules = {
  generateScopedName: '[name]_[local]_[hash:base64:5]',
};

const config = {
	greeting: 'Hello, this app is running with default settings',
  cssModules,
};

module.exports = Object.assign({}, require('./base'), config);
