function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
export var IDirection;

(function (IDirection) {
  IDirection[IDirection["NONE"] = 0] = "NONE";
  IDirection[IDirection["TO_TOP"] = 1] = "TO_TOP";
  IDirection[IDirection["TO_BOTTOM"] = 2] = "TO_BOTTOM";
  IDirection[IDirection["TO_LEFT"] = 3] = "TO_LEFT";
  IDirection[IDirection["TO_RIGHT"] = 4] = "TO_RIGHT";
})(IDirection || (IDirection = {}));
/**
 * Toucher
 */


var Toucher = /*#__PURE__*/function (_Component) {
  _inherits(Toucher, _Component);

  var _super = _createSuper(Toucher);

  function Toucher() {
    var _this;

    _classCallCheck(this, Toucher);

    _this = _super.apply(this, arguments);
    _this._startX = 0;
    _this._startY = 0;
    _this._touching = false;
    return _this;
  }

  _createClass(Toucher, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          effectDistance = _this$props.effectDistance,
          onTouch = _this$props.onTouch,
          className = _this$props.className,
          style = _this$props.style,
          onTouching = _this$props.onTouching,
          validateStartTouch = _this$props.validateStartTouch;
      var otherProps = Object.assign({}, this.props);
      delete otherProps.onTouch;
      delete otherProps.onTouching;
      delete otherProps.validateStartTouch;
      return /*#__PURE__*/React.createElement("div", Object.assign({
        className: className,
        style: style,
        onTouchStart: function onTouchStart(event) {
          var x = event.touches[0].pageX;
          var y = event.touches[0].pageY;
          var touchEnable = validateStartTouch ? validateStartTouch(x, y) : true;

          if (touchEnable) {
            event.stopPropagation();
            _this2._touching = true;
            _this2._startX = event.touches[0].pageX;
            _this2._startY = event.touches[0].pageY;
          }
        },
        onTouchMove: function onTouchMove(event) {
          if (!_this2._touching) {
            return;
          }

          event.stopPropagation();

          if (onTouching) {
            var touch = event.changedTouches[0];
            var currentX = touch.pageX;
            var currentY = touch.pageY;
            var x = currentX - _this2._startX;
            var y = currentY - _this2._startY;
            onTouching(x, y);
          }
        },
        onTouchEnd: function onTouchEnd(event) {
          if (!_this2._touching) {
            return;
          }

          event.stopPropagation();
          _this2._touching = false;
          var touch = event.changedTouches[0];
          var currentX = touch.pageX;
          var currentY = touch.pageY;
          var distance = effectDistance || 50;
          var horizontal = IDirection.NONE;
          var horDistance = currentX - _this2._startX;

          if (horDistance > distance) {
            horizontal = IDirection.TO_RIGHT;
          } else if (horDistance < -distance) {
            horizontal = IDirection.TO_LEFT;
          }

          var vertical = IDirection.NONE;
          var verDistance = currentY - _this2._startY;

          if (verDistance > distance) {
            vertical = IDirection.TO_BOTTOM;
          } else if (verDistance < -distance) {
            vertical = IDirection.TO_TOP;
          }

          var x = currentX - _this2._startX;
          var y = currentY - _this2._startY;

          if (onTouch) {
            onTouch(horizontal, vertical, x, y);
          }
        }
      }, otherProps), children);
    }
  }]);

  return Toucher;
}(Component);

export default Toucher;