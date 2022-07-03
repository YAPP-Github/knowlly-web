/**
 * @jest-environment jsdom
 */

import Home from '@pages';
import { screen } from '@testing-library/react';
import { renderWithQueryClient } from '@test-utils';
import { lectureinfo } from '@mocks/mockData/lectureInfo';

const lectureInfo = () => lectureinfo;

jest.mock('@hooks/home/useLectureInfo', () => ({
  __esModule: true,
  default: lectureInfo,
}));

test('클래스 카테고리 목록', () => {
  renderWithQueryClient(<Home />);

  const categoryList = screen.getAllByText(/기획|^디자인$|^개발$|^마케팅$|^외국어$|^기타$/i);

  expect(categoryList).toHaveLength(6);
});

test('최근 등록된 클래스 목록', () => {
  renderWithQueryClient(<Home />);

  const lectureInfoList = screen.getAllByText(
    /맛있는 요리 만들기|그래픽을 그래그래|자바를 자바라|효과적인 마케팅/i
  );

  expect(lectureInfoList).toHaveLength(4);
});
