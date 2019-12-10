"use strict";

exports.__esModule = true;
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  "root": "Cal__Time__root",
  "scrolling": "Cal__Time__scrolling",
  "timeItem": "Cal__Time__timeItem"
};

var Time = function (_PureComponent) {
  _inherits(Time, _PureComponent);

  function Time() {
    _classCallCheck(this, Time);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Time.prototype.render = function render() {
    var hasSelectedDay = this.props.hasSelectedDay;


    return hasSelectedDay && _react2.default.createElement(
      "div",
      { className: styles.root, key: "select-time" },
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "07:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "08:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "09:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "10:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "11:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "12:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "13:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "14:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "15:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "16:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "17:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "18:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "19:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "20:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "21:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "22:00"
      ),
      _react2.default.createElement(
        "span",
        { className: styles.timeItem },
        "23:00"
      )
    );
  };

  return Time;
}(_react.PureComponent);

exports.default = Time;
module.exports = exports["default"];