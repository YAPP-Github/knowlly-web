import type { NextPage } from 'next';
import { Layout, SvgIcon, Typograpy } from '@components/Common';
import * as Styled from '@components/Review/ReviewStyle';

const Review: NextPage = () => {
  const clicked = true;
  return (
    <>
      <Layout>
        <Typograpy variant="headline-3">$username님과의</Typograpy>
        <Typograpy variant="headline-3">클래스 어떠셨나요?</Typograpy>
        <Styled.ReviewTextArea maxLength={500} placeholder="생생한 후기를 남겨주세요." />
        <Styled.CheckBox>
          {clicked ? (
            <SvgIcon type="checkbox-checked" size={20} />
          ) : (
            <SvgIcon type="checkbox-default" size={20} />
          )}
          <Typograpy variant="subtitle-4">전체 후기 노출에 동의합니다. </Typograpy>
        </Styled.CheckBox>
      </Layout>
      <Styled.ReviewButton variant="contained" size="big">
        후기 등록하기
      </Styled.ReviewButton>
    </>
  );
};

export default Review;
