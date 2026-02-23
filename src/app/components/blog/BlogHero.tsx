import React from 'react';
import styles from './BlogHero.module.css';

const BlogHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Our Blog</h1>
        <p className={styles.subtitle}>
          Stories, tips, and insights from the world of footwear
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
