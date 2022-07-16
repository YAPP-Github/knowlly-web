import type { NextPage } from 'next';
import { SvgIcon, Typograpy } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import * as Styled from '@components/Review/ReviewStyle';
import { useState } from 'react';
import useRegisterReview from '@hooks/review/useRegisterReview';
import { useRouter } from 'next/router';
import useProfile from '@hooks/profile/useProfile';

const Review: NextPage = () => {
  const [checkBoxClicked, setCheckBoxClicked] = useState(false);
  const handleCheckBoxClick = () => {
    setCheckBoxClicked(!checkBoxClicked);
  };

  const [reviewContent, setReviewContent] = useState('');
  const handleReviewInput = (value: string) => {
    setReviewContent(value);
  };

  const [publicReview, setPublicReview] = useState(false);
  const handlePublicReview = () => {
    setPublicReview(!publicReview);
  };

  const router = useRouter();
  const coachId = Number(router.query.coachId);
  const lectureId = Number(router.query.lectureId);
  const registerReview = useRegisterReview(lectureId);
  const coach = useProfile(coachId);

  const handleReviewButtonClick = () => {
    const payload = { public: publicReview, content: reviewContent };
    registerReview.mutate(payload);
  };

  return (
    <>
      <PageLayout isSpacing>
        <Typograpy variant="headline-3">{coach?.data.user.username} 님과의</Typograpy>
        <Typograpy variant="headline-3">클래스 어떠셨나요?</Typograpy>
        <Styled.ReviewTextArea
          maxLength={500}
          placeholder="생생한 후기를 남겨주세요."
          _onInputEntered={handleReviewInput}
        />
        <Styled.CheckBox onClick={handleCheckBoxClick}>
          <div onClick={handlePublicReview}>
            {checkBoxClicked ? (
              <SvgIcon type="checkbox-checked" size={20} />
            ) : (
              <SvgIcon type="checkbox-default" size={20} />
            )}
          </div>

          <Typograpy variant="subtitle-4">전체 후기 노출에 동의합니다. </Typograpy>
        </Styled.CheckBox>
      </PageLayout>
      <Styled.ReviewButton
        variant="contained"
        size="big"
        _onClick={handleReviewButtonClick}
        disabled={!publicReview}
      >
        <Typograpy variant="button-1">후기 등록하기 </Typograpy>
      </Styled.ReviewButton>
    </>
  );
};

export default Review;
