'use client';

import React from 'react';
import Link from 'next/link';
import styles from './CategoryGrid.module.css';
import Image from 'next/image';
import { Category } from '../../types';
import products from '../../data/shoes_cleaned.json';

const CategoryGrid: React.FC = () => {
  const categories: Category[] = [
    { id: 'running', name: 'Men\'s Shoes', image: '/images/home/ba159-1.jpg', count: products.filter(p => p.gender === 'Men').length,slug: 'men' },
    { id: 'casual', name: 'Women\'s Footwear', image: '/images/home/ba159-2.jpg', count: products.filter(p => p.gender === 'Women').length,slug: 'women' },
    { id: 'formal', name: 'New Balance', image: '/images/home/ba159-3.jpg', count: products.filter(p => p.brand === 'New Balance').length,slug: 'newbalance' },
    { id: 'football', name: 'Adidas Shoes', image: '/images/home/ba159-4.jpg', count: products.filter(p => p.brand === 'adidas Originals').length,slug: 'adidas' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Shop By Category</h2>
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <Link 
              href={`/shop/${category.slug}`} 
              key={index}
              className={styles.categoryCard}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  <Image src={category.image} alt={category.name} layout="fill" objectFit="cover" />
                </div>
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
