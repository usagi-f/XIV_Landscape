import * as React from 'react';
import { ScreenShotType } from '../../interfaces';
import styles from './index.module.css';

interface ScreenShotProps {
  image: ScreenShotType;
}

const ScreenShot = ({ image }: ScreenShotProps) => (
  <a href={`/static/${image.file}`} target="_blank" className={styles.img}>
    <img src={`/static/thumb/${image.file}`} alt="Screen Shot" />
  </a>
);

export default ScreenShot;
