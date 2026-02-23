'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import { products } from '@/app/data/mockData';
import styles from './YouMightAlsoLike.module.css';

const YouMightAlsoLike: React.FC = () => {
  const { addToCart } = useCart();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const visible = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>You Might Also Like</h2>

        <div className={styles.grid}>
          {visible.map((product) => (
            <div key={product.id} className={styles.card}>
              <Link href={`/product/${product.id}`} className={styles.imageWrapper}>
                {product.onSale && <span className={styles.saleBadge}>Sale</span>}
                <div className={styles.imagePlaceholder} />
                <div className={styles.overlay}>
                  <button
                    className={styles.addBtn}
                    onClick={(e) => { e.preventDefault(); addToCart({ ...product, quantity: 1 } as any); }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </Link>
              <div className={styles.cardInfo}>
                <Link href={`/product/${product.id}`}>
                  <h3 className={styles.name}>{product.name}</h3>
                </Link>
                <div className={styles.prices}>
                  <span className={styles.price}>${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className={styles.original}>${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentPage ? styles.activeDot : ''}`}
              onClick={() => setCurrentPage(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouMightAlsoLike;
