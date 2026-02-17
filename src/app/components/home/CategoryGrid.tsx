'use client';

import React from 'react';
import Link from 'next/link';
import { categories } from '../../data/mockData';
import styles from './CategoryGrid.module.css';

const CategoryGrid: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Shop By Category</h2>
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <Link 
              href={`/category/${category.slug}`} 
              key={index}
              className={styles.categoryCard}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}></div>
              </div>
              <h3 className={styles.categoryName}>{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
