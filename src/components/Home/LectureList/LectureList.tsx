import { LectureCard } from '@components/Home';
import useLectureInfo from '@hooks/home/useLectureInfo';
import * as Styled from './LectureListStyle';

const LectureList = () => {
  const lectureInfoList = useLectureInfo();

  return (
    <Styled.LectureListContainer>
      {lectureInfoList.data?.map((lecture, index) => (
        <LectureCard key={index} lectureData={lecture} />
      ))}
    </Styled.LectureListContainer>
  );
};

export default LectureList;
