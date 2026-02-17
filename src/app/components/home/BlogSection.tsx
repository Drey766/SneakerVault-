'use client';

import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../../data/mockData';
import styles from './BlogSection.module.css';

const BlogSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>OUR BLOG</h2>
        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className={styles.blogCard}>
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}></div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <button className={styles.readMore}>READ MORE</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
