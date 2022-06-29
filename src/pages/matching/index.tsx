import { Layout } from '@components/Common';
import { FirstStep, Title } from '@components/Matching';
import { NextPage } from 'next';

const Matching: NextPage = () => {
  return (
    <Layout>
      <FirstStep />
    </Layout>
  );
};

export default Matching;
