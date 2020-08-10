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
  const res = await fetch('http://localhost:3000/api/images');
  const images = await res.json()
  return { props: { images } }
}

export default WithStaticProps