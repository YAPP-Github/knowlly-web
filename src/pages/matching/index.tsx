import { Layout } from '@components/Common';
import { FirstStep, SecondStep, Title } from '@components/Matching';
import { NextPage } from 'next';

const Matching: NextPage = () => {
  return (
    <Layout>
      <SecondStep />
    </Layout>
  );
};

export default Matching;
