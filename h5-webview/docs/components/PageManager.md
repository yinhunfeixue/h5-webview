# PageManager

页面管理器，包含 3 个方法。 示例请参考 Page, PageWrap

```ts
  /**
   * 打开新页面
   * @param pageItem 页面数据，如需手动关闭页面，可把此参数传入`PageManagerclosePage(pageItem)`
   * @param replaceSameType 是否替换同类型的页面
   */
  public static openPage<P>(
    pageItem: PageItem<P>,
    replaceSameType: boolean = false,
  )

  /**
   * 打开PageWrap
   * @param props
   */
  public static openPageWrap(props: IPageWrapProps)

  /**
   * 关闭页面
   * @param pageItem 要关闭的PageItem实例
   */
  public static closePage(pageItem: PageItem)
```
