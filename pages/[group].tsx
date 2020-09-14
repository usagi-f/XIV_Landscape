import { GetStaticProps, GetStaticPaths } from 'next'
import { ScreenShotType, Group } from '../interfaces'
import Layout from '../components/Layout'
import List from '../components/List'
import { categories } from '../data/categories'
import { endpoint } from '../api/const'
import { shuffle } from '../utils/shuffle'

type Props = {
  group?: Group
  images?: ScreenShotType[]
  errors?: string
}

const StaticPropsDetail = ({ group, images, errors }: Props) => {
  if (errors || typeof images === 'undefined') {
    return (
      <Layout title={`${group || 'Error'} > XIV_Landscape`}>
        <p style={{ width: '100%', textAlign: 'center' }}>{errors}</p>
      </Layout>
    )
  }

  return (
    <Layout title={`${group || 'None Group'} > XIV_Landscape`}>
      <List images={images} />
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = categories.map(category => `/${category}`);
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const group = params?.group
    console.log(params);
    const res = await fetch(`${endpoint}/images${group ? `?group=${group}` : ''}`);
    const json = await res.json();
    const images: ScreenShotType[] = shuffle(json);
    if (images.length === 0) return { props: { group, errors: 'There is no image' } }
    return {
      props: {
        group,
        images
      }
    }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
