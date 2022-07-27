import { renderHook } from '@testing-library/react-hooks';
import { createQueryClientWrapper } from '@test-utils';
import useLectureInfo from '@hooks/home/useLectureInfo';
import { lectureinfo } from '@mocks/mockData/lectureInfo';

const lectureInfo = () => lectureinfo;

jest.mock('@hooks/home/useLectureInfo', () => ({
  __esModule: true,
  default: lectureInfo,
}));

test('useLectureInfo hook 테스트', async () => {
  const { result, waitFor } = renderHook(() => useLectureInfo(), {
    wrapper: createQueryClientWrapper(),
  });

  await waitFor(() => expect(result.current.data).toHaveLength(4));
});
