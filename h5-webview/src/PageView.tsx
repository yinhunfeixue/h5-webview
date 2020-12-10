import PageHeader, { IPageHeaderProps } from '@/PageHeader';
import classnames from 'classnames';
import React, { Component, CSSProperties, ReactNode } from 'react';
import styles from './PageView.less';

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
    } = this.props;

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
      <div className={classnames(styles.PageView, className)} style={style}>
        {this.renderHeader()}
        <main>{children}</main>
      </div>
    );
  }
}

export default PageView;
