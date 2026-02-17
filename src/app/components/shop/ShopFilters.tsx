'use client';

import React, { useState } from 'react';
import { useFilters } from '../../context/FilterContext';
import styles from './ShopFilters.module.css';

const ShopFilters: React.FC = () => {
  const {
    inStock,
    outOfStock,
    setInStock,
    setOutOfStock,
    priceMin,
    priceMax,
    setPriceMin,
    setPriceMax,
    selectedBrands,
    toggleBrand,
    selectedCategories,
    toggleCategoryFilter,
    selectedColors,
    toggleColor,
    selectedMaterials,
    toggleMaterial,
    selectedMoreFilters,
    toggleMoreFilter,
    selectedSizes,
    toggleSize,
    selectedProductTypes,
    toggleProductType,
    clearAllFilters
  } = useFilters();

  const [expandedSections, setExpandedSections] = useState<string[]>([
    'availability', 'price', 'brand', 'category', 'color', 'material', 'moreFilters', 'size', 'productType'
  ]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const brands = [
    'Airwalk', 'Balenciaga', 'ComfortStep', 'CountyClaire', 'EcoStride',
    'FlexiWalk', 'FootJoy', 'PoloWear', 'RunHero', 'SportVito', 'UrbanFit'
  ];

  const categories = [
    { name: 'Flightpoint Kit', count: 12 },
    { name: 'Hot Deal', count: 9 },
    { name: 'Kid Shoe', count: 17 },
    { name: 'Makeup', count: 7 },
    { name: 'Running', count: 18 },
    { name: 'Sport Shoe', count: 15 }
  ];

  const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'Blue', hex: '#0066cc' },
    { name: 'Brown', hex: '#8b4513' },
    { name: 'Green', hex: '#228b22' },
    { name: 'Grey', hex: '#808080' },
    { name: 'Navy', hex: '#000080' },
    { name: 'Orange', hex: '#ff8c00' },
    { name: 'Pink', hex: '#ff69b4' },
    { name: 'Purple', hex: '#9370db' },
    { name: 'Red', hex: '#dc143c' },
    { name: 'White', hex: '#ffffff' },
    { name: 'Yellow', hex: '#ffd700' }
  ];

  const materials = [
    { name: 'Material 1', count: 11 },
    { name: 'Material 2', count: 9 },
    { name: 'Material 3', count: 17 },
    { name: 'Material 4', count: 13 }
  ];

  const moreFilters = [
    'Black Heel', 'Breathable', 'Canvas', 'Casual', 'Chunky', 'Classic',
    'Comfort', 'Cushioned', 'Durable', 'Eco-Friendly'
  ];

  const sizes = ['S', 'M', 'L'];

  const productTypes = [
    'Boots', 'Heels', 'Hiking Boots', 'Ladies', 'Moccasins', 'New',
    'Running Shoes', 'Sandals', 'Slip-Ons', 'Slippers', 'Sneakers', 'Work Shoes'
  ];

  return (
    <div className={styles.filters}>
      {/* Clear Filters Button */}
      <button className={styles.clearAll} onClick={clearAllFilters}>
        Clear All Filters
      </button>

      {/* Availability */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('availability')}
        >
          <span>Availability</span>
          <span className={`${styles.arrow} ${expandedSections.includes('availability') ? styles.expanded : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.includes('availability') && (
          <div className={styles.sectionContent}>
            <label className={styles.checkbox}>
              <input 
                type="checkbox" 
                checked={inStock}
                onChange={(e) => setInStock(e.target.checked)}
              />
              <span>In stock (19)</span>
            </label>
            <label className={styles.checkbox}>
              <input 
                type="checkbox"
                checked={outOfStock}
                onChange={(e) => setOutOfStock(e.target.checked)}
              />
              <span>Out of stock (32)</span>
            </label>
          </div>
        )}
      </div>

      {/* Price */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('price')}
        >
          <span>Price</span>
          <span className={`${styles.arrow} ${expandedSections.includes('price') ? styles.expanded : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.includes('price') && (
          <div className={styles.sectionContent}>
            <div className={styles.priceInputs}>
              <input 
                type="number" 
                placeholder="$" 
                className={styles.priceInput}
                value={priceMin}
                onChange={(e) => setPriceMin(Number(e.target.value))}
              />
              <span>-</span>
              <input 
                type="number" 
                placeholder="$" 
                className={styles.priceInput}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
              />
            </div>
            <input 
              type="range" 
              className={styles.priceRange} 
              min="0" 
              max="500"
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
            />
          </div>
        )}
      </div>

      {/* Brand */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('brand')}
        >
          <span>Brand</span>
          <span className={`${styles.arrow} ${expandedSections.includes('brand') ? styles.expanded : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.includes('brand') && (
          <div className={styles.sectionContent}>
            {brands.map((brand) => (
              <label key={brand} className={styles.checkbox}>
                <input 
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                <span>{brand} (1)</span>
              </label>
            ))}
            <button className={styles.showMore}>+ Show more</button>
          </div>
        )}
      </div>

      {/* Category */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('category')}
        >
          <span>Category</span>
          <span className={`${styles.arrow} ${expandedSections.includes('category') ? styles.expanded : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.includes('category') && (
          <div className={styles.sectionContent}>
            {categories.map((cat) => (
              <label key={cat.name} className={styles.checkbox}>
                <input 
                  type="checkbox"
                  checked={selectedCategories.includes(cat.name)}
                  onChange={() => toggleCategoryFilter(cat.name)}
                />
                <span>{cat.name} ({cat.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Color */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('color')}
        >
          <span>Color</span>
          <span className={`${styles.arrow} ${expandedSections.includes('color') ? styles.expanded : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.includes('color') && (
          <div className={styles.sectionContent}>
            <div className={styles.colorGrid}>
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`${styles.colorSwatch} ${selectedColors.includes(color.name) ? styles.selectedColor : ''}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={color.name}
                  onClick={() => toggleColor(color.name)}
                />
              ))}
            </div>
            <button className={styles.showMore}>+ Show more</button>
          </div>
        )}
      </div>

      {/* Material */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('material')}
        >
          <span>Material</span>
          <span className={`${styles.arrow} ${expandedSections.includes('material') ? styles.expanded : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.includes('material') && (
          <div className={styles.sectionContent}>
            {materials.map((material) => (
              <label key={material.name} className={styles.checkbox}>
                <input 
                  type="checkbox"
                  checked={selectedMaterials.includes(material.name)}
                  onChange={() => toggleMaterial(material.name)}
                />
                <span>{material.name} ({material.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* More Filters */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('moreFilters')}
        >
          <span>More Filters</span>
          <span className={`${styles.arrow} ${expandedSections.includes('moreFilters') ? styles.expanded : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.includes('moreFilters') && (
          <div className={styles.sectionContent}>
            {moreFilters.map((filter) => (
              <label key={filter} className={styles.checkbox}>
                <input 
                  type="checkbox"
                  checked={selectedMoreFilters.includes(filter)}
                  onChange={() => toggleMoreFilter(filter)}
                />
                <span>{filter} (1)</span>
              </label>
            ))}
            <button className={styles.showMore}>+ Show more</button>
          </div>
        )}
      </div>

      {/* Size */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('size')}
        >
          <span>Size</span>
          <span className={`${styles.arrow} ${expandedSections.includes('size') ? styles.expanded : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.includes('size') && (
          <div className={styles.sectionContent}>
            <div className={styles.sizeButtons}>
              {sizes.map((size) => (
                <button 
                  key={size} 
                  className={`${styles.sizeBtn} ${selectedSizes.includes(size) ? styles.active : ''}`}
                  onClick={() => toggleSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Product Type */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggleSection('productType')}
        >
          <span>Product type</span>
          <span className={`${styles.arrow} ${expandedSections.includes('productType') ? styles.expanded : ''}`}>
            ▼
          </span>
        </button>
        {expandedSections.includes('productType') && (
          <div className={styles.sectionContent}>
            {productTypes.map((type) => (
              <label key={type} className={styles.checkbox}>
                <input 
                  type="checkbox"
                  checked={selectedProductTypes.includes(type)}
                  onChange={() => toggleProductType(type)}
                />
                <span>{type} (2)</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopFilters;
