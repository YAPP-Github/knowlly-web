import { Button, TextArea, Typograpy } from '@components/Common';
import { matchingState } from '@store/atoms/matchingState';
import { matchingStepState } from '@store/atoms/matchingStepState';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Title from '../Title/Title';
import * as Styled from './SecondStepStyle';
import { MatchingButton } from '../MatchingStyle';
import { Layout } from '@components/Common/Layout';

const SecondStep = () => {
  const [introduction, setIntroduction] = useState('');
  const [matching, setMatching] = useRecoilState(matchingState);
  const [matchingStep, setMatchingStep] = useRecoilState(matchingStepState);

  const handleIntroductionText = (value: string) => {
    setIntroduction(value);
  };

  const handleNextButtonClick = () => {
    nextStep();
    setMatching({ ...matching, introduction: introduction });
  };

  const nextStep = () => {
    setMatchingStep(matchingStep + 1);
  };

  return (
    <>
      <Layout isSpacing>
        <Title />
        <Styled.TextWrapper>
          <Typograpy variant="subtitle-2">소개 작성</Typograpy>
          <Typograpy variant="body-2" textColor="gray8F">
            간단한 소개와 궁금한 내용을 적어주세요.
          </Typograpy>
        </Styled.TextWrapper>
        <TextArea value={introduction} maxLength={500} _onInputEntered={handleIntroductionText} />
      </Layout>
      <MatchingButton _onClick={handleNextButtonClick} disabled={introduction.length === 0}>
        매칭 신청 완료하기
      </MatchingButton>
    </>
  );
};

export default SecondStep;
