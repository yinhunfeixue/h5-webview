import { ReactNode } from 'react';
import PageView, { IPageViewProps } from './PageView';

interface IPageViewWrapState {}
interface IPageViewWrapProps extends IPageViewProps {
  children: ReactNode;
  headerClassName?: string;
  showHeader?: boolean;
  title?: string;
  disabledBack?: boolean;
  disableTouchBack?: boolean;
  extra?: ReactNode;
}

class PageViewWrap extends PageView<IPageViewWrapProps, IPageViewWrapState> {
  get headerClassName(): string {
    return this.props.headerClassName || '';
  }

  get showHeader() {
    const { showHeader } = this.props;
    if (showHeader === false) {
      return false;
    }
    return true;
  }

  get className() {
    return this.props.className || '';
  }

  get title() {
    return this.props.title || '';
  }

  get disabledBack(): boolean {
    return Boolean(this.props.disabledBack);
  }

  get disableTouchBack(): boolean {
    return Boolean(this.props.disableTouchBack);
  }

  get extra(): ReactNode {
    return this.props.extra;
  }

  public renderChildren(): ReactNode {
    const { children } = this.props;
    return children;
  }
}

export default PageViewWrap;
