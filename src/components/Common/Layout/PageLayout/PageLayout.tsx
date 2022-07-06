import { ReactNode } from 'react';
import * as Styled from './PageLayoutStyle';

interface IPageLayoutProps {
  children: ReactNode;
  isSpacing?: boolean;
}

const PageLayout = (props: IPageLayoutProps) => {
  const { children, ...rest } = props;

  return <Styled.PageLayoutContainer {...rest}>{children}</Styled.PageLayoutContainer>;
};

export default PageLayout;
