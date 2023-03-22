export const endpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://xiv-landscape.vercel.app/api';
