import { Layout } from '@components/Common/Layout';
import { FirstStep, LastStep, SecondStep } from '@components/Matching';
import { matchingStepState } from '@store/atoms/matchingStepState';
import { NextPage } from 'next';
import { useRecoilState } from 'recoil';

const Matching: NextPage = () => {
  const [matchingStep, setMatchingStep] = useRecoilState(matchingStepState);

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

  return <>{setPage(matchingStep)}</>;
};

export default Matching;
