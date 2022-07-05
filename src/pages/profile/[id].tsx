import type { NextPage } from 'next';
import { Layout } from '@components/Common/Layout';
import { LectureReview, Introduction, ProfileHeader } from '@components/Profile';

const Profile: NextPage = () => {
  return (
    <Layout isSpacing>
      <ProfileHeader />
      <Introduction />
      <LectureReview />
    </Layout>
  );
};

export default Profile;
