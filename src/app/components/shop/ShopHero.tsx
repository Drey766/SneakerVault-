'use client';

import React from 'react';
import styles from './ShopHero.module.css';

const ShopHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Products</h1>
      </div>
    </section>
  );
};

export default ShopHero;
