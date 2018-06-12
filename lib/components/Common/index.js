'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.styl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var CommonMenu = function (_React$Component) {
    (0, _inherits3.default)(CommonMenu, _React$Component);

    function CommonMenu() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CommonMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CommonMenu.__proto__ || (0, _getPrototypeOf2.default)(CommonMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            hover: false
        }, _this.onClick = function () {
            var _this$props = _this.props,
                active = _this$props.active,
                onClick = _this$props.onClick;

            onClick(!active);
        }, _this.onMouseEnter = function () {
            return _this.setState({ hover: true });
        }, _this.onMouseLeave = function () {
            return _this.setState({ hover: false });
        }, _this.renderLines = function (className, styleLine) {
            return [_react2.default.createElement('div', { className: 'CommonMenu_line ' + className + '_line', style: styleLine }), _react2.default.createElement('div', { className: 'CommonMenu_line ' + className + '_line', style: styleLine }), _react2.default.createElement('div', { className: 'CommonMenu_line ' + className + '_line', style: styleLine })];
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CommonMenu, [{
        key: 'render',
        value: function render() {
            var className = this.constructor.name;
            var _props = this.props,
                active = _props.active,
                color = _props.color,
                activeClass = _props.activeClass,
                hoverClass = _props.hoverClass;
            var hover = this.state.hover;

            var styleLine = { backgroundColor: color };
            return _react2.default.createElement(
                'div',
                {
                    className: 'CommonMenu ' + className + ' ' + (hover ? hoverClass : '') + ' ' + (active ? activeClass : ''),
                    onClick: this.onClick,
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    role: 'menu'
                },
                _react2.default.createElement(
                    'div',
                    { className: 'CommonMenu_wrapper ' + className + '_wrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'CommonMenu_item ' + className + '_item ' + (active ? className + '_item_active' : '') },
                        this.renderLines(className, styleLine)
                    )
                )
            );
        }
    }]);
    return CommonMenu;
}(_react2.default.Component);

CommonMenu.propTypes = {
    active: _propTypes2.default.bool,
    color: _propTypes2.default.string,
    activeClass: _propTypes2.default.string,
    hoverClass: _propTypes2.default.string,
    onClick: _propTypes2.default.func
};
CommonMenu.defaultProps = {
    active: false,
    color: '#555',
    activeClass: '',
    hoverClass: '',
    onClick: function onClick() {}
};
exports.default = CommonMenu;