# PageWrap

**Page 组件的通用版**，区别在于

1. 设计用处不同

   - Page 的作用是--做为业务页面的基类
   - PageWrap 的作用是--包裹其它任意显示组件，最终以页面的形式展示

2. 各属性定义的方式不同

   - Page--标题、页面内容、样式等在 **业务页面内部** 实现

   * PageWrap--标题、页面内容、样式等在 **从 props 传入**

### 使用 PageWrap 包裹组件

```tsx
import React from 'react';
import { Page, PageWrap, PageManager } from 'h5-webview';
import { IPageWrapProps } from 'h5-webview/PageWrap';

export default () => {
  return (
    <button
      onClick={() => {
        PageManager.openPage<IPageWrapProps>({
          classType: PageWrap,
          props: {
            title: 'pageWrap标题',
            headerStyle: {
              color: 'red',
            },
            children: <div>我是被pageWrap包裹的内容</div>,
          },
        });
      }}
    >
      打开页面
    </button>
  );
};
```
