import { PropsWithChildren, useState } from 'react';
import * as Styled from './InputStyle';

interface IInputProps {
  placeholder: string;
  maxLength?: number;
}

const Input = (props: PropsWithChildren<IInputProps>) => {
  const { maxLength, ...rest } = props;
  const [input, setInput] = useState('');

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Styled.InputWrapper>
      <Styled.InputStyle {...rest} maxLength={maxLength} onChange={_onChange} />
      <Styled.TextLength>
        {input.length}/{maxLength}
      </Styled.TextLength>
    </Styled.InputWrapper>
  );
};

export default Input;
