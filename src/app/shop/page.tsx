'use client';

import ShopHero from '../components/shop/ShopHero';
import CategoryChips from '../components/shop/CategoryChips';
import ShopContent from '../components/shop/ShopContent';
import { FilterProvider } from '../context/FilterContext';

export default function ShopPage() {
  return (
    <FilterProvider>
      <ShopHero />
      <CategoryChips />
      <ShopContent />
    </FilterProvider>
  );
}
