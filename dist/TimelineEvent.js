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

var TimelineEvent = function (_Component) {
  _inherits(TimelineEvent, _Component);

  function TimelineEvent(props) {
    _classCallCheck(this, TimelineEvent);

    var _this = _possibleConstructorReturn(this, (TimelineEvent.__proto__ || Object.getPrototypeOf(TimelineEvent)).call(this, props));

    _this.state = { showContent: _this.props.showContent };
    _this.toggleContent = _this.toggleContent.bind(_this);
    return _this;
  }

  _createClass(TimelineEvent, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.showContent !== prevProps.showContent) {
        this.state({ showContent: this.props.showContent });
      }
    }
  }, {
    key: 'mergeNotificationStyle',
    value: function mergeNotificationStyle(iconColor, bubbleStyle, orientation) {
      var iconColorStyle = iconColor ? _extends({}, _styles2.default.eventType, { color: iconColor, borderColor: iconColor }) : _styles2.default.eventType;
      var leftOrRight = orientation === 'right' ? _extends({}, _styles2.default['eventType--right']) : _extends({}, _styles2.default['eventType--left']);
      return _extends({}, iconColorStyle, leftOrRight, bubbleStyle);
    }
  }, {
    key: 'mergeContentStyle',
    value: function mergeContentStyle(contentStyle) {
      var messageStyle = this.showAsCard() ? _styles2.default.cardBody : _styles2.default.message;
      return contentStyle ? _extends({}, messageStyle, contentStyle) : messageStyle;
    }
  }, {
    key: 'timeStyle',
    value: function timeStyle() {
      return this.showAsCard() ? _styles2.default.time : _extends({}, _styles2.default.time, { color: '#303e49' });
    }
  }, {
    key: 'showAsCard',
    value: function showAsCard() {
      var container = this.props.container;

      return container === 'card';
    }
  }, {
    key: 'containerStyle',
    value: function containerStyle() {
      var style = this.props.style;

      var containerStyle = _extends({}, _styles2.default.eventContainer, style);
      return this.showAsCard() ? _extends({}, _styles2.default.card, containerStyle) : containerStyle;
    }
  }, {
    key: 'toggleStyle',
    value: function toggleStyle() {
      var _props = this.props,
          container = _props.container,
          cardHeaderStyle = _props.cardHeaderStyle,
          collapsible = _props.collapsible;

      var messageStyle = container === 'card' ? _extends({}, _styles2.default.cardTitle, cardHeaderStyle) : {};
      return collapsible ? _extends({}, _styles2.default.toggleEnabled, messageStyle) : messageStyle;
    }
  }, {
    key: 'toggleContent',
    value: function toggleContent() {
      this.setState({ showContent: !this.state.showContent });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _props2 = this.props,
          collapsible = _props2.collapsible,
          contentStyle = _props2.contentStyle;

      return collapsible && this.state.showContent || !collapsible ? _react2.default.createElement(
        'div',
        { style: this.mergeContentStyle(contentStyle) },
        this.props.children,
        _react2.default.createElement('div', { style: _styles2.default.messageAfter })
      ) : _react2.default.createElement(
        'span',
        { style: { fontWeight: 500, fontSize: 16, cursor: 'pointer' }, onClick: this.toggleContent },
        '\u2026'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          createdAt = _props3.createdAt,
          title = _props3.title,
          subtitle = _props3.subtitle,
          iconStyle = _props3.iconStyle,
          bubbleStyle = _props3.bubbleStyle,
          buttons = _props3.buttons,
          icon = _props3.icon,
          iconColor = _props3.iconColor,
          titleStyle = _props3.titleStyle,
          subtitleStyle = _props3.subtitleStyle,
          orientation = _props3.orientation,
          collapsible = _props3.collapsible,
          otherProps = _objectWithoutProperties(_props3, ['createdAt', 'title', 'subtitle', 'iconStyle', 'bubbleStyle', 'buttons', 'icon', 'iconColor', 'titleStyle', 'subtitleStyle', 'orientation', 'collapsible']);

      var leftOrRightEventStyling = orientation === 'right' ? _extends({}, _styles2.default['event--right']) : _extends({}, _styles2.default['event--left']);
      var leftOrRightButtonStyling = orientation === 'left' ? _extends({}, _styles2.default['actionButtons--right']) : _extends({}, _styles2.default['actionButtons--left']);
      return _react2.default.createElement(
        'div',
        { style: _extends({}, _styles2.default.event, leftOrRightEventStyling) },
        _react2.default.createElement(
          'div',
          { style: this.mergeNotificationStyle(iconColor, bubbleStyle, orientation) },
          _react2.default.createElement(
            'span',
            { style: _extends({}, _styles2.default.materialIcons, iconStyle) },
            icon
          )
        ),
        _react2.default.createElement(
          'div',
          _extends({}, otherProps, { style: this.containerStyle() }),
          _react2.default.createElement('div', { style: _styles2.default.eventContainerBefore }),
          _react2.default.createElement(
            'div',
            { style: this.toggleStyle(), onClick: collapsible && this.toggleContent },
            createdAt && _react2.default.createElement(
              'div',
              { style: this.timeStyle() },
              createdAt
            ),
            _react2.default.createElement(
              'div',
              { style: titleStyle },
              title
            ),
            subtitle && _react2.default.createElement(
              'div',
              { style: _extends({}, _styles2.default.subtitle, subtitleStyle) },
              subtitle
            ),
            _react2.default.createElement(
              'div',
              { style: _extends({}, _styles2.default.actionButtons, leftOrRightButtonStyling) },
              buttons
            )
          ),
          this.props.children && this.renderChildren()
        ),
        _react2.default.createElement('div', { style: _styles2.default.eventAfter })
      );
    }
  }]);

  return TimelineEvent;
}(_react.Component);

TimelineEvent.propTypes = {
  title: _propTypes2.default.node.isRequired,
  subtitle: _propTypes2.default.node,
  createdAt: _propTypes2.default.node,
  children: _propTypes2.default.node,
  buttons: _propTypes2.default.node,
  container: _propTypes2.default.string,
  icon: _propTypes2.default.node,
  iconColor: _propTypes2.default.string,
  iconStyle: _propTypes2.default.object,
  bubbleStyle: _propTypes2.default.object,
  orientation: _propTypes2.default.string,
  contentStyle: _propTypes2.default.object,
  cardHeaderStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  titleStyle: _propTypes2.default.object,
  subtitleStyle: _propTypes2.default.object,
  collapsible: _propTypes2.default.bool,
  showContent: _propTypes2.default.bool
};

TimelineEvent.defaultProps = {
  createdAt: undefined,
  iconStyle: {},
  bubbleStyle: {},
  contentStyle: {},
  cardHeaderStyle: {},
  style: {},
  titleStyle: {},
  subtitleStyle: {},
  orientation: 'left',
  showContent: false
};

exports.default = TimelineEvent;