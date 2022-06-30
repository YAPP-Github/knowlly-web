import type { NextPage } from 'next';
import { SvgIcon, Typograpy } from '@components/Common';
import { Layout } from '@components/Layout';
import * as Styled from '@components/Review/ReviewStyle';
import { useState } from 'react';

const Review: NextPage = () => {
  const [checkBoxClicked, setCheckBoxClicked] = useState(false);
  const handleCheckBoxClick = () => {
    setCheckBoxClicked(!checkBoxClicked);
  };

  return (
    <>
      <Layout>
        <Typograpy variant="headline-3">$username님과의</Typograpy>
        <Typograpy variant="headline-3">클래스 어떠셨나요?</Typograpy>
        <Styled.ReviewTextArea maxLength={500} placeholder="생생한 후기를 남겨주세요." />
        <Styled.CheckBox onClick={handleCheckBoxClick}>
          {checkBoxClicked ? (
            <SvgIcon type="checkbox-checked" size={20} />
          ) : (
            <SvgIcon type="checkbox-default" size={20} />
          )}
          <Typograpy variant="subtitle-4">전체 후기 노출에 동의합니다. </Typograpy>
        </Styled.CheckBox>
      </Layout>
      <Styled.ReviewButton variant="contained" size="big">
        <Typograpy variant="button-1">후기 등록하기 </Typograpy>
      </Styled.ReviewButton>
    </>
  );
};

export default Review;
