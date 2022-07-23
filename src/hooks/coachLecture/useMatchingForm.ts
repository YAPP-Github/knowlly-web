import { IPlayerUserMatchingForm } from '@/types/coachLecture';
import api from '@api';
import queryKeys from '@react-query/keys';
import { useQuery } from 'react-query';

interface IUseMatchingForm {
  matchingFormData: IPlayerUserMatchingForm;
  isFetching: boolean;
}

const useMatchingForm = (formId: string): IUseMatchingForm => {
  const { data: matchingFormData, isFetching } = useQuery(
    [queryKeys.coachLectureFormDetail, formId],
    () => api.fetchFormData(formId)
  );

  return { matchingFormData, isFetching };
};

export default useMatchingForm;
