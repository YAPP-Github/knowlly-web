import { useCallback } from 'react';
import type { NextPage } from 'next';
import { SearchBar, Typograpy } from '@components/Common';
import { PageLayout, Section } from '@components/Common/Layout';
import { Category, LectureList, SearchModal } from '@components/Home';
import useLectureInfo from '@hooks/home/useLectureInfo';
import { useRecoilState } from 'recoil';
import { isShowSearchModalAtom } from '@recoil/home/atoms';

const Home: NextPage = () => {
  const [isShowSearchModal, setIsShowSearchModal] = useRecoilState(isShowSearchModalAtom);

  const lectureInfoList = useLectureInfo();

  const handleSearchModalDisplay = useCallback(() => {
    setIsShowSearchModal((prev) => !prev);
  }, [isShowSearchModal]);

  return (
    <PageLayout isSpacing start={1} end={4}>
      <SearchBar
        placeholder="어떤 클래스를 찾고 싶으신가요?"
        _onClickSeachBar={handleSearchModalDisplay}
      />
      <Section start={2}>
        <Category />
      </Section>
      <Section start={4}>
        <Typograpy variant="headline-4">최근 등록된 클래스</Typograpy>
        <LectureList lectureInfoList={lectureInfoList} />
      </Section>
      {isShowSearchModal && <SearchModal handleSearchModalDisplay={handleSearchModalDisplay} />}
    </PageLayout>
  );
};

export default Home;
