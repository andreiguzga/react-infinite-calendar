function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from "react";
var styles = {
  "root": "Cal__Time__root",
  "scrolling": "Cal__Time__scrolling",
  "timeItem": "Cal__Time__timeItem"
};

var Time = function (_Component) {
  _inherits(Time, _Component);

  function Time(props) {
    _classCallCheck(this, Time);

    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));

    _this.state = {
      availableTimes: props.availableTimes
    };
    return _this;
  }

  Time.prototype.renderTimes = function renderTimes() {
    var timeRows = [];
    var availableTimes = this.state.availableTimes;


    if (availableTimes.length > 0) {
      for (var i = 0, len = availableTimes.length; i < len; i++) {
        var time = availableTimes[i];
        timeRows[i] = React.createElement(
          "span",
          { key: "time-" + i, className: styles.timeItem },
          time
        );
      }
    }

    return timeRows;
  };

  Time.prototype.render = function render() {
    var hasSelectedDay = this.props.hasSelectedDay;


    return hasSelectedDay && React.createElement(
      "div",
      { className: styles.root, key: "select-time" },
      this.renderTimes()
    );
  };

  return Time;
}(Component);

export { Time as default };