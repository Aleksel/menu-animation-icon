function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import CommonMenu from './../Common';
/* eslint-disable import/no-extraneous-dependencies */

var _css = document.createElement('style');

_css.innerHTML = '.DonerMenu_item {   -ms-flex-direction: column;       flex-direction: column; } .DonerMenu_item div:nth-child(2) {   width: 32px; } .DonerMenu_item div:nth-child(3) {   width: 20px; } .DonerMenu_item_active div:nth-child(1) {   transform: rotate(45deg) translate(12px, 12px); } .DonerMenu_item_active div:nth-child(2) {   width: 20px;   transform: rotate(-45deg) translate(-12px, -1.5px); } .DonerMenu_item_active div:nth-child(3) {   transform: rotate(-45deg) translate(25px, -14px); } '
document.head.appendChild(_css)

var DonerMenu = function (_CommonMenu) {
  _inherits(DonerMenu, _CommonMenu);

  function DonerMenu() {
    _classCallCheck(this, DonerMenu);

    return _possibleConstructorReturn(this, (DonerMenu.__proto__ || Object.getPrototypeOf(DonerMenu)).apply(this, arguments));
  }

  return DonerMenu;
}(CommonMenu);

export default DonerMenu;