import { PropsWithChildren } from 'react';
import * as Styled from './ButtonStyle';

interface IButtonProps {
  variant: 'contained' | 'outlined';
  size: 'xx-small' | 'x-small' | 'small' | 'middle' | 'big';
  disabled?: boolean;
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

Button.defaultProps = {
  variant: 'contained',
  size: 'big',
  type: 'button',
};

export default Button;
