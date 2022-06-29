import { Layout } from '@components/Common';
import { Title } from '@components/Matching';
import ScheduleBox from '@components/Matching/ScheduleBox/ScheduleBox';
import { NextPage } from 'next';

const Matching: NextPage = () => {
  return (
    <Layout>
      <Title />
      <ScheduleBox />
    </Layout>
  );
};

export default Matching;
