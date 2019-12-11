import { MouseEventHandler } from 'react';

export default interface IComponentProps extends React.DOMAttributes<any> {
  className?: string;
  style?: { [key: string]: any };
  data?: any;
  onClick?: MouseEventHandler;
}
