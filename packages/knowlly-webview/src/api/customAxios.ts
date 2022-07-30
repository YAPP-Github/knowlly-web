import axios, { AxiosInstance } from 'axios';

const BASE_URL = process.env.BASE_URL;
const HEADERS = {
  'Cache-Control': 'no-cache',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json; charset=utf-8',
};

const createAxiosWithTestToken = (url: string): AxiosInstance => {
  axios.defaults.headers.common['X-AUTH-TOKEN'] = process.env.TEST_TOKEN as string;

  return axios.create({
    baseURL: `${BASE_URL}/api/${url}`,
    headers: HEADERS,
    withCredentials: true,
  });
};

export default createAxiosWithTestToken;
