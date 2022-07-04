import { SvgIcon } from '@components/Common';
import { Layout } from '@components/Common/Layout';
import { FirstStep, LastStep, SecondStep, Title } from '@components/Matching';
import { matchingStepState } from '@store/atoms/matchingStepState';
import { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { IndicatorWrapper } from '@components/Matching/MatchingStyle';

const Matching: NextPage = () => {
  const matchingStep = useRecoilValue(matchingStepState);

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

  const setHeader = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <IndicatorWrapper>
              <SvgIcon type="indicator-1-active" size={20} />
              <SvgIcon type="indicator-2-inactive" size={20} />
            </IndicatorWrapper>
            <Title />
          </>
        );
      case 1:
        return (
          <>
            <IndicatorWrapper>
              <SvgIcon type="indicator-1-inactive" size={20} />
              <SvgIcon type="indicator-2-active" size={20} />
            </IndicatorWrapper>
            <Title />
          </>
        );
    }
  };

  return (
    <>
      <Layout isSpacing>{setHeader(matchingStep)}</Layout>
      {setPage(matchingStep)}
    </>
  );
};

export default Matching;
