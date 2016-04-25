import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import NoMatch from './containers/NoMatch';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path='home/:id' component={Home} />
	</Route>
);
