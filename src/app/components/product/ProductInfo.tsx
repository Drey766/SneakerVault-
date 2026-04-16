'use client';

import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import styles from './ProductInfo.module.css';
import { Product } from '@/app/types';

interface Color {
  name: string;
  hex: string;
}

interface ProductInfoProps {
  id: string;
  title: string;
  rating?: number | null;
  rating_count?: number | null;
  brand_description?: string | null;
  delivery_info?: string | null;
  price: number | null;
  on_sale?: boolean | null;
  brand?: string | null;
  hero_image: string | null;
}

const StarRating: React.FC<{ rating: number; count: number }> = ({ rating, count }) => {
  return (
    <div className={styles.ratingRow}>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`${styles.star} ${star <= Math.floor(rating) ? styles.starFilled : star - 0.5 <= rating ? styles.starHalf : styles.starEmpty}`}
          >
            ★
          </span>
        ))}
      </div>
      <span className={styles.reviewCount}>
        {count === 0 ? 'No reviews' : `${count} reviews`}
      </span>
    </div>
  );
};

const ProductInfo: React.FC<ProductInfoProps> = ({ title, rating, rating_count, brand_description, delivery_info, price, on_sale, brand, hero_image, id }) => {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const discount = price
    ? Math.round((1 - price / price) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart({
      id: id,
      name: title,
      price: price,
      image: hero_image,
      category: brand,
      quantity,
    } as any);
  };

  return (
    <div className={styles.info}>
      {/* Wishlist */}
      <button className={styles.wishlist} aria-label="Add to wishlist">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>

      {/* Name */}
      <h1 className={styles.name}>{title}</h1>

      {/* Rating */}
      <StarRating rating={rating || 0} count={rating_count || 0} />

      {/* Price */}
      <div className={styles.priceRow}>
        {price && (
          <span className={styles.price}>${price.toFixed(2)}</span>
        )}
        {discount > 0 && (
          <span className={styles.badge}>SAVE {discount}%</span>
        )}
      </div>

      {/* Color Selector */}
      

      {/* Description */}
      <p className={styles.description}>{brand_description}</p>

      {/* Quantity + Add to Cart */}
      <div className={styles.quantityRow}>
        <div className={styles.quantityControl}>
          <button
            className={styles.quantityBtn}
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >−</button>
          <span className={styles.quantityValue}>{quantity}</span>
          <button
            className={styles.quantityBtn}
            onClick={() => setQuantity(q => q + 1)}
            aria-label="Increase quantity"
          >+</button>
        </div>
        <button className={styles.addToCart} onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>

      {/* Buy It Now */}
      <button className={styles.buyNow}>BUY IT NOW</button>

      {/* Delivery Info */}
      <div className={styles.infoCards}>
        <div className={styles.infoCard}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1" y="3" width="15" height="13" rx="1"/>
            <path d="M16 8h4l3 5v3h-7V8z"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
          <div>
            <p className={styles.infoText}>
              <strong>{delivery_info}</strong>
            </p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="23 4 23 10 17 10"/>
            <polyline points="1 20 1 14 7 14"/>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
          </svg>
          <div>
            <p className={styles.infoText}>
              Return within <strong>45 days</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Shopify Banner */}
      <div className={styles.shopifyBanner}>
        <div className={styles.shopifyLeft}>
          <div className={styles.shopifyLogo}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#96bf48">
              <path d="M15.337 23.979l7.171-1.549s-2.585-17.474-2.605-17.594c-.02-.12-.12-.2-.22-.2-.1 0-1.89-.04-1.89-.04s-1.25-1.219-1.39-1.359v20.742z"/>
              <path d="M12.054 7.078s-.84-.25-1.85-.25c-1.84 0-1.93 1.15-1.93 1.44 0 1.58 4.12 2.19 4.12 5.9 0 2.92-1.85 4.8-4.35 4.8-3 0-4.53-1.87-4.53-1.87l.8-2.65s1.58 1.35 2.91 1.35c.87 0 1.23-.69 1.23-1.19 0-2.07-3.38-2.16-3.38-5.57 0-2.87 2.06-5.65 6.21-5.65 1.6 0 2.39.46 2.39.46L12.054 7.078z"/>
            </svg>
            <span className={styles.shopifyText}>shopify</span>
          </div>
          <p className={styles.shopifyPromo}>
            Enjoy a free 30% discount if it's your first purchase. Then get free pair of air maax jrdan 1's if it your 500th customer.
          </p>
          <p className={styles.shopifySubtext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vero nostrum, cum pariatur quis blanditiis totam tempora illum ea obcaecati eveniet reprehenderit quidem id, deleniti odio adipisci alias tenetur asperiores.</p>
          <button className={styles.shopifyBtn}>Sign Up Now</button>
        </div>
        <div className={styles.shopifyRight}>
          <div className={styles.shopifyBox}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
