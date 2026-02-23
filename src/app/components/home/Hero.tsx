'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: 'Boot-Inspired Home Accents',
      subtitle: 'SPECIAL PRICE TODAY',
      description: 'Crafted boots are at the heart of what we. Our handcrafted boots are high quality.',
      align: 'right',
      backgroundImage: '/images/hero/7.png' // Tan/brown boot with plaid
    },
    {
      title: 'Minimalist Boot Aesthetics',
      subtitle: 'SPECIAL PRICE TODAY',
      description: 'Crafted boots are at the heart of what we do. Our handcrafted boots are high quality.',
      align: 'left',
      backgroundImage: '/images/hero/6.png' // Black glossy boot
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  return (
    <section className={styles.hero}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''} ${
            isTransitioning ? styles.transitioning : ''
          }`}
          style={{ backgroundImage: `url(${slide.backgroundImage})` }}
        >
          <div className={styles.content}>
            <div 
              className={`${styles.textContent} ${
                slide.align === 'left' ? styles.alignLeft : styles.alignRight
              }`}
            >
              <p className={styles.subtitle}>{slide.subtitle}</p>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.description}>{slide.description}</p>
              <div className={styles.buttons}>
                <Link href="/shop" className={`${styles.btn} ${styles.btnPrimary}`}>
                  SHOP NOW
                </Link>
                <Link href="/about" className={`${styles.btn} ${styles.btnOutline}`}>
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.navigation}>
        <button 
          className={styles.navButton}
          onClick={prevSlide}
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          ←
        </button>
        <button 
          className={styles.navButton}
          onClick={nextSlide}
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          →
        </button>
      </div>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
            onClick={() => !isTransitioning && setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
