import { LectureCard } from '@components/Home';
import EmptyLectureList from '../EmptyLectureList/EmptyLectureList';
import { ILectureInfo, ILecturePages } from '@/types/lectureInfo';
import * as Styled from './LectureListStyle';

interface ILectureList {
  lectureInfoList: ILectureInfo | ILecturePages;
}

const LectureList = ({ lectureInfoList }: ILectureList) => {
  return (
    <Styled.LectureListContainer>
      {lectureInfoList.data?.length > 0 ? (
        <>
          {lectureInfoList.data.map((lecture) => (
            <LectureCard key={lecture.id} lectureData={lecture} />
          ))}
        </>
      ) : (
        <EmptyLectureList />
      )}
    </Styled.LectureListContainer>
  );
};

export default LectureList;
