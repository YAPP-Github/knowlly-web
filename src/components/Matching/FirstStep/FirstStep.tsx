import { Typograpy } from '@components/Common';
import React from 'react';
import ScheduleBox from '../ScheduleBox/ScheduleBox';
import Title from '../Title/Title';
import * as Styled from './FirstStepStyle';

const FirstStep = () => {
  return (
    <>
      <Title />
      <Styled.TextWrapper>
        <Typograpy variant="subtitle-2">일정 선택</Typograpy>
        <Typograpy variant="body-2" textColor="gray8F">
          코치가 보낸 일정 중 한가지만 선택해주세요.
        </Typograpy>
      </Styled.TextWrapper>
      <ScheduleBox />
      <ScheduleBox />
    </>
  );
};

export default FirstStep;
