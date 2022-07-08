import createAxiosWithTestToken from './customAxios';

class HttpAPI {
  async fetchLectureInfo(params = '') {
    const { data } = await createAxiosWithTestToken('lectureinfo').get(params);

    return data;
  }

  // async postReview(payload: any) {
  //   const { data } = await createAxiosWithTestToken(`review/coach/1`).post(payload);
  //   return data;
  // }
}

const api = new HttpAPI();

export default api;
