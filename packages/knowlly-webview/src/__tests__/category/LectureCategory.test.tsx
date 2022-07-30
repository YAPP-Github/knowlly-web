import LectureCategoryPage from '@pages/lecture-category/[name]';
import { screen, within } from '@testing-library/react';
import { renderWithQueryClient } from '@test-utils';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/lecture-category',
      pathname: '',
      query: { name: 'DEVELOP' },
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

test('클래스 개발 카테고리 타이틀', () => {
  renderWithQueryClient(<LectureCategoryPage />);

  const categoryTitle = screen.getByRole('heading', {
    name: '개발',
  });

  expect(categoryTitle).toBeInTheDocument();
});

test('클래스 개발 카테고리 목록 스켈레톤 로딩 UI', () => {
  renderWithQueryClient(<LectureCategoryPage />);

  const categoryList = screen.getByRole('list');
  const categoryItems = within(categoryList).getAllByRole('listitem');

  expect(categoryItems).toHaveLength(10);
});
