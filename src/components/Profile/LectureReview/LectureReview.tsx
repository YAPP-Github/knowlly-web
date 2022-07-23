import { SvgIcon, Typograpy } from '@components/Common';
import { useState } from 'react';
import * as Styled from './LectureReviewStyle';
import Review from './Review';
import { useRouter } from 'next/router';
import useCoachReview from '@hooks/profile/useCoachReview';

const LectureReview = () => {
  const router = useRouter();
  const userId = Number(router.query.id);

  const [endIdx, setEndIdx] = useState(4);
  const totalReviews = useCoachReview(userId)?.data;
  const slicedReviews = useCoachReview(userId)?.data.slice(0, endIdx);
  const totalReviewCount = totalReviews?.length;

  const toggleReviewList = () => {
    setEndIdx(endIdx + 4);
  };

  return (
    <Styled.LectureReviewContainer>
      <Typograpy variant="subtitle-1">플레이어 후기</Typograpy>
      {totalReviewCount ? (
        slicedReviews.map((review, id) => <Review key={id} coachReview={review} />)
      ) : (
        <Styled.NoReview>
          <Typograpy variant="body-1" textColor="gray8F">
            플레이어 후기가 아직 없어요.
          </Typograpy>
        </Styled.NoReview>
      )}

      {totalReviewCount > endIdx && (
        <Styled.ShowMore onClick={toggleReviewList}>
          <Typograpy variant="subtitle-4" textColor="gray6B">
            더보기
          </Typograpy>
          <SvgIcon type="chevron-down" />
        </Styled.ShowMore>
      )}
    </Styled.LectureReviewContainer>
  );
};

export default LectureReview;
