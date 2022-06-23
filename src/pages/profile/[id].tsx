import type { NextPage } from 'next';
import { Layout } from '@components/Common';
import { ClassReview, Introduction, ProfileHeader } from '@components/Profile';

const Profile: NextPage = () => {
  return (
    <Layout>
      <ProfileHeader />
      <Introduction />
      <ClassReview />
    </Layout>
  );
};

export default Profile;
