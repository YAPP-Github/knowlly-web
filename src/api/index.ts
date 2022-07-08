import { IReview } from '@/types/review';
import createAxiosWithTestToken from './customAxios';

class HttpAPI {
  async fetchLectureInfo(params = '') {
    const { data } = await createAxiosWithTestToken('lectureinfo').get(params);

    return data;
  }

  async postReview(coachId: number, payload: IReview) {
    const { data } = await createAxiosWithTestToken('').post(`review/coach/${coachId}`, payload);
    return data;
  }
}

const api = new HttpAPI();

export default api;
