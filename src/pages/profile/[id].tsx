import type { NextPage } from 'next';
import { Layout } from '@components/Layout';
import { ClassReview, Introduction, ProfileHeader } from '@components/Profile';

const Profile: NextPage = () => {
  return (
    <Layout isSpacing>
      <ProfileHeader />
      <Introduction />
      <ClassReview />
    </Layout>
  );
};

export default Profile;
