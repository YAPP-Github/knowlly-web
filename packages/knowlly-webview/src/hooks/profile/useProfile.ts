import api from '@api';
import { useQuery } from 'react-query';
import queryKeys from '@react-query/keys';
import { IProfile } from '@/types/profile';

interface IUseProfile {
  user: IProfile;
  isFetching: boolean;
}

const useProfile = (userId: number): IUseProfile => {
  const { data: user, isFetching } = useQuery(
    [queryKeys.userProfile, userId],
    () => api.fetchUserProfile(userId),
    {
      enabled: !!userId,
    }
  );

  return { user, isFetching };
};

export default useProfile;
