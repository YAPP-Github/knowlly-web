import { Fragment, useEffect, useMemo } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
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

const Category: NextPage = () => {
  const router = useRouter();
  const categoryId = router.query.id;

  const { lectureInfoList, fetchNextPage, isLoading, isFetching } = useInfiniteLecture(
    '?categoryId',
    categoryId as string
  );

  const { ref, inView } = useInView();

  const setCategoryTitle = useMemo(() => {
    const categoryTitle = CATEGORY_LIST?.filter((category) => {
      return String(category.id) === categoryId;
    });

    return categoryTitle[0]?.name;
  }, [categoryId]);

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categoryId = context.query.id;
  const queryString = `?categoryId=${categoryId}&page=0&size=10`;
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery([queryKeys.lectureInfo, queryString], () =>
    api.fetchLectureInfo(queryString)
  );

  return { props: { dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))) } };
};

export default Category;
