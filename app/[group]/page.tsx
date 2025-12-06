import { ScreenShotType, Group } from '../../interfaces';
import List from '../../components/List';
import { fetchClient } from '../../lib/fetch';
import { shuffle } from '../../utils/shuffle';

export async function generateMetadata({ params }: { params: Promise<{ group: Group }> }) {
  const { group } = await params;
  return {
    title: `${group} > XIV_Landscape`,
  }
}

export default async function Page({ params }: { params: Promise<{ group: Group }> }) {
  const { group } = await params;
  const images = await fetchClient<ScreenShotType[]>(`/images?group=${group}`);
  return images.length ? (
    <List images={shuffle(images)} />
  ) : (
    <p style={{ width: '100%', textAlign: 'center' }}>There is no image</p>
  )
}

