import type { NextPage } from 'next';
import Layout from '@components/Common/Layout/Layout';
import ProfileHeader from '@components/Profile/ProfileHeader/ProfileHeader';
import Introduction from '@components/Profile/Introduction/Introduction';
const Profile: NextPage = () => {
  return (
    <Layout>
      <ProfileHeader />
      <Introduction />
    </Layout>
  );
};

export default Profile;
