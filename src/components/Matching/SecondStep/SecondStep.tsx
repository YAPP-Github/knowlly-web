import { TextArea, Typograpy } from '@components/Common';
import React, { useState } from 'react';
import Title from '../Title/Title';
import * as Styled from './SecondStepStyle';

const SecondStep = () => {
  const [introduction, setIntroduction] = useState('');

  const handleIntroductionText = (value: string) => {
    setIntroduction(value);
  };

  return (
    <>
      <Title />
      <Styled.TextWrapper>
        <Typograpy variant="subtitle-2">소개 작성</Typograpy>
        <Typograpy variant="body-2" textColor="gray8F">
          간단한 소개와 궁금한 내용을 적어주세요.
        </Typograpy>
      </Styled.TextWrapper>
      <TextArea maxLength={500} _onInputEntered={handleIntroductionText} />
    </>
  );
};

export default SecondStep;
