import { IPatchFormStateData } from '@/types/coachLecture';
import api from '@api';
import { useMutation } from 'react-query';

const usePatchFormState = (formId: string) => {
  const handleShowToast = (state: string) => {
    if (state === 'ACCEPT') {
      window.Android?.showToast('매칭 신청을 수락했습니다.\n [예정된] 페이지에서 확인해주세요!');
    } else if (state === 'REJECT') {
      window.Android?.showToast('매칭 신청이 거절됐습니다.');
    }
  };

  const { mutate: patchFormState } = useMutation(
    (state: IPatchFormStateData) => api.patchCoachFormState(formId, state),
    {
      onSuccess: (data) => {
        const formState = data.data.state;

        if (!formState) {
          return;
        }

        handleShowToast(formState);
      },
    }
  );

  return patchFormState;
};

export default usePatchFormState;
