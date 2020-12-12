function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 单个页面项
 */
var PageItem =
/**
 * 实例化PageItem
 * @param classType 页面类型，一般是继承自PageView的类
 * @param props 要传入的props
 */
function PageItem(classType, props) {
  _classCallCheck(this, PageItem);

  this.classType = classType;
  this.props = props;
};

export default PageItem;