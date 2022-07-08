import api from '@api';
import { IReview } from '@/types/review';
import { useMutation } from 'react-query';

const useRegisterReview = (coachId: number) => {
  const { mutate, data, isSuccess } = useMutation((payload: IReview) =>
    api.postReview(coachId, payload)
  );
  return { mutate, isSuccess };
};

export default useRegisterReview;
