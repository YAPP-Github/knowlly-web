import { Button } from '@components/Common';
import { Layout } from '@components/Layout';
import { FirstStep, LastStep, SecondStep } from '@components/Matching';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as Styled from '../../components/Matching/MatchingStyle';

const Matching: NextPage = () => {
  const router = useRouter();
  const lectureId = router.query.id;

  const [step, setStep] = useState(0);
  const buttonText = ['다음', '신청하기', '확인'];

  const handleNextButtonClick = () => {
    nextStep();
  };

  const nextStep = () => {
    setStep(step + 1);
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
      case 0:
        return (
          <Styled.MatchingButton _onClick={handleNextButtonClick} disabled={true}>
            {buttonText[step]}
          </Styled.MatchingButton>
        );
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
      <Layout isSpacing>{setPage(step)}</Layout>
      {setButton(step)}
    </>
  );
};

export default Matching;
