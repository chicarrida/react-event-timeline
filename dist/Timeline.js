'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timeline = function (_Component) {
  _inherits(Timeline, _Component);

  function Timeline() {
    _classCallCheck(this, Timeline);

    return _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).apply(this, arguments));
  }

  _createClass(Timeline, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$orientation = _props.orientation,
          orientation = _props$orientation === undefined ? 'left' : _props$orientation,
          children = _props.children,
          lineColor = _props.lineColor,
          lineStyle = _props.lineStyle,
          style = _props.style,
          otherProps = _objectWithoutProperties(_props, ['orientation', 'children', 'lineColor', 'lineStyle', 'style']);

      var childrenWithProps = _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, { orientation: orientation });
      });
      var leftOrRight = orientation === 'right' ? _extends({}, _styles2.default['containerBefore--right']) : _extends({}, _styles2.default['containerBefore--left']);
      var lineAppearance = _extends({}, leftOrRight, lineStyle);
      lineAppearance = lineColor ? _extends({}, lineAppearance, { background: lineColor }) : lineAppearance;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'section',
          _extends({ style: _extends({}, _styles2.default.container, style) }, otherProps),
          _react2.default.createElement('div', { style: _extends({}, _styles2.default.containerBefore, lineAppearance) }),
          childrenWithProps,
          _react2.default.createElement('div', { style: _styles2.default.containerAfter })
        )
      );
    }
  }]);

  return Timeline;
}(_react.Component);

Timeline.propTypes = {
  children: _propTypes2.default.node.isRequired,
  orientation: _propTypes2.default.string,
  style: _propTypes2.default.object,
  lineColor: _propTypes2.default.string,
  lineStyle: _propTypes2.default.object
};

Timeline.defaultProps = {
  style: {},
  lineStyle: {}
};

exports.default = Timeline;