import api from '@api';
import { useQuery } from 'react-query';
import queryKeys from '@react-query/keys';
import { IProfile } from '@/types/profile';

const useProfile = (userId: number): IProfile => {
  const { data: userProfile } = useQuery([queryKeys.userProfile, userId], () =>
    api.fetchUserProfile(userId)
  );

  return userProfile;
};

export default useProfile;
