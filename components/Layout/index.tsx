import React, { ReactNode } from 'react';
import Head from 'next/head';
import Nav from '../Nav';
import styles from './index.module.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className={styles.column}>
      <header>
        <Nav />
      </header>
      <section className={styles.images}>{children}</section>
    </main>
  </>
);

export default Layout;
