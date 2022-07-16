import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import SvgIcon from '../Svg/SvgIcon';
import * as Styled from './HeaderStyle';

interface IHeaderProps {
  hasBackButton?: boolean;
  hasLine?: boolean;
}

const Header = ({ hasBackButton, hasLine, children }: PropsWithChildren<IHeaderProps>) => {
  const router = useRouter();

  return (
    <Styled.HeaderStyle hasLine={hasLine}>
      {hasBackButton && (
        <Styled.BackButton onClick={() => router.push('/')}>
          <SvgIcon type="previous" />
        </Styled.BackButton>
      )}
      {children && <Styled.ChildrenWapper>{children}</Styled.ChildrenWapper>}
    </Styled.HeaderStyle>
  );
};

export default Header;
