import { Fragment, useEffect, useMemo } from 'react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Typograpy } from '@components/Common';
import { PageLayout, Section } from '@components/Common/Layout';
import { LectureList, LoadingList } from '@components/Home';
import useInfiniteLecture from '@hooks/home/useInfiniteLecture';
import CATEGORY_LIST from '@constants/categoryList';
import { useInView } from 'react-intersection-observer';
import { dehydrate, QueryClient } from 'react-query';
import queryKeys from '@react-query/keys';
import api from '@api';

const LectureCategoryPage: NextPage = () => {
  const router = useRouter();
  const categoryName = String(router.query.name);

  const { lectureInfoList, fetchNextPage, isLoading, isFetching } = useInfiniteLecture(
    '?categoryName',
    categoryName
  );

  const { ref, inView } = useInView();

  const setCategoryTitle = useMemo(() => {
    const categoryTitle = CATEGORY_LIST?.filter((category) => {
      return category.name === categoryName;
    });

    return categoryTitle[0]?.title;
  }, [categoryName]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) {
    return <LoadingList isLoading title={setCategoryTitle} />;
  }

  return (
    <PageLayout isSpacing start={1} end={4}>
      <Typograpy variant="headline-3">{setCategoryTitle}</Typograpy>
      <Section start={2}>
        {isFetching && <LoadingList isFetching />}
        {lectureInfoList &&
          lectureInfoList.pages.map((pageData) => (
            <Fragment key={pageData.currentPage}>
              <LectureList lectureInfoList={pageData} />
            </Fragment>
          ))}
      </Section>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const categoryName = context.params?.name;
  const queryString = `?categoryName=${categoryName}&page=0&size=10`;
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery([queryKeys.lectureInfo, queryString], () =>
    api.fetchLectureInfo(queryString)
  );

  return {
    props: { dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))) },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CATEGORY_LIST.map((category) => ({ params: { name: `${category.name}` } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default LectureCategoryPage;
