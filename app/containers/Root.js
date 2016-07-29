import React, { Component } from 'react';
import Header from '../components/04-scaffolds/header/main';

import styles from './Root.css';

class Root extends Component {

	renderInitialState() {
		if (this.props.initialState) {
			const innerHtml = `window.__INITIAL_STATE__ = ${JSON.stringify(this.props.initialState)}`;
			return <script dangerouslySetInnerHTML={{__html: innerHtml}} />;
		}
	}

	renderEnvironment() {
		const innerHtml = `window.__ENVIRONMENT__ = '${__ENVIRONMENT__}'`;
		return <script dangerouslySetInnerHTML={{__html: innerHtml}} />
	}

	renderSpecialScript() {
		const innerHtml = `console.log('works some more')`;
		return <script dangerouslySetInnerHTML={{__html: innerHtml}} />
	}

	render() {
		const head = this.props.head;

		return (
			<html className={styles.html}>
				<head>
					{head.title.toComponent()}
					{head.meta.toComponent()}
					{head.link.toComponent()}
					<link href='https://fonts.googleapis.com/css?family=Source+Serif+Pro' rel='stylesheet' type='text/css' />
					{false || process.env.NODE_ENV ? (
						<link href="/app.min.css" rel="stylesheet" />
					) : null}

				</head>
				<body className={styles.body}>
					<Header></Header>
					<div className={styles.content} id='root' dangerouslySetInnerHTML={{__html: this.props.content}} />

					{ false && (
						<div>
							<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react.js"></script>
							<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react-dom.js"></script>
						</div>
					)}

					{this.renderEnvironment()}
					{this.renderInitialState()}
					{head.script.toComponent()}
					{this.renderSpecialScript()}

					<script src={'/app-entry.js'}></script>
					<script src={'/vendor.js'}></script>
					<script src={'/app.js'}></script>
				</body>
			</html>
		);
	}
}
// <script src={!process.env.NODE_ENV ? '/vendor.js' : '/vendor.min.js'}></script>

export default Root;
