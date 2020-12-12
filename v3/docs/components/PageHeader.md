---
order: 0
---

# PageHeader

页头显示元素，包含三部分

- 返回箭头

* 标题
* 右侧扩展元素

### 基本用法

```tsx
import React from 'react';
import { PageHeader } from 'h5-webview';

export default () => {
  return <PageHeader title="标题" extra={<div>extra</div>} onBack={() => {}} />;
};
```

### 标题很长时

```tsx
import React from 'react';
import { PageHeader } from 'h5-webview';

export default () => {
  return (
    <PageHeader
      title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
      extra={<div>extra,extra2,extra3</div>}
      onBack={() => {}}
    />
  );
};
```

<API src="../../src/PageHeader.tsx"/>
