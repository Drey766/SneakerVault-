'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/app/types';
import { useCart } from '@/app/context/CartContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`} className={styles.imageWrapper} prefetch={false}>
        {product.onSale && (
          <span className={styles.saleBadge}>SALE</span>
        )}
        {product.isNew && (
          <span className={styles.newBadge}>NEW</span>
        )}
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.overlay}>
          <button onClick={handleAddToCart} className={styles.addToCartBtn}>
            ADD TO CART
          </button>
        </div>
      </Link>
      
      <div className={styles.info}>
        <Link href={`/product/${product.id}`}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
