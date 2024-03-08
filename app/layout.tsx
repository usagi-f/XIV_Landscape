import { PropsWithChildren } from 'react';
import './global.css';
import Layout from '../components/Layout';

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
