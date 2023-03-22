const endpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://xiv-landscape.vercel.app/api';

export const fetchClient = async <T>(path: string): Promise<T> => {
  return await fetch(`${endpoint}${path}`)
    .then((res) => res.json())
    .catch(() => []);
};
