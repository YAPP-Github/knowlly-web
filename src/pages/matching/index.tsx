import { SvgIcon } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import { FirstStep, LastStep, SecondStep, Title } from '@components/Matching';
import { matchingStepState } from '@recoil/matching/atoms';
import { GetServerSideProps, NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { IndicatorWrapper } from '@components/Matching/MatchingStyle';
import useLectureDetail from '@hooks/lecture/useLectureDetail';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';
import queryKeys from '@react-query/keys';
import api from '@api';

const Matching: NextPage = () => {
  const matchingStep = useRecoilValue(matchingStepState);

  const router = useRouter();
  const lectureId = Number(router.query.id);

  const lectureDetail = useLectureDetail(lectureId);
  const lectureSchedule = lectureDetail?.data?.lectures?.filter(
    (lecture) => lecture.state == 'ON_GOING'
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
    <>
      <PageLayout isSpacing>{setHeader(matchingStep)}</PageLayout>
      {setPage(matchingStep)}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lectureId = context.query.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.lectureDetail, Number(lectureId)], () =>
    api.fetchLectureDetail(Number(lectureId))
  );

  const dehydratedState = dehydrate(queryClient);

  return {
    props: { dehydratedState: dehydratedState },
  };
};
export default Matching;
