import api from '@api';
import { useQuery } from 'react-query';
import queryKeys from '@react-query/keys';
import { ILectureInfo } from '@/types/lectureInfo';

const useLectureInfo = (): ILectureInfo => {
  const { data: lectureInfoList = {} } = useQuery(queryKeys.lectureInfo, () =>
    api.fetchLectureInfo()
  );

  return lectureInfoList;
};

export default useLectureInfo;
