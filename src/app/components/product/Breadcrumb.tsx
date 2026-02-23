import React from 'react';
import Link from 'next/link';
import styles from './Breadcrumb.module.css';

interface BreadcrumbProps {
  productName: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ productName }) => {
  return (
    <nav className={styles.breadcrumb}>
      <Link href="/" className={styles.link}>Home</Link>
      <span className={styles.separator}>›</span>
      <span className={styles.current}>{productName}</span>
    </nav>
  );
};

export default Breadcrumb;
