'use client';

import * as React from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { useModalContext } from './context';
import styles from './index.module.css';

const mountTargetId = 'portal';

const Overlay: React.FC<{ url: string }> = ({ url }) => {
  const { updateUrl } = useModalContext();
  return (
    <button
      type="button"
      className={styles.overlay}
      onClick={() => updateUrl(null)}
    >
      <div className={styles.wrapper}>
        <Image
          src={url}
          alt=""
          fill
          className={styles.image}
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.srcset) {
              target.dataset.load = 'done';
            }
          }}
        />
      </div>
    </button>
  );
};

const Portal = () => {
  const ref = React.useRef<Element | null>(null);
  const { url } = useModalContext();

  React.useEffect(() => {
    ref.current = document.querySelector<HTMLElement>(`#${mountTargetId}`);
  }, []);

  return url && ref.current
    ? createPortal(<Overlay url={url} />, ref.current)
    : null;
};

const Mounter = () => <div id={mountTargetId} />;

export const Modal = () => {
  return (
    <>
      <Mounter />
      <Portal />
    </>
  );
};
