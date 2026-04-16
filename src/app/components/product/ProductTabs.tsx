'use client';

import React, { useState } from 'react';
import styles from './ProductTabs.module.css';
import { Product } from '@/app/types';

interface ProductTabsProps {
  product: {
    title: string;
    brand_description: string;
  };
}

const ProductTabs: React.FC = ({}) => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'shipping', label: 'Shipping & return' },
    { id: 'reviews', label: 'Customer reviews' },
  ];

  return (
    <div className={styles.tabsSection}>
      {/* Tab Nav */}
      <div className={styles.tabNav}>
        <div className={styles.tabNavInner}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        <div className={styles.contentInner}>
          {activeTab === 'description' && (
            <div className={styles.descriptionTab}>
              {/* Intro paragraph */}
              <p className={styles.intro}>
                Temporibus unde ut exercitationem sit nostrum consectetur est. Voluptatem fugit nisi et minima vel. 
                Adipisci iure ut corrupti hic consectetur. Atque mollifia modi suscipit et necessitatibus. Et ab 
                cupiditate et voluptatibus excepturi atque sint veniam. Perspiciatis dolorum consectetur amet. Nam sed 
                et voluptates asperiores illum ipsam delerit. Voluptatem minima ea dolor dicta reprehenderit.
              </p>

              {/* Outstanding Features */}
              <div className={styles.featuresSection}>
                <div className={styles.featuresText}>
                  <h3 className={styles.featureTitle}>Outstanding Features</h3>
                  <p className={styles.featureBody}>
                    Blanditiis dolorem voluptatem consequuntur explicabo accusamus fugiat maxime. Eum vel fugit 
                    cupiditate ex dolorum dolorum cupiditate. Et sed minus repudiandae. Cum aliquid aut 
                    voluptatem possimus ipsa.
                  </p>
                  <ul className={styles.featureList}>
                    <li>Longum tempus warantum: Product warantum pro 2 annis.</li>
                    <li>Impact resistentiam: Designa productum ut impactu ab collisione sustineant.</li>
                    <li>Princeps vetustatem: Using qualitas materiae princeps.</li>
                    <li>Notitia securitatis: Prospicere salutem users' notitia et personalis notitia</li>
                    <li>Dedicavit ministros: Provide professionales et dedicatos ministros officia</li>
                  </ul>
                  <p className={styles.featureBody}>
                    Eum asperatur culpa sit saepe velit velit consequatur. Quia illo enim voluptas qui. Expedita 
                    mollitia suscipít odio nam suscipít. At dignissimos sapiente iure dolorem. Autem occaecati amet 
                    voluptas accussantium blanditiis similique sunt.
                  </p>
                </div>
                <div className={styles.featuresImage}>
                  <div className={styles.featureImgPlaceholder} />
                </div>
              </div>

              {/* Product Supreme Quality */}
              <div className={styles.qualitySection}>
                <h3 className={styles.featureTitle}>Product Supreme Quality</h3>
                <p className={styles.featureBody}>
                  Labore omnis sint totam maxime. Reprehenderit eaque consectetur consequuntur ullam consequuntur voluptatum. Eius voluptatem molestias rerum repellat quam.Eum aspernatur culpa sit saepe velit velit consequatur. Quia illo enim voluptas qui.
                </p>

                {/* 3 Quality Images */}
                <div className={styles.qualityImages}>
                  <div className={styles.qualityImg} />
                  <div className={styles.qualityImg} />
                  <div className={styles.qualityImg} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className={styles.shippingTab}>
              <h3>Shipping & Return Policy</h3>
              <p>Estimate delivery times: <strong>12-26 days (International), 3-6 days (United States).</strong></p>
              <p style={{ marginTop: '16px' }}>Return within <strong>45 days</strong> of purchase. Duties & taxes are non-refundable.</p>
              <ul className={styles.featureList} style={{ marginTop: '20px' }}>
                <li>Free standard shipping on orders over $100</li>
                <li>Express shipping available at checkout</li>
                <li>All returns must be in original, unworn condition</li>
                <li>Return label provided for US orders</li>
                <li>International returns: customer covers shipping cost</li>
              </ul>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className={styles.reviewsTab}>
              <div className={styles.noReviews}>
                <div className={styles.starsLarge}>★★★★★</div>
                <p>No reviews yet.</p>
                <p>Be the first to write a review!</p>
                <button className={styles.writeReviewBtn}>Write a Review</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
