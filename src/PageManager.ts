import React from 'react';
import ReactDOM from 'react-dom';
import PageItem from './PageItem';

/**
 * 页面管理器
 */
class PageManager {
  private static _pageList: PageItem[] = [];

  private static _containerDic: Map<PageItem, HTMLElement> = new Map();

  /**
   * 打开新页面
   * @param pageItem 页面数据 
   * @param replaceSameType 是否替换同类型的页面
   */
  public static openPage(pageItem: PageItem, replaceSameType: boolean = false) {
    // 如果使用已存在的页面，在_pageList查找是否存在同类型的项

    let oldItem = replaceSameType
      ? this._getItemByClassType(pageItem.classType)
      : null;
    // 如果查找到旧数据，则移除旧数据
    if (oldItem) {
      this.removePage(oldItem);
    }

    // 添加新数据；同时把容器关联到新数据上
    let container: HTMLElement = document.createElement('div');
    container.className = 'PageContainer';
    this._pageList.push(pageItem);
    this._linkItemAndContainer(pageItem, container);
    this._updateRender();
  }

  /**
   * 手动关闭页面
   * @param pageItem 要关闭的PageItem实例
   */
  public static closePage(pageItem: PageItem) {
    this.removePage(pageItem);
    this._updateRender();
  }

  private static removePage(item: PageItem) {
    // 移除数据
    this._removeItem(item);
    // 移除容器
    const container = this._getContainerByData(item);
    if (container) {
      this._containerDic.delete(item);
      ReactDOM.unmountComponentAtNode(container);
      if (this.root.contains(container)) {
        this.root.removeChild(container);
      }
    }
  }

  private static _updateRender() {
    //从第0项开始循环，如果是最后两项，则先移除container，再添加；否则进行移除操作
    const len = this._pageList.length;
    for (let i = 0; i < len; i++) {
      const item = this._pageList[i];
      const container = this._getContainerByData(item);
      if (container) {
        if (this.root.contains(container)) {
          this.root.removeChild(container);
        }
        container.removeAttribute('isNew');
        if (i >= len - 2) {
          // 如果无子元素，加上new标记
          if (container.childElementCount === 0) {
            container.setAttribute('isNew', 'true');
            ReactDOM.render(
              React.createElement(
                item.classType,
                Object.assign({}, item.props, {
                  close: () => {
                    this.closePage(item);
                  }
                })
              ),
              container
            );
          }
          this.root.appendChild(container);
        }
      }
    }
  }

  private static _getContainerByData(data: PageItem): HTMLElement | undefined {
    return this._containerDic.get(data);
  }

  private static _getItemByClassType(classType: any) {
    for (let i = 0; i < this._pageList.length; i++) {
      const item = this._pageList[i];
      if (item.classType === classType) {
        return item;
      }
    }
    return null;
  }

  private static _removeItem(item: PageItem) {
    const index = this._pageList.indexOf(item);
    if (index >= 0) {
      this._pageList.splice(index, 1);
    }
  }

  private static _linkItemAndContainer(item: PageItem, container: HTMLElement) {
    this._containerDic.set(item, container);
  }

  private static get root(): HTMLElement {
    return document.body;
  }
}

export default PageManager;
