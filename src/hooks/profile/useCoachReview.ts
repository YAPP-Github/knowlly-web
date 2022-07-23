import api from '@api';
import { useQuery } from 'react-query';
import queryKeys from '@react-query/keys';
import { ICoachReview } from '@/types/profile';

interface IUseCoachReview {
  review: ICoachReview;
  isFetching: boolean;
}

const useCoachReview = (userId: number): IUseCoachReview => {
  const { data: review, isFetching } = useQuery([queryKeys.coachReview, userId], () =>
    api.fetchCoachReview(userId)
  );

  return { review, isFetching };
};

export default useCoachReview;
