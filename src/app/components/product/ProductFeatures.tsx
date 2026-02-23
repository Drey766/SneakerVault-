import React from 'react';
import styles from './ProductFeatures.module.css';

const features = [
  {
    title: 'Information Product',
    body: 'iFlexibilie consilium: Design res ad usus multos et spatia apta, flexibilitatem et commodum usoribus afferens.',
  },
  {
    title: 'Fabricae Material',
    body: 'SAIta durabilitae: alta qualitas materiae et processus fabricandi provocavie utens productum habet longam restem et capacitatem bonam sustinens.',
  },
  {
    title: 'Instructiones',
    body: 'Facilis utendum est: User-amica interface et experientia consilium, simplex et facile ad intelligendum, adiuvans utentes utentes facto facili et commode.',
  },
];

const ProductFeatures: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imagesRow}>
          <div className={styles.featureImg} />
          <div className={styles.featureImg} />
          <div className={styles.featureImg} />
        </div>
        <div className={styles.cardsRow}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <h4 className={styles.cardTitle}>{f.title}</h4>
              <p className={styles.cardBody}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
