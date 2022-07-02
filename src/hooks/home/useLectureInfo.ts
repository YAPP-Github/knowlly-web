import api from '@api';
import { useQuery } from 'react-query';
import queryKeys from '@react-query/keys';
import { ILectureInfo } from '@/types/lectureInfo';

const useLectureInfo = (categoryId = ''): ILectureInfo => {
  const { data: lectureInfoList = {} } = useQuery(
    [queryKeys.lectureInfo, categoryId],
    () => api.fetchLectureInfo(`${categoryId}`),
    {
      keepPreviousData: true,
    }
  );

  return lectureInfoList;
};

export default useLectureInfo;
