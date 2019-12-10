'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var forceUpdateContext = _react2.default.createContext({
  forceUpdate: false,
  doForceUpdate: function doForceUpdate() {}
});

exports.default = forceUpdateContext;
module.exports = exports['default'];