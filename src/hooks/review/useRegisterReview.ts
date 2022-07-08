import api from '@api';
import createAxiosWithTestToken from '@api/customAxios';
import { IReview } from '@/types/review';
import { useMutation } from 'react-query';

const useRegisterReview = (coachId: number) => {
  const { mutate, data, isSuccess } = useMutation((payload: IReview) =>
    createAxiosWithTestToken('').post(`review/coach/${coachId}`, payload)
  );
  return { mutate, isSuccess };
};

export default useRegisterReview;
