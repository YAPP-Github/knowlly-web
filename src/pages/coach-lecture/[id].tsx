import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Typograpy } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import { MatchingPopup, PlayerInfo, PlayerUser, PlayerSchedule } from '@components/CoachLecture';
import useMatchingForm from '@hooks/coachLecture/useMatchingForm';
import api from '@api';
import { dehydrate, QueryClient } from 'react-query';
import queryKeys from '@react-query/keys';

const CoachLecturePage: NextPage = () => {
  const router = useRouter();
  const formId = router.query.id;

  const { matchingFormData } = useMatchingForm(formId as string);

  return (
    <PageLayout isSpacing start={1}>
      <Typograpy variant="headline-3">매칭 신청서</Typograpy>
      <PlayerInfo title="플레이어 정보">
        <PlayerUser userInfo={matchingFormData?.user} />
      </PlayerInfo>
      <PlayerInfo title="플레이어의 코멘트">
        <Typograpy variant="body-1" textColor="gray6B">
          {matchingFormData?.content}
        </Typograpy>
      </PlayerInfo>
      <PlayerInfo title="플레이어가 보낸 일정">
        <PlayerSchedule schedules={matchingFormData?.lecture?.startAt} />
      </PlayerInfo>
      <MatchingPopup expirationDate={matchingFormData?.expirationDate} />
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const formId = context.query.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.coachLecture, formId], () =>
    api.fetchCoachLecture(formId)
  );

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default CoachLecturePage;
