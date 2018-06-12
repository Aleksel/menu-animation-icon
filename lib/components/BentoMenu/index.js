'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Common = require('./../Common');

var _Common2 = _interopRequireDefault(_Common);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.styl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/first
var BentoMenu = function (_CommonMenu) {
    (0, _inherits3.default)(BentoMenu, _CommonMenu);

    function BentoMenu() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, BentoMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BentoMenu.__proto__ || (0, _getPrototypeOf2.default)(BentoMenu)).call.apply(_ref, [this].concat(args))), _this), _this.renderLines = function (className, styleLine) {
            return [_react2.default.createElement('div', { className: 'CommonMenu_box ' + className + '_box', style: styleLine }), _react2.default.createElement('div', { className: 'CommonMenu_box ' + className + '_box', style: styleLine }), _react2.default.createElement('div', { className: 'CommonMenu_box ' + className + '_box', style: styleLine }), _react2.default.createElement('div', { className: 'CommonMenu_box ' + className + '_box', style: styleLine }), _react2.default.createElement('div', { className: 'CommonMenu_box ' + className + '_box', style: styleLine }), _react2.default.createElement('div', { className: 'CommonMenu_box ' + className + '_box', style: styleLine }), _react2.default.createElement('div', { className: 'CommonMenu_box ' + className + '_box', style: styleLine }), _react2.default.createElement('div', { className: 'CommonMenu_box ' + className + '_box', style: styleLine }), _react2.default.createElement('div', { className: 'CommonMenu_box ' + className + '_box', style: styleLine })];
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return BentoMenu;
}(_Common2.default);

exports.default = BentoMenu;