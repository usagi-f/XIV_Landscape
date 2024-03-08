import { ScreenShotType } from '../interfaces';
import List from '../components/List';
import { fetchClient } from '../lib/fetch';
import { shuffle } from '../utils/shuffle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '> XIV_Landscape'
}

export default async function Page() {
  const images = await fetchClient<ScreenShotType[]>(`/images`);
  return <List images={shuffle(images)} />;
}
