import * as Styled from './LoadingCardStyle';

const LoadingCard = () => {
  return (
    <Styled.SkeletonCardContainer>
      <Styled.SkeletonImageWrapper>
        <Styled.SkeletonImage />
      </Styled.SkeletonImageWrapper>
      <div>
        <Styled.SkeletonIntroduce />
        <Styled.SkeletonCoachName />
        <Styled.SkeletonContainedBadge />
      </div>
    </Styled.SkeletonCardContainer>
  );
};

export default LoadingCard;
