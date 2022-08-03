import Footer from '@components/Footer/Footer';
import Feature from '@components/Feature/Feature';
import Guide from '@components/Guide/Guide';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Feature />
      <Guide />
      <Footer />
    </>
  );
};

export default Home;
