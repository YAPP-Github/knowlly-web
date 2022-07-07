import { NextPage } from 'next';
import { LectureInfo, CoachProfile, Guideline, HowToUse } from '@components/LectureDetail';
import { Typograpy } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import * as Styled from '@components/LectureDetail/LectureDetailStyle';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LectureDetail: NextPage = () => {
  const router = useRouter();
  const lectureId = router.query.id;

  return (
    <>
      <PageLayout isSpacing>
        <Styled.CategoryBadge type="category">외국/영어</Styled.CategoryBadge>
        <Typograpy variant="headline-3">프랑스어 기초</Typograpy>
        <CoachProfile />
      </PageLayout>
      <LectureInfo />
      <PageLayout isSpacing>
        <HowToUse />
      </PageLayout>
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
export default LectureDetail;
