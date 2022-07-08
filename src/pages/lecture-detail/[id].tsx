import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';
import { LectureInfo, CoachProfile, Guideline, HowToUse } from '@components/LectureDetail';
import { Typograpy } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import * as Styled from '@components/LectureDetail/LectureDetailStyle';
import useLectureDetail from '@hooks/lecture/useLectureDetail';
import queryKeys from '@react-query/keys';
import api from '@api';

const LectureDetail: NextPage = () => {
  const router = useRouter();
  const lectureId = Number(router.query.id);
  const lectureDetail = useLectureDetail(lectureId);
  console.log(lectureDetail);
  const category = lectureDetail.data.category.categoryName;
  const topic = lectureDetail.data.topic;

  return (
    <>
      <PageLayout isSpacing>
        <Styled.CategoryBadge type="category">{category}</Styled.CategoryBadge>
        <Typograpy variant="headline-3">{topic}</Typograpy>
        <CoachProfile />
      </PageLayout>
      <LectureInfo />
      <PageLayout isSpacing>
        <HowToUse />
      </PageLayout>
      <Guideline />
      <Link href={{ pathname: '/matching', query: { id: 1 } }}>
        <a>
          <Styled.MatchingButton variant="contained" size="big">
            매칭 신청하기
          </Styled.MatchingButton>
        </a>
      </Link>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.lectureDetail, () =>
    api.fetchLectureDetail(Number(id))
  );

  const dehydratedState = dehydrate(queryClient);

  return {
    props: { dehydratedState: dehydratedState },
  };
};

export default LectureDetail;
