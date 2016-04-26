import baseConfig from './base';

require('css-modules-require-hook')({
  generateScopedName: '[hash:base64:5]',
});

const config = {
	greeting: 'Hello, this app is running with production settings'
};

export default Object.assign({}, baseConfig, config);
