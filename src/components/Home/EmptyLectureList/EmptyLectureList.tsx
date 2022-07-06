import Image from 'next/image';
import { Button, Typograpy } from '@components/Common';
import * as Styled from './EmptyLectureListStyle';

interface ISearchModalProps {
  _onClickBackButton: () => void;
}

const EmptyLectureList = ({ _onClickBackButton }: ISearchModalProps) => {
  return (
    <Styled.EmptyLectureListContainer>
      <Image
        src="/img/empty-data.png"
        alt="검색한 클래스를 찾을 수 없습니다."
        width={208}
        height={170}
      />
      <Typograpy variant="body-1">원하는 클래스를 찾을 수 없습니다.</Typograpy>
      <Button size="x-small" _onClick={_onClickBackButton}>
        홈화면으로 이동
      </Button>
    </Styled.EmptyLectureListContainer>
  );
};

export default EmptyLectureList;
