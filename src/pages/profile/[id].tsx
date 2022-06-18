import type { NextPage } from 'next';
import { Layout } from '@components/Common';
import { Introduction, ProfileHeader } from '@components/Profile';

const Profile: NextPage = () => {
  return (
    <Layout>
      <ProfileHeader />
      <Introduction />
    </Layout>
  );
};

export default Profile;
