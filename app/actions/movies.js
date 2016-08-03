import 'isomorphic-fetch';

export const MOVIES_INVALID = 'MOVIES_INVALID';
export const MOVIES_FETCHING = 'MOVIES_FETCHING';
export const MOVIES_FETCHED = 'MOVIES_FETCHED';
export const MOVIES_FETCH_FAILED = 'MOVIES_FETCH_FAILED';

const targetGenre = "Action";

const doFetch = function () {
	return (dispatch) => {
		dispatch({ type: MOVIES_FETCHING });

		return fetch('http://lg-devtest.herokuapp.com/data.json', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer u12A8f3Zg'
			}
		})
			.then((response) => {
				return response.json().then((result) => {
					// merge movies into 1 array
					// add property 'classification' to note which array it came from
					// filter movies
					return result.data
						.reduce((list, group) => {
							return list.concat(group.assets.map(movie => Object.assign(movie, {'group': group.title})))
						}, [])
						.filter(movie => movie.genre === targetGenre)
				});
			})
			.then(
				(result) => dispatch({ type: MOVIES_FETCHED, result }),
				(error) => dispatch({ type: MOVIES_FETCH_FAILED, error })
			);
	};
}

const shouldFetch = function (state) {
	const movies = state.movies;

	return (!movies.list ||
		movies.readyState === MOVIES_FETCH_FAILED ||
		movies.readyState === MOVIES_INVALID
	);
}

export function fetchIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetch(getState())) {
			return dispatch(doFetch());
		}
	};
}
