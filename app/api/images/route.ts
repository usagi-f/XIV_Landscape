import { imagesData } from '../../../data/images-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const group = searchParams.get('group');

  if (group) {
    const images = imagesData.filter((image) => image.group === group);
    return Response.json(images);
  }

  return Response.json(imagesData);
}
