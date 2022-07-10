import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';
import { PageLayout } from '@components/Common/Layout';
import { LectureReview, Introduction, ProfileHeader } from '@components/Profile';
import useProfile from '@hooks/profile/useProfile';
import queryKeys from '@react-query/keys';
import api from '@api';

const Profile: NextPage = () => {
  const router = useRouter();
  const userId = Number(router.query.id);
  const user = useProfile(userId);

  const userInfo = user.data.user;
  const coachInfo = user.data.coach;
  const userIntro = user.data.coach.introduce;

  return (
    <PageLayout isSpacing>
      <ProfileHeader userInfo={userInfo} coachInfo={coachInfo} />
      <Introduction userIntro={userIntro} />
      <LectureReview />
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.userProfile, Number(id)], () =>
    api.fetchUserProfile(Number(id))
  );

  await queryClient.prefetchQuery([queryKeys.coachReview, Number(id)], () =>
    api.fetchCoachReview(Number(id))
  );

  const dehydratedState = dehydrate(queryClient);

  return {
    props: { dehydratedState: dehydratedState },
  };
};

export default Profile;
