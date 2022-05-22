import { PropsWithChildren } from 'react';
import * as Styled from './ButtonStyle';

interface IButtonProps {
  variant: 'contained' | 'enabled' | 'outlined';
  size?: 'x-small' | 'small' | 'middle' | 'big';
  type: 'button' | 'submit' | 'reset';
  _onClick?: () => void;
}

const Button = (props: PropsWithChildren<IButtonProps>) => {
  const { _onClick, children, ...reset } = props;

  return (
    <Styled.ButtonStyle {...reset} onClick={_onClick}>
      {children}
    </Styled.ButtonStyle>
  );
};

export default Button;
