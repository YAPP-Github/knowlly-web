import { PropsWithChildren, useEffect, useState } from 'react';
import * as Styled from './TextAreaStyle';

interface ITextAreaProps {
  value: string;
  placeholder?: string;
  maxLength?: number;
  _onInputEntered: (value: string) => void;
}

const TextArea = (props: PropsWithChildren<ITextAreaProps>) => {
  const { maxLength, _onInputEntered, ...rest } = props;
  const [text, setText] = useState('');

  const _onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (_onInputEntered) _onInputEntered(text);
  });

  return (
    <Styled.TextAreaWrapper>
      <Styled.TextAreaStyle {...rest} value={text} maxLength={maxLength} onChange={_onChange} />
      <Styled.TextLength>
        {text.length}/{maxLength}
      </Styled.TextLength>
    </Styled.TextAreaWrapper>
  );
};

export default TextArea;
