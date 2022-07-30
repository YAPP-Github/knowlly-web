import { rest } from 'msw';
import { categoryLecture } from './mockData/categoryLecture';
import { lectureinfo } from './mockData/lectureInfo';

export const handlers = [
  rest.get('http://knowllydev.hkpark.net/api/lectureinfo', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(lectureinfo));
  }),

  rest.get(
    'http://knowllydev.hkpark.net/api/lectureinfo?categoryName=DEVELOP&page=0&size=10',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(categoryLecture));
    }
  ),
];
