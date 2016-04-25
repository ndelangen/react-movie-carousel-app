import {
	MOVIES_INVALID,
	MOVIES_FETCHING,
	MOVIES_FETCHED,
	MOVIES_FETCH_FAILED
} from '../actions/movies';

export default function movies(state = {
	readyState: MOVIES_INVALID,
	list: null
}, action) {
	switch (action.type) {
		case MOVIES_FETCHING:
			return Object.assign({}, state, {
				readyState: MOVIES_FETCHING
			});
		case MOVIES_FETCH_FAILED:
			return Object.assign({}, state, {
				readyState: MOVIES_FETCH_FAILED,
				error: action.error
			});
		case MOVIES_FETCHED:
			return Object.assign({}, state, {
				readyState: MOVIES_FETCHED,
				list: action.result
			});
		default:
			return state;
	}
}