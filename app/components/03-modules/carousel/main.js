import React, { Component } from 'react';
import { Link } from 'react-router';

class Carousel extends Component {
	render() {
		const { items, path } = this.props;

		return (
			<ul>
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
