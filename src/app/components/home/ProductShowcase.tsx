'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products } from '@/app/data/mockData';
import styles from './ProductShowcase.module.css';

const ProductShowcase: React.FC = () => {
  const [filter, setFilter] = useState('Boho Boots');
  const [displayedProducts, setDisplayedProducts] = useState(products.filter(p => p.category === 'boho').slice(0, 3));
  const [isAnimating, setIsAnimating] = useState(false);

  const filters = [
    { name: 'Featured Products', category: 'featured' },
    { name: 'Boho Boots', category: 'boho' },
    { name: 'Classic Boots', category: 'classic' }
  ];

  useEffect(() => {
    // Trigger fade out
    setIsAnimating(true);

    // Wait for fade out, then update products
    const timeout = setTimeout(() => {
      const currentFilter = filters.find(f => f.name === filter);
      const filteredProducts = products.filter(p => p.category === currentFilter?.category).slice(0, 3);
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
        <div className={styles.layout}>
          {/* Left: Sale Banner */}
          <div className={styles.saleBanner}>
            <div className={styles.bannerImage}>
              <div className={styles.bannerOverlay}>
                <h3 className={styles.bannerTitle}>SALE UP TO 30% OFF</h3>
                <button className={styles.bannerButton}>SHOP NOW</button>
              </div>
            </div>
          </div>

          {/* Right: Products Section */}
          <div className={styles.productsSection}>
            <div className={styles.header}>
              <h2 className={styles.title}>
                <span className={styles.arrow}>▸</span> SHOES
              </h2>
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
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;