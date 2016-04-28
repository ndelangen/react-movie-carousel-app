import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Card from '../../02-molecules/card/main';
import { Right as IconCaretLeft} from '../../01-atoms/icon/caret';

import styles from './main.css';

const keyHandler = function (event) {
	const options = this.options;
	switch (event.keyCode) {
		case 39: //ArrowRight
			browserHistory.push(`${options.path}/${options.activeItems.next1.id}`);
			break;
		case 37: //ArrowLeft
			browserHistory.push(`${options.path}/${options.activeItems.prev1.id}`);
			break;
	}
}

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
			<Card item={item}></Card>
		</li>
	);
};


class Carousel extends Component {
	componentDidMount() {
		// save handler on instance for removal
		this.keyHandler = keyHandler.bind(this);

		// event listener has to be on document
		// or else it won't trigger when component or children are out of focus
		document.addEventListener('keyup', this.keyHandler, false);
	}
	componentDidUnMount() {
		document.removeEventListener('keyup', this.keyHandler, false);
	}
	render() {
		const { items, path } = this.props;

		const activeId = this.props.active
		const activeIndex = items.reduce((result, item, index) => { return item.id === activeId ? index : result }, 0);
		const activeItems = getDisplayedItems(items, {activeIndex})

		const options = Object.assign({}, this.props.options, {path, activeIndex, activeItems});

		// save options on instance for event-listener
		this.options = options;

		return (
			<div className={styles.root}>
				<Link className={styles['tool-next']} to={`${path}/${activeItems.next1.id}`}><IconCaretLeft className={styles['tool--icon']} /></Link>
				<Link className={styles['tool-prev']} to={`${path}/${activeItems.prev1.id}`}><IconCaretLeft className={styles['tool--icon']} /></Link>

				<ul className={styles.list}>
					{items.map(itemToComponent.bind(undefined, options))}
				</ul>
			</div>
		);
	}
}

export default Carousel;
