import { IPlayerUserForm } from '@/types/coachLecture';
import api from '@api';
import queryKeys from '@react-query/keys';
import { useQuery } from 'react-query';

interface IUseMatchingForm {
  matchingFormData: IPlayerUserForm;
  isFetching: boolean;
}

const useMatchingForm = (formId: string): IUseMatchingForm => {
  const { data: matchingFormData, isFetching } = useQuery(
    [queryKeys.coachLectureFormDetail, formId],
    () => api.fetchFormData(formId),
    {
      enabled: !!formId,
      select: (data) => {
        return data.data;
      },
    }
  );

  return { matchingFormData, isFetching };
};

export default useMatchingForm;
