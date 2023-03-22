import { GetServerSideProps } from 'next';
import { ScreenShotType, Group } from '../interfaces';
import Layout from '../components/Layout';
import List from '../components/List';
import { endpoint } from './api/const';
import { shuffle } from '../utils/shuffle';

type Props = {
  group: Group;
  images: ScreenShotType[];
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const group = params?.group;
  const json = await fetch(
    `${endpoint}/images?group=${group}}`
  )
    .then((res) => res.json())
    .catch(() => []);
  return {
    props: {
      group,
      images: shuffle(json),
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
