import React, { PropsWithChildren } from 'react';
import * as Styled from './LayoutStyle';

interface ILayout {
  children: React.ReactChild | React.ReactChild[];
}

const Layout = ({ children }: PropsWithChildren<ILayout>) => {
  return <Styled.LayoutContainer>{children}</Styled.LayoutContainer>;
};

export default Layout;
