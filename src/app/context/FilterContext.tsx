'use client';

import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import { Product } from '@/app/types';

// ─── Color normalizer (mirrors ShopFilters colour families) ──────────────────

function normalizeColor(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const c = raw.toUpperCase();
  if (c.includes('BLACK')) return 'Black';
  if (c.includes('WHITE') || c.includes('IVORY') || c.includes('CREAM')) return 'White';
  if (c.includes('BROWN') || c.includes('TAN') || c.includes('CARAMEL') || c.includes('CHOCOLATE') || c.includes('COGNAC')) return 'Brown';
  if (c.includes('BEIGE') || c.includes('NUDE') || c.includes('STONE') || c.includes('SAND') || c.includes('NATURAL')) return 'Beige';
  if (c.includes('NAVY')) return 'Navy';
  if (c.includes('BLUE') || c.includes('TEAL') || c.includes('COBALT') || c.includes('INDIGO') || c.includes('DENIM')) return 'Blue';
  if (c.includes('RED') || c.includes('CRIMSON') || c.includes('SCARLET') || c.includes('CHERRY')) return 'Red';
  if (c.includes('GREEN') || c.includes('OLIVE') || c.includes('KHAKI') || c.includes('MINT') || c.includes('SAGE')) return 'Green';
  if (c.includes('GREY') || c.includes('GRAY') || c.includes('SILVER')) return 'Grey';
  if (c.includes('PINK') || c.includes('ROSE') || c.includes('BLUSH') || c.includes('MAUVE')) return 'Pink';
  if (c.includes('PURPLE') || c.includes('LILAC') || c.includes('VIOLET') || c.includes('PLUM') || c.includes('LAVENDER')) return 'Purple';
  if (c.includes('YELLOW') || c.includes('GOLD') || c.includes('LEMON')) return 'Yellow';
  if (c.includes('ORANGE') || c.includes('CORAL') || c.includes('RUST') || c.includes('TERRACOTTA')) return 'Orange';
  if (c.includes('MAROON') || c.includes('BURGUNDY') || c.includes('WINE') || c.includes('OXBLOOD')) return 'Burgundy';
  if (c.includes('MULTI')) return 'Multi';
  return null;
}

// ─── Context type ─────────────────────────────────────────────────────────────

interface FilterContextType {
  // Gender
  selectedGenders: string[];
  toggleGender: (gender: string) => void;

  // Availability flags (real fields from dataset)
  onSale: boolean;
  setOnSale: (value: boolean) => void;
  sellingFast: boolean;
  setSellingFast: (value: boolean) => void;
  hasMoreColours: boolean;
  setHasMoreColours: (value: boolean) => void;
  freeDelivery: boolean;
  setFreeDelivery: (value: boolean) => void;

  // Price
  priceMin: number;
  priceMax: number;
  setPriceMin: (value: number) => void;
  setPriceMax: (value: number) => void;

  // Brand
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;

  // Color
  selectedColors: string[];
  toggleColor: (color: string) => void;

  // Filter products
  filterProducts: (products: Product[]) => Product[];

  // Clear all filters
  clearAllFilters: () => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const DEFAULT_PRICE_MAX = 400; // dataset ceiling: $387

export function FilterProvider({ children }: { children: ReactNode }) {
  // Gender
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);

  // Availability
  const [onSale, setOnSale] = useState(false);
  const [sellingFast, setSellingFast] = useState(false);
  const [hasMoreColours, setHasMoreColours] = useState(false);
  const [freeDelivery, setFreeDelivery] = useState(false);

  // Price
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(DEFAULT_PRICE_MAX);

  // Brand
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Color
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  // ── Togglers (stable references via useCallback) ────────────────────────────

  const toggleGender = useCallback((gender: string) => {
    setSelectedGenders(prev =>
      prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]
    );
  }, []);

  const toggleBrand = useCallback((brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  }, []);

  const toggleColor = useCallback((color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  }, []);

  // ── Filter logic (stable reference — only recreated when filter state changes) ──

  const filterProducts = useCallback((products: Product[]): Product[] => {
    let filtered = [...products];

    // Gender
    if (selectedGenders.length > 0) {
      filtered = filtered.filter(product =>
        product.gender && selectedGenders.includes(product.gender)
      );
    }

    // Price — guard against null prices
    filtered = filtered.filter(product => {
      const price = product.price ?? 0;
      return price >= priceMin && price <= priceMax;
    });

    // Availability flags
    if (onSale) {
      filtered = filtered.filter(product => product.on_sale === true);
    }
    if (sellingFast) {
      filtered = filtered.filter(product => product.selling_fast === true);
    }
    if (hasMoreColours) {
      filtered = filtered.filter(product => product.has_more_colours === true);
    }
    if (freeDelivery) {
      filtered = filtered.filter(product =>
        product.delivery_info?.toLowerCase().includes('free')
      );
    }

    // Brand
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        product.brand && selectedBrands.includes(product.brand)
      );
    }

    // Color — normalise raw color strings to family names before comparing
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => {
        const normalized = normalizeColor(product.color);
        return normalized !== null && selectedColors.includes(normalized);
      });
    }

    return filtered;
  }, [
    selectedGenders, priceMin, priceMax,
    onSale, sellingFast, hasMoreColours, freeDelivery,
    selectedBrands, selectedColors,
  ]);

  // ── Clear all ─────────────────────────────────────────────────────────────

  const clearAllFilters = useCallback(() => {
    setSelectedGenders([]);
    setOnSale(false);
    setSellingFast(false);
    setHasMoreColours(false);
    setFreeDelivery(false);
    setPriceMin(0);
    setPriceMax(DEFAULT_PRICE_MAX);
    setSelectedBrands([]);
    setSelectedColors([]);
  }, []);

  // ── Stable context value ──────────────────────────────────────────────────

  const contextValue = useMemo(() => ({
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
    filterProducts,
    clearAllFilters,
  }), [
    selectedGenders, toggleGender,
    onSale, sellingFast, hasMoreColours, freeDelivery,
    priceMin, priceMax,
    selectedBrands, toggleBrand,
    selectedColors, toggleColor,
    filterProducts, clearAllFilters,
  ]);

  return (
    <FilterContext.Provider value={contextValue}>
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
