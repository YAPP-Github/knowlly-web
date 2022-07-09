import { SvgIcon, Typograpy } from '@components/Common';
import { useState } from 'react';
import * as Styled from './LectureReviewStyle';
import Review from './Review';
import { useRouter } from 'next/router';
import useCoachReview from '@hooks/profile/useCoachReview';

const LectureReview = () => {
  const [endIdx, setEndIdx] = useState(0);

  const toggleReviewList = () => {
    setEndIdx(endIdx + 2);
  };

  const router = useRouter();
  const userId = Number(router.query.id);

  const reviews = useCoachReview(userId).data;

  const totalReviewCount = reviews.length;
  console.log(totalReviewCount);

  return (
    <Styled.LectureReviewContainer>
      <Typograpy variant="subtitle-1">플레이어 후기</Typograpy>
      {!totalReviewCount && (
        <Styled.NoReview>
          <Typograpy variant="body-1" textColor="gray8F">
            플레이어 후기가 아직 없어요.
          </Typograpy>
        </Styled.NoReview>
      )}
      {reviews.map((review) => (
        <Review key={review.reviewee.id} coachReview={review} />
      ))}

      <Styled.ShowMore onClick={toggleReviewList}>
        <Typograpy variant="subtitle-4" textColor="gray6B">
          더보기
        </Typograpy>
        <SvgIcon type="chevron-down" />
      </Styled.ShowMore>
    </Styled.LectureReviewContainer>
  );
};

export default LectureReview;
