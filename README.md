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
imports
variables

port should become global

FIX: single hot-update.json 404

move app serverMiddleware to server.js
split server.js into only server running related things.

chunked / streaming response from server

proper logger with levels
log to file

Webpack Progress in dev, full log with --display-modules --display-reasons in production

eslint

move script logic to actual scripts
npm run install
npm run test:<suite> [*]
npm run analyze / npm run report
npm run build
npm run prod / npm run production
npm run dev

npm start -> install and wizard to choose production | development

git hooks
pre push > build, test, analyze
