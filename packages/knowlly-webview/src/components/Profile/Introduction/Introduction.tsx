import { Typograpy } from '@components/Common';
import * as Styled from './IntroductionStyle';

interface IUserIntroProps {
  userIntro: string;
}

const Introduction = ({ userIntro }: IUserIntroProps) => {
  return (
    <Styled.IntroContainer>
      <Typograpy variant="subtitle-1">소개</Typograpy>
      <Styled.IntroWrapper>
        <Typograpy variant="body-2" textColor="gray6B">
          {userIntro}
        </Typograpy>
      </Styled.IntroWrapper>
    </Styled.IntroContainer>
  );
};

export default Introduction;
