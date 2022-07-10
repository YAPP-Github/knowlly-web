import { IReview } from '@/types/review';
import { IMatching } from '@/types/matching';
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

  async postReview(coachId: number, review: IReview) {
    const { data } = await createAxiosWithTestToken('').post(`review/coach/${coachId}`, review);
    return data;
  }

  async postMatchingForm(scheduleId: number, matchingForm: IMatching) {
    const { data } = await createAxiosWithTestToken('').post(
      `form/lecture/${scheduleId}`,
      matchingForm
    );
    return data;
  }
}

const api = new HttpAPI();

export default api;
