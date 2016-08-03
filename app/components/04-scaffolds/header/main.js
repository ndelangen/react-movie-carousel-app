import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './main.css';


class Header extends Component {
	render() {
		return (
			<header className={styles.root}>
				<h1><span className={styles.title}>Universal React Movie-Carousel-App!!!</span> <span className={styles.subtitle}>by Norbert de Langen</span></h1>
			</header>
		);
	}
}

export default Header;
