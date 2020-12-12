# 概述

## `npm install h5-webview`

## 功能介绍

仿原生 APP 的页面组件、页面管理器

包含以下两部分

1. 显示元素
   - PageHeader
   * PageView
   - Page
   * PageWrap
2. 管理器
   - PageManager

## 快速上手

```ts
const pageItem = {
  classType: YourPageExtendsPage,
  props: {},
};
// 打开页面
PageManager.openPage(pageItem);

// 在任意位置关闭页面
PageManager.closePage(pageItem);

// 在页面内部关闭
this.close();
```

## 显示组件

本章节介绍几种显示组件的：区别、不同需求如何选择正确的组件

### 区别

- PageHeader--页头，和普通组件一样使用
- PageView--具有页面外观的组件，和普通组件一样使用

* Page--弹出式页面组件**基类**，除具有 PageView 的外观，还有滑动触发返回、页面底色等功能。

- PageWrap--一个通用弹出页面组件，用于包裹其它组件以形成弹出页面外观。

### 如何选择正确的组件？

通过两个问题帮助你选择正确的组件

#### 问题 1，以下哪个描述更符合你的需求?

A：一个页面外观的元素，用于嵌入在当前内容中

**_选择 PageView_**

B：全屏的弹出页面

**_进行下一个问题_**

#### 问题 2, 以下哪个描述更符合你的需求?

A: 需要一个完整的页面组件，页面属性（例如标题，样式）会根据组件内部数据变化

**_继承 `Page`，实现业务页面_**

```ts
class MyPage extends Page{
  get title(){
    return this.data.***
  }

  // ...和title一样，重写其它页面属性

  renderChildren(){
    return <div>页面内容</div>
  }
}

```

B: 组件在在多场景下合适，仅某些场景需要用页面的形式展示

**_使用`PageWrap`包裹其它组件_**

```ts
PageManager.openPageWrap({
  children: <YourComponent />,
  title: '页面标题',
  // 其它页面props属性
});
```
