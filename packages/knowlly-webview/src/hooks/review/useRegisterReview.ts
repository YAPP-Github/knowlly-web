import api from '@api';
import { IReview } from '@/types/review';
import { useMutation } from 'react-query';

const useRegisterReview = (lectureId: number) => {
  const { mutate } = useMutation((review: IReview) => api.postReview(lectureId, review), {
    onSuccess: () => {
      console.log('success');
      window.Android?.showToast('후기 등록이 완료되었습니다.');
      window.Android?.navigateUp();
    },
  });
  return { mutate };
};

export default useRegisterReview;
