import { IReview } from '@/types/review';
import { IPlayerMatchingForm } from '@/types/matching';
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

  async fetchUserProfile(userId: number) {
    const { data } = await createAxiosWithTestToken(`user/${userId}`).get('');
    return data;
  }

  async fetchCoachReview(userId: number) {
    const { data } = await createAxiosWithTestToken(`review/user/${userId}`).get('');
    return data;
  }

  async postReview(coachId: number, review: IReview) {
    const { data } = await createAxiosWithTestToken('').post(`review/coach/${coachId}`, review);
    return data;
  }

  async postMatchingForm(scheduleId: number, matchingForm: IPlayerMatchingForm) {
    const { data } = await createAxiosWithTestToken('').post(
      `form/lecture/${scheduleId}`,
      matchingForm
    );
    return data;
  }

  async fetchCoachLectureForm(formId: string) {
    const { data } = await createAxiosWithTestToken(`form`).get(`/${formId}`);
    return data;
  }

  async fetchCoachLecture() {
    const { data } = await createAxiosWithTestToken('coach/lecture/me').get('');
    return data;
  }

  async fetchPlayerLecture() {
    const { data } = await createAxiosWithTestToken('user/lecture/me').get('');
    return data;
  }
}

const api = new HttpAPI();

export default api;
