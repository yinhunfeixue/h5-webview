"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PageView = _interopRequireDefault(require("@/PageView"));

var _react = _interopRequireWildcard(require("react"));

require("./Page.less");

var _Toucher = _interopRequireDefault(require("./Toucher"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var classnames = require('classnames');
/**
 * 弹出式页面
 */


var Page = /*#__PURE__*/function (_Component) {
  _inherits(Page, _Component);

  var _super = _createSuper(Page);

  function Page() {
    var _this;

    _classCallCheck(this, Page);

    _this = _super.apply(this, arguments);
    _this._show = true;
    _this._touchX = 0;
    _this._closeTouchX = 80;
    _this._touching = false;
    return _this;
  }
  /**
   * 页头样式名
   */


  _createClass(Page, [{
    key: "renderPageView",

    /**
     * 渲染头部，默认的头部包含3部分：返回按钮、标题、右侧扩展区
     *
     * 通常可使用参数按钮这部分的内容，如果默认结构无法满足需求，可重写此方法以完全自定义头部
     *
     * 重写时唯一要注意的地方是：关闭页面的需调用 this.close();
     */
    value: function renderPageView() {
      var _this2 = this;

      var title = this.title,
          extra = this.extra,
          disabledBack = this.disabledBack,
          headerClassName = this.headerClassName,
          headerStyle = this.headerStyle,
          className = this.className,
          style = this.style,
          hideHeader = this.hideHeader;
      return /*#__PURE__*/_react.default.createElement(_PageView.default, {
        title: title,
        extra: extra,
        hideHeader: hideHeader,
        headerStyle: headerStyle,
        className: className,
        style: style,
        headerClassName: headerClassName,
        onBack: disabledBack ? undefined : function () {
          return _this2.close();
        }
      }, this.renderChildren());
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      return null;
    }
    /**
     * 关闭页面
     */

  }, {
    key: "close",
    value: function close() {
      if (this._show) {
        this._show = false;
        this.forceUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _closeTouchX = this._closeTouchX;
      var disableTouchBack = this.disableTouchBack;
      var _this$props = this.props,
          close = _this$props.close,
          className = _this$props.className;
      var style = {
        transform: "translateX(".concat(this._touchX, "px)")
      };
      var bgStyle = {
        opacity: Math.min(1, 0.2 + Math.max(0, (_closeTouchX - this._touchX) / _closeTouchX))
      };

      if (this._touching) {
        style.transition = 'none';
        bgStyle.transition = 'none';
      }

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: classnames('PageBg', this._show ? '' : 'PageBgClose', className),
        style: bgStyle
      }), /*#__PURE__*/_react.default.createElement(_Toucher.default, {
        onTouching: function onTouching(x) {
          if (!disableTouchBack) {
            _this3._touching = true;
            _this3._touchX = Math.max(0, x);

            _this3.forceUpdate();
          }
        },
        validateStartTouch: function validateStartTouch(x) {
          return x < 80;
        },
        onTouch: function onTouch(h, v, x, y) {
          if (!disableTouchBack) {
            _this3._touching = false;

            if (x > _closeTouchX) {
              _this3.close();
            } else {
              _this3._touchX = 0;
            }

            _this3.forceUpdate();
          }
        },
        className: classnames('Page', this.className, this._show ? '' : 'PageClose'),
        onAnimationEnd: function onAnimationEnd() {
          if (!_this3._show && close) {
            close();
          }
        },
        style: style
      }, this.renderPageView()));
    }
  }, {
    key: "headerClassName",
    get: function get() {
      return '';
    }
    /**
     * 页头内联样式
     */

  }, {
    key: "headerStyle",
    get: function get() {
      return {};
    }
    /**
     * 样式名
     */

  }, {
    key: "className",
    get: function get() {
      return '';
    }
    /**
     * 内联样式
     */

  }, {
    key: "style",
    get: function get() {
      return {};
    }
    /**
     * 标题
     */

  }, {
    key: "title",
    get: function get() {
      return '';
    }
    /**
     * 是否隐藏头部
     */

  }, {
    key: "hideHeader",
    get: function get() {
      return false;
    }
    /**
     * 是否禁用返回按钮
     */

  }, {
    key: "disabledBack",
    get: function get() {
      return false;
    }
    /**
     * 是否禁用触摸返回
     */

  }, {
    key: "disableTouchBack",
    get: function get() {
      return false;
    }
    /**
     * 额外的内容，显示在头部右侧
     */

  }, {
    key: "extra",
    get: function get() {
      return null;
    }
  }]);

  return Page;
}(_react.Component);

var _default = Page;
exports.default = _default;