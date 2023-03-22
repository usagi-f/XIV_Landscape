import { GetServerSideProps } from 'next';
import { ScreenShotType } from '../interfaces';
import Layout from '../components/Layout';
import List from '../components/List';
import { fetchClient } from '../lib/fetch';
import { shuffle } from '../utils/shuffle';

type Props = {
  images: ScreenShotType[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetchClient<ScreenShotType[]>(`/images`);
  return { props: { images: shuffle(res) } };
};

const Index = ({ images }: Props) => (
  <Layout title="> XIV_Landscape">
    <List images={images} />
  </Layout>
);

export default Index;
