import type { NextPage } from 'next';
import Layout from '@components/Common/Layout/Layout';
import ProfileHeader from '@components/Profile/ProfileHeader/ProfileHeader';
const Profile: NextPage = () => {
  return (
    <Layout>
      <ProfileHeader />
    </Layout>
  );
};

export default Profile;
