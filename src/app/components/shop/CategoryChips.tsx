'use client';

import React from 'react';
import { useFilters } from '@/app/context/FilterContext';
import styles from './CategoryChips.module.css';

// Quick-filter chips backed by real dataset fields in FilterContext.
// Each chip maps to one or more boolean/string filter toggles.
const CategoryChips: React.FC = () => {
  const {
    selectedGenders,
    toggleGender,
    onSale,
    setOnSale,
    sellingFast,
    setSellingFast,
    hasMoreColours,
    setHasMoreColours,
  } = useFilters();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.chips}>

          {/* Gender chips */}
          {(['Men', 'Women'] as const).map(gender => (
            <button
              key={gender}
              className={`${styles.chip} ${selectedGenders.includes(gender) ? styles.active : ''}`}
              onClick={() => toggleGender(gender)}
            >
              {gender}
            </button>
          ))}

          {/* Availability quick-filters */}
          <button
            className={`${styles.chip} ${onSale ? styles.active : ''}`}
            onClick={() => setOnSale(!onSale)}
          >
            On Sale
          </button>

          <button
            className={`${styles.chip} ${sellingFast ? styles.active : ''}`}
            onClick={() => setSellingFast(!sellingFast)}
          >
            Selling Fast
          </button>

          <button
            className={`${styles.chip} ${hasMoreColours ? styles.active : ''}`}
            onClick={() => setHasMoreColours(!hasMoreColours)}
          >
            More Colours Available
          </button>

        </div>
      </div>
    </section>
  );
};

export default CategoryChips;
