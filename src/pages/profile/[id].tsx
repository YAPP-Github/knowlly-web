import type { NextPage } from 'next';
import { PageLayout } from '@components/Common/Layout';
import { LectureReview, Introduction, ProfileHeader } from '@components/Profile';

const Profile: NextPage = () => {
  return (
    <PageLayout isSpacing>
      <ProfileHeader />
      <Introduction />
      <LectureReview />
    </PageLayout>
  );
};

export default Profile;
