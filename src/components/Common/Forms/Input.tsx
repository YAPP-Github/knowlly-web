import { PropsWithChildren } from 'react';
import { InputStyle } from './InputStyle';

interface IInputProps {
  value?: string;
  placeholder: string;
  type: 'single' | 'multi';
  maxLength?: number;
  _onChange?: () => void;
}

const Input = (props: PropsWithChildren<IInputProps>) => {
  const { _onChange, value, placeholder, maxLength } = props;
  return (
    <>
      <InputStyle
        {...props}
        value={value}
        placeholder={placeholder}
        onChange={_onChange}
        maxLength={maxLength}
      />
    </>
  );
};

export default Input;
