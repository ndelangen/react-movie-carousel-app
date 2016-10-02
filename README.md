# An Universal React Movie Carousel app

A totally over-engineered carousel demo retrieving data from external source.

But it has given me the oppertunity to get to know universal/isomorphic javascript, react-router, react-helmet and more.

I've used a starter-kit to get started: [universal react by DominicTobias](https://github.com/DominicTobias/universal-react).


WORKLOG:

✔︎ Hot Module Reloading serverside
  ✔︎ node_modules
  ✔︎ app

✔︎ Hot Module Reloading clientside
  ✔︎ normal browsers
  ✔︎ css
  IE (https://github.com/glenjamin/webpack-hot-middleware/issues/53)

✔︎ debugger statement support

✔︎ great sourcemaps

✔︎ debug-able css (no inline)
✔︎ css-modules
postcss
imports
variables

replace fake-style-loader

investigate: splitting the css bundle

auto camelcase css-modules

font loading strategy

✔︎ port should become global

✔︎ FIX: single hot-update.json 404

investigate: redux-catch-promise

move app serverMiddleware to server.js
split server.js into only server running related things.

compression
http2
http2 push

inline css & js into html

page cached
component cache
chunked / streaming response from server
https://github.com/aickin/react-dom-stream // stream react.renderToString to client / chunked & cache components
https://github.com/puleos/object-hash // create cache-hash from props

proper logger with levels
log to file

Progress bars in terminal for webpack when developing
Progress bars in terminal for webpack web production ?
Detailed stats in terminal for webpack  
Webpack Progress in dev, full log with --display-modules --display-reasons in production

investigate: https://github.com/FormidableLabs/webpack-dashboard

✔︎ Use react production version

globals into webpack defineplugin

✔︎ eslint

dependencies grapher

statistics of appsize
statistics of app performance

use webpack hash to version assets

investigate why/if a entry chunk (manifest-file) is a good idea

✔︎ move script logic to actual scripts
npm run install
npm run test <suite> [*]
npm run analyze / npm run report
npm run build
npm run stats <suite> [*]
✔︎ npm run prod / npm run production
✔︎ npm run dev / npm run development

npm start -> install and wizard to choose production | development

git hooks
pre push > build, test, analyze
lint stages files on commit
https://github.com/postcss/postcss/commit/c065199745a1818c54a23a45b4e1c58c4a3ed624


performance tests
load tests
https://artillery.io/docs/getting-started/

statistics for requests per second

statistics of dependencies weight (install-time)
statistics of dependencies outdated
statistics of slow to install dependencies
https://www.npmjs.com/package/slow-deps

https://www.npmjs.com/package/dependo
https://chrisbateman.github.io/webpack-visualizer/
https://www.npmjs.com/package/webpack-bundle-size-analyzer

accesibility guidelines

deal with internationalisation

featuredetection into cookie for optimum serverside render

component library
https://github.com/steos/reactcards

Styleguide
color sets
font sets
https://photopea.github.io/Typr.js/


Profiling server application
https://nodejs.org/en/blog/uncategorized/profiling-node-js/
https://github.com/node-inspector/node-inspector

public testing
https://ngrok.com/download

