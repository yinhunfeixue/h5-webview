##  `npm install h5-webview`

homepage: https://github.com/yinhunfeixue/h5-webview 

## 简介
h5-webview是一个仿原生view管理机制的组件库，包含view管理和view两部分
![Image text](./readme/demo.gif)

## 用法

### 基本用法
本示例介绍了PageManager(view管理器的用法)
```
import React from 'react';
import PageManager, { PageItem, PageView } from 'h5-webview';
const App: React.FC = () => {
  return (
    <div>
      <button onClick={() => {
        PageManager.openPage(new PageItem(PageView, { index: 1 }));
      }}>弹出</button>
    </div>
  );
}
```

### 自定义PageView类型

重点：本示例介绍了创建**自定义页面**结合**页面管理**的用法

一般情况下，都需要按此示例使用

```
import React from 'react';
import PageManager, { PageItem, PageView, IPageViewProps } from 'h5-webview';

const App: React.FC = () => {
  return (
    <div>
      <button onClick={() => {
        PageManager.openPage(new PageItem(PageView1, { index: 1 }));
      }}>弹出</button>
    </div>
  );
}

interface IPageView1State { }
interface IPageView1Props extends IPageViewProps {
  index: any;
}

class PageView1 extends PageView<IPageView1Props, IPageView1State> {
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
        <button
          onClick={() => {
            PageManager.openPage(
              new PageItem(PageView1, {
                index: index + 1,
              }),
            );
          }}
        >
          打开下一个窗口
        </button>
        <p> {this.showHeader ? '点击返回按钮可返回' : '向右拖动可返回'}</p>
      </div>
    );
  }
}

export default App;
```


## API

+ ###  PageManager

```
 /**
   * 打开新页面
   * @param pageItem 页面数据 
   * @param replaceSameType 是否替换同类型的页面
   */
  public static openPage(pageItem: PageItem, replaceSameType: boolean = false) 

  /**
   * 手动关闭页面
   * @param pageItem 要关闭的PageItem实例
   */
  public static closePage(pageItem: PageItem)
```

+ ### PageView
```
  /**
   * 头部样式名，其中：
   * + .className i 对应返回按钮
   * + .className h1 对应标题栏
   */
  get headerClassName(): string

  /**
   * 标题
   */
  get title(): ReactNode

  /**
   * 是否显示头部
   */
  get showHeader(): boolean

  /**
   * 是否禁用返回按钮
   */
  get disabledBack(): boolean

  /**
   * 是否禁用触摸返回
   */
  get disableTouchBack(): boolean

  /**
   * 额外的内容，显示在头部右侧
   */
  get extra(): ReactNode

  /**
   * 渲染头部，默认的头部包含3部分：返回按钮、标题、右侧扩展区
   *
   * 通常可使用参数按钮这部分的内容，如果默认结构无法满足需求，可重写此方法以完全自定义头部
   *
   * 重写时唯一要注意的地方是：关闭页面的需调用 this.close();
   */
  protected renderHeader(): ReactNode

  /**
   * 渲染内容区
   */
  protected renderChildren(): ReactNode
```

+ ### PageItem
```
 /**
   * 实例化PageItem
   * @param classType 页面类型，一般是继承自PageView的类
   * @param props 要传入的props
   */
  constructor(classType: any, props?: any) 
  ```