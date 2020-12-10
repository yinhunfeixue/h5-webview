---
order: 1
---

# PageView

**仅包含页头、页角等元素的显示对象。**

此类元素可像普通元素一样使用。
当只需要页面结构的外观，而不需要各种功能时，可使用此类

```tsx
import React from 'react';
import { PageView } from 'h5-webview';

export default () => {
  return (
    <div style={{ height: 200 }}>
      <PageView
        title="标题很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长"
        extra={<div style={{ border: '1px solid gray' }}>extra</div>}
        onBack={() => {}}
      >
        <div style={{ height: 2000, border: '5px red solid' }}>
          内容在这里，我很高
        </div>
      </PageView>
    </div>
  );
};
```

<API src="../../src/PageView.tsx" />
