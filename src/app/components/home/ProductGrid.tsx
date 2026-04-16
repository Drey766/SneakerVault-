'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from '@/app/data/shoes_cleaned.json';
import styles from './ProductGrid.module.css';

const ProductGrid: React.FC = () => {
  const [filter, setFilter] = useState('Featured Products');

  const filters = ['Featured Products', 'Boho Boots', 'Classic Boots'];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>SHOES</h2>
          <div className={styles.filters}>
            {filters.map((filterName) => (
              <button
                key={filterName}
                className={`${styles.filterBtn} ${
                  filter === filterName ? styles.active : ''
                }`}
                onClick={() => setFilter(filterName)}
              >
                {filterName}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
