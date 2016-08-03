import baseConfig from './base';

require('css-modules-require-hook')({
  generateScopedName: '[name]_[local]_[hash:base64:5]',
});

const config = {
	greeting: 'Hello, this app is running with default settings'
};

export default Object.assign({}, baseConfig, config);
