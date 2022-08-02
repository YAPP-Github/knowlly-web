import styled from 'styled-components';
import { Skeleton } from '@components/Home/LectureCard/LoadingCardStyle';
import { PlayerUserContainer, PlayerUserProfileWrapper } from '../PlayerUser/PlayerUserStyle';

export const SkeletonPlayerUserContainer = styled(PlayerUserContainer)``;

export const SkeletonPlayerUserProfileWrapper = styled(PlayerUserProfileWrapper)``;

export const SkeletonPlayerUserImage = styled(Skeleton)`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  margin-right: 0.8rem;
`;

export const SkeletonPlayerName = styled(Skeleton)`
  width: 10rem;
  height: 1.4rem;
  border-radius: 20px;
`;

export const SkeletonPlayerStartAtWrapper = styled.div`
  & > div:nth-child(1) {
    width: 100%;
    height: 2rem;
    margin-bottom: 0.4rem;
  }

  & > div:nth-child(2) {
    width: 100%;
    height: 1.8rem;
  }
`;

export const SkeletonPlayerStartAt = styled(Skeleton)`
  width: 10rem;
  height: 1.6rem;
  margin-bottom: 0.4rem;
  border-radius: 20px;
`;

export const SkeletonPlayerSchedule = styled(Skeleton)`
  width: 12rem;
  height: 1.2rem;
  border-radius: 20px;
`;

export const SkeletonTextWrapper = styled.div`
  width: 100%;
  height: 2rem;
`;

export const SkeletonText = styled(Skeleton)`
  width: 20rem;
  height: 1.4rem;
  border-radius: 20px;
`;
