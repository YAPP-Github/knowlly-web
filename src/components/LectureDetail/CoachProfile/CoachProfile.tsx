import { Typograpy } from '@components/Common';
import React from 'react';
import * as Styled from './CoachProfileStyle';
const CoachProfile = () => {
  return (
    <>
      <Styled.CoachProfileContainer>
        <Styled.CoachProfileImg src="abcd" />
        <Styled.CoachProfileContentWrapper>
          <Typograpy variant="subtitle-4" textColor="gray44">
            하늘님
          </Typograpy>
          <Typograpy variant="body-2" textColor="gray44">
            프랑스에서 1년 동안 유학한 경험이 있어요. 다시 공부를 시작할 겸 해서 클래스를 열어보려
            합니다. 프랑스에서 1년 동안 유학한 경험이 있어요.
          </Typograpy>
        </Styled.CoachProfileContentWrapper>
      </Styled.CoachProfileContainer>
      <Styled.Line />
    </>
  );
};

export default CoachProfile;
