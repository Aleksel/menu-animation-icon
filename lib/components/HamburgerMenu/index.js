function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import CommonMenu from './../Common';
/* eslint-disable import/no-extraneous-dependencies */

var _css = document.createElement('style');

_css.innerHTML = '.HamburgerMenu_item_active div:nth-child(1) {   transform: rotate(45deg) translate(12px, 12px); } .HamburgerMenu_item_active div:nth-child(2) {   visibility: hidden; } .HamburgerMenu_item_active div:nth-child(3) {   transform: rotate(-45deg) translate(15px, -16px); } '
document.head.appendChild(_css)

var HamburgerMenu = function (_CommonMenu) {
  _inherits(HamburgerMenu, _CommonMenu);

  function HamburgerMenu() {
    _classCallCheck(this, HamburgerMenu);

    return _possibleConstructorReturn(this, (HamburgerMenu.__proto__ || Object.getPrototypeOf(HamburgerMenu)).apply(this, arguments));
  }

  return HamburgerMenu;
}(CommonMenu);

export default HamburgerMenu;