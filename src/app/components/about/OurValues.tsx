import React from 'react';
import styles from './OurValues.module.css';

const values = [
  {
    title: 'Design',
    description: 'Praesent rutrus tellus, elementum eu, semper. Vestibulum volutpat pretium libero.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    )
  },
  {
    title: 'Innovation',
    description: 'Praesent rutrus tellus, elementum eu, semper. Vestibulum volutpat pretium libero.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    )
  },
  {
    title: 'Journey',
    description: 'Praesent rutrus tellus, elementum eu, semper. Vestibulum volutpat pretium libero.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    )
  }
];

const OurValues: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.icon}>{value.icon}</div>
              <h3 className={styles.title}>{value.title}</h3>
              <p className={styles.description}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
