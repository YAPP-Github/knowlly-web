import { SvgIcon, Typograpy } from '@components/Common';
import React from 'react';
import * as Styled from './ScheduleBoxStyle';

const ScheduleBox = () => {
  return (
    <>
      <Styled.Container>
        <Styled.TextWrapper>
          <Typograpy variant="button-1">5월 24일 (화)</Typograpy>
          <Typograpy variant="body-2" textColor="gray6B">
            오후 6:00 (3시간 수업)
          </Typograpy>
        </Styled.TextWrapper>
        <SvgIcon type="list-checkbox-checked"></SvgIcon>
      </Styled.Container>
    </>
  );
};

export default ScheduleBox;
