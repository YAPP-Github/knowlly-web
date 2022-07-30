import styled from 'styled-components';
import { Skeleton } from '@components/Home/LectureCard/LoadingCardStyle';
import { ReviewWrapper, Profile, NameDate, Contents } from './LectureReviewStyle';

export const SkeletonReviewWrapper = styled(ReviewWrapper)``;
export const SkeletonProfile = styled(Profile)``;
export const SkeletonNameDate = styled(NameDate)`
  margin-bottom: 1rem;
`;
export const SkeletonContentsWrapper = styled(Contents)`
  & > * {
    margin-bottom: 0.45rem;
  }
`;

export const SkeletonProfileImg = styled(Skeleton)`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  border-radius: 50%;
`;

export const SkeletonName = styled(Skeleton)`
  width: 10.1rem;
  height: 1.2rem;
  border-radius: 1.75rem;
`;

export const SkeletonLectureName = styled(Skeleton)`
  width: calc(100vw - 9.8rem);
  height: 1.2rem;
  border-radius: 1.5rem;
`;

export const SkeletonContents = styled(Skeleton)`
  width: calc(100vw - 4.8rem);
  height: 1.2rem;
  border-radius: 1.5rem;
`;

export const SkeletonShowMoreButton = styled(Skeleton)`
  width: 3.5rem;
  height: 1.05rem;
  border-radius: 1.5rem;
`;

export const SkeletonUnderline = styled(Skeleton)`
  width: 3.5rem;
  height: 0.1rem;
`;
