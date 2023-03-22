import { GetServerSideProps } from 'next';
import { ScreenShotType, Group } from '../interfaces';
import Layout from '../components/Layout';
import List from '../components/List';
import { fetchClient } from '../lib/fetch';
import { shuffle } from '../utils/shuffle';

type Props = {
  group: Group;
  images: ScreenShotType[];
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const group = query.group;
  const res = await fetchClient<ScreenShotType[]>(`/images?group=${group}`);
  return {
    props: {
      group,
      images: shuffle(res),
    },
  };
};

const Group = ({ group, images }: Props) => (
  <Layout title={`${group} > XIV_Landscape`}>
    {images.length ? (
      <List images={images} />
    ) : (
      <p style={{ width: '100%', textAlign: 'center' }}>There is no image</p>
    )}
  </Layout>
);

export default Group;
