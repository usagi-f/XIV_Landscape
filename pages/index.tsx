import { GetStaticProps } from 'next'
import { ScreenShotType } from '../interfaces'
import Layout from '../components/Layout'
import List from '../components/List'
import { endpoint } from '../api/const'
import { shuffle } from '../utils/shuffle'

type Props = {
  images: ScreenShotType[]
}

const WithStaticProps = ({ images }: Props) => (
  <Layout title="> XIV_Landscape">
    <List images={images} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${endpoint}/images`);
  const json = await res.json()
  const images = shuffle(json);
  return { props: { images } }
}

export default WithStaticProps
