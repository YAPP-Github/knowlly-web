import type { NextPage } from 'next';
import Introduce from '@components/Introduce';
import Footer from '@components/Footer/Footer';
import Feature from '@components/Feature/Feature';
import Guide from '@components/Guide/Guide';
import Download from '@components/Download/Download';

const Home: NextPage = () => {
  return (
    <main>
      <Introduce.App />
      <Introduce.Service />
      <Feature />
      <Guide />
      <Download />
      <Footer />
    </main>
  );
};

export default Home;
