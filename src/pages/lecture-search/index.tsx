import { Fragment, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Header, SearchBar } from '@components/Common';
import { PageLayout, Section } from '@components/Common/Layout';
import { LectureList, LoadingList } from '@components/Home';
import useInfiniteLecture from '@hooks/home/useInfiniteLecture';
import { useInView } from 'react-intersection-observer';

const LectureSearchPage: NextPage = () => {
  const [searchVavlue, setSearchValue] = useState<string>('');

  const { lectureInfoList, fetchNextPage, isFetching } = useInfiniteLecture(
    'search?keyword',
    searchVavlue
  );

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <PageLayout>
      <Header hasBackButton hasLine>
        <SearchBar placeholder="어떤 클래스를 찾고 싶으신가요?" setSearchValue={setSearchValue} />
      </Header>
      <Section isSpacing start={2}>
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

export default LectureSearchPage;
