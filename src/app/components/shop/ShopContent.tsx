'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/home/ProductCard';
import ShopFilters from './ShopFilters';
import { products } from '../../data/mockData';
import { useFilters } from '../../context/FilterContext';
import styles from './ShopContent.module.css';

const ShopContent: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts.length]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left Sidebar - Filters */}
          <aside className={styles.sidebar}>
            <ShopFilters />
          </aside>

          {/* Right Content - Products */}
          <div className={styles.content}>
            {/* Top Bar */}
            <div className={styles.topBar}>
              <div className={styles.resultInfo}>
                Showing {filteredProducts.length > 0 ? startIndex + 1 : 0}-{Math.min(startIndex + productsPerPage, filteredProducts.length)} of {filteredProducts.length} results
              </div>
              <div className={styles.viewToggle}>
                <button
                  className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
                <button
                  className={`${styles.viewBtn} ${viewMode === 'list' ? styles.active : ''}`}
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {displayedProducts.length > 0 ? (
              <div className={`${styles.productsGrid} ${viewMode === 'list' ? styles.listView : ''}`}>
                {displayedProducts.map((product) => (
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
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`${styles.pageNumber} ${currentPage === page ? styles.activePage : ''}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  className={styles.pageBtn}
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
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
