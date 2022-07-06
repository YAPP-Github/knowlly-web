import { useState } from 'react';
import type { NextPage } from 'next';
import { SearchBar, Typograpy } from '@components/Common';
import { PageLayout, Section } from '@components/Common/Layout';
import { Category, LectureList } from '@components/Home';

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <PageLayout isSpacing>
      <SearchBar placeholder="어떤 클래스를 찾고 싶으신가요?" setSearchValue={setSearchValue} />
      <Section start={2}>
        <Category />
      </Section>
      <Section start={4}>
        <Typograpy variant="headline-4">최근 등록된 클래스</Typograpy>
        <LectureList />
      </Section>
    </PageLayout>
  );
};

export default Home;
