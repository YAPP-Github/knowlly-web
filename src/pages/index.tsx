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
  Typograpy,
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
      <p>글로벌 폰트 테스트</p>
      <Typograpy variant="headline-1">헤더-1</Typograpy>
      <Typograpy variant="subtitle-3">서브헤더-3</Typograpy>
      <Typograpy variant="body-2">바디-2</Typograpy>
      <Button size="x-small" type="button">
        <Typograpy variant="button-1">버튼-1</Typograpy>
      </Button>
    </>
  );
};

export default Home;
