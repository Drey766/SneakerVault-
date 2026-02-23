'use client';

import React from 'react';
import { useFilters } from '@/app/context/FilterContext';
import styles from './CategoryChips.module.css';

const CategoryChips: React.FC = () => {
  const { activeCategories, toggleCategory } = useFilters();

  const categories = [
    { id: '1', name: 'Athletic Footwear', count: 16 },
    { id: '2', name: 'Boots for Every Occasion', count: 17 },
    { id: '3', name: 'Luxury Leather Shoes', count: 15 },
    { id: '4', name: 'Sandals & Slides', count: 19 },
    { id: '5', name: 'Sneakerhead\'s Haven', count: 13 }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.chips}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.chip} ${activeCategories.includes(category.name) ? styles.active : ''}`}
              onClick={() => toggleCategory(category.name)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryChips;
