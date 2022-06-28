import { ReactNode } from 'react';
import * as Styled from './LayoutStyle';

interface ILayoutProps {
  children: ReactNode;
  spacing?: boolean;
}

const Layout = (props: ILayoutProps) => {
  const { children, ...rest } = props;

  return <Styled.LayoutContainer {...rest}>{children}</Styled.LayoutContainer>;
};

export default Layout;
