const Promise = require('bluebird');

const notify = require('../server/cli-notifications');


const progressOutputBase = {
  percentage: 0,
  stage: 'starting',
  progress: '0/0 modules',
  activity: '0 active',
  path: undefined
};

const statOptionsBase = {
  colors: false,
  hash: false,
  assets: false,
  version: false,
  cached: false,
  children: false,
  cachedAssets: false,
  timings: false,
  chunks: false,
  chunkModules: false,
  entrypoints: false,
  modules: false,
  errorDetails: true,
};
const errorOptions = Object.assign({}, statOptionsBase, { errorDetails: true });
const resultsOptions = Object.assign({}, statOptionsBase, { colors: true, assets: true });
const timeOptions = Object.assign({}, statOptionsBase, { timings: true });

const noCallback = () => {};

const run = ( list ) => {
  const output = list.reduce((acc, { compiler }) => {
    return { ...acc, [compiler.name]: { ...progressOutputBase }};
  }, {});

  notify('webpack-start', output);

  const results = list.map(({ options, compiler }) => {
    if (options.progress) {
      compiler.progress((percentage, stage, progress, activity, path) => {
        output[compiler.name] = { percentage, stage, progress, activity, path };
        notify('webpack-progress', output);
      });
    }
    if (options.watch) {
      compiler.compiler.watch({}, options.watchCallback || noCallback);
    }
    if (options.run) {
      compiler.compiler.run(options.runCallback || noCallback);
    }
    return compiler;
  });

  results.forEach(c => c.compiler.plugin('done', (stats) => {
    const { errors, warnings } = stats.toJson(errorOptions);
    if (errors.length || warnings.length) {
      notify('webpack-problems', { errors, warnings });
    } else {
      notify('webpack-results', stats.toString(resultsOptions));
    }

  }));

  Promise.all(results.map(c => c.ready)).then(list => list.forEach(item => {
    notify('webpack-ready', item.toJson(timeOptions).time);
  }));

  return results;
};

module.exports = {
  run,
};
