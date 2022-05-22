import type { NextPage } from 'next';
import { Button, FabButton, TextMoreButton } from '@components/Common';

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
    </>
  );
};

export default Home;
