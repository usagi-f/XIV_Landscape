import { GetStaticProps } from 'next'
import { ScreenShotType } from '../interfaces'
import Layout from '../components/Layout'
import List from '../components/List'

type Props = {
  images: ScreenShotType[]
}

const WithStaticProps = ({ images }: Props) => (
  <Layout title="> XIV_Landscape">
    <List images={images} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch('/api/images');
  // const images = await res.json()
  const images: ScreenShotType[] = [];
  return { props: { images } }
}

export default WithStaticProps
