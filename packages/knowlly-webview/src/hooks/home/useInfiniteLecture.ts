import api from '@api';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from 'react-query';
import queryKeys from '@react-query/keys';
import { ILecturePages } from '@/types/lectureInfo';

interface IUseInfiniteLecture {
  lectureInfoList?: InfiniteData<ILecturePages>;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<ILecturePages, unknown>>;
  hasNextPage?: boolean;
  isLoading: boolean;
  isFetching: boolean;
}

const useInfiniteLecture = (queryKey: string, queryValue: string): IUseInfiniteLecture => {
  const getQueryString = (page = 0, value = queryValue) => {
    return `${queryKey}=${value}&page=${page}&size=10`;
  };

  const {
    data: lectureInfoList,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
  } = useInfiniteQuery(
    [queryKeys.lectureInfo, getQueryString()],
    ({ pageParam = getQueryString() }) => api.fetchLectureInfo(pageParam),
    {
      enabled: !!queryValue,
      getNextPageParam: (lastPage) => {
        if (lastPage.currentPage === lastPage.totalPage) {
          return undefined;
        }

        return getQueryString(lastPage.currentPage + 1);
      },
    }
  );

  return { lectureInfoList, fetchNextPage, hasNextPage, isLoading, isFetching };
};

export default useInfiniteLecture;
