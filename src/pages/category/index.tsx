import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Typograpy } from '@components/Common';
import { Layout } from '@components/Layout';

const Category: NextPage = () => {
  const router = useRouter();
  const categoryId = router.query.id;

  return (
    <Layout spacing>
      <Typograpy variant="headline-3">{categoryId}</Typograpy>
    </Layout>
  );
};

export default Category;
