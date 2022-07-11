import api from '@api';
import { useQuery } from 'react-query';
import queryKeys from '@react-query/keys';
import { ICoachLecture } from '@/types/coachLecture';

const useCoachLecture = (): ICoachLecture => {
  const { data } = useQuery(queryKeys.coachLecture, () => api.fetchCoachLecture());

  return data;
};

export default useCoachLecture;
