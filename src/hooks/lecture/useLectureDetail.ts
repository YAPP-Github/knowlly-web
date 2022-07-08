import api from '@api';
import { useQuery } from 'react-query';
import queryKeys from '@react-query/keys';
import { ILectureDetail } from '@/types/lectureDetail';

const useLectureDetail = (lectureId: number): ILectureDetail => {
  const { data: lectureDetail } = useQuery(queryKeys.lectureDetail, () =>
    api.fetchLectureDetail(lectureId)
  );
  console.log(lectureDetail);
  return lectureDetail;
};

export default useLectureDetail;
