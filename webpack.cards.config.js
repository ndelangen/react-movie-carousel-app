var path = require('path');

console.log('__dirname', __dirname);

module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: [path.resolve('node_modules')],
        include: [path.resolve(__dirname)]
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1',
      },
    ]
  },
};
