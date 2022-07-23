import api from '@api';
import { useQuery } from 'react-query';
import queryKeys from '@react-query/keys';
import { ILectureDetail } from '@/types/lectureDetail';

interface IUseLectureDetail {
  lectureDetail: ILectureDetail;
  isFetching: boolean;
}

const useLectureDetail = (lectureId: number): IUseLectureDetail => {
  const { data: lectureDetail, isFetching } = useQuery(
    [queryKeys.lectureDetail, lectureId],
    () => api.fetchLectureDetail(lectureId),
    {
      enabled: !!lectureId,
    }
  );

  return { lectureDetail, isFetching };
};

export default useLectureDetail;
