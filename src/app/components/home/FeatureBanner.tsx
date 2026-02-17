'use client';

import React from 'react';
import Link from 'next/link';
import styles from './FeatureBanner.module.css';

const FeatureBanner: React.FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>Built for Comfort. Made for Style.</h2>
        <Link href="/shop" className={styles.shopButton}>
          SHOP NOW
        </Link>
      </div>
    </section>
  );
};

export default FeatureBanner;
