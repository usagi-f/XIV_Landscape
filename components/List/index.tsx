import * as React from 'react';
import { ScreenShotType } from '../../interfaces';
import ScreenShot from '../ScreenShot';
import styles from './index.module.css';

interface ScreenShotProps {
  images: ScreenShotType[];
}

const List = ({ images }: ScreenShotProps) => (
  <ul className={styles.list}>
    {images.map((image, index) => (
      <li key={`${image.file}-${index}`}>
        <ScreenShot image={image} />
      </li>
    ))}
  </ul>
);

export default List;
