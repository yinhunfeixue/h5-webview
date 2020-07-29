import React from 'react';
import PageItem from './PageItem';
import PageManager from './PageManager';
import PageView, { IPageViewProps } from './PageView';

interface IPageView1State {}
interface IPageView1Props extends IPageViewProps {
  index: any;
}

/**
 * PageView1
 */
class PageView1 extends PageView<IPageView1Props, IPageView1State> {
  static defaultProps = {
    title: 'PageView1Title',
  };

  get disabledBack() {
    const index = this.props.index;
    return index % 3 !== 0;
  }

  get disableTouchBack() {
    const index = this.props.index;
    return index % 3 === 0;
  }

  get showHeader() {
    const index = this.props.index;
    return index % 3 === 0;
  }

  get extra() {
    const index = this.props.index;
    if (index % 3 === 0) {
      return <div>+</div>;
    }
    return null;
  }

  get title() {
    return `这里顶栏${this.props.index}`;
  }

  renderChildren() {
    const index = this.props.index;
    return (
      <div>
        窗口序号：{index}
        <br />
        <a
          onClick={() => {
            PageManager.openPage(
              new PageItem(PageView1, {
                index: index + 1,
              }),
            );
          }}
        >
          打开下一个窗口
        </a>
        <p> {this.showHeader ? '点击返回按钮可返回' : '向右拖动可返回'}</p>
      </div>
    );
  }
}

export default PageView1;
