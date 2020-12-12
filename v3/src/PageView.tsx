import classnames from 'classnames';
import React, { Component, CSSProperties, ReactNode } from 'react';
import PageHeader, { IPageHeaderProps } from './PageHeader';
import './PageView.less';

interface IPageViewState {}
interface IPageViewProps extends IPageHeaderProps {
  /**
   * 页头样式名
   */
  headerClassName?: string;

  /**
   * 页头内联样式
   */
  headerStyle?: CSSProperties;

  /**
   * 是否显示页头
   */
  hideHeader?: boolean;
}

class PageView extends Component<IPageViewProps, IPageViewState> {
  private renderHeader() {
    const {
      onBack,
      title,
      extra,
      backIcon,
      headerClassName,
      headerStyle,
      hideHeader,
    } = this.props;
    if (hideHeader) {
      return null;
    }

    return (
      <PageHeader
        className={headerClassName}
        style={headerStyle}
        title={title}
        onBack={onBack}
        extra={extra}
        backIcon={backIcon}
      />
    );
  }

  public render(): ReactNode {
    const { className, style, children } = this.props;
    return (
      <div className={classnames('PageView', className)} style={style}>
        {this.renderHeader()}
        <main>{children}</main>
      </div>
    );
  }
}

export default PageView;
