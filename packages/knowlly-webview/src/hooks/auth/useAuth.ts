import api from '@api';
import { useQuery } from 'react-query';
import queryKeys from '@react-query/keys';
import { IProfile } from '@/types/profile';

const useAuth = (): IProfile => {
  const { data } = useQuery(queryKeys.auth, () => api.fetchUser());
  return data;
};

export default useAuth;
