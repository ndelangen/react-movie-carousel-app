import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Card from '../../02-molecules/card/main';

import styles from './main.css';

const gotoItem = function (items, options) {

	browserHistory.push('/sample');
};

const getDisplayedItems = function (items, options) {
	const { activeIndex } = options;

	const current = items[activeIndex];
	const [prev2, prev1] = items.slice(0).splice(activeIndex - 2, 2).concat(items.slice(activeIndex - 1, 1));
	const [next1, next2] = items.slice(0).splice(activeIndex + 1, 2).concat(items.slice(0, 2));

	return {
		prev2,
		prev1,
		current,
		next1,
		next2
	}
};

const getItemStyle = function (activeItems, item) {
	switch (item) {
		case activeItems.prev2:
			return styles['is-prev2'];
		case activeItems.prev1:
			return styles['is-prev1'];
		case activeItems.current:
			return styles['is-current'];
		case activeItems.next1:
			return styles['is-next1'];
		case activeItems.next2:
			return styles['is-next2'];
		default:
			return styles['hidden'];
	};
};

const itemToComponent = function (options, item) {
	let stateClass;
	const { activeItems, path } = options;

	stateClass = getItemStyle(activeItems, item);

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
		const activeItems = getDisplayedItems(items, {activeIndex})

		const options = Object.assign({}, this.props.options, {path, activeIndex, activeItems});

		return (
			<div className={styles.root}>
				<div className={styles['tool-prev']} onClick={gotoItem.bind(undefined, items, options)}>PREV</div>
				<div className={styles['tool-next']}>NEXT</div>

				<ul className={styles.list}>
					{items.map(itemToComponent.bind(undefined, options))}
				</ul>
			</div>
		);
	}
}

export default Carousel;
