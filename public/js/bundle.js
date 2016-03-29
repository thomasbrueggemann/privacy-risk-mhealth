(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

// APP ACTIONS

var AppActions = (function () {
    function AppActions() {
        _classCallCheck(this, AppActions);

        this.generateActions("searchAppsSuccess", "searchAppsFail", "getIndexSuccess", "getIndexFail", "getByCategoryAndIndexSuccess", "getByCategoryAndIndexFail");
    }

    // GET SESSIONS

    _createClass(AppActions, [{
        key: "searchApps",
        value: function searchApps(query) {
            var _this = this;

            $.ajax({
                "url": "/api/search/" + encodeURIComponent(query),
                "dataType": "json",
                "type": "GET"
            }).done(function (data) {
                _this.actions.searchAppsSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.searchAppsFail(jqXhr);
            });
        }

        // GET INDEX
    }, {
        key: "getIndex",
        value: function getIndex(id) {
            var _this2 = this;

            $.ajax({
                "url": "/api/idx/" + id,
                "dataType": "json",
                "type": "GET"
            }).done(function (data) {
                _this2.actions.getIndexSuccess(data);
            }).fail(function (jqXhr) {
                _this2.actions.getIndexFail(jqXhr);
            });
        }

        // GET BY CATEGORY AND IDX
    }, {
        key: "getByCategoryAndIdx",
        value: function getByCategoryAndIdx(category, idx) {
            var _this3 = this;

            $.ajax({
                "url": "/api/cat/" + category + "/idx/" + idx,
                "dataType": "json",
                "type": "GET"
            }).done(function (data) {
                _this3.actions.getByCategoryAndIndexSuccess(data);
            }).fail(function (jqXhr) {
                _this3.actions.getByCategoryAndIndexFail(jqXhr);
            });
        }
    }]);

    return AppActions;
})();

exports["default"] = _alt2["default"].createActions(AppActions);
module.exports = exports["default"];

},{"../alt":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _alt = require("alt");

var _alt2 = _interopRequireDefault(_alt);

exports["default"] = new _alt2["default"]();
module.exports = exports["default"];

},{"alt":"alt"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AutoComplete = require("./AutoComplete");

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _storesAppStore = require("../stores/AppStore");

var _storesAppStore2 = _interopRequireDefault(_storesAppStore);

var _actionsAppActions = require("../actions/AppActions");

var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

var _reactRouter = require("react-router");

var AddApp = (function (_React$Component) {
    _inherits(AddApp, _React$Component);

    // CONSTRUCTOR

    function AddApp(props) {
        _classCallCheck(this, AddApp);

        _get(Object.getPrototypeOf(AddApp.prototype), "constructor", this).call(this, props);
        this.state = _storesAppStore2["default"].getState();
        this.onChange = this.onChange.bind(this);
    }

    // COMPONENT DID MOUNT

    _createClass(AddApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            _storesAppStore2["default"].listen(this.onChange);
        }

        // COMPONENT WILL UNMOUNT
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            _storesAppStore2["default"].unlisten(this.onChange);
        }

        // ON CHANGE
    }, {
        key: "onChange",
        value: function onChange(state) {
            this.setState(state);
        }

        // KEY UP
    }, {
        key: "keyUp",
        value: function keyUp(e) {

            // ESC clears selection
            if (e.keyCode === 27) {
                this.setState({
                    "apps": []
                });
                $("#search-app").val("");
            }

            var v = e.target.value;
            if (v.length > 2) {
                _actionsAppActions2["default"].searchApps(v);
            }
        }

        // ADD NEW APP
    }, {
        key: "addNewApp",
        value: function addNewApp(app) {

            this.setState({
                "apps": []
            });

            $(window).trigger("addNewApp", app);
            $("#search-app").val("");
        }

        // RENDER
    }, {
        key: "render",
        value: function render() {

            var placeholder = "Search for an app...";

            return _react2["default"].createElement(
                "div",
                { className: "addApp" },
                _react2["default"].createElement("input", { type: "text", id: "search-app", placeholder: placeholder, onKeyUp: this.keyUp.bind(this) }),
                _react2["default"].createElement(_AutoComplete2["default"], { addNewApp: this.addNewApp.bind(this), apps: this.state.apps })
            );
        }
    }]);

    return AddApp;
})(_react2["default"].Component);

exports["default"] = AddApp;
module.exports = exports["default"];

},{"../actions/AppActions":1,"../stores/AppStore":16,"./AutoComplete":6,"react":"react","react-router":"react-router"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AddApp = require("./AddApp");

var _AddApp2 = _interopRequireDefault(_AddApp);

var _reactRouter = require("react-router");

var App = (function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(App, [{
		key: "render",
		value: function render() {

			return _react2["default"].createElement(
				"div",
				{ className: "mhealth" },
				_react2["default"].createElement(
					"div",
					{ className: "header" },
					_react2["default"].createElement(
						_reactRouter.Link,
						{ to: "/apps" },
						_react2["default"].createElement(
							"div",
							{ className: "logo" },
							_react2["default"].createElement("img", { src: "/img/logo.png" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "title" },
							"Privacy Index for m",
							_react2["default"].createElement(
								"b",
								null,
								"Health"
							),
							" Apps"
						)
					),
					_react2["default"].createElement(
						_reactRouter.Link,
						{ to: "/" },
						_react2["default"].createElement("i", { className: "fa fa-sliders" }),
						" Weight Settings"
					),
					_react2["default"].createElement(
						_reactRouter.Link,
						{ to: "/impressum" },
						_react2["default"].createElement("i", { className: "fa fa-gavel" }),
						" Impressum"
					),
					this.props.history.isActive("/apps") === true ? _react2["default"].createElement(_AddApp2["default"], null) : null
				),
				this.props.children
			);
		}
	}]);

	return App;
})(_react2["default"].Component);

exports["default"] = App;
module.exports = exports["default"];

},{"./AddApp":3,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _storesAppStore = require("../stores/AppStore");

var _storesAppStore2 = _interopRequireDefault(_storesAppStore);

var _actionsAppActions = require("../actions/AppActions");

var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

var _Tooltips = require("./Tooltips");

var _Tooltips2 = _interopRequireDefault(_Tooltips);

var AppRow = (function (_React$Component) {
				_inherits(AppRow, _React$Component);

				// CONSTRUCTOR

				function AppRow(props) {
								_classCallCheck(this, AppRow);

								_get(Object.getPrototypeOf(AppRow.prototype), "constructor", this).call(this, props);
								this.state = _storesAppStore2["default"].getState();
								this.onChange = this.onChange.bind(this);
								this.tooltips = new _Tooltips2["default"]();
				}

				// REMOVE APP

				_createClass(AppRow, [{
								key: "removeApp",
								value: function removeApp() {
												this.props.removeApp(this.props.app);
								}

								// COMPONENT DID MOUNT
				}, {
								key: "componentDidMount",
								value: function componentDidMount() {
												_storesAppStore2["default"].listen(this.onChange);

												// get index
												_actionsAppActions2["default"].getIndex(this.props.app.id);

												// tooltips
												window.setTimeout(function () {

																$(".fa-influence").tooltipster({
																				"position": "top",
																				"content": "This factor has the most influence on the privacy risk index"
																});

																$(".app > .tooltip").tooltipster({
																				"position": "top",
																				"maxWidth": 400
																});
												}, 1000);
								}

								// COMPONENT WILL UNMOUNT
				}, {
								key: "componentWillUnmount",
								value: function componentWillUnmount() {
												_storesAppStore2["default"].unlisten(this.onChange);
								}

								// ON CHANGE
				}, {
								key: "onChange",
								value: function onChange(state) {
												this.setState(state);
								}

								// MAP ARCHETYPE
				}, {
								key: "mapArchetype",
								value: function mapArchetype(type) {
												switch (type) {
																case 1:
																				return "Casual Tool";
																case 2:
																				return "Common Knowledge Provider";
																case 3:
																				return "Treatment Guide";
																case 4:
																				return "Fitness Ad-Hoc Tool";
																case 5:
																				return "Fitness Tracker";
																case 6:
																				return "Treatment Support Tool";
																case 7:
																				return "Intimate Ad-Hoc Tool";
																case 8:
																				return "State of Health Test";
																case 9:
																				return "Intimate Tracker";
																case 10:
																				return "Health Monitor";
																case 11:
																				return "Treatment Reminder";
																case 12:
																				return "Health Record";
																default:
																				return "none";
												}
								}

								// ESCAPE HTML
				}, {
								key: "escapeHtml",
								value: function escapeHtml(unsafe) {
												return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
								}

								// PICK MAX
				}, {
								key: "pickMax",
								value: function pickMax() {
												var idx = this.state.idx[this.props.app.id].continuum.max;
												_actionsAppActions2["default"].getByCategoryAndIdx(this.props.app.archetype, idx);
								}

								// PICK MIN
				}, {
								key: "pickMin",
								value: function pickMin() {
												var idx = this.state.idx[this.props.app.id].continuum.min;
												_actionsAppActions2["default"].getByCategoryAndIdx(this.props.app.archetype, idx);
								}

								// SET DETAIL
				}, {
								key: "setDetail",
								value: function setDetail() {
												$(window).trigger("setDetail", {
																"multiplier": this.state.idx[this.props.app.id].multiplier,
																"weights": this.state.idx[this.props.app.id].weights
												});
								}

								// RENDER
				}, {
								key: "render",
								value: function render() {

												var secure_transmission = "no data connection",
												    data_reasonable = "-",
												    unspecific_target = "-";

												if (this.props.app.personal_target.length > 0) {
																secure_transmission = this.props.app.secure_transmission === true ? _react2["default"].createElement("i", { className: "fa fa-check fa-lg" }) : _react2["default"].createElement("i", { className: "fa fa-times fa-lg" });
												}

												data_reasonable = this.props.app.data_reasonable === true ? _react2["default"].createElement("i", { className: "fa fa-check fa-lg" }) : _react2["default"].createElement("i", { className: "fa fa-times fa-lg" });
												unspecific_target = this.props.app.unspecific_target.length > 0 ? _react2["default"].createElement("i", { className: "fa fa-check fa-lg" }) : _react2["default"].createElement("i", { className: "fa fa-times fa-lg" });

												var store_url, store_name, store_icon;
												if (this.props.app.rater === "thomas") {
																store_name = "Apple AppStore";
																store_url = "https://itunes.apple.com/app/store/id" + this.props.app.store_id;
																store_icon = _react2["default"].createElement("i", { className: "fa fa-apple fa-fw" });
												} else {
																store_name = "Google PlayStore";
																store_url = "https://play.google.com/store/apps/details?id=" + this.props.app.package_name;
																store_icon = _react2["default"].createElement("i", { className: "fa fa-android fa-fw" });
												}

												if (!this.state.idx[this.props.app.id]) return null;

												// fetch index
												this.props.app.privacy_index = this.state.idx[this.props.app.id].idx;

												// determine idx color
												var idx_class = "idx";
												if (this.props.app.privacy_index <= 15) {
																idx_class += " idx_green";
												} else if (this.props.app.privacy_index > 15 && this.props.app.privacy_index <= 50) {
																idx_class += " idx_orange";
												} else {
																idx_class += " idx_red";
												}

												var categoryCellClass = "app-cell tooltip";
												var categoryCellInfluence = null;
												if (this.props.app.influence_key === "category") {
																categoryCellClass += " influence-cell";
																categoryCellInfluence = _react2["default"].createElement("i", { className: "fa fa-bolt fa-influence" });
												}

												var personalTargetCellClass = "app-cell";
												var personalTargetCellInfluence = null;
												if (this.props.app.influence_key === "personal_target") {
																personalTargetCellClass += " influence-cell";
																personalTargetCellInfluence = _react2["default"].createElement("i", { className: "fa fa-bolt fa-influence" });
												}

												var unspecificTargetCellClass = "app-cell tooltip";
												var unspecificTargetCellInfluence = null;
												if (this.props.app.influence_key === "unspecific_target") {
																unspecificTargetCellClass += " influence-cell";
																unspecificTargetCellInfluence = _react2["default"].createElement("i", { className: "fa fa-bolt fa-influence" });
												}

												var dataReasonableCellClass = "app-cell";
												var dataReasonableCellInfluence = null;
												if (this.props.app.influence_key === "data_reasonable") {
																dataReasonableCellClass += " influence-cell";
																dataReasonableCellInfluence = _react2["default"].createElement("i", { className: "fa fa-bolt fa-influence" });
												}

												var secureCellClass = "app-cell";
												var secureCellInfluence = null;
												if (this.props.app.influence_key === "security") {
																secureCellClass += " influence-cell";
																secureCellInfluence = _react2["default"].createElement("i", { className: "fa fa-bolt fa-influence" });
												}

												var loginCellClass = "app-cell";
												var loginCellInfluence = null;
												if (this.props.app.influence_key === "login_required") {
																loginCellClass += " influence-cell";
																loginCellInfluence = _react2["default"].createElement("i", { className: "fa fa-bolt fa-influence" });
												}

												var min = null;
												var line = null;
												if (this.state.idx[this.props.app.id].continuum.min !== null) {
																min = _react2["default"].createElement(
																				"span",
																				{ className: "idx_min", onClick: this.pickMin.bind(this) },
																				this.state.idx[this.props.app.id].continuum.min
																);
																line = _react2["default"].createElement(
																				"span",
																				{ className: "idx_line" },
																				" "
																);
												}

												var max = null;
												if (this.state.idx[this.props.app.id].continuum.max !== null) {
																max = _react2["default"].createElement(
																				"span",
																				{ className: "idx_max", onClick: this.pickMax.bind(this) },
																				this.state.idx[this.props.app.id].continuum.max
																);
																line = _react2["default"].createElement(
																				"span",
																				{ className: "idx_line" },
																				" "
																);
												}

												return _react2["default"].createElement(
																"div",
																{ className: "app", id: "app" + this.props.app.id },
																_react2["default"].createElement("div", { className: "app-cell text-bold", dangerouslySetInnerHTML: { __html: this.props.app.name } }),
																_react2["default"].createElement(
																				"div",
																				{ className: "app-cell" },
																				store_icon,
																				_react2["default"].createElement(
																								"a",
																								{ href: store_url, target: "_blank" },
																								store_name
																				)
																),
																_react2["default"].createElement(
																				"div",
																				{ className: "app-cell" },
																				this.mapArchetype(this.props.app.archetype)
																),
																_react2["default"].createElement(
																				"div",
																				{ className: "app-cell tooltip", title: this.tooltips.privacyIdx(this.state.idx[this.props.app.id].continuum, this.mapArchetype(this.props.app.archetype), this.props.app.privacy_index) },
																				line,
																				min,
																				_react2["default"].createElement(
																								"span",
																								{ onClick: this.setDetail.bind(this), className: idx_class },
																								this.props.app.privacy_index
																				),
																				max
																),
																_react2["default"].createElement(
																				"div",
																				{ className: "app-cell tooltip", title: this.tooltips.confidence(this.props.app.privacy_index_confidence) },
																				parseInt(this.props.app.privacy_index_confidence * 100),
																				"%"
																),
																_react2["default"].createElement(
																				"div",
																				{ className: categoryCellClass, "data-weight": "category", title: this.tooltips.categories(this.props.app.personal_category) },
																				categoryCellInfluence,
																				this.props.app.personal_category.length > 0 ? this.props.app.personal_category.join(", ") : "none"
																),
																_react2["default"].createElement(
																				"div",
																				{ className: loginCellClass, "data-weight": "login_required" },
																				loginCellInfluence,
																				this.props.app.login === true ? _react2["default"].createElement("i", { className: "fa fa-check fa-lg" }) : _react2["default"].createElement("i", { className: "fa fa-times fa-lg" })
																),
																_react2["default"].createElement(
																				"div",
																				{ className: personalTargetCellClass, "data-weight": "personal_target" },
																				personalTargetCellInfluence,
																				this.props.app.personal_target.length > 0 ? this.props.app.personal_target.join(", ") : "nowhere"
																),
																_react2["default"].createElement(
																				"div",
																				{ className: unspecificTargetCellClass, "data-weight": "unspecific_target" },
																				unspecificTargetCellInfluence,
																				unspecific_target
																),
																_react2["default"].createElement(
																				"div",
																				{ className: dataReasonableCellClass, "data-weight": "data_reasonable" },
																				dataReasonableCellInfluence,
																				data_reasonable
																),
																_react2["default"].createElement(
																				"div",
																				{ className: secureCellClass, "data-weight": "secure" },
																				secureCellInfluence,
																				secure_transmission
																),
																_react2["default"].createElement(
																				"div",
																				{ className: "app-cell" },
																				_react2["default"].createElement(
																								"a",
																								{ href: "#", onClick: this.removeApp.bind(this) },
																								"remove"
																				)
																)
												);
								}
				}]);

				return AppRow;
})(_react2["default"].Component);

exports["default"] = AppRow;
module.exports = exports["default"];

},{"../actions/AppActions":1,"../stores/AppStore":16,"./Tooltips":10,"react":"react"}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AutoCompleteItem = require("./AutoCompleteItem");

var _AutoCompleteItem2 = _interopRequireDefault(_AutoCompleteItem);

var AutoComplete = (function (_React$Component) {
    _inherits(AutoComplete, _React$Component);

    function AutoComplete() {
        _classCallCheck(this, AutoComplete);

        _get(Object.getPrototypeOf(AutoComplete.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(AutoComplete, [{
        key: "render",

        // RENDER
        value: function render() {
            var _this = this;

            return _react2["default"].createElement(
                "ul",
                { className: "autocomplete-list" },
                this.props.apps.map(function (a) {
                    return _react2["default"].createElement(_AutoCompleteItem2["default"], { key: a.id, app: a, addNewApp: _this.props.addNewApp });
                })
            );
        }
    }]);

    return AutoComplete;
})(_react2["default"].Component);

exports["default"] = AutoComplete;
module.exports = exports["default"];

},{"./AutoCompleteItem":7,"react":"react"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var AutoCompleteItem = (function (_React$Component) {
    _inherits(AutoCompleteItem, _React$Component);

    function AutoCompleteItem() {
        _classCallCheck(this, AutoCompleteItem);

        _get(Object.getPrototypeOf(AutoCompleteItem.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(AutoCompleteItem, [{
        key: "addNewApp",

        // ADD NEW APP
        value: function addNewApp() {
            this.props.addNewApp(this.props.app);
        }

        // RENDER
    }, {
        key: "render",
        value: function render() {

            return _react2["default"].createElement(
                "li",
                { onClick: this.addNewApp.bind(this), title: this.props.app.name },
                this.props.app.rater === "thomas" ? _react2["default"].createElement("i", { className: "fa fa-apple fa-fw" }) : _react2["default"].createElement("i", { className: "fa fa-android fa-fw" }),
                this.props.app.name.length > 25 ? this.props.app.name.substring(0, 25) + "..." : this.props.app.name
            );
        }
    }]);

    return AutoCompleteItem;
})(_react2["default"].Component);

exports["default"] = AutoCompleteItem;
module.exports = exports["default"];

},{"react":"react"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AppRow = require("./AppRow");

var _AppRow2 = _interopRequireDefault(_AppRow);

var _AutoCompleteItem = require("./AutoCompleteItem");

var _AutoCompleteItem2 = _interopRequireDefault(_AutoCompleteItem);

var Home = (function (_React$Component) {
	_inherits(Home, _React$Component);

	// CONSTRUCTOR

	function Home(props) {
		_classCallCheck(this, Home);

		_get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this, props);
		this.state = {
			apps: [],
			catidx: [],
			detail: null
		};
	}

	// COMPONENT DID UPDATE

	_createClass(Home, [{
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			$(".app-header > .tooltip").tooltipster({
				"position": "right",
				"maxWidth": 400
			});
		}

		// COMPONENT DID MOUNT
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			$(window).on("addNewApp", this.addNewApp.bind(this));
			$(window).on("addCatIdx", this.addCatIdx.bind(this));
			$(window).on("setDetail", this.setDetail.bind(this));
		}

		// COMPONENT WILL UNMOUNT
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			$(window).off("addNewApp");
			$(window).off("setDetail");
		}

		// ADD NEW APP
	}, {
		key: "addNewApp",
		value: function addNewApp(e, app) {
			var apps = this.state.apps;
			apps.push(app);

			this.setState({
				"apps": apps,
				"catidx": []
			});
		}

		// ADD APP
	}, {
		key: "addApp",
		value: function addApp(app) {
			$(window).trigger("addNewApp", app);
		}

		// REMOVE APP
	}, {
		key: "removeApp",
		value: function removeApp(app) {

			this.setState({
				"apps": this.state.apps.filter(function (item) {
					return item.id !== app.id;
				})
			});

			window.scrollTo(0, 0);
		}

		// ADD CAT IDX
	}, {
		key: "addCatIdx",
		value: function addCatIdx(e, data) {
			var s = this.state;
			s.catidx = data.data;

			this.setState(s);
		}

		// EMPTY CAT IDX
	}, {
		key: "emptyCatIdx",
		value: function emptyCatIdx() {
			var s = this.state;
			s.catidx = [];

			this.setState(s);
		}

		// SET DETAIL
	}, {
		key: "setDetail",
		value: function setDetail(e, data) {
			var s = this.state;
			s.detail = data;
			console.log(data);

			this.setState(s);
		}

		// REMOVE DETAIL
	}, {
		key: "removeDetail",
		value: function removeDetail() {
			var s = this.state;
			s.detail = null;

			this.setState(s);
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			var overlayClasses = "app-overlay autocomplete-list";
			if (this.state.catidx.length <= 0) {
				overlayClasses += " hidden";
			}

			var overlayFormulaClasses = "app-overlay autocomplete-list";
			var formulaContent;
			if (this.state.detail === null) {
				overlayFormulaClasses += " hidden";
			} else {
				formulaContent = _react2["default"].createElement(
					"tbody",
					null,
					_react2["default"].createElement(
						"tr",
						null,
						_react2["default"].createElement(
							"td",
							null,
							"Secure Connection"
						),
						_react2["default"].createElement(
							"td",
							null,
							this.state.detail.multiplier.security
						),
						_react2["default"].createElement(
							"td",
							null,
							this.state.detail.weights.security
						)
					),
					_react2["default"].createElement(
						"tr",
						null,
						_react2["default"].createElement(
							"td",
							null,
							"Personal data Target"
						),
						_react2["default"].createElement(
							"td",
							null,
							this.state.detail.multiplier.personal_target
						),
						_react2["default"].createElement(
							"td",
							null,
							this.state.detail.weights.personal_target
						)
					),
					_react2["default"].createElement(
						"tr",
						null,
						_react2["default"].createElement(
							"td",
							null,
							"Personal data category"
						),
						_react2["default"].createElement(
							"td",
							null,
							this.state.detail.multiplier.category
						),
						_react2["default"].createElement(
							"td",
							null,
							this.state.detail.weights.category
						)
					),
					_react2["default"].createElement(
						"tr",
						null,
						_react2["default"].createElement(
							"td",
							null,
							"Login required"
						),
						_react2["default"].createElement(
							"td",
							null,
							this.state.detail.multiplier.login_required
						),
						_react2["default"].createElement(
							"td",
							null,
							this.state.detail.weights.login_required
						)
					),
					_react2["default"].createElement(
						"tr",
						null,
						_react2["default"].createElement(
							"td",
							null,
							"Unspecific data target"
						),
						_react2["default"].createElement(
							"td",
							null,
							this.state.detail.multiplier.unspecific_target
						),
						_react2["default"].createElement(
							"td",
							null,
							this.state.detail.weights.unspecific_target
						)
					),
					_react2["default"].createElement(
						"tr",
						null,
						_react2["default"].createElement(
							"td",
							null,
							"Data collection reasonable"
						),
						_react2["default"].createElement(
							"td",
							null,
							this.state.detail.multiplier.data_reasonable
						),
						_react2["default"].createElement(
							"td",
							null,
							this.state.detail.weights.data_reasonable
						)
					)
				);
			}

			if (this.state.apps.length > 0) {

				return _react2["default"].createElement(
					"div",
					{ className: "apps" },
					_react2["default"].createElement(
						"div",
						{ className: overlayClasses },
						_react2["default"].createElement(
							"div",
							{ className: "app-overlay-text" },
							"You can choose one of these apps to add to the comparison table view:"
						),
						this.state.catidx.map(function (a) {
							return _react2["default"].createElement(_AutoCompleteItem2["default"], { key: a.id, app: a, addNewApp: _this.addApp });
						}),
						_react2["default"].createElement(
							"div",
							{ className: "app-overlay-text" },
							_react2["default"].createElement(
								"button",
								{ onClick: this.emptyCatIdx.bind(this), className: "btn-grey" },
								"Close"
							)
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: overlayFormulaClasses },
						_react2["default"].createElement(
							"div",
							{ className: "app-overlay-text" },
							"The privacy index is calculated using the following values:"
						),
						_react2["default"].createElement(
							"table",
							{ className: "table" },
							_react2["default"].createElement(
								"thead",
								null,
								_react2["default"].createElement(
									"tr",
									null,
									_react2["default"].createElement("th", null),
									_react2["default"].createElement(
										"th",
										null,
										"Factor"
									),
									_react2["default"].createElement(
										"th",
										null,
										"Weight"
									)
								)
							),
							formulaContent
						),
						_react2["default"].createElement(
							"div",
							{ className: "app-overlay-text" },
							_react2["default"].createElement(
								"button",
								{ onClick: this.removeDetail.bind(this), className: "btn-grey" },
								"Close"
							)
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: overlayClasses },
						_react2["default"].createElement(
							"div",
							{ className: "app-overlay-text" },
							"You can choose one of these apps to add to the comparison table view:"
						),
						this.state.catidx.map(function (a) {
							return _react2["default"].createElement(_AutoCompleteItem2["default"], { key: a.id, app: a, addNewApp: _this.addApp });
						}),
						_react2["default"].createElement(
							"div",
							{ className: "app-overlay-text" },
							_react2["default"].createElement(
								"button",
								{ onClick: this.emptyCatIdx.bind(this), className: "btn-grey" },
								"Close"
							)
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "app-header" },
						_react2["default"].createElement(
							"div",
							{ className: "app-cell" },
							"Name ",
							_react2["default"].createElement("i", { className: "fa fa-lg fa-fw" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "app-cell" },
							"Store ",
							_react2["default"].createElement("i", { className: "fa fa-lg fa-fw" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "app-cell tooltip", title: "Possible categories are: Casual Tool, Common Knowledge Provider, Treatment Guide, Fitness Ad-Hoc Tool, Fitness Tracker, Treatment Support Tool, Intimate Ad-Hoc Tool, State of Health Test, Intimate Tracker, Health Monitor, Treatment Reminder, Health Record" },
							"Category  ",
							_react2["default"].createElement("i", { className: "fa fa-question-circle fa-lg fa-fw" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "app-cell tooltip", title: "From 0 to 100. The higher the greater the privacy risk!" },
							"Privacy risk index ",
							_react2["default"].createElement("i", { className: "fa fa-question-circle fa-lg fa-fw" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "app-cell tooltip", title: "From 0 to 100. The higher the more confident are we with the rating of the risk index calculation." },
							"Rating confidence ",
							_react2["default"].createElement("i", { className: "fa fa-question-circle fa-lg fa-fw" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "app-cell tooltip", title: "What kind of personal data you have to enter. Possible entries are: Address, Medication intake, Vital values, Diseases, Medical appointments, Life status specs, Food intake, Body specs, Symptoms, Workout / Activities, Sleep Metrics, Personality Test, Family" },
							"Personal data collected ",
							_react2["default"].createElement("i", { className: "fa fa-question-circle fa-lg fa-fw" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "app-cell tooltip", title: "Is a ia mail / password or a social network required to use the app effectively?" },
							"Login required ",
							_react2["default"].createElement("i", { className: "fa fa-question-circle fa-lg fa-fw" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "app-cell tooltip", title: "The target, where your data is being sent. Possible values: App provider, Advertisers / Marketeers, Research, Unknown" },
							"Where is my data being sent? ",
							_react2["default"].createElement("i", { className: "fa fa-question-circle fa-lg fa-fw" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "app-cell tooltip", title: "Tracking means, apps show you personalized ads or track your clicks for analytics purposes" },
							"Does the app track me? ",
							_react2["default"].createElement("i", { className: "fa fa-question-circle fa-lg fa-fw" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "app-cell tooltip", title: "Sometimes apps ask for data that is not even used, just collected." },
							"Personal data input reasonable? ",
							_react2["default"].createElement("i", { className: "fa fa-question-circle fa-lg fa-fw" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "app-cell tooltip", title: "is your data transferred via an encrypted connection?" },
							"Secure data connection?  ",
							_react2["default"].createElement("i", { className: "fa fa-question-circle fa-lg fa-fw" })
						),
						_react2["default"].createElement("div", { className: "app-cell" })
					),
					_react2["default"].createElement(
						"div",
						{ className: "scroll-apps-outer" },
						_react2["default"].createElement(
							"div",
							{ className: "scroll-apps-inner", style: { "width": this.state.apps.length * 330 } },
							this.state.apps.map(function (a) {
								return _react2["default"].createElement(_AppRow2["default"], { key: a.id, app: a, removeApp: _this.removeApp.bind(_this) });
							})
						)
					)
				);
			} else {

				return _react2["default"].createElement(
					"div",
					{ className: "intro" },
					_react2["default"].createElement(
						"div",
						{ className: "arrow" },
						_react2["default"].createElement("img", { width: "150", src: "img/arrow.png" })
					),
					_react2["default"].createElement(
						"div",
						{ className: "infotext" },
						_react2["default"].createElement("i", { className: "fa fa-search" }),
						" Search for an app that we have reviewed and rated to compare it's privacy risk index to other apps!"
					)
				);
			}
		}
	}]);

	return Home;
})(_react2["default"].Component);

exports["default"] = Home;
module.exports = exports["default"];

},{"./AppRow":5,"./AutoCompleteItem":7,"react":"react"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AddApp = require("./AddApp");

var _AddApp2 = _interopRequireDefault(_AddApp);

var Impressum = (function (_React$Component) {
  _inherits(Impressum, _React$Component);

  function Impressum() {
    _classCallCheck(this, Impressum);

    _get(Object.getPrototypeOf(Impressum.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Impressum, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "weights" },
        _react2["default"].createElement(
          "h2",
          null,
          "Impressum"
        ),
        _react2["default"].createElement(
          "p",
          null,
          "The following information (Impressum) is required under German law."
        ),
        _react2["default"].createElement(
          "p",
          null,
          "Responsible for this site:"
        ),
        _react2["default"].createElement(
          "p",
          null,
          _react2["default"].createElement(
            "i",
            null,
            "(Authors address currently removed since this website is subject to a scientific paper review)"
          )
        ),
        _react2["default"].createElement(
          "h3",
          null,
          "Legal disclaimer"
        ),
        _react2["default"].createElement(
          "p",
          null,
          "The creators of this website cannot assume liability for the timeless accuracy and completeness of the information. This website contains links to external websites. As the contents of these third-party websites are beyond my control, I cannot accept liability for them. ResponsibiIity for the contents of the linked pages is always held by the provider or operator of the pages."
        ),
        _react2["default"].createElement(
          "h3",
          null,
          "Data protection"
        ),
        _react2["default"].createElement(
          "p",
          null,
          "In general, when visiting the website of “Privacy Index for mHealth Apps”, no personal data are saved. No data will be passed on to third parties without your consent. We point out that in regard to unsecured data transmission in the internet (e.g. via email), security cannot be guaranteed. Such data could possibIy be accessed by third parties."
        ),
        _react2["default"].createElement(
          "p",
          null,
          " "
        )
      );
    }
  }]);

  return Impressum;
})(_react2["default"].Component);

exports["default"] = Impressum;
module.exports = exports["default"];

},{"./AddApp":3,"react":"react"}],10:[function(require,module,exports){

/*** TOOLTIPS ***/
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tooltips = (function () {
	function Tooltips() {
		_classCallCheck(this, Tooltips);
	}

	_createClass(Tooltips, [{
		key: "confidence",

		// CONFIDENCE
		value: function confidence(value) {

			switch (value) {
				case 0.1:
					return "We inspected the screenshots or the description of the app";
				case 0.6:
					return "We downloaded the app and used it";
				case 0.8:
					return "We downloaded the app and inspected the HTTP connections";
				case 0.9:
					return "We downloaded the app, inspected the HTTP connections and read the privacy policy";
			}
		}

		// CATEGORIES
	}, {
		key: "categories",
		value: function categories(values) {

			var title = "";
			for (var i in values) {

				title += "\"" + values[i] + "\": e.g. ";

				// what category values are available?
				switch (values[i]) {
					case "address":
						title += "Country, State, Street";break;
					case "medication intake":
						title += "Pills / recipes, Medication dosage";break;
					case "vital values":
						title += "Blood pressure, Heart rate, Blood sugar, Blood values";break;
					case "diseases":
						title += "Kind of disease";break;
					case "medical appointments":
						title += "Date, Doctor";break;
					case "life status specs":
						title += "Pregnancy, Lifestyle (activity), Smoking habit";break;
					case "food intake":
						title += "Calories, diet plan, drinks";break;
					case "body specs":
						title += "Weight, Height, Body frame, Body fat, Temperature etc.";break;
					case "symptoms":
						title += "All acute, chronic, relapsing or remitting symptoms. For example: Mood changes, rash, swellings";break;
					case "workout / activities":
						title += "Goals, Steps, Distance covered / GPS Tracking";break;
					case "sleep metrics":
						title += "Sleep sound, dream description";break;
					case "personality test":
						title += "Questions about own behavior";break;
					case "family":
						title += "Medical condition of children or ancestors, Family size";break;
				}

				title += "; ";
			}

			return title;
		}

		// PRIVACY IDX
	}, {
		key: "privacyIdx",
		value: function privacyIdx(continuum, archetype, val) {
			var title = "The privacy risk index of this app is " + val + ". ";

			if (archetype !== "non" && continuum.min !== null && continuum.max !== null) {
				title += "Within the category \"" + archetype + "\" the lowest privacy risk index is ";
				title += continuum.min;
				title += " and the highest is ";
				title += continuum.max + "";
			}

			return title;
		}
	}]);

	return Tooltips;
})();

exports["default"] = Tooltips;
module.exports = exports["default"];

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var Weights = (function (_React$Component) {
	_inherits(Weights, _React$Component);

	// CONSTRUCTOR

	function Weights(props) {
		_classCallCheck(this, Weights);

		_get(Object.getPrototypeOf(Weights.prototype), "constructor", this).call(this, props);
		this.state = {
			"weights": {
				"security": 0.1,
				"personal_target": 0.4,
				"category": 0.3,
				"login_required": 0.1,
				"unspecific_target": 0.05,
				"data_reasonable": 0.05
			}
		};
	}

	// COMPONENT DID MOUNT

	_createClass(Weights, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var defaultWeights = {
				"security": 0.1,
				"personal_target": 0.4,
				"category": 0.3,
				"login_required": 0.1,
				"unspecific_target": 0.05,
				"data_reasonable": 0.05
			};

			// find maximum
			var maxW = 0;
			for (var j in defaultWeights) {
				if (defaultWeights[j] > maxW) {
					maxW = defaultWeights[j];
				}
			}

			var mulFactor = 1 / maxW;

			for (var i in defaultWeights) {
				$("[data-weight='" + i + "']").val(defaultWeights[i] * mulFactor * 100);
			}
		}

		// SAVE WEIGHT
	}, {
		key: "saveWeight",
		value: function saveWeight() {

			// store all new weights
			var sum = 0;
			$("[data-weight]").each(function (i, el) {
				var $el = $(el);
				sum += parseInt($el.val());
			});

			var w = this.state.weights;
			$("[data-weight]").each(function (i, el) {
				var $el = $(el);
				w[$el.data("weight")] = $el.val() / (sum / 100) / 100;
			});

			this.setState({
				"weights": w
			});
		}

		// DONE
	}, {
		key: "done",
		value: function done() {
			Cookies.set("userWeights", this.state.weights);

			// navigate to next screen
			this.props.history.push({
				"pathname": "/weights-personal-target",
				"search": "",
				"state": {}
			});
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "weights" },
				_react2["default"].createElement(
					"h2",
					null,
					"How important are the following factors to you?"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"A secure data connection"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "security", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"The target, data might be sent to"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "personal_target", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"The types of personal data you have to enter"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "category", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"The fact that advertisement and analytics services are used"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "unspecific_target", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"The fact that you have to login to the app with an eMail or Facebook"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "login_required", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"The reasonableness of data collection"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "data_reasonable", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"button",
					{ onClick: this.done.bind(this) },
					_react2["default"].createElement("i", { className: "fa fa-check" }),
					" Save"
				),
				" or ",
				_react2["default"].createElement(
					_reactRouter.Link,
					{ to: "/apps" },
					_react2["default"].createElement("i", { className: "fa fa-share" }),
					" Skip the weighting"
				)
			);
		}
	}]);

	return Weights;
})(_react2["default"].Component);

exports["default"] = Weights;
module.exports = exports["default"];

},{"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var WeightsCategory = (function (_React$Component) {
	_inherits(WeightsCategory, _React$Component);

	// CONSTRUCTOR

	function WeightsCategory(props) {
		_classCallCheck(this, WeightsCategory);

		_get(Object.getPrototypeOf(WeightsCategory.prototype), "constructor", this).call(this, props);
		this.state = {
			"weights": {
				"address": 0.088,
				"medication intake": 0.147,
				"vital values": 0.147,
				"diseases": 0.118,
				"medical appointments": 0.053,
				"life status specs": 0.106,
				"food intake": 0.035,
				"body specs": 0.082,
				"symptoms": 0.118,
				"workout / activities": 0.029,
				"workout / activity": 0.029, // naming gitter
				"sleep metrics": 0.006,
				"personality test": 0.012,
				"family": 0.059,
				"unknown": 0.147 // give an unkown component the highest value
			}
		};
	}

	// COMPONENT DID MOUNT

	_createClass(WeightsCategory, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var defaultWeights = {
				"address": 0.088,
				"medication intake": 0.147,
				"vital values": 0.147,
				"diseases": 0.118,
				"medical appointments": 0.053,
				"life status specs": 0.106,
				"food intake": 0.035,
				"body specs": 0.082,
				"symptoms": 0.118,
				"workout / activities": 0.029,
				"workout / activity": 0.029, // naming gitter
				"sleep metrics": 0.006,
				"personality test": 0.012,
				"family": 0.059,
				"unknown": 0.147 // give an unkown component the highest value
			};

			// find maximum
			var maxW = 0;
			for (var j in defaultWeights) {
				if (defaultWeights[j] > maxW) {
					maxW = defaultWeights[j];
				}
			}

			var mulFactor = 1 / maxW;

			for (var i in defaultWeights) {
				$("[data-weight='" + i + "']").val(defaultWeights[i] * mulFactor * 100);
			}
		}

		// SAVE WEIGHT
	}, {
		key: "saveWeight",
		value: function saveWeight() {

			// store all new weights
			var sum = 0;
			$("[data-weight]").each(function (i, el) {
				var $el = $(el);
				sum += parseInt($el.val());
			});

			var w = this.state.weights;
			$("[data-weight]").each(function (i, el) {
				var $el = $(el);
				w[$el.data("weight")] = $el.val() / (sum / 100) / 100;
			});

			this.setState({
				"weights": w
			});
		}

		// DONE
	}, {
		key: "done",
		value: function done() {
			Cookies.set("userWeightsCategory", this.state.weights);

			// navigate to home screen
			this.props.history.push({
				"pathname": "/apps",
				"search": "",
				"state": {}
			});
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "weights" },
				_react2["default"].createElement(
					"h2",
					null,
					"How important are these personal data categories to you?"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"Your address"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "address", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"Medication intake"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "medication intake", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"Vital values (e.g. blood pressue or heartrate)"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "vital values", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"Diseases you have"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "diseases", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"Medical appointments"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "medical appointments", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"Life status specs (e.g. if you are pregnant or how active you are)"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "life status specs", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"Food intake"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "food intake", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"Body specs (e.g. weight or size)"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "body specs", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"Symptoms you experience"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "symptoms", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"Workout / Activities"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "workout / activities", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"Sleep metrics (e.g. schedule)"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "sleep metrics", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"Personality test questions"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "personality test", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"Family information (e.g. number of children)"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "family", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"button",
					{ onClick: this.done.bind(this) },
					_react2["default"].createElement("i", { className: "fa fa-check" }),
					" Save"
				),
				" or ",
				_react2["default"].createElement(
					_reactRouter.Link,
					{ to: "/apps" },
					_react2["default"].createElement("i", { className: "fa fa-share" }),
					" Skip the weighting"
				)
			);
		}
	}]);

	return WeightsCategory;
})(_react2["default"].Component);

exports["default"] = WeightsCategory;
module.exports = exports["default"];

},{"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var WeightsPersonalTarget = (function (_React$Component) {
	_inherits(WeightsPersonalTarget, _React$Component);

	// CONSTRUCTOR

	function WeightsPersonalTarget(props) {
		_classCallCheck(this, WeightsPersonalTarget);

		_get(Object.getPrototypeOf(WeightsPersonalTarget.prototype), "constructor", this).call(this, props);
		this.state = {
			"weights": {
				"app provider": 0.3,
				"advertisers / marketeers": 0.3,
				"research projects": 0.1,
				"facebook": 0.3
			}
		};
	}

	// COMPONENT DID MOUNT

	_createClass(WeightsPersonalTarget, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var defaultWeights = {
				"app provider": 0.3,
				"advertisers / marketeers": 0.3,
				"research projects": 0.1,
				"facebook": 0.3
			};

			// find maximum
			var maxW = 0;
			for (var j in defaultWeights) {
				if (defaultWeights[j] > maxW) {
					maxW = defaultWeights[j];
				}
			}

			var mulFactor = 1 / maxW;

			for (var i in defaultWeights) {
				$("[data-weight='" + i + "']").val(defaultWeights[i] * mulFactor * 100);
			}
		}

		// SAVE WEIGHT
	}, {
		key: "saveWeight",
		value: function saveWeight() {

			// store all new weights
			var sum = 0;
			$("[data-weight]").each(function (i, el) {
				var $el = $(el);
				sum += parseInt($el.val());
			});

			var w = this.state.weights;
			$("[data-weight]").each(function (i, el) {
				var $el = $(el);
				w[$el.data("weight")] = $el.val() / (sum / 100) / 100;
			});

			this.setState({
				"weights": w
			});
		}

		// DONE
	}, {
		key: "done",
		value: function done() {
			Cookies.set("userWeightsPersonalTarget", this.state.weights);

			// navigate to home screen
			this.props.history.push({
				"pathname": "/weights-category",
				"search": "",
				"state": {}
			});
		}

		// RENDER
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "weights" },
				_react2["default"].createElement(
					"h2",
					null,
					"How important is the risk to you, where your personal data is potentionally sent?"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"The app provider"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "app provider", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"To advertisers or marketing companies"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "advertisers / marketeers", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"To research projects"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "research projects", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"div",
					{ className: "weight-row" },
					_react2["default"].createElement(
						"label",
						null,
						"To Facebook"
					),
					"not so much ",
					_react2["default"].createElement("input", { type: "range", min: "0", max: "100", steps: "10", "data-weight": "facebook", onChange: this.saveWeight.bind(this) }),
					" very"
				),
				_react2["default"].createElement(
					"button",
					{ onClick: this.done.bind(this) },
					_react2["default"].createElement("i", { className: "fa fa-check" }),
					" Save"
				),
				" or ",
				_react2["default"].createElement(
					_reactRouter.Link,
					{ to: "/apps" },
					_react2["default"].createElement("i", { className: "fa fa-share" }),
					" Skip the weighting"
				)
			);
		}
	}]);

	return WeightsPersonalTarget;
})(_react2["default"].Component);

exports["default"] = WeightsPersonalTarget;
module.exports = exports["default"];

},{"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _historyLibCreateBrowserHistory = require("history/lib/createBrowserHistory");

var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

var history = (0, _historyLibCreateBrowserHistory2["default"])();

_reactDom2["default"].render(_react2["default"].createElement(
  _reactRouter2["default"],
  { history: history },
  _routes2["default"]
), document.getElementById("app"));

},{"./routes":15,"history/lib/createBrowserHistory":23,"react":"react","react-dom":"react-dom","react-router":"react-router"}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _componentsApp = require("./components/App");

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require("./components/Home");

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsWeights = require("./components/Weights");

var _componentsWeights2 = _interopRequireDefault(_componentsWeights);

var _componentsWeightsPersonalTarget = require("./components/WeightsPersonalTarget");

var _componentsWeightsPersonalTarget2 = _interopRequireDefault(_componentsWeightsPersonalTarget);

var _componentsWeightsCategory = require("./components/WeightsCategory");

var _componentsWeightsCategory2 = _interopRequireDefault(_componentsWeightsCategory);

var _componentsImpressum = require("./components/Impressum");

var _componentsImpressum2 = _interopRequireDefault(_componentsImpressum);

exports["default"] = _react2["default"].createElement(
	_reactRouter.Route,
	{ component: _componentsApp2["default"] },
	_react2["default"].createElement(_reactRouter.Route, { path: "/apps", component: _componentsHome2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "/impressum", component: _componentsImpressum2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "/", component: _componentsWeights2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "/weights-personal-target", component: _componentsWeightsPersonalTarget2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "/weights-category", component: _componentsWeightsCategory2["default"] })
);
module.exports = exports["default"];

},{"./components/App":4,"./components/Home":8,"./components/Impressum":9,"./components/Weights":11,"./components/WeightsCategory":12,"./components/WeightsPersonalTarget":13,"react":"react","react-router":"react-router"}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _actionsAppActions = require("../actions/AppActions");

var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);

var AppStore = (function () {
	function AppStore() {
		_classCallCheck(this, AppStore);

		this.bindActions(_actionsAppActions2["default"]);
		this.apps = [];
		this.idx = {};
	}

	// SEARCH APPS SUCCESS

	_createClass(AppStore, [{
		key: "searchAppsSuccess",
		value: function searchAppsSuccess(data) {
			this.apps = data;
		}

		// SEARCH APPS FAIL
	}, {
		key: "searchAppsFail",
		value: function searchAppsFail(jqXhr) {
			// Handle multiple response formats, fallback to HTTP status code number.
			console.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
		}

		// GET INDEX SUCCESS
	}, {
		key: "getIndexSuccess",
		value: function getIndexSuccess(data) {
			this.idx[data.id] = data;
			this.apps = [];
		}

		// GET INDEX FAIL
	}, {
		key: "getIndexFail",
		value: function getIndexFail(jqXhr) {
			// Handle multiple response formats, fallback to HTTP status code number.
			console.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
		}

		// GET BY CATEGORY AND INDEX SUCCESS
	}, {
		key: "getByCategoryAndIndexSuccess",
		value: function getByCategoryAndIndexSuccess(data) {
			console.log(data);
			$(window).trigger("addCatIdx", {
				"data": data
			});
		}

		// GET BY CATEGORY AND INDEX FAIL
	}, {
		key: "getByCategoryAndIndexFail",
		value: function getByCategoryAndIndexFail(jqXhr) {
			// Handle multiple response formats, fallback to HTTP status code number.
			console.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
		}
	}]);

	return AppStore;
})();

exports["default"] = _alt2["default"].createStore(AppStore);
module.exports = exports["default"];

},{"../actions/AppActions":1,"../alt":2}],17:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],18:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],19:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],20:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))
},{"_process":17,"warning":35}],21:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],22:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],23:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    return history.createLocation(path, state, undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./Actions":18,"./DOMStateStorage":20,"./DOMUtils":21,"./ExecutionEnvironment":22,"./createDOMHistory":24,"_process":17,"invariant":34}],24:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./DOMUtils":21,"./ExecutionEnvironment":22,"./createHistory":25,"_process":17,"invariant":34}],25:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, null, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, null, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(path) {
    if (path == null || typeof path === 'string') return path;

    var pathname = path.pathname;
    var search = path.search;
    var hash = path.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(path) {
    return createPath(path);
  }

  function createLocation(path, state, action) {
    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];

    return _createLocation3['default'](path, state, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":18,"./AsyncUtils":19,"./createLocation":26,"./deprecate":27,"./parsePath":29,"./runTransitionHook":30,"deep-equal":31}],26:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';

  // TODO: Deprecate passing state directly into createLocation.
  state = location.state || state;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":18,"./parsePath":29}],27:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":17,"warning":35}],28:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],29:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./extractPath":28,"_process":17,"warning":35}],30:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":17,"warning":35}],31:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":32,"./lib/keys.js":33}],32:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],33:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],34:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))
},{"_process":17}],35:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))
},{"_process":17}]},{},[14]);
