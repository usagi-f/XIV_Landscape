import { GetServerSideProps } from 'next';
import { ScreenShotType } from '../interfaces';
import Layout from '../components/Layout';
import List from '../components/List';
import { endpoint } from './api/const';
import { shuffle } from '../utils/shuffle';

type Props = {
  images: ScreenShotType[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const json = await fetch(`${endpoint}/images`)
    .then((res) => res.json())
    .catch(() => []);
  return { props: { images: shuffle(json) } };
};

const Index = ({ images }: Props) => (
  <Layout title="> XIV_Landscape">
    <List images={images} />
  </Layout>
);

export default Index;
