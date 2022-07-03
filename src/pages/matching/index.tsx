import { Button } from '@components/Common';
import { Layout } from '@components/Common/Layout';
import { FirstStep, LastStep, SecondStep } from '@components/Matching';
import { matchingStepState } from '@store/atoms/matchingStepState';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import * as Styled from '../../components/Matching/MatchingStyle';

const Matching: NextPage = () => {
  const router = useRouter();
  const lectureId = router.query.id;

  const [disabled, setDisabled] = useState(false);
  const buttonText = ['다음', '신청하기', '확인'];

  const [matchingStep, setMatchingStep] = useRecoilState(matchingStepState);

  const handleNextButtonClick = () => {
    nextStep();
  };

  const nextStep = () => {
    setMatchingStep(matchingStep + 1);
  };

  const setPage = (step: number) => {
    switch (step) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <LastStep />;
    }
  };

  const setButton = (step: number) => {
    switch (step) {
      case 1:
        return (
          <Styled.MatchingButton _onClick={handleNextButtonClick} disabled={true}>
            {buttonText[step]}
          </Styled.MatchingButton>
        );
      case 2:
        return (
          <Link href={`/class-detail/${lectureId}`}>
            <a>
              <Styled.MatchingButton _onClick={handleNextButtonClick} disabled={true}>
                {buttonText[step]}
              </Styled.MatchingButton>
            </a>
          </Link>
        );
    }
  };

  return (
    <>
      <Layout isSpacing>{setPage(matchingStep)}</Layout>
      {setButton(matchingStep)}
    </>
  );
};

export default Matching;
