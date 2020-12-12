# Page

**完整的弹出页面，不仅包含页面外观，还包含了滑动等功能。**

1. 此元素应使用`PageManager.openPage`打开
1. 项目中实现业务页面，应继承此类

### 打开页面

```tsx
import React from 'react';
import { Page, PageManager } from 'h5-webview';

export default () => {
  return (
    <button
      onClick={() => {
        PageManager.openPage({
          classType: Page,
        });
      }}
    >
      打开页面
    </button>
  );
};
```

### 自定义页面内容

```tsx
import React from 'react';
import { Page, PageManager } from 'h5-webview';

class MyPage extends Page {
  protected get title() {
    return '自定义页头';
  }

  protected get headerStyle(): CSSProperties {
    return {
      backgroundColor: 'red',
    };
  }

  protected renderChildren() {
    return <div>页面内容</div>;
  }
}

export default () => {
  return (
    <button
      onClick={() => {
        PageManager.openPage({
          classType: MyPage,
        });
      }}
    >
      打开页面
    </button>
  );
};
```
