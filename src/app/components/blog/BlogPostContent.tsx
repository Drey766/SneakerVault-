'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '../../types';
import { blogPosts } from '../../data/mockData';
import styles from './BlogPostContent.module.css';
import Image from 'next/image';

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/blog">Blog</Link>
            <span>›</span>
            <span>{post.title}</span>
          </div>
          {post.category && (
            <span className={styles.categoryBadge}>{post.category}</span>
          )}
          <h1 className={styles.heroTitle}>{post.title}</h1>
          <div className={styles.meta}>
            <span>{formatDate(post.date)}</span>
            {post.author && (
              <>
                <span className={styles.separator}>•</span>
                <span>By {post.author}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Main Article */}
          <article className={styles.article}>
            <div className={styles.featuredImage}>
              <div className={styles.imagePlaceholder}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                />
              </div>
            </div>

            <div 
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
            />

            {/* Tags */}
            <div className={styles.tags}>
              <strong>Tags:</strong>
              <span className={styles.tag}>Boots</span>
              <span className={styles.tag}>Fashion</span>
              <span className={styles.tag}>Style</span>
            </div>

            {/* Share */}
            <div className={styles.share}>
              <strong>Share:</strong>
              <div className={styles.shareButtons}>
                <button className={styles.shareBtn} aria-label="Share on Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </button>
                <button className={styles.shareBtn} aria-label="Share on Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </button>
                <button className={styles.shareBtn} aria-label="Share on Pinterest">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                </button>
                <button className={styles.shareBtn} aria-label="Copy link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Author */}
            {post.author && (
              <div className={styles.authorCard}>
                <div className={styles.authorAvatar}></div>
                <h3 className={styles.authorName}>{post.author}</h3>
                <p className={styles.authorBio}>
                  Fashion writer and boot enthusiast sharing insights on style, craftsmanship, and trends.
                </p>
              </div>
            )}

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className={styles.relatedWidget}>
                <h3 className={styles.widgetTitle}>Related Articles</h3>
                <div className={styles.relatedList}>
                  {relatedPosts.map((related) => (
                    <Link 
                      key={related.id} 
                      href={`/blog/${related.slug}`}
                      className={styles.relatedItem}
                    >
                      <div className={styles.relatedImage}></div>
                      <div className={styles.relatedInfo}>
                        <h4 className={styles.relatedTitle}>{related.title}</h4>
                        <span className={styles.relatedDate}>{formatDate(related.date)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
