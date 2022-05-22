import * as Styled from './TextMoreButtonStyle';

interface ITextMoreButtonProps {
  _onClick?: () => void;
}

const TextMoreButton = ({ _onClick }: ITextMoreButtonProps) => {
  return <Styled.TextMoreButtonStyle onClick={_onClick}>더 보기</Styled.TextMoreButtonStyle>;
};

export default TextMoreButton;
