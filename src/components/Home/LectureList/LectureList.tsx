import { LectureCard } from '@components/Home';
import * as Styled from './LectureListStyle';

const LectureList = () => {
  const test = ['1', '2', '3'];

  return (
    <Styled.LectureListContainer>
      {test.map((lecture) => (
        <LectureCard key={lecture} />
      ))}
    </Styled.LectureListContainer>
  );
};

export default LectureList;
