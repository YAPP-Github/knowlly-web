import { NextPage } from 'next';
import { ClassInfo, CoachProfile, Guideline, HowToUse } from '@components/ClassDetail';
import { Layout, Typograpy } from '@components/Common';
import * as Styled from '@components/ClassDetail/ClassDetailStyle';

const ClassDetail: NextPage = () => {
  return (
    <>
      <Layout>
        <Styled.CategoryBadge type="category">외국/영어</Styled.CategoryBadge>
        <Typograpy variant="headline-3">프랑스어 기초</Typograpy>
        <CoachProfile />
      </Layout>
      <ClassInfo />
      <Layout>
        <HowToUse />
      </Layout>
      <Guideline />
      <Styled.MatchingButton variant="contained" size="big">
        매칭 신청하기
      </Styled.MatchingButton>
    </>
  );
};
export default ClassDetail;
