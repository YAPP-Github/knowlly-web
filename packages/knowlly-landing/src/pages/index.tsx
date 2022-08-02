import Footer from '@components/Footer/Footer';
import Feature from '@components/Feature/Feature';
import Guide from '@components/Guide/Guide';
import Download from '@components/Download/Download';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Feature />
      <Guide />
      <Download />
      <Footer />
    </>
  );
};

export default Home;
