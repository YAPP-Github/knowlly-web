import * as Styled from './LoadingCardStyle';

const LoadingCard = () => {
  return (
    <li>
      <Styled.SkeletonCardContainer>
        <Styled.SkeletonImageWrapper>
          <Styled.SkeletonImage />
        </Styled.SkeletonImageWrapper>
        <Styled.SkeletonInfoWrapper>
          <Styled.SkeletonIntroduce />
          <Styled.SkeletonCoachName />
          <Styled.SkeletonContainedBadge />
        </Styled.SkeletonInfoWrapper>
      </Styled.SkeletonCardContainer>
    </li>
  );
};

export default LoadingCard;
