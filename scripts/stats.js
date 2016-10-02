#!/usr/bin/env node


const spawn = require('child_process').spawn;
const Promise = require('bluebird');
const path = require('path');
const fs = require('fs');
const existsAsync = (path) => new Promise(resolve => fs.exists(path, resolve));


const minimist = require('minimist');

const scriptArguments = minimist(process.argv.slice(2));

const sequence = scriptArguments._;

const spawnAction = location => {  
  return new Promise((resolve, reject) => {
    var result = '';
    var error = '';
    const p = spawn(location, []);

    p.stdout.on('data', data => {
      result = result.concat(data.toString());
    });

    p.stderr.on('data', data => {
      error = error.concat(data.toString());
    });

    p.on('close', code => {
      if (code === 0) {
        return resolve(eval('(' + result.replace('\n', '').replace(/\n/mg, '') + ')'));
      } else {
        return reject(error);
      }
    });
  });
};
const noAction = (location) => {
  return Promise.resolve(null);
};
const getAction = (action) => {
  const location = path.resolve(`scripts/stats/${action}.js`);
  return existsAsync(location).then(exists => exists ? spawnAction(location) : noAction(location));
};

const tasks = sequence.map(getAction);

// console.log(process.argv);
// console.log(scriptArguments);

Promise.all(tasks)
  .then(x => {
    x.map((item, index) => ({ action: sequence[index], result: item.result, remarks: item.remarks }))
      .filter(item => item.result !== null)
      .forEach(item => console.log(item));
  })
  .catch(x => {
    console.error('endError', x);
  });
