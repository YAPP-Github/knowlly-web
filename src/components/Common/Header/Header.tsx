import { PropsWithChildren } from 'react';
import SvgIcon from '../Svg/SvgIcon';
import * as Styled from './HeaderStyle';

interface IHeaderProps {
  hasBackButton?: boolean;
  hasLine?: boolean;
  _onBackButtonClick?: () => void;
}

const Header = ({
  hasBackButton,
  hasLine,
  _onBackButtonClick,
  children,
}: PropsWithChildren<IHeaderProps>) => {
  return (
    <Styled.HeaderStyle hasLine={hasLine}>
      {hasBackButton && (
        <Styled.BackButton onClick={_onBackButtonClick}>
          <SvgIcon type="previous" />
        </Styled.BackButton>
      )}
      {children && <Styled.ChildrenWapper>{children}</Styled.ChildrenWapper>}
    </Styled.HeaderStyle>
  );
};

export default Header;
