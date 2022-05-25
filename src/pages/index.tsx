import type { NextPage } from 'next';
import { Button, FabButton, TextMoreButton } from '@components/Common';
import Input from '@components/Common/Forms/Input';

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
      <Input placeholder="default" type="single" maxLength={10} />
    </>
  );
};

export default Home;
