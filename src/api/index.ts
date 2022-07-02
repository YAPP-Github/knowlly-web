import createAxiosWithTestToken from './customAxios';

class HttpAPI {
  async fetchLectureInfo(params: string) {
    const { data } = await createAxiosWithTestToken('lectureinfo').get(params);

    return data;
  }
}

const api = new HttpAPI();

export default api;
