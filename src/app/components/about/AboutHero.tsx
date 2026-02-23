import React from 'react';
import styles from './AboutHero.module.css';

const AboutHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>About Us</h1>
      </div>
    </section>
  );
};

export default AboutHero;
