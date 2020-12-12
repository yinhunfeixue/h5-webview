import IComponentProps from '@/base/interfaces/IComponentProps';
import React, { Component, ReactNode } from 'react';

interface IPageWrapState {}
interface IPageWrapProps extends IComponentProps {}

class PageWrap extends Component<IPageWrapProps, IPageWrapState> {
  public render(): ReactNode {
    return <div>PageWrap</div>;
  }
}

export default PageWrap;
