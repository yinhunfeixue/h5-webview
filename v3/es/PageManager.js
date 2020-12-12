function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import PageWrap from '@/PageWrap';
import React from 'react';
import ReactDOM from 'react-dom';
/**
 * ## 页面管理器
 *
 * @example
 * ```
 * import React from 'react';
 * import PageManager, { PageItem, PageView } from 'h5-webview';
 * const App: React.FC = () => {
 *   return (
 *     <div>
 *       <button onClick={() => {
 *         PageManager.openPage(new PageItem(PageView, { index: 1 }));
 *       }}>弹出</button>
 *     </div>
 *   );
 * }
 * ```
 */

var PageManager = /*#__PURE__*/function () {
  function PageManager() {
    _classCallCheck(this, PageManager);
  }

  _createClass(PageManager, null, [{
    key: "openPage",

    /**
     * 打开新页面
     * @param pageItem 页面数据，如需手动关闭页面，可把此参数传入`PageManagerclosePage(pageItem)`
     * @param replaceSameType 是否替换同类型的页面
     */
    value: function openPage(pageItem) {
      var replaceSameType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // 如果使用已存在的页面，在_pageList查找是否存在同类型的项
      var oldItem = replaceSameType ? this._getItemByClassType(pageItem.classType) : null; // 如果查找到旧数据，则移除旧数据

      if (oldItem) {
        this.removePage(oldItem);
      } // 添加新数据；同时把容器关联到新数据上


      var container = document.createElement('div');
      container.className = 'PageContainer';

      this._pageList.push(pageItem);

      this._linkItemAndContainer(pageItem, container);

      this._updateRender();
    }
    /**
     * 打开PageWrap
     * @param props
     */

  }, {
    key: "openPageWrap",
    value: function openPageWrap(props) {
      var pageItem = {
        classType: PageWrap,
        props: props
      };
      PageManager.openPage(pageItem);
      return pageItem;
    }
    /**
     * 关闭页面
     * @param pageItem 要关闭的PageItem实例
     */

  }, {
    key: "closePage",
    value: function closePage(pageItem) {
      this.removePage(pageItem);

      this._updateRender();
    }
  }, {
    key: "removePage",
    value: function removePage(item) {
      // 移除数据
      this._removeItem(item); // 移除容器


      var container = this._getContainerByData(item);

      if (container) {
        this._containerDic.delete(item);

        ReactDOM.unmountComponentAtNode(container);

        if (this.root.contains(container)) {
          this.root.removeChild(container);
        }
      }
    }
  }, {
    key: "_updateRender",
    value: function _updateRender() {
      var _this = this;

      //从第0项开始循环，如果是最后两项，则先移除container，再添加；否则进行移除操作
      var len = this._pageList.length;

      var _loop = function _loop(i) {
        var item = _this._pageList[i];

        var container = _this._getContainerByData(item);

        if (container) {
          if (_this.root.contains(container)) {
            _this.root.removeChild(container);
          }

          container.removeAttribute('isNew');

          if (i >= len - 2) {
            // 如果无子元素，加上new标记
            if (container.childElementCount === 0) {
              container.setAttribute('isNew', 'true');
              ReactDOM.render( /*#__PURE__*/React.createElement(item.classType, Object.assign({}, item.props, {
                close: function close() {
                  _this.closePage(item);
                }
              })), container);
            }

            _this.root.appendChild(container);
          }
        }
      };

      for (var i = 0; i < len; i++) {
        _loop(i);
      }
    }
  }, {
    key: "_getContainerByData",
    value: function _getContainerByData(data) {
      return this._containerDic.get(data);
    }
  }, {
    key: "_getItemByClassType",
    value: function _getItemByClassType(classType) {
      for (var i = 0; i < this._pageList.length; i++) {
        var item = this._pageList[i];

        if (item.classType === classType) {
          return item;
        }
      }

      return null;
    }
  }, {
    key: "_removeItem",
    value: function _removeItem(item) {
      var index = this._pageList.indexOf(item);

      if (index >= 0) {
        this._pageList.splice(index, 1);
      }
    }
  }, {
    key: "_linkItemAndContainer",
    value: function _linkItemAndContainer(item, container) {
      this._containerDic.set(item, container);
    }
  }, {
    key: "root",
    get: function get() {
      return document.body;
    }
  }]);

  return PageManager;
}();

PageManager._pageList = [];
PageManager._containerDic = new Map();
export default PageManager;