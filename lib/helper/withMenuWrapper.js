var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { BentoMenu, DonerMenu, HamburgerMenu, KebabMenu, MeatballMenu } from './../index';

function withMenuWrapper(BaseComponent) {
    var MenuWrapper = function (_React$Component) {
        _inherits(MenuWrapper, _React$Component);

        function MenuWrapper() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, MenuWrapper);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuWrapper.__proto__ || Object.getPrototypeOf(MenuWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                active: false
            }, _this.onClick = function (isActive) {
                var onClick = _this.props.onClick;
                // eslint-disable-next-line no-unused-expressions

                onClick && onClick(isActive);
                _this.setState({ active: isActive });
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(MenuWrapper, [{
            key: 'render',
            value: function render() {
                var _props = this.props,
                    onClick = _props.onClick,
                    restProps = _objectWithoutProperties(_props, ['onClick']);

                var active = this.state.active;

                return React.createElement(BaseComponent, _extends({ active: active, onClick: this.onClick }, restProps));
            }
        }]);

        return MenuWrapper;
    }(React.Component);

    MenuWrapper.propTypes = {
        onClick: PropTypes.func
    };
    MenuWrapper.defaultProps = {
        onClick: function onClick() {}
    };


    return MenuWrapper;
}

export var HamburgerMenuWrapper = withMenuWrapper(HamburgerMenu);
export var DonerMenuWrapper = withMenuWrapper(DonerMenu);
export var BentoMenuWrapper = withMenuWrapper(BentoMenu);
export var KebabMenuWrapper = withMenuWrapper(KebabMenu);
export var MeatballMenuWrapper = withMenuWrapper(MeatballMenu);