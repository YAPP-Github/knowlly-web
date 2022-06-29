import { useState } from 'react';
import type { NextPage } from 'next';
import { SearchBar, Typograpy } from '@components/Common';
import { Layout, Section } from '@components/Layout';
import { Category, LectureList } from '@components/Home';

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <Layout isSpacing>
      <SearchBar placeholder="어떤 클래스를 찾고 싶으신가요?" setSearchValue={setSearchValue} />
      <Section start={2}>
        <Category />
      </Section>
      <Section start={4}>
        <Typograpy variant="headline-4">최근 등록된 클래스</Typograpy>
        <LectureList />
      </Section>
    </Layout>
  );
};

export default Home;
