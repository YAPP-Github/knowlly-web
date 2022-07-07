import { Typograpy } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import { useSelect } from '@hooks';
import { matchingStepState, playerMatchingState } from '@recoil/matching/atoms';
import React from 'react';
import { useRecoilState } from 'recoil';
import ScheduleBox from '../ScheduleBox/ScheduleBox';
import * as Styled from './FirstStepStyle';

// API 연동 전 임시 Array Type
export interface ISchedule {
  id: number;
  day: string;
  time: string;
}

const FirstStep = () => {
  const schedules = [
    { id: 0, day: '6월 24일 (화)', time: '오후 6:00 (3시간 수업)' },
    { id: 1, day: '5월 24일 (화)', time: '오후 6:00 (3시간 수업)' },
  ];

  const { selectedIndex, setSelectedIndex } = useSelect(schedules);
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
      {schedules.map((schedule) => (
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
