import { PropsWithChildren } from 'react';
import * as Styled from './PageLayoutStyle';

export interface IPageLayoutProps {
  isSpacing?: boolean;
  start?: 1 | 2 | 3 | 4;
  end?: 1 | 2 | 3 | 4;
}

const PageLayout = (props: PropsWithChildren<IPageLayoutProps>) => {
  const { children, ...rest } = props;

  return <Styled.PageLayoutContainer {...rest}>{children}</Styled.PageLayoutContainer>;
};

export default PageLayout;
