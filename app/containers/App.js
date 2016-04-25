import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

class App extends Component {

	render() {
		return (
			<div>
				<Helmet
					title='HireMeApp'
					titleTemplate='HireMeApp - %s'
					meta={[
						{'char-set': 'utf-8'},
						{'name': 'description', 'content': 'I want to work for Liberty Global'}
					]}
				/>
				{this.props.children}
			</div>
		);
	}
}

export default App;
