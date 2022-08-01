import { Fragment, useEffect, useMemo } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Typograpy } from '@components/Common';
import { PageLayout, Section } from '@components/Common/Layout';
import { LectureList, LoadingList } from '@components/Home';
import useInfiniteLecture from '@hooks/home/useInfiniteLecture';
import CATEGORY_LIST from '@constants/categoryList';
import { useInView } from 'react-intersection-observer';

const LectureCategoryPage: NextPage = () => {
  const router = useRouter();
  const categoryName = router.query.name;

  const { lectureInfoList, fetchNextPage, isLoading, isFetching } = useInfiniteLecture(
    '?categoryName',
    categoryName as string
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

export default LectureCategoryPage;
