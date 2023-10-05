import * as React from 'react';
import Image from 'next/image';
import { ScreenShotType } from '../../interfaces';
import styles from './index.module.css';
import { useModalContext } from '../Modal/context';

interface ScreenShotProps {
  image: ScreenShotType;
}

const ScreenShot = ({ image }: ScreenShotProps) => {
  const { updateUrl } = useModalContext();
  return (
    <button
      type="button"
      onClick={() => updateUrl(`/static/${image.file}`)}
      className={styles.wrapper}
    >
      <Image
        src={`/static/${image.file}`}
        width={320}
        height={180}
        quality={90}
        alt="Screen Shot"
        style={{
          objectFit: 'cover',
        }}
        priority
        onLoad={(e) => {
          const target = e.target as HTMLImageElement;
          if (target.srcset) {
            target.dataset.load = 'done';
          }
        }}
      />
    </button>
  );
};

export default ScreenShot;
