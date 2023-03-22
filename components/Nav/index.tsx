import * as React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import { categories } from '../../data/categories';

const Nav = () => (
  <header className={styles.section}>
    <h1>
      <Link href="/">&gt; XIV_Landscape()</Link>
    </h1>
    <p>
      This site is a personal page that contains screenshots of FFXIV taken by
      myself. The copyright of the image on the game screen belongs to Square
      Enix Co., Ltd. All rights reserved.
    </p>
    <nav>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Nav;
