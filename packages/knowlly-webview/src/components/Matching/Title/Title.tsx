import { Typograpy } from '@components/Common';
import React from 'react';
import * as Styled from './TitleStyle';

const Title = () => {
  return (
    <>
      <Typograpy variant="headline-3">매칭 신청서</Typograpy>
      <Styled.Info>
        <Typograpy variant="body-2">매칭이 성사되면 볼 1개가 자동으로 차감됩니다.</Typograpy>
      </Styled.Info>
    </>
  );
};

export default Title;
