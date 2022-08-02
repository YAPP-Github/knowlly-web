import React from 'react';
import * as Styled from './LoadingStyle';

const PlayerUser = () => {
  return (
    <Styled.SkeletonPlayerUserContainer>
      <Styled.SkeletonPlayerUserProfileWrapper>
        <Styled.SkeletonPlayerUserImage />
        <Styled.SkeletonPlayerName />
      </Styled.SkeletonPlayerUserProfileWrapper>
      <Styled.SkeletonTextWrapper>
        <Styled.SkeletonText />
      </Styled.SkeletonTextWrapper>
    </Styled.SkeletonPlayerUserContainer>
  );
};

const PlayerSchedule = () => {
  return (
    <Styled.SkeletonPlayerStartAtWrapper>
      <div>
        <Styled.SkeletonPlayerStartAt />
      </div>
      <div>
        <Styled.SkeletonPlayerSchedule />
      </div>
    </Styled.SkeletonPlayerStartAtWrapper>
  );
};

const MachingPopup = () => {
  return <div></div>;
};

const Text = () => {
  return (
    <Styled.SkeletonTextWrapper>
      <Styled.SkeletonText />
    </Styled.SkeletonTextWrapper>
  );
};

const Loading = {
  PlayerUser,
  MachingPopup,
  PlayerSchedule,
  Text,
};

export default Loading;
