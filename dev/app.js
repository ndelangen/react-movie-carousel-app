wpck([3,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(16);

var _movies = __webpack_require__(29);

var _movies2 = _interopRequireDefault(_movies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	movies: _movies2.default
});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "@keyframes main_spin_34Qo7 {\n  0%   { transform: rotateZ(0deg); }\n  100% { transform: rotateZ(360deg);}\n}\n\n.main_root_2mBDx {\n\tposition: relative;\n}\n\n.main_placeholder_2Qopd {\n\tdisplay: block;\n\twidth: 100%;\n\theight: auto;\n}\n\n.main_image_Yj_yQ {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n  height: 100%;\n  width: 100%;\n}\n.main_loader_zPkqj {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-left: -20px;\n\tmargin-top: -20px;\n\twidth: 80px;\n\theight: 40px;\n\n\tcolor: white;\n\ttext-align: center;\n\tline-height: 40px;\n\n\ttransition: opacity 1.2s;\n\n\topacity: 1;\n}\n.main_loader_zPkqj:before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tborder: 1px solid currentColor;\n\tborder-radius: 50%;\n\twidth: 100%;\n\theight: 100%;\n\tanimation: main_spin_34Qo7 3s infinite reverse linear;\n}\n.main_loader_zPkqj:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tborder: 1px solid currentColor;\n\tborder-radius: 50%;\n\twidth: 100%;\n\theight: 100%;\n\tanimation: main_spin_34Qo7 2s infinite reverse linear;\n}\n\n.main_is-loaded_w1jf2 .main_loader_zPkqj {\n\topacity: 0;\n}\n.main_is-loaded_w1jf2 .main_loader_zPkqj:before {\n\tanimation: main_spin_34Qo7 3s reverse linear;\n}\n.main_is-loaded_w1jf2 .main_loader_zPkqj:before {\n\tanimation: main_spin_34Qo7 2s infinite reverse linear;\n}\n", ""]);

// exports
exports.locals = {
	"root": "main_root_2mBDx",
	"placeholder": "main_placeholder_2Qopd",
	"image": "main_image_Yj_yQ",
	"loader": "main_loader_zPkqj",
	"spin": "main_spin_34Qo7",
	"is-loaded": "main_is-loaded_w1jf2"
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".main_root_3i8zB {\n\tposition: absolute;;\n\toverflow: hidden;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n}\n\n.main_content_s4bgh {\n\tz-index: 3;\n\tposition: absolute;\n\tbox-sizing: border-box;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 140px;\n\tpadding: 20px;\n\n\tcolor: currentColor;\n}\n.main_media_3QBfK {\n\tz-index: 2;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 140px;\n\tleft: 0;\n}\n\n.main_background_NlHMn {\n\tz-index: 1;\n\tposition: absolute;\n\ttop: -1px;\n\tright: -1px;\n\tbottom: -1px;\n\tleft: -1px;\n\n\tbackground-color: rgb(50,50,50);\n\n\tpointer-events: none;\n\twill-change: background-color;\n\ttransition: background-color .6s linear;\n}\n\n\n.main_content_s4bgh * {\n\tcolor: currentColor;\n}\n.main_title_cCWEQ {\n\tmargin: 0;\n\tpadding: 0;\n}\n.main_rating_32Xlj {\n\n}\n.main_genre_ADEs- {\n\n}\n.main_group_3UBx1 {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tpadding: 20px;\n}\n", ""]);

// exports
exports.locals = {
	"root": "main_root_3i8zB",
	"content": "main_content_s4bgh",
	"media": "main_media_3QBfK",
	"background": "main_background_NlHMn",
	"title": "main_title_cCWEQ",
	"rating": "main_rating_32Xlj",
	"genre": "main_genre_ADEs-",
	"group": "main_group_3UBx1"
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".main_root_3pw4n {\n\tposition: relative;\n\toverflow: hidden;\n\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n.main_list_3N7y2 {\n\tposition: relative;\n\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n\n\twidth: 100%;\n\tmax-width: 500px;\n\theight: 0;\n\tmargin-top: -480px;\n}\n\n.main_tool_3vvuB {\n\tz-index: 9;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\n\twidth: 15%;\n\tmin-width: 50px;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tbackground: linear-gradient(to left, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0) 100%);\n\topacity: .2;\n\ttransition: opacity .4s linear;\n\twill-change: opacity;\n}\n.main_tool_3vvuB:hover {\n\topacity: 1;\n}\n.main_tool-prev_sR0kp {\n\tleft: 0;\n\ttransform: rotateY(180deg);\n}\n.main_tool-next_1Udm7 {\n\tright: 0;\n}\n.main_tool--icon_2GTp3 {\n\twidth: 50px;\n\tmax-width: 100%;\n\theight: auto;\n\tfill: rgba(255,255,255,.5);\n}\n\n.main_item_tVvyh {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\n\twidth: 100%;\n\tmax-width: 500px;\n\theight: 0;\n\tpadding-top: 145.161%;\n\tpadding-bottom: 140px;\n\n\ttransition: transform .4s, opacity .2s linear;\n\twill-change: transform, opacity;\n}\n.main_item_tVvyh.main_is-current_3vOEm {\n\tz-index: 3;\n\n\ttransform: scale(.7) translateY(-30%);\n}\n.main_item_tVvyh.main_is-next1_DNMF2 {\n\tz-index: 2;\n\n\ttransform: scale(.6) translateX(100%) translateY(-35%);\n}\n.main_item_tVvyh.main_is-prev1_rtgw5 {\n\tz-index: 2;\n\n\ttransform: scale(.6) translateX(-100%) translateY(-35%);\n}\n.main_item_tVvyh.main_is-next2_8bhTU {\n\tz-index: 1;\n\topacity: 0;\n\n\ttransform: scale(.6) translateX(200%) translateY(-35%);\n}\n.main_item_tVvyh.main_is-prev2_2XwT0 {\n\tz-index: 1;\n\topacity: 0;\n\n\ttransform: scale(.6) translateX(-200%) translateY(-35%);\n}\n\n.main_item_tVvyh.main_is-hidden_14l1L {\n\tz-index: 1;\n\n\topacity: 0;\n\ttransform: scale(.1) translateX(0%);\n}\n", ""]);

// exports
exports.locals = {
	"root": "main_root_3pw4n",
	"list": "main_list_3N7y2",
	"tool": "main_tool_3vvuB",
	"tool-prev": "main_tool-prev_sR0kp main_tool_3vvuB",
	"tool-next": "main_tool-next_1Udm7 main_tool_3vvuB",
	"tool--icon": "main_tool--icon_2GTp3",
	"item": "main_item_tVvyh",
	"is-current": "main_is-current_3vOEm",
	"is-next1": "main_is-next1_DNMF2",
	"is-prev1": "main_is-prev1_rtgw5",
	"is-next2": "main_is-next2_8bhTU",
	"is-prev2": "main_is-prev2_2XwT0",
	"is-hidden": "main_is-hidden_14l1L"
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".main_root_qyslx {\n\tz-index: 10;\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tleft: 0;\n\n\tpadding: 10px;\n\n\tbackground: rgba(0,0,0,.8);\n}\n.main_title_18i7Y {\n\tdisplay: block;\n\n\tfont-size: 30px;\n\tcolor: #eee;\n\ttext-align: center;\n}\n.main_subtitle_3_acL {\n\tdisplay: block;\n\n\tfont-size: 20px;\n\tcolor: #bbb;\n\ttext-align: center;\n}\n", ""]);

// exports
exports.locals = {
	"root": "main_root_qyslx",
	"title": "main_title_18i7Y",
	"subtitle": "main_subtitle_3_acL"
};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".Root_full_lWKBj {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.Root_html_2f2gH {\n\n\tmargin: 0;\n\tpadding: 0;\n\tbackground: maroon linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,.1) 44%,rgba(0,0,0,.4) 100%);\n\tbackground-attachment: fixed;\n}\n\n.Root_body_qXQNX {\n\n\tmargin: 0;\n\tpadding: 0;\n\n\tfont-family: 'Source Serif Pro', serif;\n\tfont-size: 20px;\n}\n\n.Root_content_OKeGF {\n}\n.Root_content_OKeGF > div,\n.Root_content_OKeGF > div > div {\n\theight: 100%;\n\twidth: 100%;\n}\n", ""]);

// exports
exports.locals = {
	"full": "Root_full_lWKBj",
	"html": "Root_html_2f2gH Root_full_lWKBj",
	"body": "Root_body_qXQNX Root_full_lWKBj",
	"content": "Root_content_OKeGF Root_full_lWKBj"
};

/***/ },
/* 13 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.fetchIfNeeded = fetchIfNeeded;
var MOVIES_INVALID = exports.MOVIES_INVALID = 'MOVIES_INVALID';
var MOVIES_FETCHING = exports.MOVIES_FETCHING = 'MOVIES_FETCHING';
var MOVIES_FETCHED = exports.MOVIES_FETCHED = 'MOVIES_FETCHED';
var MOVIES_FETCH_FAILED = exports.MOVIES_FETCH_FAILED = 'MOVIES_FETCH_FAILED';

var targetGenre = "Action";

var doFetch = function doFetch() {
	return function (dispatch) {
		dispatch({ type: MOVIES_FETCHING });

		return fetch('http://lg-devtest.herokuapp.com/data.json', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer u12A8f3Zg'
			}
		}).then(function (response) {
			return response.json().then(function (result) {
				// merge movies into 1 array
				// add property 'classification' to note which array it came from
				// filter movies
				return result.data.reduce(function (list, group) {
					return list.concat(group.assets.map(function (movie) {
						return _extends(movie, { 'group': group.title });
					}));
				}, []).filter(function (movie) {
					return movie.genre === targetGenre;
				});
			});
		}).then(function (result) {
			return dispatch({ type: MOVIES_FETCHED, result: result });
		}, function (error) {
			return dispatch({ type: MOVIES_FETCH_FAILED, error: error });
		});
	};
};

var shouldFetch = function shouldFetch(state) {
	var movies = state.movies;

	return !movies.list || movies.readyState === MOVIES_FETCH_FAILED || movies.readyState === MOVIES_INVALID;
};

function fetchIfNeeded() {
	return function (dispatch, getState) {
		if (shouldFetch(getState())) {
			return dispatch(doFetch());
		}
	};
}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(2);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactHelmet = __webpack_require__(6);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	NoMatch: {
		displayName: 'NoMatch'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: '/Users/Norbert/Work/Experiments/libertyglobal-assignment/t2/app/containers/NoMatch.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(Component, id);
	};
}

var NoMatch = _wrapComponent('NoMatch')(function (_Component) {
	_inherits(NoMatch, _Component);

	function NoMatch() {
		_classCallCheck(this, NoMatch);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(NoMatch).apply(this, arguments));
	}

	_createClass(NoMatch, [{
		key: 'render',
		value: function render() {
			return _react3.default.createElement(
				'div',
				null,
				_react3.default.createElement(_reactHelmet2.default, { title: 'Not Found' }),
				'Page was not found'
			);
		}
	}]);

	return NoMatch;
}(_react2.Component));

exports.default = NoMatch;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverMiddleware = undefined;

__webpack_require__(40);

var _Router = __webpack_require__(18);

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.serverMiddleware = _Router2.default;

/***/ },
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(41);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = __webpack_require__(42);

var _reactRouter = __webpack_require__(3);

var _reactHelmet = __webpack_require__(6);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Routes = __webpack_require__(19);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(17);

var _Root = __webpack_require__(28);

var _Root2 = _interopRequireDefault(_Root);

var _NoMatch = __webpack_require__(14);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _configureStore = __webpack_require__(25);

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isClient = typeof document !== 'undefined';

if (isClient) {
	var store = (0, _configureStore2.default)(window.__INITIAL_STATE__);

	_reactDom2.default.render(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouter.Router,
			{ history: _reactRouter.browserHistory },
			_Routes2.default
		)
	), document.getElementById('root'));
}

function renderComponentWithRoot(Component, componentProps, store) {
	var componentHtml = (0, _server.renderToStaticMarkup)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(Component, componentProps)
	));

	var head = _reactHelmet2.default.rewind();
	var initialState = store.getState();

	return '<!doctype html>\n' + (0, _server.renderToStaticMarkup)(_react2.default.createElement(_Root2.default, { content: componentHtml, initialState: initialState, head: head }));
}

function handleError(res, error) {
	res.status(500).send(error.message);
}

function handleRedirect(res, redirectLocation) {
	res.redirect(302, redirectLocation.pathname + redirectLocation.search);
}

function handleRoute(res, renderProps) {
	var store = (0, _configureStore2.default)();

	var readyOnAllActions = renderProps.components.filter(function (component) {
		return component.readyOnActions;
	}).map(function (component) {
		return component.readyOnActions(store.dispatch, renderProps.params);
	});

	Promise.all(readyOnAllActions).then(function () {
		return res.status(200).send(renderComponentWithRoot(_reactRouter.RouterContext, renderProps, store));
	});
}

function handle404(res) {
	var store = (0, _configureStore2.default)();
	res.status(404).send(renderComponentWithRoot(_NoMatch2.default, null, store));
}

function serverMiddleware(req, res) {
	(0, _reactRouter.match)({ routes: _Routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
		if (error) {
			handleError(error);
		} else if (redirectLocation) {
			handleRedirect(res, redirectLocation);
		} else if (renderProps) {
			handleRoute(res, renderProps);
		} else {
			handle404(res);
		}
	});
}

exports.default = serverMiddleware;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _App = __webpack_require__(26);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(27);

var _Home2 = _interopRequireDefault(_Home);

var _NoMatch = __webpack_require__(14);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
	_reactRouter.Route,
	{ path: '/', component: _App2.default },
	_react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: 'home/:id', component: _Home2.default })
);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Right = undefined;

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(2);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Right: {
		displayName: "Right"
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: "/Users/Norbert/Work/Experiments/libertyglobal-assignment/t2/app/components/01-atoms/icon/caret.js",
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(Component, id);
	};
}

var Right = exports.Right = _wrapComponent("Right")(function (_Component) {
	_inherits(Right, _Component);

	function Right() {
		_classCallCheck(this, Right);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Right).apply(this, arguments));
	}

	_createClass(Right, [{
		key: "render",
		value: function render() {
			return _react3.default.createElement(
				"svg",
				_extends({}, this.props, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 17.1 30" }),
				_react3.default.createElement("path", { d: "M11.4 15L.2 3.3C0 3 0 2.5.2 2.3l2-2c.3-.4.8-.4 1 0l13.7 14v1L3.2 29.8c-.3.3-.8.3-1 0l-2-2c-.3-.3-.3-.8 0-1l11-11.8z" })
			);
		}
	}]);

	return Right;
}(_react2.Component));

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(2);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(30);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Image: {
		displayName: 'Image'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: '/Users/Norbert/Work/Experiments/libertyglobal-assignment/t2/app/components/01-atoms/image/main.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(Component, id);
	};
}

var loadHandler = function loadHandler(event) {
	this.setState({
		loaded: true
	});
	this.props.onLoad && this.props.onLoad(event);
};

var Image = _wrapComponent('Image')(function (_Component) {
	_inherits(Image, _Component);

	function Image(props) {
		_classCallCheck(this, Image);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Image).call(this, props));

		_this.state = {
			imageUrl: 'about:blank',
			loaded: false
		};
		return _this;
	}

	_createClass(Image, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			window.requestAnimationFrame(function () {
				var width = _this2.refs.root.clientWidth;
				var mediaType = width < 400 ? 'mobile' : 'desktop';

				_this2.setState({
					imageUrl: _this2.props.src + '?type=' + mediaType
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			var state = this.state;

			var _props$ratio$split = props.ratio.split('/');

			var _props$ratio$split2 = _slicedToArray(_props$ratio$split, 2);

			var width = _props$ratio$split2[0];
			var height = _props$ratio$split2[1];


			return _react3.default.createElement(
				'div',
				{ ref: 'root', className: state.loaded ? _main2.default['is-loaded'] : _main2.default['is-loading'] },
				_react3.default.createElement('img', {
					className: _main2.default.placeholder,
					src: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\' viewBox%3D\'0 0 ' + width + ' ' + height + '\'%2F%3E',
					width: width,
					height: height }),
				_react3.default.createElement('img', { src: state.imageUrl, className: _main2.default.image, crossOrigin: 'anonymous', onLoad: loadHandler.bind(this), style: { width: '100%' } }),
				_react3.default.createElement(
					'span',
					{ className: _main2.default.loader },
					'loading'
				),
				_react3.default.createElement('div', { className: _main2.default.fallback, dangerouslySetInnerHTML: { __html: '\n\t\t\t\t\t<noscript>\n\t\t\t\t\t\t<img src="' + props.src + '" class="' + _main2.default.image + '" />\n\t\t\t\t\t</noscript>\n\t\t\t\t' } })
			);
		}
	}]);

	return Image;
}(_react2.Component));

;

exports.default = Image;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(2);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(3);

var _main = __webpack_require__(21);

var _main2 = _interopRequireDefault(_main);

var _main3 = __webpack_require__(31);

var _main4 = _interopRequireDefault(_main3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Card: {
		displayName: 'Card'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: '/Users/Norbert/Work/Experiments/libertyglobal-assignment/t2/app/components/02-molecules/card/main.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(Component, id);
	};
}

var Card = _wrapComponent('Card')(function (_Component) {
	_inherits(Card, _Component);

	function Card(props) {
		_classCallCheck(this, Card);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Card).call(this, props));

		_this.state = {
			backgroundColor: 'hsl(0, 0%, 18%)',
			textColor: 'hsl(0, 0%, 80%)'
		};

		_this.imagePromise = new Promise(function (resolve, reject) {
			_this.imageLoaded = function (event) {
				var image = event.currentTarget;
				image.crossOrigin = "Anonymous";
				resolve(image);
			};
		}).then(function (existingImage) {
			return new Promise(function (resolve, reject) {
				var image = document.createElement('img');
				image.onload = function (event) {
					resolve(image);
				};
				image.onerror = function (event) {
					reject(image);
				};
				image.crossOrigin = "Anonymous";
				image.src = existingImage.src;
			});
		});
		return _this;
	}

	_createClass(Card, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var instance = this;
			var item = this.props.item;

			var imgLoad = this.imagePromise;
			var colorThiefLoad = __webpack_require__.e/* System.import */(0).then(__webpack_require__.bind(null, 39));
			var colorConverterLoad = __webpack_require__.e/* System.import */(1).then(__webpack_require__.bind(null, 38));

			Promise.all([imgLoad, colorThiefLoad, colorConverterLoad]).then(function (result) {
				var _result = _slicedToArray(result, 3);

				var image = _result[0];
				var colorThiefModule = _result[1];
				var colorConverterModule = _result[2];

				var colorThiefInstance = new colorThiefModule.ColorThief();
				var color = colorConverterModule.rgbToHsl.apply(colorConverterModule, _toConsumableArray(colorThiefInstance.getColor(image)));

				instance.setState({
					backgroundColor: 'hsl(' + color.h * 360 + ', ' + color.s * 100 + '%, ' + color.l * 100 + '%)',
					textColor: color.l < 0.4 ? 'hsl(' + color.h * 360 + ', ' + color.s * 100 + '%, ' + (color.l * 100 + 40) + '%)' : 'hsl(' + color.h * 360 + ', ' + color.s * 100 + '%, ' + (color.l * 100 - 40) + '%)'
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var state = this.state;
			var item = this.props.item;

			return _react3.default.createElement(
				'article',
				{ className: _main4.default.root },
				_react3.default.createElement(
					'div',
					{ className: _main4.default.content, style: { color: state.textColor } },
					_react3.default.createElement(
						'h1',
						{ className: _main4.default.title },
						item.title
					),
					_react3.default.createElement(
						'div',
						{ className: _main4.default.genre },
						item.genre
					),
					_react3.default.createElement(
						'div',
						{ className: _main4.default.rating },
						'IMDB rating: ',
						item.imdb
					),
					_react3.default.createElement(
						'div',
						{ className: _main4.default.group },
						item.group
					)
				),
				_react3.default.createElement(
					'div',
					{ className: _main4.default.media },
					_react3.default.createElement(_main2.default, { src: item.img, ratio: '31/45', onLoad: this.imageLoaded })
				),
				_react3.default.createElement('div', { className: _main4.default.background, style: { backgroundColor: state.backgroundColor } })
			);
		}
	}]);

	return Card;
}(_react2.Component));

exports.default = Card;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(2);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _reactRouter = __webpack_require__(3);

var _main = __webpack_require__(22);

var _main2 = _interopRequireDefault(_main);

var _caret = __webpack_require__(20);

var _main3 = __webpack_require__(32);

var _main4 = _interopRequireDefault(_main3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Carousel: {
		displayName: 'Carousel'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: '/Users/Norbert/Work/Experiments/libertyglobal-assignment/t2/app/components/03-modules/carousel/main.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(Component, id);
	};
}

var keyHandler = function keyHandler(event) {
	var options = this.options;
	switch (event.keyCode) {
		case 39:
			//ArrowRight
			_reactRouter.browserHistory.push(options.path + '/' + options.activeItems.next1.id);
			break;
		case 37:
			//ArrowLeft
			_reactRouter.browserHistory.push(options.path + '/' + options.activeItems.prev1.id);
			break;
	}
};

var getDisplayedItems = function getDisplayedItems(items, options) {
	var activeIndex = options.activeIndex;


	var current = items[activeIndex];

	var _items$slice$splice$c = items.slice(0).splice(activeIndex - 2, 2).concat(items.slice(activeIndex - 1, 1));

	var _items$slice$splice$c2 = _slicedToArray(_items$slice$splice$c, 2);

	var prev2 = _items$slice$splice$c2[0];
	var prev1 = _items$slice$splice$c2[1];

	var _items$slice$splice$c3 = items.slice(0).splice(activeIndex + 1, 2).concat(items.slice(0, 2));

	var _items$slice$splice$c4 = _slicedToArray(_items$slice$splice$c3, 2);

	var next1 = _items$slice$splice$c4[0];
	var next2 = _items$slice$splice$c4[1];


	return {
		prev2: prev2,
		prev1: prev1,
		current: current,
		next1: next1,
		next2: next2
	};
};

var getItemStyle = function getItemStyle(activeItems, item) {
	switch (item) {
		case activeItems.prev2:
			return _main4.default['is-prev2'];
		case activeItems.prev1:
			return _main4.default['is-prev1'];
		case activeItems.current:
			return _main4.default['is-current'];
		case activeItems.next1:
			return _main4.default['is-next1'];
		case activeItems.next2:
			return _main4.default['is-next2'];
		default:
			return _main4.default['hidden'];
	};
};

var itemToComponent = function itemToComponent(options, item) {
	var stateClass = void 0;
	var activeItems = options.activeItems;
	var path = options.path;


	stateClass = getItemStyle(activeItems, item);

	return _react3.default.createElement(
		'li',
		{ key: item.id, className: _main4.default.item + ' ' + stateClass },
		_react3.default.createElement(_main2.default, { item: item })
	);
};

var Carousel = _wrapComponent('Carousel')(function (_Component) {
	_inherits(Carousel, _Component);

	function Carousel() {
		_classCallCheck(this, Carousel);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel).apply(this, arguments));
	}

	_createClass(Carousel, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// save handler on instance for removal
			this.keyHandler = keyHandler.bind(this);

			// event listener has to be on document
			// or else it won't trigger when component or children are out of focus
			document.addEventListener('keyup', this.keyHandler, false);
		}
	}, {
		key: 'componentDidUnMount',
		value: function componentDidUnMount() {
			document.removeEventListener('keyup', this.keyHandler, false);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props;
			var items = _props.items;
			var path = _props.path;


			var activeId = this.props.active;
			var activeIndex = items.reduce(function (result, item, index) {
				return item.id === activeId ? index : result;
			}, 0);
			var activeItems = getDisplayedItems(items, { activeIndex: activeIndex });

			var options = _extends({}, this.props.options, { path: path, activeIndex: activeIndex, activeItems: activeItems });

			// save options on instance for event-listener
			this.options = options;

			return _react3.default.createElement(
				'div',
				{ className: _main4.default.root },
				_react3.default.createElement(
					_reactRouter.Link,
					{ className: _main4.default['tool-next'], to: path + '/' + activeItems.next1.id },
					_react3.default.createElement(_caret.Right, { className: _main4.default['tool--icon'] })
				),
				_react3.default.createElement(
					_reactRouter.Link,
					{ className: _main4.default['tool-prev'], to: path + '/' + activeItems.prev1.id },
					_react3.default.createElement(_caret.Right, { className: _main4.default['tool--icon'] })
				),
				_react3.default.createElement(
					'ul',
					{ className: _main4.default.list },
					items.map(itemToComponent.bind(undefined, options))
				)
			);
		}
	}]);

	return Carousel;
}(_react2.Component));

exports.default = Carousel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(2);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(3);

var _main = __webpack_require__(33);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Header: {
		displayName: 'Header'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: '/Users/Norbert/Work/Experiments/libertyglobal-assignment/t2/app/components/04-scaffolds/header/main.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(Component, id);
	};
}

var Header = _wrapComponent('Header')(function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return _react3.default.createElement(
				'header',
				{ className: _main2.default.root },
				_react3.default.createElement(
					'h1',
					null,
					_react3.default.createElement(
						'span',
						{ className: _main2.default.title },
						'Universal React Movie-Carousel-App'
					),
					' ',
					_react3.default.createElement(
						'span',
						{ className: _main2.default.subtitle },
						'by Norbert de Langen'
					)
				)
			);
		}
	}]);

	return Header;
}(_react2.Component));

exports.default = Header;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(16);

var _reduxThunk = __webpack_require__(43);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(7);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore);

function configureStore(initialState) {
	var store = createStoreWithMiddleware(_reducers2.default, initialState);

	if (true) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept(7, function () {
			var nextRootReducer = __webpack_require__(7).default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(2);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(3);

var _reactHelmet = __webpack_require__(6);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	App: {
		displayName: 'App'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: '/Users/Norbert/Work/Experiments/libertyglobal-assignment/t2/app/containers/App.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(Component, id);
	};
}

var App = _wrapComponent('App')(function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react3.default.createElement(
				'div',
				null,
				_react3.default.createElement(_reactHelmet2.default, {
					title: 'HireMeApp',
					titleTemplate: 'HireMeApp - %s',
					meta: [{ 'char-set': 'utf-8' }, { 'name': 'description', 'content': 'I want to work for Liberty Global' }]
				}),
				this.props.children
			);
		}
	}]);

	return App;
}(_react2.Component));

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(2);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactHelmet = __webpack_require__(6);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(17);

var _reactRouter = __webpack_require__(3);

var _movies = __webpack_require__(13);

var MovieActions = _interopRequireWildcard(_movies);

var _main = __webpack_require__(23);

var _main2 = _interopRequireDefault(_main);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Home: {
		displayName: 'Home'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: '/Users/Norbert/Work/Experiments/libertyglobal-assignment/t2/app/containers/Home.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(Component, id);
	};
}

var isLoading = function isLoading(readyState) {
	return readyState === MovieActions.MOVIES_INVALID || readyState === MovieActions.MOVIES_FETCHING;
};
var isFailed = function isFailed(readyState) {
	return readyState === MovieActions.MOVIES_FETCH_FAILED;
};

// @connect(state => { movies: state.movies })

var Home = _wrapComponent('Home')(function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			Home.readyOnActions(this.props.dispatch);
		}
	}, {
		key: 'render',
		value: function render() {
			var movies = this.props.movies;


			return _react3.default.createElement(
				'div',
				null,
				_react3.default.createElement(_reactHelmet2.default, { title: 'Home' }),
				isLoading(movies.readyState) ? _react3.default.createElement(
					'p',
					null,
					'Loading...'
				) : isFailed(movies.readyState) ? _react3.default.createElement(
					'p',
					null,
					'Failed to load content.'
				) : _react3.default.createElement(_main2.default, { items: movies.list, active: this.props.params.id, path: '/home' })
			);
		}
	}], [{
		key: 'readyOnActions',
		value: function readyOnActions(dispatch) {
			return Promise.all([dispatch(MovieActions.fetchIfNeeded())]);
		}
	}]);

	return Home;
}(_react2.Component));

;

exports.default = (0, _reactRedux.connect)(function mapStateToProps(state) {
	return {
		movies: state.movies
	};
})(Home);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(2);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(24);

var _main2 = _interopRequireDefault(_main);

var _Root = __webpack_require__(34);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Root: {
		displayName: 'Root'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: '/Users/Norbert/Work/Experiments/libertyglobal-assignment/t2/app/containers/Root.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(Component, id);
	};
}

var Root = _wrapComponent('Root')(function (_Component) {
	_inherits(Root, _Component);

	function Root() {
		_classCallCheck(this, Root);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Root).apply(this, arguments));
	}

	_createClass(Root, [{
		key: 'renderInitialState',
		value: function renderInitialState() {
			if (this.props.initialState) {
				var innerHtml = 'window.__INITIAL_STATE__ = ' + JSON.stringify(this.props.initialState);
				return _react3.default.createElement('script', { dangerouslySetInnerHTML: { __html: innerHtml } });
			}
		}
	}, {
		key: 'renderEnvironment',
		value: function renderEnvironment() {
			var innerHtml = 'window.__ENVIRONMENT__ = \'' + __ENVIRONMENT__ + '\'';
			return _react3.default.createElement('script', { dangerouslySetInnerHTML: { __html: innerHtml } });
		}
	}, {
		key: 'renderSpecialScript',
		value: function renderSpecialScript() {
			var innerHtml = 'console.log(\'works some more\')';
			return _react3.default.createElement('script', { dangerouslySetInnerHTML: { __html: innerHtml } });
		}
	}, {
		key: 'render',
		value: function render() {
			var head = this.props.head;

			return _react3.default.createElement(
				'html',
				{ className: _Root2.default.html },
				_react3.default.createElement(
					'head',
					null,
					head.title.toComponent(),
					head.meta.toComponent(),
					head.link.toComponent(),
					_react3.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Source+Serif+Pro', rel: 'stylesheet', type: 'text/css' }),
					false || process.env.NODE_ENV ? _react3.default.createElement('link', { href: '/app.css', rel: 'stylesheet' }) : null
				),
				_react3.default.createElement(
					'body',
					{ className: _Root2.default.body },
					_react3.default.createElement(_main2.default, null),
					_react3.default.createElement('div', { className: _Root2.default.content, id: 'root', dangerouslySetInnerHTML: { __html: this.props.content } }),
					false && _react3.default.createElement(
						'div',
						null,
						_react3.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react.js' }),
						_react3.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react-dom.js' })
					),
					this.renderEnvironment(),
					this.renderInitialState(),
					head.script.toComponent(),
					this.renderSpecialScript(),
					_react3.default.createElement('script', { src: '/app-entry.js' }),
					_react3.default.createElement('script', { src: '/vendor.js' }),
					_react3.default.createElement('script', { src: '/app.js', async: true })
				)
			);
		}
	}]);

	return Root;
}(_react2.Component));
// <script src={!process.env.NODE_ENV ? '/vendor.js' : '/vendor.min.js'}></script>

exports.default = Root;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module), __webpack_require__(37)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = movies;

var _movies = __webpack_require__(13);

function movies() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? {
		readyState: _movies.MOVIES_INVALID,
		list: null
	} : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case _movies.MOVIES_FETCHING:
			return _extends({}, state, {
				readyState: _movies.MOVIES_FETCHING
			});
		case _movies.MOVIES_FETCH_FAILED:
			return _extends({}, state, {
				readyState: _movies.MOVIES_FETCH_FAILED,
				error: action.error
			});
		case _movies.MOVIES_FETCHED:
			return _extends({}, state, {
				readyState: _movies.MOVIES_FETCHED,
				list: action.result
			});
		default:
			return state;
	}
}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(8, function() {
			var newContent = __webpack_require__(8);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(9, function() {
			var newContent = __webpack_require__(9);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(10, function() {
			var newContent = __webpack_require__(10);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(11, function() {
			var newContent = __webpack_require__(11);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(12, function() {
			var newContent = __webpack_require__(12);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(35);
module.exports = __webpack_require__(15);


/***/ }
],[36]);
//# sourceMappingURL=app.js.map