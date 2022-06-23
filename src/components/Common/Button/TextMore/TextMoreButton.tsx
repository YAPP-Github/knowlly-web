import Typograpy from '@components/Common/Typograpy/Typograpy';
import * as Styled from './TextMoreButtonStyle';

interface ITextMoreButtonProps {
  _onClick?: () => void;
}

const TextMoreButton = ({ _onClick }: ITextMoreButtonProps) => {
  return (
    <Styled.TextMoreButtonStyle onClick={_onClick}>
      <Typograpy variant="button-2" textColor="gray6B">
        더 보기
      </Typograpy>
    </Styled.TextMoreButtonStyle>
  );
};

export default TextMoreButton;
