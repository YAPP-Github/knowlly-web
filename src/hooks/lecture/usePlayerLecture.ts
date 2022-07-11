import api from '@api';
import { useQuery } from 'react-query';
import queryKeys from '@react-query/keys';
import { IPlayerLecture } from '@/types/playerLecture';

const usePlayerLecture = (): IPlayerLecture => {
  const { data } = useQuery(queryKeys.playerLecture, () => api.fetchPlayerLecture());

  return data;
};

export default usePlayerLecture;
