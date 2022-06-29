import { PropsWithChildren, useState } from 'react';
import * as Styled from './TextAreaStyle';

interface ITextAreaProps {
  placeholder?: string;
  maxLength?: number;
}

const TextArea = (props: PropsWithChildren<ITextAreaProps>) => {
  const { maxLength, ...rest } = props;
  const [text, setText] = useState('');

  const _onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Styled.TextAreaWrapper>
      <Styled.TextAreaStyle {...rest} maxLength={maxLength} onChange={_onChange} />
      <Styled.TextLength>
        {text.length}/{maxLength}
      </Styled.TextLength>
    </Styled.TextAreaWrapper>
  );
};

export default TextArea;
