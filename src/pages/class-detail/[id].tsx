import { NextPage } from 'next';
import { ClassInfo, CoachProfile, Guideline, HowToUse } from '@components/ClassDetail';
import { Typograpy } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import * as Styled from '@components/ClassDetail/ClassDetailStyle';

const ClassDetail: NextPage = () => {
  return (
    <>
      <PageLayout>
        <Styled.CategoryBadge type="category">외국/영어</Styled.CategoryBadge>
        <Typograpy variant="headline-3">프랑스어 기초</Typograpy>
        <CoachProfile />
      </PageLayout>
      <ClassInfo />
      <PageLayout>
        <HowToUse />
      </PageLayout>
      <Guideline />
      <Styled.MatchingButton variant="contained" size="big">
        매칭 신청하기
      </Styled.MatchingButton>
    </>
  );
};
export default ClassDetail;
