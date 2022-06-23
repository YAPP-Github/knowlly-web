import { Typograpy } from '@components/Common';
import * as Styled from './IntroductionStyle';

const Introduction = () => {
  return (
    <Styled.IntroContainer>
      <Typograpy variant="subtitle-1">소개</Typograpy>
      <Styled.IntroWrapper>
        <Typograpy variant="body-2" textColor="gray6B">
          프랑스에서 1년 동안 유학한 경험이 있어요. 다시 공부를 시작할 겸 해서 클래스를 열어보려
          합니다. 프랑스에서 1년 동안 유학한 경험이 있어요. 다시 공부를 시작할 겸 해서 클래스를
          열어보려 합니다. 프랑스에서 1년 동안 유학한 경험이 있어요. 다시 공부를 시작할 겸 해서
          클래스를 열어보려 합니다. 프랑스에서 1년 동안 유학한 경험이 있어요.
        </Typograpy>
      </Styled.IntroWrapper>
    </Styled.IntroContainer>
  );
};

export default Introduction;
