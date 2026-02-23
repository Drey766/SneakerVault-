'use client';

import React from 'react';
import Link from 'next/link';
import { categories } from '@/app/data/mockData';
import styles from './CategoryGrid.module.css';
import Image from 'next/image';

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
                <Image src={category.image} alt={category.name} className={styles.imagePlaceholder} height={935} width={900} />
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
