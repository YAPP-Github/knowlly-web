import { TextMoreButton, Typograpy } from '@components/Common';
import { ICoachReviewData } from '@/types/profile';
import { useState } from 'react';
import dayjs from 'dayjs';
import * as Styled from './LectureReviewStyle';

interface IReviewProps {
  coachReview: ICoachReviewData;
}

const Review = ({ coachReview }: IReviewProps) => {
  const LENGTH = 110;
  const reviewContent = coachReview.content;
  const reviewContentLength = reviewContent.length;

  const [review, setReview] = useState(reviewContent.slice(0, LENGTH));
  const [isLong, setIsLong] = useState(reviewContentLength < LENGTH);

  const formatLongReviewContent = (review: string) => {
    if (review.length > LENGTH) return review + '...';
    else return review;
  };

  const formatWrittenDate = (time: string) => {
    const day = dayjs(time);
    const year = day.get('year');
    const month = day.get('month') + 1;
    const date = day.get('date');
    return year + '년 ' + month + '월 ' + date + '일';
  };

  const toggleTextMore = () => {
    setReview(reviewContent);
    setIsLong(!isLong);
  };

  return (
    <Styled.ReviewWrapper>
      <Styled.Profile>
        <Styled.ProfileImg src={`/img/profile.png`} />
        <div>
          <Styled.NameDate>
            <Typograpy variant="subtitle-4">{coachReview.writer.username}</Typograpy>
            <Typograpy variant="body-2" textColor="gray8F">
              {formatWrittenDate(coachReview.writtenDate)}
            </Typograpy>
          </Styled.NameDate>
          <Typograpy variant="body-2" textColor="gray44">
            프랑스어
          </Typograpy>
        </div>
      </Styled.Profile>
      <Typograpy variant="body-2" textColor="gray6B">
        {formatLongReviewContent(review)}
      </Typograpy>
      <Styled.Contents>{!isLong && <TextMoreButton _onClick={toggleTextMore} />}</Styled.Contents>
    </Styled.ReviewWrapper>
  );
};

export default Review;
