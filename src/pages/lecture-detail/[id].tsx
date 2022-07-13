import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
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
import MatchingButton from '@components/LectureDetail/MatchingButton/MatchingButton';

const LectureDetail: NextPage = () => {
  const router = useRouter();
  const lectureId = Number(router.query.id);
  const lectureDetail = useLectureDetail(lectureId);

  const category = lectureDetail?.data.category;
  const topic = lectureDetail?.data.topic;
  const coachProfile = lectureDetail?.data.coach;
  const lectureInfo = lectureDetail?.data;

  const formatCategoryName = (category: string) => {
    switch (category) {
      case 'PM':
        return '기획';
      case 'DESIGN':
        return '디자인';
      case 'DEVELOP':
        return '개발';
      case 'MARKETING':
        return '마케팅';
      case 'LANGUAGE':
        return '외국어';
      case 'ETC':
        return '기타';
    }
  };

  return (
    <>
      <PageLayout isSpacing>
        <Styled.CategoryBadge type="category">{formatCategoryName(category)}</Styled.CategoryBadge>
        <Typograpy variant="headline-3">{topic}</Typograpy>
        <CoachProfile coachProfile={coachProfile} />
      </PageLayout>
      <LectureInfo lectureInfo={lectureInfo} />
      <PageLayout isSpacing>
        <HowToUse />
      </PageLayout>
      <Guideline />
      <MatchingButton />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.lectureDetail, Number(id)], () =>
    api.fetchLectureDetail(Number(id))
  );

  const dehydratedState = dehydrate(queryClient);

  return {
    props: { dehydratedState: dehydratedState },
  };
};

export default LectureDetail;
