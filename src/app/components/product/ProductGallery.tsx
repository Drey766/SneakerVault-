'use client';

import React, { useState } from 'react';
import styles from './ProductGallery.module.css';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      {/* Main Image */}
      <div className={styles.mainImageWrapper}>
        <div className={styles.mainImage}>
          <div
            className={styles.imagePlaceholder}
            style={{ backgroundImage: `url(${images[activeIndex]})` }}
          />
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <button
            key={index}
            className={`${styles.thumb} ${index === activeIndex ? styles.activeThumb : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View image ${index + 1}`}
          >
            <div
              className={styles.thumbImage}
              style={{ backgroundImage: `url(${img})` }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
