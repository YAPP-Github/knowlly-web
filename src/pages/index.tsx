import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { SearchBar, Typograpy } from '@components/Common';
import { PageLayout, Section } from '@components/Common/Layout';
import { Category, LectureList } from '@components/Home';
import useLectureInfo from '@hooks/home/useLectureInfo';

import api from '@api';
import { dehydrate, QueryClient } from 'react-query';
import queryKeys from '@react-query/keys';

const Home: NextPage = () => {
  const lectureInfoList = useLectureInfo();

  const handleMoveToSearchPageClick = () => {
    window.Android?.navigateToSearch();
  };

  return (
    <PageLayout isSpacing start={1} end={4}>
      <div onClick={handleMoveToSearchPageClick}>
        <SearchBar placeholder="어떤 클래스를 찾고 싶으신가요?" />
      </div>
      <Section start={2}>
        <Category />
      </Section>
      <Section start={4}>
        <Typograpy variant="headline-4">최근 등록된 클래스</Typograpy>
        <LectureList lectureInfoList={lectureInfoList} />
      </Section>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(queryKeys.lectureInfo, () => api.fetchLectureInfo());

  return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 10 };
};

export default Home;
