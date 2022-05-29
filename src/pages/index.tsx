import type { NextPage } from 'next';
import { Button, FabButton, TextMoreButton, Input, TextArea } from '@components/Common';

const Home: NextPage = () => {
  const handleTestButton = () => {
    console.log('check');
  };

  return (
    <>
      <Button variant="contained" type="button" size="big" _onClick={handleTestButton}>
        test button
      </Button>
      <TextMoreButton _onClick={handleTestButton} />
      <FabButton _onClick={handleTestButton} />
      <Input placeholder="default" maxLength={10} />
      <TextArea placeholder="default" maxLength={300} />
    </>
  );
};

export default Home;
