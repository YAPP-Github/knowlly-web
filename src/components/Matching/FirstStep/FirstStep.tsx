import { Typograpy } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import { useSelect } from '@hooks';
import { matchingStepState, playerMatchingState } from '@recoil/matching/atoms';
import { ILectureDetailSchedule } from '@/types/lectureDetail';
import React from 'react';
import { useRecoilState } from 'recoil';
import ScheduleBox from '../ScheduleBox/ScheduleBox';
import * as Styled from './FirstStepStyle';

interface ILectureScheduleProps {
  lectureSchedule: ILectureDetailSchedule[];
}

const FirstStep = ({ lectureSchedule }: ILectureScheduleProps) => {
  const { selectedIndex, setSelectedIndex } = useSelect(lectureSchedule);
  const [matchingStep, setMatchingStep] = useRecoilState(matchingStepState);
  const [playerMatching, setPlayerMatching] = useRecoilState(playerMatchingState);

  const handleScheduleClick = (id: number) => {
    setSelectedIndex(id);
    setTimeout(() => setMatchingStep(matchingStep + 1), 300);
    setPlayerMatching({ ...playerMatching, schedule: 'schedule' }); //TODO: 일정 parsing
  };

  return (
    <PageLayout isSpacing>
      <Styled.TextWrapper>
        <Typograpy variant="subtitle-2">일정 선택</Typograpy>
        <Typograpy variant="body-2" textColor="gray8F">
          코치가 보낸 일정 중 한가지만 선택해주세요.
        </Typograpy>
      </Styled.TextWrapper>
      {lectureSchedule.map((schedule) => (
        <ScheduleBox
          key={schedule.id}
          schedule={schedule}
          isSelected={selectedIndex === schedule.id}
          _onClick={() => handleScheduleClick(schedule.id)}
        />
      ))}
    </PageLayout>
  );
};

export default FirstStep;
