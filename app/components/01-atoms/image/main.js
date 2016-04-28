import React, { Component } from 'react';

import styles from './main.css';

const loadHandler = function (event) {
	this.setState({
		loaded: true
	});
	this.props.onLoad && this.props.onLoad(event);
};

class Image extends Component {
	constructor(props) {
		super(props);

		this.state = {
			imageUrl: 'about:blank',
			loaded: false
		};
	}
	componentDidMount() {
		window.requestAnimationFrame(() => {
			const width = this.refs.root.clientWidth;
			const mediaType = width < 400 ? 'mobile': 'desktop';

			this.setState({
				imageUrl: `${this.props.src}?type=${mediaType}`
			});
		});
	}
	render() {
		const { props, state } = this;
		const [ width, height ] = props.ratio.split('/');

		return (
			<div ref="root" className={state.loaded ? styles['is-loaded'] : styles['is-loading']}>
				<img
					className={styles.placeholder}
					src={`data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 ${width} ${height}'%2F%3E`}
					width={width}
					height={height} />

				<img src={state.imageUrl} className={styles.image} crossOrigin="anonymous" onLoad={loadHandler.bind(this)} style={{width: '100%'}} />
				<span className={styles.loader}>loading</span>

				<div className={styles.fallback} dangerouslySetInnerHTML={{__html: `
					<noscript>
						<img src="${props.src}" class="${styles.image}" />
					</noscript>
				`}}></div>
			</div>
		);
	}
};

export default Image;
