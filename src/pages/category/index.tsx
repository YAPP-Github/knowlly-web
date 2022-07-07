import { Fragment, useEffect, useMemo } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Typograpy } from '@components/Common';
import { PageLayout, Section } from '@components/Common/Layout';
import { LectureList } from '@components/Home';
import useInfiniteLecture from '@hooks/home/useInfiniteLecture';
import CATEGORY_LIST from '@constants/categoryList';
import { useInView } from 'react-intersection-observer';

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
    // TODO: Loading UI 변경 예정
    <div>Loading...</div>;
  }

  return (
    <PageLayout isSpacing start={1} end={4}>
      <Typograpy variant="headline-3">{setCategoryTitle}</Typograpy>
      <Section start={2}>
        {/* TODO: fetching UI 변경 예정 */}
        {isFetching && <div>Loading...</div>}
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

export default Category;
