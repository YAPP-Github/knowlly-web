import { PropsWithChildren } from 'react';
import Link from 'next/link';
import SvgIcon from '../Svg/SvgIcon';
import * as Styled from './HeaderStyle';

interface IHeaderProps {
  hasBackButton?: boolean;
  hasLine?: boolean;
}

const Header = ({ hasBackButton, hasLine, children }: PropsWithChildren<IHeaderProps>) => {
  return (
    <Styled.HeaderStyle hasLine={hasLine}>
      {hasBackButton && (
        <Link href="/">
          <Styled.BackButton>
            <SvgIcon type="previous" />
          </Styled.BackButton>
        </Link>
      )}
      {children && <Styled.ChildrenWapper>{children}</Styled.ChildrenWapper>}
    </Styled.HeaderStyle>
  );
};

export default Header;
