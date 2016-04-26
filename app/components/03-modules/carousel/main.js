import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './main.css';


class Carousel extends Component {
	render() {
		const { items, path } = this.props;

		return (
			<ul className={styles.root}>
				{items.map((item) => {
					return (
						<li key={item.id}>
							<Link to={`${path}/${item.id}`}>{item.title}</Link>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default Carousel;
