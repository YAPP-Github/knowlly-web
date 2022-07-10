import { SvgIcon, Typograpy } from '@components/Common';
import { ILectureDetailSchedule } from '@/types/lectureDetail';
import { formatDate, formatTime, getLectureTime } from '@utils';
import React from 'react';
import * as Styled from './ScheduleBoxStyle';
interface IScheduleBoxProps {
  schedule: ILectureDetailSchedule;
  isSelected: boolean;
  _onClick: () => void;
}

const ScheduleBox = (props: IScheduleBoxProps) => {
  const { schedule, isSelected, _onClick } = props;
  return (
    <>
      <Styled.Container>
        <Styled.TextWrapper>
          <Typograpy variant="button-1">{formatDate(schedule.startAt)}</Typograpy>
          <Typograpy variant="body-2" textColor="gray6B">
            {formatTime(schedule.startAt)} ({getLectureTime(schedule.startAt, schedule.endAt)}시간
            수업)
          </Typograpy>
        </Styled.TextWrapper>
        <div onClick={_onClick}>
          {isSelected ? (
            <SvgIcon type="list-checkbox-checked"></SvgIcon>
          ) : (
            <SvgIcon type="list-checkbox-default"></SvgIcon>
          )}
        </div>
      </Styled.Container>
    </>
  );
};

export default ScheduleBox;
