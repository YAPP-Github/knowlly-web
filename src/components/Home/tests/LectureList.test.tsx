/**
 * @jest-environment jsdom
 */

import { renderHook, WrapperComponent } from '@testing-library/react-hooks';
import { createQueryClientWrapper } from '../../../test-utils';
import useLectureInfo from '../hooks/useLectureInfo';

test('최근 등록된 클래스 목록 유무 확인', async () => {
  const { result, waitFor } = renderHook(useLectureInfo, {
    wrapper: createQueryClientWrapper() as unknown as WrapperComponent<string>,
  });

  await waitFor(() => result.current.data.length > 0);
});
