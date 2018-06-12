function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import CommonMenu from './../Common';
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/first
import React from 'react';
import './styles.styl';

var KebabMenu = function (_CommonMenu) {
    _inherits(KebabMenu, _CommonMenu);

    function KebabMenu() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, KebabMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = KebabMenu.__proto__ || Object.getPrototypeOf(KebabMenu)).call.apply(_ref, [this].concat(args))), _this), _this.renderLines = function (className, styleLine) {
            return Array.from(Array(5).keys()).map(function (index) {
                return React.createElement('div', { key: index, className: 'CommonMenu_circle ' + className + '_circle', style: styleLine });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return KebabMenu;
}(CommonMenu);

export default KebabMenu;