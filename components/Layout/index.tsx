import { PropsWithChildren } from 'react';
import Nav from '../Nav';
import { Modal } from '../Modal';
import { ModalContextProvider } from '../Modal/context';
import styles from './index.module.css';

const Layout = ({ children }: PropsWithChildren) => (
  <ModalContextProvider>
    <main className={styles.column}>
      <header>
        <Nav />
      </header>
      <section className={styles.images}>{children}</section>
    </main>
    <Modal />
  </ModalContextProvider>
);

export default Layout;
