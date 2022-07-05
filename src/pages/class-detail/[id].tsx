import { NextPage } from 'next';
import { ClassInfo, CoachProfile, Guideline, HowToUse } from '@components/ClassDetail';
import { Typograpy } from '@components/Common';
import { Layout } from '@components/Common/Layout';
import * as Styled from '@components/ClassDetail/ClassDetailStyle';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ClassDetail: NextPage = () => {
  const router = useRouter();
  const lectureId = router.query.id;

  return (
    <>
      <Layout isSpacing>
        <Styled.CategoryBadge type="category">외국/영어</Styled.CategoryBadge>
        <Typograpy variant="headline-3">프랑스어 기초</Typograpy>
        <CoachProfile />
      </Layout>
      <ClassInfo />
      <Layout isSpacing>
        <HowToUse />
      </Layout>
      <Guideline />
      <Link href={{ pathname: '/matching', query: { id: lectureId } }}>
        <a>
          <Styled.MatchingButton variant="contained" size="big">
            매칭 신청하기
          </Styled.MatchingButton>
        </a>
      </Link>
    </>
  );
};
export default ClassDetail;
