import { SvgIcon, Typograpy } from '@components/Common';
import React from 'react';
import { ISchedule } from '../FirstStep/FirstStep';
import * as Styled from './ScheduleBoxStyle';
interface IScheduleBoxProps {
  schedule: ISchedule;
  isSelected: boolean;
  _onClick: () => void;
}

const ScheduleBox = (props: IScheduleBoxProps) => {
  const { schedule, isSelected, _onClick } = props;
  return (
    <>
      <Styled.Container>
        <Styled.TextWrapper>
          <Typograpy variant="button-1">{schedule.day}</Typograpy>
          <Typograpy variant="body-2" textColor="gray6B">
            {schedule.time}
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
