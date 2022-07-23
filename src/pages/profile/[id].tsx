import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { PageLayout } from '@components/Common/Layout';
import { LectureReview, Introduction, ProfileHeader } from '@components/Profile';
import useProfile from '@hooks/profile/useProfile';
const Profile: NextPage = () => {
  const router = useRouter();
  const userId = Number(router.query.id);
  const { user, isFetching } = useProfile(userId);

  const userInfo = user?.data.user;
  const coachInfo = user?.data.coach;
  const userIntro = user?.data.coach.introduce;

  return (
    <PageLayout isSpacing>
      {!isFetching && user && (
        <>
          <ProfileHeader userInfo={userInfo} coachInfo={coachInfo} />
          <Introduction userIntro={userIntro} />
          <LectureReview />
        </>
      )}
    </PageLayout>
  );
};

export default Profile;
