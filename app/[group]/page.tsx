import { ScreenShotType, Group } from '../../interfaces';
import List from '../../components/List';
import { fetchClient } from '../../lib/fetch';
import { shuffle } from '../../utils/shuffle';

export async function generateMetadata({ params }: { params: { group: Group } }) {
  return {
    title: `${params.group} > XIV_Landscape`,
  }
}

export default async function Page({ params }: { params: { group: Group } }) {
  const images = await fetchClient<ScreenShotType[]>(`/images?group=${params.group}`);
  return images.length ? (
    <List images={shuffle(images)} />
  ) : (
    <p style={{ width: '100%', textAlign: 'center' }}>There is no image</p>
  )
}

