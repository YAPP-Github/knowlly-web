import type { GetServerSideProps, NextPage } from 'next';
import { PageLayout } from '@components/Common/Layout';
import { LectureReview, Introduction, ProfileHeader } from '@components/Profile';
import { useRouter } from 'next/router';
import useProfile from '@hooks/profile/useProfile';
import { dehydrate, QueryClient } from 'react-query';
import queryKeys from '@react-query/keys';
import api from '@api';

const Profile: NextPage = () => {
  const router = useRouter();
  const userId = Number(router.query.id);
  const user = useProfile(userId);

  const userInfo = user.data.user;
  const userImage = user.data.userImage;
  const userIntro = user.data.coach.introduce;
  console.log(user);

  return (
    <PageLayout isSpacing>
      <ProfileHeader userInfo={userInfo} userImage={userImage} />
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

  const dehydratedState = dehydrate(queryClient);

  return {
    props: { dehydratedState: dehydratedState },
  };
};

export default Profile;
