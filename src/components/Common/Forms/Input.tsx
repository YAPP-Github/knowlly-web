import { PropsWithChildren } from 'react';
import * as Styled from './InputStyle';

interface IInputProps {
  value?: string;
  placeholder: string;
  type: 'single' | 'multi';
  maxLength?: number;
  _onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input = (props: PropsWithChildren<IInputProps>) => {
  const { _onChange, value, maxLength, ...rest } = props;
  return (
    <Styled.InputWrapper>
      <Styled.InputStyle {...rest} value={value} maxLength={maxLength} onChange={_onChange} />
      <Styled.TextLength>
        {value ? value.length : 0}/{maxLength}
      </Styled.TextLength>
    </Styled.InputWrapper>
  );
};

export default Input;
