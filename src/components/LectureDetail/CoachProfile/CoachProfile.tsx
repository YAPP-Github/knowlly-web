import { Typograpy } from '@components/Common';
import { ILectureDetailCoach } from '@/types/lectureDetail';
import React from 'react';
import * as Styled from './CoachProfileStyle';

interface ICoachProfileProps {
  coachProfile: ILectureDetailCoach;
}
const CoachProfile = ({ coachProfile }: ICoachProfileProps) => {
  const coach = coachProfile.user;
  return (
    <>
      <Styled.CoachProfileContainer>
        <Styled.CoachProfileImg src="abcd" />
        <Styled.CoachProfileContentWrapper>
          <Typograpy variant="subtitle-4" textColor="gray44">
            {coach.username}
          </Typograpy>
          <Typograpy variant="body-2" textColor="gray44">
            {coach.intro}
          </Typograpy>
        </Styled.CoachProfileContentWrapper>
      </Styled.CoachProfileContainer>
      <Styled.Line />
    </>
  );
};

export default CoachProfile;
