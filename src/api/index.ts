import { IReview } from '@/types/review';
import createAxiosWithTestToken from './customAxios';

class HttpAPI {
  async fetchLectureInfo(params = '') {
    const { data } = await createAxiosWithTestToken('lectureinfo').get(params);

    return data;
  }

  async postReview(coachId: number, review: IReview) {
    const { data } = await createAxiosWithTestToken('').post(`review/coach/${coachId}`, review);
    return data;
  }
}

const api = new HttpAPI();

export default api;
