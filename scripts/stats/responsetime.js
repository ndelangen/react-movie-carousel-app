#!/usr/bin/env node
process.title = 'stats_responseTime';

const apiBenchmark = require('api-benchmark');

const service = {
  server1: 'http://localhost:3000'
};

var routes = {
  route1: {
    method: 'get',
    route: '/',
    headers: {
      'Cookie': 'cookieName=value',
      'Accept': 'application/json',
    }
  },
};
const options = {
  minSamples: 120,
};
apiBenchmark.measure(service, routes, options, (err, results) => {
  if (err) {
    throw Error(err);
  }
  const stats = results.server1.route1.stats;
  console.log({
    details: stats,
    result: stats.mean,
    remarks: `ran '/' ${stats.sample.length} times`,
  });
});
