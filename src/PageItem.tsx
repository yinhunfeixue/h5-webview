/**
 * 单个页面项
 */
class PageItem {
  classType: any;
  props: any;

  /**
   * 实例化PageItem
   * @param classType 页面类型，一般是继承自PageView的类
   * @param props 要传入的props
   */
  constructor(classType: any, props?: any) {
    this.classType = classType;
    this.props = props;
  }
}

export default PageItem;
