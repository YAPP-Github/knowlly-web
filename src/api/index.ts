import createAxiosWithTestToken from './customAxios';

class HttpAPI {
  async fetchLectureInfo(params = '') {
    const { data } = await createAxiosWithTestToken('lectureinfo').get(params);

    return data;
  }

  async fetchLectureDetail(lectureId: number) {
    const { data } = await createAxiosWithTestToken(`lectureinfo/${lectureId}`).get('');
    return data;
  }
}

const api = new HttpAPI();

export default api;
