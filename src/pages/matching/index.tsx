import { PageTransition, SvgIcon } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import { FirstStep, LastStep, SecondStep, Title } from '@components/Matching';
import { matchingStepState } from '@recoil/matching/atoms';
import { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { IndicatorWrapper } from '@components/Matching/MatchingStyle';
import useLectureDetail from '@hooks/lecture/useLectureDetail';
import { useRouter } from 'next/router';

const Matching: NextPage = () => {
  const matchingStep = useRecoilValue(matchingStepState);

  const router = useRouter();
  const lectureId = Number(router.query.id);

  const lectureDetail = useLectureDetail(lectureId);
  const lectureSchedule = lectureDetail?.data.lectures.filter(
    (lecture) => lecture.matched === false
  );

  const setPage = (step: number) => {
    switch (step) {
      case 0:
        return <FirstStep lectureSchedule={lectureSchedule} />;
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
    <PageTransition>
      <PageLayout isSpacing>{setHeader(matchingStep)}</PageLayout>
      {setPage(matchingStep)}
    </PageTransition>
  );
};

export default Matching;
