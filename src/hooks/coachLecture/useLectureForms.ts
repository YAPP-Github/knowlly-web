import { useState } from 'react';
import { ICoachLectureData, IPlayerUserForm } from '@/types/coachLecture';
import api from '@api';
import queryKeys from '@react-query/keys';
import { useQuery } from 'react-query';

interface IUseMatchingForm {
  lectureForms: IPlayerUserForm[];
  isLoading: boolean;
  isFetching: boolean;
}

const useLectureForms = (lectureInfoId: string): IUseMatchingForm => {
  const [lectureForms, setLectureForms] = useState<IPlayerUserForm[]>([]);

  const filteredCoachLectureForms = (lectures: ICoachLectureData[]) => {
    const filterdLectures = lectures.filter(
      (lecture: ICoachLectureData) => lecture.id === Number(lectureInfoId)
    );

    return filterdLectures[0].forms;
  };

  const { isLoading, isFetching } = useQuery(
    [queryKeys.coachLecture, lectureInfoId],
    () => api.fetchCoachLectureForms(),
    {
      enabled: !!lectureInfoId,
      onSuccess: (data) => {
        const forms = filteredCoachLectureForms(data.data[0].lectures);

        setLectureForms(forms);
      },
    }
  );

  return { lectureForms, isLoading, isFetching };
};

export default useLectureForms;
