'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products } from '@/app/data/mockData';
import styles from './TopProducts.module.css';

const TopProducts: React.FC = () => {
  const [filter, setFilter] = useState('Top Rating');
  const [displayedProducts, setDisplayedProducts] = useState(products.filter(p => p.category === 'toprating').slice(0, 4));
  const [isAnimating, setIsAnimating] = useState(false);

  const filters = [
    { name: 'Combat Boots', category: 'combat' },
    { name: 'Best Seller', category: 'bestseller' },
    { name: 'Top Rating', category: 'toprating' }
  ];

  useEffect(() => {
    // Trigger fade out
    setIsAnimating(true);

    // Wait for fade out, then update products
    const timeout = setTimeout(() => {
      const currentFilter = filters.find(f => f.name === filter);
      const filteredProducts = products.filter(p => p.category === currentFilter?.category).slice(0, 4);
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