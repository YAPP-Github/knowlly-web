import styled, { css } from 'styled-components';
import { LectureCardContainer, LectureImageWrapper } from './LectureCardStyle';

const Skeleton = styled.div`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      background-color: ${gray['EF']};
    `;
  }}
`;

export const SkeletonCardContainer = styled(LectureCardContainer)``;

export const SkeletonImageWrapper = styled(LectureImageWrapper)``;

export const SkeletonImage = styled(Skeleton)`
  width: 8.8rem;
  height: 8.8rem;
  border-radius: 8px;
`;

export const SkeletonIntroduce = styled(Skeleton)`
  width: 20.6rem;
  height: 1.4rem;
  margin-bottom: 1.4rem;
  border-radius: 20px;
`;

export const SkeletonCoachName = styled(Skeleton)`
  width: 20.6rem;
  height: 1.05rem;
  margin-bottom: 3.05rem;
  border-radius: 15px;
`;

export const SkeletonContainedBadge = styled(Skeleton)`
  width: 2.1rem;
  height: 1.05rem;
  border-radius: 15px;
`;
