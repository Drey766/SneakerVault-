'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/app/types';

interface FilterContextType {
  // Category chips
  activeCategories: string[];
  toggleCategory: (category: string) => void;
  
  // Availability
  inStock: boolean;
  outOfStock: boolean;
  setInStock: (value: boolean) => void;
  setOutOfStock: (value: boolean) => void;
  
  // Price
  priceMin: number;
  priceMax: number;
  setPriceMin: (value: number) => void;
  setPriceMax: (value: number) => void;
  
  // Brand
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
  
  // Category filters
  selectedCategories: string[];
  toggleCategoryFilter: (category: string) => void;
  
  // Color
  selectedColors: string[];
  toggleColor: (color: string) => void;
  
  // Material
  selectedMaterials: string[];
  toggleMaterial: (material: string) => void;
  
  // More Filters
  selectedMoreFilters: string[];
  toggleMoreFilter: (filter: string) => void;
  
  // Size
  selectedSizes: string[];
  toggleSize: (size: string) => void;
  
  // Product Type
  selectedProductTypes: string[];
  toggleProductType: (type: string) => void;
  
  // Filter products
  filterProducts: (products: Product[]) => Product[];
  
  // Clear all filters
  clearAllFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  // Category chips
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  
  // Availability
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  
  // Price
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(500);
  
  // Brand
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  
  // Category
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Color
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  
  // Material
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  
  // More Filters
  const [selectedMoreFilters, setSelectedMoreFilters] = useState<string[]>([]);
  
  // Size
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  
  // Product Type
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setActiveCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleCategoryFilter = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev =>
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };

  const toggleMoreFilter = (filter: string) => {
    setSelectedMoreFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const toggleProductType = (type: string) => {
    setSelectedProductTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const filterProducts = (products: Product[]): Product[] => {
    let filtered = [...products];

    // Filter by price
    filtered = filtered.filter(
      product => product.price >= priceMin && product.price <= priceMax
    );

    // Filter by availability
    if (inStock && !outOfStock) {
      filtered = filtered.filter(product => !product.isNew); // Mock: assume new items are in stock
    } else if (outOfStock && !inStock) {
      filtered = filtered.filter(product => product.isNew); // Mock logic
    }

    // Filter by brands
    if (selectedBrands.length > 0) {
      // Since we don't have brand in Product type, this is for future expansion
      // filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }

    // Filter by categories (from sidebar)
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.some(cat => product.category.toLowerCase().includes(cat.toLowerCase()))
      );
    }

    // Filter by active category chips
    if (activeCategories.length > 0) {
      // Map category names to category codes
      const categoryMap: { [key: string]: string[] } = {
        'Athletic Footwear': ['featured', 'combat'],
        'Boots for Every Occasion': ['boho', 'classic'],
        'Luxury Leather Shoes': ['featured', 'bestseller'],
        'Sandals & Slides': ['toprating'],
        'Sneakerhead\'s Haven': ['combat', 'featured']
      };
      
      const allowedCategories = activeCategories.flatMap(cat => categoryMap[cat] || []);
      if (allowedCategories.length > 0) {
        filtered = filtered.filter(product => 
          allowedCategories.includes(product.category)
        );
      }
    }

    // Filter by product types
    if (selectedProductTypes.length > 0) {
      filtered = filtered.filter(product =>
        selectedProductTypes.some(type => 
          product.name.toLowerCase().includes(type.toLowerCase())
        )
      );
    }

    return filtered;
  };

  const clearAllFilters = () => {
    setActiveCategories([]);
    setInStock(false);
    setOutOfStock(false);
    setPriceMin(0);
    setPriceMax(500);
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedMaterials([]);
    setSelectedMoreFilters([]);
    setSelectedSizes([]);
    setSelectedProductTypes([]);
  };

  return (
    <FilterContext.Provider
      value={{
        activeCategories,
        toggleCategory,
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
        filterProducts,
        clearAllFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}
