/**
 * 单个页面项
 */
class PageItem<T extends any, P extends any> {
  classType: T;
  props?: P;

  /**
   * 实例化PageItem
   * @param classType 页面类型，一般是继承自PageView的类
   * @param props 要传入的props
   */
  constructor(classType: T, props?: P) {
    this.classType = classType;
    this.props = props;
  }
}

export default PageItem;
