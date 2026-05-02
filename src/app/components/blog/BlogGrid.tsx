'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '../../data/mockData';
import styles from './BlogGrid.module.css';

const BlogGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', 'Design', 'Style Guide', 'Product Launch', 'Care Guide', 'Trends', 'History'];

  const filteredPosts = selectedCategory && selectedCategory !== 'All'
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Main Content */}
          <div className={styles.mainContent}>
            <div className={styles.grid}>
              {filteredPosts.map((post) => (
                <article key={post.id} className={styles.blogCard}>
                  <Link href={`/blog/${post.slug}`} className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                      <img 
                        src={post.image} 
                        alt={post.title} 
                      /> 
                    </div>
                    <div className={styles.categoryBadge}>{post.category}</div>
                  </Link>
                  <div className={styles.cardContent}>
                    <div className={styles.meta}>
                      <span className={styles.date}>{formatDate(post.date)}</span>
                      {post.author && (
                        <>
                          <span className={styles.separator}>•</span>
                          <span className={styles.author}>By {post.author}</span>
                        </>
                      )}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className={styles.title}>{post.title}</h2>
                    </Link>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Search */}
            <div className={styles.sidebarWidget}>
              <h3 className={styles.widgetTitle}>Search</h3>
              <div className={styles.searchBox}>
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className={styles.searchInput}
                />
                <button className={styles.searchBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className={styles.sidebarWidget}>
              <h3 className={styles.widgetTitle}>Categories</h3>
              <ul className={styles.categoryList}>
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      className={`${styles.categoryBtn} ${
                        (selectedCategory === category || (category === 'All' && !selectedCategory)) 
                          ? styles.active 
                          : ''
                      }`}
                      onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                    >
                      {category}
                      {category !== 'All' && (
                        <span className={styles.count}>
                          ({blogPosts.filter(p => p.category === category).length})
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className={styles.sidebarWidget}>
              <h3 className={styles.widgetTitle}>Recent Posts</h3>
              <ul className={styles.recentList}>
                {blogPosts.slice(0, 4).map((post) => (
                  <li key={post.id} className={styles.recentItem}>
                    <Link href={`/blog/${post.slug}`} className={styles.recentLink}>
                      <div className={styles.recentImage}></div>
                      <div className={styles.recentInfo}>
                        <h4 className={styles.recentTitle}>{post.title}</h4>
                        <span className={styles.recentDate}>{formatDate(post.date)}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className={`${styles.sidebarWidget} ${styles.newsletterWidget}`}>
              <h3 className={styles.widgetTitle}>Newsletter</h3>
              <p className={styles.newsletterText}>
                Subscribe to get the latest articles delivered to your inbox.
              </p>
              <form className={styles.newsletterForm}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterBtn}>
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
