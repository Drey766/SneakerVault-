'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/app/types';
import { useCart } from '@/app/context/CartContext';
import styles from './ProductCard.module.css';
import Image from 'next/image';

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
      <Link href={`/product/${product.id}`} className={styles.imageWrapper}>
        {product.selling_fast && (
          <span className={styles.saleBadge}>SALE</span>
        )}
        {product.has_more_colours && (
          <span className={styles.newBadge}>NEW</span>
        )}
        <div className={styles.imagePlaceholder}>
          {product.hero_image && (
            <Image src={product.hero_image.split("?")[0]} alt={product.title || 'Product image'} layout="fill" objectFit="cover" />
          )}
        </div>
        <div className={styles.overlay}>
          <button onClick={handleAddToCart} className={styles.addToCartBtn}>
            ADD TO CART
          </button>
        </div>
      </Link>
      
      <div className={styles.info}>
        <Link href={`/product/${product.id}`}>
          <h3 className={styles.name}>{product.title}</h3>
        </Link>
        <div className={styles.priceWrapper}>
          {product.price && (
            <span className={styles.price}>${product.price.toFixed(2)}</span>
          )}
          {product.price && (
            <span className={styles.originalPrice}>
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
