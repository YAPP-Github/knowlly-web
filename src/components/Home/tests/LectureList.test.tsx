/**
 * @jest-environment jsdom
 */

import Home from '@pages';
import { screen } from '@testing-library/react';
import { renderHook, WrapperComponent } from '@testing-library/react-hooks';
import { createQueryClientWrapper, renderWithQueryClient } from '@test-utils';
import useLectureInfo from '../hooks/useLectureInfo';

test('클래스 카테고리 목록', () => {
  renderWithQueryClient(<Home />);

  const categoryList = screen.getAllByText(/기획|디자인|개발|마케팅|외국어|기타/i);

  expect(categoryList).toHaveLength(6);
});

test('최근 등록된 클래스 목록 유무 확인', async () => {
  const { result, waitFor } = renderHook(useLectureInfo, {
    wrapper: createQueryClientWrapper() as unknown as WrapperComponent<string>,
  });

  await waitFor(() => result.current.data.length > 0);
});
