import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { SearchBar, Typograpy } from '@components/Common';
import { PageLayout, Section } from '@components/Common/Layout';
import { Category, LectureList } from '@components/Home';
import useLectureInfo from '@hooks/home/useLectureInfo';

import api from '@api';
import { dehydrate, QueryClient } from 'react-query';
import queryKeys from '@react-query/keys';
import Link from 'next/link';

const Home: NextPage = () => {
  const lectureInfoList = useLectureInfo();

  return (
    <PageLayout isSpacing start={1} end={4}>
      <Link href="/lecture-search">
        <a>
          <SearchBar placeholder="어떤 클래스를 찾고 싶으신가요?" />
        </a>
      </Link>
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

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default Home;
