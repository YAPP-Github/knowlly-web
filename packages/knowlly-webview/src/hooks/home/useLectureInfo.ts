import api from '@api';
import { useQuery } from 'react-query';
import queryKeys from '@react-query/keys';
import { ILectureInfo } from '@/types/lectureInfo';

interface IUseLectureInfo {
  lectureInfoList: ILectureInfo;
  isFetching: boolean;
}

const useLectureInfo = (): IUseLectureInfo => {
  const { data: lectureInfoList = {}, isFetching } = useQuery(queryKeys.lectureInfo, () =>
    api.fetchLectureInfo()
  );

  return { lectureInfoList, isFetching };
};

export default useLectureInfo;
