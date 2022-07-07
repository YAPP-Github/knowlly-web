import { Fragment, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Header, SearchBar } from '@components/Common';
import { PageLayout, Section } from '@components/Common/Layout';
import LectureList from '../LectureList/LectureList';
import useInfiniteLecture from '@hooks/home/useInfiniteLecture';
import * as Styled from './SearchModalStyle';
import { useInView } from 'react-intersection-observer';

interface ISearchModalProps {
  handleSearchModalDisplay: () => void;
}

const SearchModal = ({ handleSearchModalDisplay }: ISearchModalProps) => {
  const [searchVavlue, setSearchValue] = useState<string>('');

  const { lectureInfoList, fetchNextPage, isLoading, isFetching } = useInfiniteLecture(
    'search?keyword',
    searchVavlue
  );

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) {
    // TODO: Loading UI 변경 예정
    <div>Loading...</div>;
  }

  return createPortal(
    <PageLayout isSpacing>
      <Styled.SearchModalStyle>
        <Header hasBackButton hasLine _onBackButtonClick={handleSearchModalDisplay}>
          <SearchBar placeholder="어떤 클래스를 찾고 싶으신가요?" setSearchValue={setSearchValue} />
        </Header>
        <Section isSpacing start={2}>
          {/* TODO: fetching UI 변경 예정 */}
          {isFetching && <div>Loading...</div>}
          {lectureInfoList &&
            lectureInfoList.pages.map((pageData) => (
              <Fragment key={pageData.currentPage}>
                <LectureList lectureInfoList={pageData} />
              </Fragment>
            ))}
        </Section>
      </Styled.SearchModalStyle>
    </PageLayout>,
    document.body
  );
};

export default SearchModal;
