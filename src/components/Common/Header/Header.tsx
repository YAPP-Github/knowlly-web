import { PropsWithChildren } from 'react';
import SvgIcon from '../Svg/SvgIcon';
import * as Styled from './HeaderStyle';

interface IHeaderProps {
  hasBackButton?: boolean;
  hasLine?: boolean;
  _onClickBackButton?: () => void;
}

const Header = ({
  hasBackButton,
  hasLine,
  _onClickBackButton,
  children,
}: PropsWithChildren<IHeaderProps>) => {
  return (
    <Styled.HeaderStyle hasLine={hasLine}>
      {hasBackButton && (
        <Styled.BackButton onClick={_onClickBackButton}>
          <SvgIcon type="previous" />
        </Styled.BackButton>
      )}
      {children && <Styled.ChildrenWapper>{children}</Styled.ChildrenWapper>}
    </Styled.HeaderStyle>
  );
};

export default Header;
