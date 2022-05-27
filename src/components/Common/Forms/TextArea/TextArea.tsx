import { PropsWithChildren } from 'react';
import * as Styled from './TextAreaStyle';

interface ITextAreaProps {
  value?: string;
  placeholder: string;
  maxLength?: number;
  _onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = (props: PropsWithChildren<ITextAreaProps>) => {
  const { _onChange, value, maxLength, ...rest } = props;
  return (
    <Styled.TextAreaWrapper>
      <Styled.TextAreaStyle {...rest} value={value} maxLength={maxLength} onChange={_onChange} />
      <Styled.TextLength>
        {value ? value.length : 0}/{maxLength}
      </Styled.TextLength>
    </Styled.TextAreaWrapper>
  );
};

export default TextArea;
