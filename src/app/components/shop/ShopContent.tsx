'use client';

import React, { useState, useEffect, useMemo } from 'react';
import ProductCard from '@/app/components/home/ProductCard';
import ShopFilters from './ShopFilters';
import rawProducts from '@/app/data/shoes_cleaned.json';
import { useFilters } from '@/app/context/FilterContext';
import { Product } from '@/app/types';
import styles from './ShopContent.module.css';

// Cast the JSON import to the typed Product array once so filterProducts
// receives the correct type throughout.
const products = rawProducts as unknown as Product[];

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating-desc' | 'saves-desc';

const SORT_LABELS: Record<SortOption, string> = {
  'default':     'Featured',
  'price-asc':   'Price: Low to High',
  'price-desc':  'Price: High to Low',
  'rating-desc': 'Top Rated',
  'saves-desc':  'Most Saved',
};

function sortProducts(items: Product[], sort: SortOption): Product[] {
  const arr = [...items];
  switch (sort) {
    case 'price-asc':
      return arr.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    case 'price-desc':
      return arr.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    case 'rating-desc':
      return arr.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    case 'saves-desc':
      // "saves" is a string like "3k" or "933" — parse to number for sorting
      return arr.sort((a, b) => {
        const parse = (s: string | number | null | undefined) => {
          if (s == null) return 0;
          const str = String(s).toLowerCase().trim();
          if (str.endsWith('k')) return parseFloat(str) * 1000;
          return parseFloat(str) || 0;
        };
        return parse(b.saves) - parse(a.saves);
      });
    default:
      return arr;
  }
}

const PRODUCTS_PER_PAGE = 9;

const ShopContent: React.FC = () => {
  const [viewMode, setViewMode]     = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy]         = useState<SortOption>('default');

  const { filterProducts } = useFilters();

  // Memoise both filter + sort so the reference only changes when it needs to.
  const filteredProducts = useMemo(
    () => sortProducts(filterProducts(products), sortBy),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filterProducts, sortBy]
  );

  // Reset to page 1 whenever the filtered set or sort order changes.
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts]);

  const totalPages      = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex      = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  // Build a compact page list: always show first, last, current ±1, with ellipsis.
  const pageNumbers = useMemo(() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | '...')[] = [1];
    if (currentPage > 3) pages.push('...');
    for (let p = Math.max(2, currentPage - 1); p <= Math.min(totalPages - 1, currentPage + 1); p++) {
      pages.push(p);
    }
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  }, [totalPages, currentPage]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>

          {/* ── Left Sidebar ─────────────────────────────────────── */}
          <aside className={styles.sidebar}>
            <ShopFilters />
          </aside>

          {/* ── Right Content ─────────────────────────────────────── */}
          <div className={styles.content}>

            {/* Top Bar */}
            <div className={styles.topBar}>
              <div className={styles.resultInfo}>
                {filteredProducts.length > 0
                  ? `Showing ${startIndex + 1}–${Math.min(startIndex + PRODUCTS_PER_PAGE, filteredProducts.length)} of ${filteredProducts.length} results`
                  : 'No results'}
              </div>

              <div className={styles.topBarRight}>
                {/* Sort */}
                <select
                  className={styles.sortSelect}
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as SortOption)}
                  aria-label="Sort products"
                >
                  {(Object.keys(SORT_LABELS) as SortOption[]).map(key => (
                    <option key={key} value={key}>{SORT_LABELS[key]}</option>
                  ))}
                </select>

                {/* View toggle */}
                <div className={styles.viewToggle}>
                  <button
                    className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`}
                    onClick={() => setViewMode('grid')}
                    aria-label="Grid view"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </button>
                  <button
                    className={`${styles.viewBtn} ${viewMode === 'list' ? styles.active : ''}`}
                    onClick={() => setViewMode('list')}
                    aria-label="List view"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid / List */}
            {displayedProducts.length > 0 ? (
              <div className={`${styles.productsGrid} ${viewMode === 'list' ? styles.listView : ''}`}>
                {displayedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <p>No products found matching your filters.</p>
                <p>Try adjusting your search criteria.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && displayedProducts.length > 0 && (
              <div className={styles.pagination}>
                <button
                  className={styles.pageBtn}
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                {pageNumbers.map((page, idx) =>
                  page === '...'
                    ? <span key={`ellipsis-${idx}`} className={styles.ellipsis}>…</span>
                    : (
                      <button
                        key={page}
                        className={`${styles.pageNumber} ${currentPage === page ? styles.activePage : ''}`}
                        onClick={() => setCurrentPage(page as number)}
                      >
                        {page}
                      </button>
                    )
                )}

                <button
                  className={styles.pageBtn}
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopContent;
