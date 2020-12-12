import IComponentProps from '@/base/interfaces/IComponentProps';
import Page from '@/Page';
import { CSSProperties, ReactNode } from 'react';

interface IPageWrapState {}
export interface IPageWrapProps extends IComponentProps {
  /**
   * 页头样式名
   */
  headerClassName?: string;

  /**
   * 页头内联样式
   */
  headerStyle?: CSSProperties;

  /**
   * 标题
   */
  title?: string;

  /**
   * 是否隐藏头部
   */
  hideHeader?: boolean;

  /**
   * 是否禁用返回按钮
   */
  disabledBack?: boolean;

  /**
   * 是否禁用触摸返回
   */
  disableTouchBack?: boolean;
  /**
   * 额外的内容，显示在头部右侧
   */
  extra?: ReactNode;
}

class PageWrap extends Page<IPageWrapProps, IPageWrapState> {
  /**
   * 页头样式名
   */
  protected get headerClassName(): string {
    return this.props.headerClassName || '';
  }

  /**
   * 页头内联样式
   */
  protected get headerStyle(): CSSProperties {
    return this.props.headerStyle || {};
  }

  /**
   * 样式名
   */
  protected get className(): string {
    return this.props.className || '';
  }

  /**
   * 内联样式
   */
  protected get style(): CSSProperties {
    return this.props.style || {};
  }

  /**
   * 标题
   */
  protected get title(): string {
    return this.props.title || '';
  }

  /**
   * 是否隐藏头部
   */
  protected get hideHeader(): boolean {
    return Boolean(this.props.hideHeader);
  }

  /**
   * 是否禁用返回按钮
   */
  protected get disabledBack(): boolean {
    return Boolean(this.props.disabledBack);
  }

  /**
   * 是否禁用触摸返回
   */
  protected get disableTouchBack(): boolean {
    return Boolean(this.props.disableTouchBack);
  }

  /**
   * 额外的内容，显示在头部右侧
   */
  protected get extra(): ReactNode {
    return this.props.extra;
  }

  protected renderChildren() {
    return this.props.children;
  }
}

export default PageWrap;
