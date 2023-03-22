import { AppProps } from 'next/app';
import { Modal } from '../components/Modal';
import { ModalContextProvider } from '../components/Modal/context';
import './style.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ModalContextProvider>
      <Component {...pageProps} />
      <Modal />
    </ModalContextProvider>
  );
};

export default App;
