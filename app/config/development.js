const cssModules = {
  generateScopedName: '[path][name]-[local]_[hash:base64:5]',
};

const config = {
	greeting: 'Hello, this app is running with default settings',
  cssModules,
};

module.exports = {
  ...require('./base'),
  ...config,
};
