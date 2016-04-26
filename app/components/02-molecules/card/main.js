import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './main.css';


class Card extends Component {
	render() {
		const { item } = this.props;
		return (
			<div className={styles.root}>
				{item.title}
			</div>
		);
	}
}

export default Card;
