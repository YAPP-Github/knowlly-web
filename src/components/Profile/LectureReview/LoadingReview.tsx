import * as Styled from './LoadingReviewStyle';

const LoadingReview = () => {
  return (
    <>
      <Styled.SkeletonReviewWrapper>
        <Styled.SkeletonProfile>
          <Styled.SkeletonProfileImg />
          <div>
            <Styled.SkeletonNameDate>
              <Styled.SkeletonName />
            </Styled.SkeletonNameDate>
            <Styled.SkeletonLectureName />
          </div>
        </Styled.SkeletonProfile>
        <Styled.SkeletonContentsWrapper>
          <Styled.SkeletonContents />
          <Styled.SkeletonContents />
          <Styled.SkeletonContents />
          <Styled.SkeletonContents />
          <Styled.SkeletonShowMoreButton />
          <Styled.SkeletonUnderline />
        </Styled.SkeletonContentsWrapper>
      </Styled.SkeletonReviewWrapper>
    </>
  );
};

export default LoadingReview;
