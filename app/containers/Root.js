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

	render() {
		const head = this.props.head;

		return (
			<html className={styles.html}>
				<head>
					{head.title.toComponent()}
					{head.meta.toComponent()}
					{head.link.toComponent()}
					<link href='https://fonts.googleapis.com/css?family=Source+Serif+Pro' rel='stylesheet' type='text/css' />
					<link href={!process.env.NODE_ENV ? '/app.css' : '/app.min.css'} rel="stylesheet" />
				</head>
				<body className={styles.body}>
					<Header></Header>
					<div className={styles.content} id='root' dangerouslySetInnerHTML={{__html: this.props.content}} />

					{this.renderEnvironment()}
					{this.renderInitialState()}
					{head.script.toComponent()}
					<script src={!process.env.NODE_ENV ? '/app.js' : '/app.min.js'}></script>
				</body>
			</html>
		);
	}
}

export default Root;
