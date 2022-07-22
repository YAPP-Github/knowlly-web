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
    const { data } = await createAxiosWithTestToken('').post(
      `review/coach/lecture/${coachId}`,
      review
    );
    return data;
  }

  async postMatchingForm(scheduleId: number, matchingForm: IPlayerMatchingForm) {
    const { data } = await createAxiosWithTestToken('').post(
      `form/lecture/${scheduleId}`,
      matchingForm
    );
    return data;
  }

  async fetchFormData(formId: string) {
    const { data } = await createAxiosWithTestToken(`form`).get(`/${formId}`);
    return data;
  }

  async fetchCoachLectureForms() {
    const { data } = await createAxiosWithTestToken(`coach/lecture/me`).get(`?state=ON_BOARD`);
    return data;
  }

  async fetchUser() {
    const { data } = await createAxiosWithTestToken('user').get('me');
    return data;
  }
}

const api = new HttpAPI();

export default api;
