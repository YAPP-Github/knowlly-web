import { rest } from 'msw';
import { lectureinfo } from './mockData/lectureInfo';

export const handlers = [
  rest.get('http://knowllydev.hkpark.net/api/lectureinfo', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(lectureinfo));
  }),
];
