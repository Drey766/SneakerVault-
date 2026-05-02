'use client';

import React, { useState } from 'react';
import { useFilters } from '@/app/context/FilterContext';
import styles from './ShopFilters.module.css';

// ─── Data derived from shoes_cleaned.json ────────────────────────────────────

const BRANDS: { name: string; count: number }[] = [
  { name: 'ASOS DESIGN', count: 252 },
  { name: 'adidas Originals', count: 67 },
  { name: 'Polo Ralph Lauren', count: 56 },
  { name: 'SEQWL', count: 55 },
  { name: 'On Running', count: 52 },
  { name: 'New Balance', count: 45 },
  { name: 'adidas performance', count: 41 },
  { name: 'Jack & Jones', count: 32 },
  { name: 'Asics', count: 26 },
  { name: 'Tommy Hilfiger', count: 23 },
  { name: 'WALK LONDON', count: 23 },
  { name: 'Salomon', count: 21 },
  { name: 'The North Face', count: 21 },
  { name: 'Calvin Klein', count: 21 },
  { name: 'Tommy Jeans', count: 18 },
  { name: 'Barbour', count: 17 },
  { name: 'Lacoste', count: 16 },
  { name: 'Timberland', count: 16 },
  { name: 'Vans', count: 14 },
  { name: 'Schuh', count: 12 },
  { name: 'Mango', count: 12 },
  { name: 'AllSaints', count: 12 },
  { name: 'Saucony', count: 12 },
  { name: 'BOSS Orange', count: 11 },
  { name: 'Hunter', count: 10 },
  { name: 'Merrell', count: 10 },
  { name: 'Clarks', count: 10 },
  { name: 'Fred Perry', count: 9 },
  { name: 'Dr Martens', count: 8 },
  { name: 'Pompeii UK', count: 8 },
  { name: 'Steve Madden', count: 7 },
  { name: 'Keen', count: 7 },
  { name: 'EA7', count: 6 },
  { name: 'Teva', count: 5 },
  { name: 'Crocs', count: 5 },
  { name: 'Calvin Klein Jeans', count: 5 },
  { name: 'River Island', count: 5 },
  { name: 'Under Armour', count: 5 },
  { name: 'Columbia', count: 5 },
  { name: 'Clarks Originals', count: 4 },
  { name: 'PS Paul Smith', count: 4 },
  { name: 'Puma', count: 3 },
  { name: 'Umbro', count: 2 },
  { name: 'ASOS COLLECTIVE', count: 2 },
  { name: 'Armani Exchange', count: 2 },
  { name: 'Havaianas', count: 2 },
  { name: 'Threadbare', count: 1 },
];

const COLORS: { name: string; hex: string; count: number }[] = [
  { name: 'Black', hex: '#111111', count: 155 },
  { name: 'White', hex: '#ffffff', count: 86 },
  { name: 'Brown', hex: '#7c4b28', count: 64 },
  { name: 'Green', hex: '#3a6b35', count: 37 },
  { name: 'Grey', hex: '#888888', count: 37 },
  { name: 'Beige', hex: '#d4b896', count: 25 },
  { name: 'Navy', hex: '#0a1045', count: 15 },
  { name: 'Yellow', hex: '#f5c518', count: 7 },
  { name: 'Blue', hex: '#2b6cb0', count: 6 },
  { name: 'Burgundy', hex: '#800020', count: 5 },
  { name: 'Red', hex: '#c0392b', count: 5 },
  { name: 'Orange', hex: '#e07b39', count: 4 },
  { name: 'Multi', hex: 'linear-gradient(135deg,#e74c3c,#3498db,#2ecc71)', count: 3 },
  { name: 'Pink', hex: '#e8a0b4', count: 3 },
  { name: 'Purple', hex: '#7b4fa6', count: 1 },
];

const GENDERS = [
  { name: 'Men', count: 980 },
  { name: 'Women', count: 142 },
];

// Price: $6 – $387 (actual dataset range)
const PRICE_MIN_BOUND = 0;
const PRICE_MAX_BOUND = 400;

// ─── Component ────────────────────────────────────────────────────────────────

const BRAND_INITIAL_LIMIT = 8;

const ShopFilters: React.FC = () => {
  const {
    selectedGenders,
    toggleGender,
    onSale,
    setOnSale,
    sellingFast,
    setSellingFast,
    hasMoreColours,
    setHasMoreColours,
    freeDelivery,
    setFreeDelivery,
    priceMin,
    priceMax,
    setPriceMin,
    setPriceMax,
    selectedBrands,
    toggleBrand,
    selectedColors,
    toggleColor,
    clearAllFilters,
  } = useFilters();

  const [expandedSections, setExpandedSections] = useState<string[]>([
    'gender', 'availability', 'price', 'brand', 'color',
  ]);
  const [showAllBrands, setShowAllBrands] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isExpanded = (section: string) => expandedSections.includes(section);

  const visibleBrands = showAllBrands ? BRANDS : BRANDS.slice(0, BRAND_INITIAL_LIMIT);

  return (
    <div className={styles.filters}>

      {/* Clear Filters */}
      <button className={styles.clearAll} onClick={clearAllFilters}>
        Clear All Filters
      </button>

      {/* ── Gender ─────────────────────────────────────────────── */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('gender')}
        >
          <span>Gender</span>
          <span className={`${styles.arrow} ${isExpanded('gender') ? styles.expanded : ''}`}>▼</span>
        </button>
        {isExpanded('gender') && (
          <div className={styles.sectionContent}>
            {GENDERS.map(g => (
              <label key={g.name} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={selectedGenders.includes(g.name)}
                  onChange={() => toggleGender(g.name)}
                />
                <span>{g.name} ({g.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ── Availability ────────────────────────────────────────── */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('availability')}
        >
          <span>Availability</span>
          <span className={`${styles.arrow} ${isExpanded('availability') ? styles.expanded : ''}`}>▼</span>
        </button>
        {isExpanded('availability') && (
          <div className={styles.sectionContent}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={onSale}
                onChange={e => setOnSale(e.target.checked)}
              />
              <span>On sale (175)</span>
            </label>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={sellingFast}
                onChange={e => setSellingFast(e.target.checked)}
              />
              <span>Selling fast (874)</span>
            </label>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={hasMoreColours}
                onChange={e => setHasMoreColours(e.target.checked)}
              />
              <span>Available in more colours (619)</span>
            </label>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={freeDelivery}
                onChange={e => setFreeDelivery(e.target.checked)}
              />
              <span>Free delivery (1122)</span>
            </label>
          </div>
        )}
      </div>

      {/* ── Price ───────────────────────────────────────────────── */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('price')}
        >
          <span>Price</span>
          <span className={`${styles.arrow} ${isExpanded('price') ? styles.expanded : ''}`}>▼</span>
        </button>
        {isExpanded('price') && (
          <div className={styles.sectionContent}>
            <div className={styles.priceInputs}>
              <input
                type="number"
                placeholder="$ Min"
                className={styles.priceInput}
                min={PRICE_MIN_BOUND}
                max={priceMax}
                value={priceMin}
                onChange={e => setPriceMin(Number(e.target.value))}
              />
              <span>–</span>
              <input
                type="number"
                placeholder="$ Max"
                className={styles.priceInput}
                min={priceMin}
                max={PRICE_MAX_BOUND}
                value={priceMax}
                onChange={e => setPriceMax(Number(e.target.value))}
              />
            </div>
            <input
              type="range"
              className={styles.priceRange}
              min={PRICE_MIN_BOUND}
              max={PRICE_MAX_BOUND}
              value={priceMax}
              onChange={e => setPriceMax(Number(e.target.value))}
            />
            <div className={styles.priceRangeLabels}>
              <span>${PRICE_MIN_BOUND}</span>
              <span>${PRICE_MAX_BOUND}</span>
            </div>
          </div>
        )}
      </div>

      {/* ── Brand ───────────────────────────────────────────────── */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('brand')}
        >
          <span>Brand</span>
          <span className={`${styles.arrow} ${isExpanded('brand') ? styles.expanded : ''}`}>▼</span>
        </button>
        {isExpanded('brand') && (
          <div className={styles.sectionContent}>
            {visibleBrands.map(brand => (
              <label key={brand.name} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.name)}
                  onChange={() => toggleBrand(brand.name)}
                />
                <span>{brand.name} ({brand.count})</span>
              </label>
            ))}
            <button
              className={styles.showMore}
              onClick={() => setShowAllBrands(prev => !prev)}
            >
              {showAllBrands
                ? '− Show less'
                : `+ Show ${BRANDS.length - BRAND_INITIAL_LIMIT} more`}
            </button>
          </div>
        )}
      </div>

      {/* ── Color ───────────────────────────────────────────────── */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('color')}
        >
          <span>Colour</span>
          <span className={`${styles.arrow} ${isExpanded('color') ? styles.expanded : ''}`}>▼</span>
        </button>
        {isExpanded('color') && (
          <div className={styles.sectionContent}>
            <div className={styles.colorGrid}>
              {COLORS.map(color => (
                <button
                  key={color.name}
                  className={`${styles.colorSwatch} ${selectedColors.includes(color.name) ? styles.selectedColor : ''}`}
                  style={
                    color.name === 'Multi'
                      ? { background: color.hex }
                      : { backgroundColor: color.hex }
                  }
                  title={`${color.name} (${color.count})`}
                  aria-label={color.name}
                  onClick={() => toggleColor(color.name)}
                />
              ))}
            </div>
            <div className={styles.colorLegend}>
              {selectedColors.map(c => (
                <span key={c} className={styles.colorTag}>
                  {c}
                  <button onClick={() => toggleColor(c)}>×</button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default ShopFilters;
