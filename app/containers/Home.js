import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as MovieActions from '../actions/movies';
import Carousel from '../components/03-modules/carousel/main';

const isLoading = function (readyState) {
	return (readyState === MovieActions.MOVIES_INVALID || readyState === MovieActions.MOVIES_FETCHING);
};
const isFailed = function (readyState) {
	return (readyState === MovieActions.MOVIES_FETCH_FAILED);
};

// @connect(state => { movies: state.movies })
class Home extends Component {

	static readyOnActions(dispatch) {
		return Promise.all([
			dispatch(MovieActions.fetchIfNeeded())
		]);
	}

	componentDidMount() {
		Home.readyOnActions(this.props.dispatch);
	}
	render() {
		const { movies } = this.props;

		return (
			<div>
				<Helmet title='Home' />

				{isLoading(movies.readyState) ? (
					<p>Loading...</p>
				) : isFailed(movies.readyState) ? (
					<p>Failed to load content.</p>
				) : (
					<Carousel items={movies.list} active={this.props.params.id} path="/home" />
				)}
			</div>
		);
	}
};

export default connect(function mapStateToProps (state) {
	return {
		movies: state.movies
	};
})(Home);
