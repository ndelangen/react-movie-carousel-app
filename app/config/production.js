const cssModules = {
  generateScopedName: '[hash:base64:5]',
};

const config = {
  greeting: 'Hello, this app is running with production settings',
  cssModules,
};

module.exports = {
  ...require('./base'),
  ...config,
};
