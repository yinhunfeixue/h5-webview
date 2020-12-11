# Page

**完整的弹出页面，不仅包含页面外观，还包含了滑动等功能。**

1. 此元素应使用`PageManager.openPage`打开
1. 自定义 Page 应继承此类

```tsx
import React from 'react';
import { Page, PageManager } from 'h5-webview';

export default () => {
  return (
    <div style={{ width: 300, height: 400, position: 'relative' }}>
      <button
        onClick={() => {
          PageManager.openPage({
            classType: Page,
          });
        }}
      >
        打开页面
      </button>
    </div>
  );
};
```
