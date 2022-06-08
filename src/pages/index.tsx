import type { NextPage } from 'next';
import {
  Button,
  FabButton,
  TextMoreButton,
  Input,
  TextArea,
  ContainedBadge,
  OutlinedBadge,
  SvgIcon,
} from '@components/Common';

const Home: NextPage = () => {
  const handleTestButton = () => {
    console.log('check');
  };

  return (
    <>
      <Button
        variant="contained"
        type="button"
        size="xx-small"
        disabled={true}
        _onClick={handleTestButton}
      >
        test button
      </Button>
      <TextMoreButton _onClick={handleTestButton} />
      <FabButton _onClick={handleTestButton} />
      <Input placeholder="default" maxLength={10} />
      <TextArea placeholder="default" maxLength={300} />
      <SvgIcon type="checkbox-checked" />
      <SvgIcon type="checkbox-default" />
      <SvgIcon type="clear" size={26} />
      <SvgIcon type="k_class" size={16} />
      <SvgIcon type="review" size={16} />
      <SvgIcon type="previous" />
      <SvgIcon type="indicator-1-active" />
      <SvgIcon type="indicator-1-inactive" />
      <SvgIcon type="indicator-2-active" />
      <SvgIcon type="indicator-2-inactive" />
      <SvgIcon type="list-checkbox-checked" />
      <SvgIcon type="list-checkbox-default" />
      <SvgIcon type="search" />
      <SvgIcon type="chevron-down-fill" />
      <SvgIcon type="chevron-down" />
      <SvgIcon type="chevron-up" />
      <SvgIcon type="chevron-right" />
      <SvgIcon type="category-1" />
      <SvgIcon type="category-2" />
      <SvgIcon type="category-3" />
    </>
  );
};

export default Home;
