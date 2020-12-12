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

import Page from '@/Page';

var PageWrap = /*#__PURE__*/function (_Page) {
  _inherits(PageWrap, _Page);

  var _super = _createSuper(PageWrap);

  function PageWrap() {
    _classCallCheck(this, PageWrap);

    return _super.apply(this, arguments);
  }

  _createClass(PageWrap, [{
    key: "renderChildren",
    value: function renderChildren() {
      return this.props.children;
    }
  }, {
    key: "headerClassName",

    /**
     * 页头样式名
     */
    get: function get() {
      return this.props.headerClassName || '';
    }
    /**
     * 页头内联样式
     */

  }, {
    key: "headerStyle",
    get: function get() {
      return this.props.headerStyle || {};
    }
    /**
     * 样式名
     */

  }, {
    key: "className",
    get: function get() {
      return this.props.className || '';
    }
    /**
     * 内联样式
     */

  }, {
    key: "style",
    get: function get() {
      return this.props.style || {};
    }
    /**
     * 标题
     */

  }, {
    key: "title",
    get: function get() {
      return this.props.title || '';
    }
    /**
     * 是否隐藏头部
     */

  }, {
    key: "hideHeader",
    get: function get() {
      return Boolean(this.props.hideHeader);
    }
    /**
     * 是否禁用返回按钮
     */

  }, {
    key: "disabledBack",
    get: function get() {
      return Boolean(this.props.disabledBack);
    }
    /**
     * 是否禁用触摸返回
     */

  }, {
    key: "disableTouchBack",
    get: function get() {
      return Boolean(this.props.disableTouchBack);
    }
    /**
     * 额外的内容，显示在头部右侧
     */

  }, {
    key: "extra",
    get: function get() {
      return this.props.extra;
    }
  }]);

  return PageWrap;
}(Page);

export default PageWrap;