import { rest } from 'msw';
import { lectureinfo } from './mockData/lectureInfo';

const BASE_URL = process.env.BASE_URL;

export const handlers = [
  rest.get(`${BASE_URL}/api/lectureinfo`, (req, res, ctx) => {
    return res(ctx.json(lectureinfo));
  }),
];
