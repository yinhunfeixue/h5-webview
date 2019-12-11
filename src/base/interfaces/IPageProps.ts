import { match, RouteProps } from 'react-router';

/**
 * 页面props
 */
export default interface IPageProps {
  match?: match;
  route?: RouteProps;
  [key: string]: any;
}
