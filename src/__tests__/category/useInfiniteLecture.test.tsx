import { renderHook } from '@testing-library/react-hooks';
import { createQueryClientWrapper } from '@test-utils';
import useInfiniteLecture from '@hooks/home/useInfiniteLecture';
import { categoryLecture } from '@mocks/mockData/categoryLecture';

const categoryLectureList = () => categoryLecture;

jest.mock('@hooks/home/useInfiniteLecture', () => ({
  __esModule: true,
  default: categoryLectureList,
}));

test('개발 관련 클래스 목록 조회', async () => {
  const { result, waitFor } = renderHook(() => useInfiniteLecture('?categoryId', '3'), {
    wrapper: createQueryClientWrapper(),
  });

  const developLectureList = result.current.lectureInfoList?.pages[0].data;

  await waitFor(() => expect(developLectureList).toHaveLength(1));
});
