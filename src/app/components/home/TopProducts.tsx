'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import products  from '@/app/data/trainers.json';
import styles from './TopProducts.module.css';

const TopProducts: React.FC = () => {
  const [filter, setFilter] = useState('Adidas Performance');
  const [displayedProducts, setDisplayedProducts] = useState(products.filter(p => p.brand === 'toprating').slice(0, 4));
  const [isAnimating, setIsAnimating] = useState(false);

  const filters = [
    { name: 'Adidas Performance', brand: 'adidas performance' },
    { name: 'Jack & Jones', brand: 'Jack & Jones' },
    { name: 'New balance', brand: 'New Balance' }
  ];

  useEffect(() => {
    // Trigger fade out
    setIsAnimating(true);

    // Wait for fade out, then update products
    const timeout = setTimeout(() => {
      const currentFilter = filters.find(f => f.name === filter);
      const filteredProducts = products.filter(p => p.brand === currentFilter?.brand).slice(0, 4);
      setDisplayedProducts(filteredProducts);
      
      // Trigger fade in
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);

    return () => clearTimeout(timeout);
  }, [filter]);

  const handleFilterChange = (filterName: string) => {
    if (filterName !== filter) {
      setFilter(filterName);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>TOP PRODUCTS</h2>
          <div className={styles.filters}>
            {filters.map((filterItem) => (
              <button
                key={filterItem.name}
                className={`${styles.filterBtn} ${
                  filter === filterItem.name ? styles.active : ''
                }`}
                onClick={() => handleFilterChange(filterItem.name)}
              >
                {filterItem.name}
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.grid} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;