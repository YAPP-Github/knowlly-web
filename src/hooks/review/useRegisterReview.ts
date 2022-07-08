import api from '@api';
import { IReview } from '@/types/review';
import { useMutation } from 'react-query';

const useRegisterReview = (coachId: number) => {
  const { mutate } = useMutation((review: IReview) => api.postReview(coachId, review), {
    // TODO: 리뷰 등록이 성공적일 때 페이지 이동 (안드와 연동)
    onSuccess: () => {
      console.log('success');
    },
  });
  return { mutate };
};

export default useRegisterReview;
