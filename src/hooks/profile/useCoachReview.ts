import api from '@api';
import { useQuery } from 'react-query';
import queryKeys from '@react-query/keys';
import { ICoachReview } from '@/types/profile';

const useCoachReview = (userId: number): ICoachReview => {
  const { data: review } = useQuery([queryKeys.coachReview, userId], () =>
    api.fetchCoachReview(userId)
  );

  return review;
};

export default useCoachReview;
