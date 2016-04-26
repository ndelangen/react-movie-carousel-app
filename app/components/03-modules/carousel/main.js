import React, { Component } from 'react';
import { Link } from 'react-router';
import Card from '../../02-molecules/card/main';

import styles from './main.css';

const createItem = function (options, item, index, list) {
	let stateClass;
	const { activeIndex, path } = options;

	// debugger;

	if (index === activeIndex) {
		stateClass = styles['is-active'];
	} else if (index === activeIndex - 1 || (index === list.length - 1 && activeIndex === 0)) {
		stateClass = styles['is-prev'];
	} else if (index === activeIndex + 1 || (index === 0 && activeIndex === list.length - 1)) {
		stateClass = styles['is-next'];
	} else {
		stateClass = styles['is-hidden'];
	}

	return (
		<li key={item.id} className={`${styles.item} ${stateClass}`}>
			<Link to={`${path}/${item.id}`}>
				<Card item={item}></Card>
			</Link>
		</li>
	);
};

class Carousel extends Component {
	render() {
		const { items, path } = this.props;
		const activeId = this.props.active

		const activeIndex = items.reduce((result, item, index) => { return item.id === activeId ? index : result }, 0);

		return (
			<div className={styles.root}>
				<ul className={styles.list}>
					{items.map(createItem.bind(this, {path, activeIndex}))}
				</ul>
			</div>
		);
	}
}

export default Carousel;
