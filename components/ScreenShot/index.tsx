import * as React from 'react';
import Image from 'next/image';
import { ScreenShotType } from '../../interfaces';
import styles from './index.module.css';

interface ScreenShotProps {
  image: ScreenShotType;
}

const ScreenShot = ({ image }: ScreenShotProps) => (
  <a href={`/static/${image.file}`} target="_blank" className={styles.img}>
    <Image
      src={`/static/${image.file}`}
      width={320}
      height={180}
      quality={90}
      alt="Screen Shot"
    />
  </a>
);

export default ScreenShot;
