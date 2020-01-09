'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _common = require('@monokao/common');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React from 'react'


var Monokao = function (_Component) {
  _inherits(Monokao, _Component);

  function Monokao(props) {
    _classCallCheck(this, Monokao);

    var _this = _possibleConstructorReturn(this, (Monokao.__proto__ || Object.getPrototypeOf(Monokao)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Monokao, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'h5',
          null,
          'Brought to you by monospacee'
        ),
        _react2.default.createElement(
          'span',
          null,
          'This is packages/react'
        ),
        _react2.default.createElement(
          'span',
          null,
          'This is to test version'
        ),
        _react2.default.createElement(_common2.default, { text: this.props.text })
      );
    }
  }]);

  return Monokao;
}(_react.Component);

// const Monokao = ({ text = '' }) => (
//   <div>
//     <span>{`This is so Fancy✨✨✨ ${text}`}</span>
//   </div>
// )

exports.default = Monokao;
