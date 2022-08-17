import styled, { css } from 'styled-components';
import { LectureCardContainer, LectureImageWrapper, LectureInfoWrapper } from './LectureCardStyle';

export const Skeleton = styled.div`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      position: relative;
      overflow: hidden;
      background-color: ${gray['EF']};

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: skeleton-gradient 1.5s infinite ease-in-out;
      }

      @keyframes skeleton-gradient {
        0% {
          background-color: ${gray['EF']};
        }
        50% {
          background-color: ${gray['CC']};
        }
        100% {
          background-color: ${gray['EF']};
        }
      }
    `;
  }}
`;

export const SkeletonCardContainer = styled(LectureCardContainer)``;

export const SkeletonImageWrapper = styled(LectureImageWrapper)``;

export const SkeletonInfoWrapper = styled(LectureInfoWrapper)`
  display: flex;
  flex-direction: column;
`;

export const SkeletonImage = styled(Skeleton)`
  width: 8.8rem;
  height: 8.8rem;
  border-radius: 8px;
`;

export const SkeletonIntroduce = styled(Skeleton)`
  width: 15.6rem;
  height: 1.6rem;
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  border-radius: 20px;
`;

export const SkeletonCoachName = styled(Skeleton)`
  width: 15.6rem;
  height: 1.2rem;
  margin-top: 0.2rem;
  margin-bottom: 2.6rem;
  border-radius: 15px;
`;

export const SkeletonContainedBadge = styled(Skeleton)`
  width: 6rem;
  height: 2.2rem;
  border-radius: 15px;
`;
