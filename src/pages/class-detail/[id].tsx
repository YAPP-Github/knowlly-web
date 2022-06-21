import { NextPage } from 'next';
import { ClassInfo, CoachProfile, Guideline, HowToUse } from '@components/ClassDetail';
import { ContainedBadge, Layout, Typograpy } from '@components/Common';
const ClassDetail: NextPage = () => {
  return (
    <>
      <Layout>
        <ContainedBadge type="category">외국/영어</ContainedBadge>
        <Typograpy variant="headline-3">프랑스어 기초</Typograpy>
        <CoachProfile />
      </Layout>
      <ClassInfo />
      <Layout>
        <HowToUse />
      </Layout>
      <Guideline />
    </>
  );
};
export default ClassDetail;
