import { IPlayerUserForm } from '@/types/coachLecture';
import api from '@api';
import queryKeys from '@react-query/keys';
import { useQuery } from 'react-query';

interface IUseMatchingForm {
  matchingFormData: IPlayerUserForm;
}

const useMatchingForm = (formId: string): IUseMatchingForm => {
  const { data: matchingFormData } = useQuery([queryKeys.coachLecture, formId], () =>
    api.fetchCoachLecture(formId)
  );

  return { matchingFormData: matchingFormData.data };
};

export default useMatchingForm;
