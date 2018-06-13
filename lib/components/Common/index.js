var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

var _css = document.createElement('style');

_css.innerHTML = '.CommonMenu {   max-width: 700px;   margin: 8em auto 2em;   display: -ms-flexbox;   display: flex;   -ms-flex-wrap: wrap;       flex-wrap: wrap;   -ms-flex-pack: center;       justify-content: center; } .CommonMenu_wrapper {   display: -ms-flexbox;   display: flex;   -ms-flex-direction: column;       flex-direction: column;   -ms-flex-pack: center;       justify-content: center;   -ms-flex-align: center;       align-items: center;   -ms-flex: 1;       flex: 1; } .CommonMenu_wrapper > div {   width: 60px;   height: 60px;   padding: 20px;   display: -ms-flexbox;   display: flex;   -ms-flex-wrap: wrap;       flex-wrap: wrap;   -ms-flex-pack: center;       justify-content: center;   -ms-flex-align: center;       align-items: center;   cursor: pointer; } .CommonMenu_wrapper > div:hover, .CommonMenu_wrapper > div:focus {   outline: none; } .CommonMenu_wrapper > span {   display: inline-block;   text-align: center;   line-height: 1.2;   padding: 20px;   margin-top: auto; } .CommonMenu_box, .CommonMenu_line {   transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275); } .CommonMenu_line {   height: 8px;   width: 45px;   background: #fff;   margin: 5px auto; } .CommonMenu_box {   width: 10px;   height: 10px;   background: #fff;   margin: 3px 3px;   display: inline-block; } .CommonMenu_circle {   width: 12px;   height: 12px;   margin: 3px;   background: #fff;   border-radius: 50%;   display: block; } '
document.head.appendChild(_css)

var CommonMenu = function (_React$Component) {
    _inherits(CommonMenu, _React$Component);

    function CommonMenu() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CommonMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommonMenu.__proto__ || Object.getPrototypeOf(CommonMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
            return Array.from(Array(3).keys()).map(function (index) {
                return React.createElement('div', { key: index, className: 'CommonMenu_line ' + className + '_line', style: styleLine });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CommonMenu, [{
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
            return React.createElement(
                'div',
                {
                    className: 'CommonMenu ' + className + ' ' + (hover ? hoverClass : '') + ' ' + (active ? activeClass : ''),
                    onClick: this.onClick,
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    role: 'menu'
                },
                React.createElement(
                    'div',
                    { className: 'CommonMenu_wrapper ' + className + '_wrapper' },
                    React.createElement(
                        'div',
                        { className: 'CommonMenu_item ' + className + '_item ' + (active ? className + '_item_active' : '') },
                        this.renderLines(className, styleLine)
                    )
                )
            );
        }
    }]);

    return CommonMenu;
}(React.Component);

CommonMenu.propTypes = {
    active: PropTypes.bool,
    color: PropTypes.string,
    activeClass: PropTypes.string,
    hoverClass: PropTypes.string,
    onClick: PropTypes.func
};
CommonMenu.defaultProps = {
    active: false,
    color: '#555',
    activeClass: '',
    hoverClass: '',
    onClick: function onClick() {}
};
export default CommonMenu;