import api from '@api';
import { IPlayerMatchingForm } from '@/types/matching';
import { useMutation } from 'react-query';
import { matchingStepState } from '@recoil/matching/atoms';
import { useRecoilState } from 'recoil';

const useApplyMatching = (scheduleId: number) => {
  const [matchingStep, setMatchingStep] = useRecoilState(matchingStepState);
  const { mutate } = useMutation(
    (matchingForm: IPlayerMatchingForm) => api.postMatchingForm(scheduleId, matchingForm),
    {
      onSuccess: () => {
        setMatchingStep(matchingStep + 1);
      },
    }
  );
  return { mutate };
};

export default useApplyMatching;
