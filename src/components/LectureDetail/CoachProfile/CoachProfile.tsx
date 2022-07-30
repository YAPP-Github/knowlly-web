import { Typograpy } from '@components/Common';
import { IUserCoach } from '@/types/profile';

import React from 'react';
import * as Styled from './CoachProfileStyle';
import { useRouter } from 'next/router';

interface ICoachProfileProps {
  coachProfile: IUserCoach;
}
const CoachProfile = ({ coachProfile }: ICoachProfileProps) => {
  const coach = coachProfile.user;
  const router = useRouter();

  const handleCoachProfileClick = () => {
    router.push(`/profile/${coach.id}`);
  };

  return (
    <div onClick={handleCoachProfileClick}>
      <Styled.CoachProfileContainer>
        <Styled.CoachProfileImg src={coach.userImgUrl} />
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
    </div>
  );
};

export default CoachProfile;
