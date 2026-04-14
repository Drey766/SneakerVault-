'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import products  from '@/app/data/shoes_cleaned.json';
import styles from './ProductShowcase.module.css';
import Link from 'next/link';

const ProductShowcase: React.FC = () => {
  const [filter, setFilter] = useState('BOSS Orange');
  const [displayedProducts, setDisplayedProducts] = useState(products.filter(p => p.brand === 'boho').slice(0, 3));
  const [isAnimating, setIsAnimating] = useState(false);

  const filters = [
    { name: 'BOSS Orange', brand: 'BOSS Orange' },
    { name: 'Jack & Jones', brand: 'Jack & Jones' },
    { name: 'adidas Originals', brand: 'adidas Originals' }
  ];

  useEffect(() => {
    // Trigger fade out
    setIsAnimating(true);

    // Wait for fade out, then update products
    const timeout = setTimeout(() => {
      const currentFilter = filters.find(f => f.name === filter);
      const filteredProducts = products.filter(p => p.brand === currentFilter?.brand).slice(0, 3);
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
                <Link href="/shop" className={styles.bannerButton}>
                  SHOP NOW
                </Link>
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