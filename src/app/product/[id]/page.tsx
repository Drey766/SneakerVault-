import ProductGallery from '@/app/components/product/ProductGallery';
import ProductInfo from '@/app/components/product/ProductInfo';
import ProductTabs from '@/app/components/product/ProductTabs';
import ProductFeatures from '@/app/components/product/ProductFeatures';
import YouMightAlsoLike from '@/app/components/product/YouMightAlsoLike';
import Breadcrumb from '@/app/components/product/Breadcrumb';
import styles from './product.module.css';
import data from '@/app/data/shoes_cleaned.json';
import { Product } from '@/app/types';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productData: Product | undefined = data.find(p => p.id === id);

  // If product not found, you could return a 404 page or similar
  if (!productData) {
    return <div>Product not found</div>;
  }
  console.log('Fetched product data:', productData);
  
  return (
    <>
      <div className={styles.page}>
        <div className={styles.container}>
          <Breadcrumb productName={productData.title} />
          <div className={styles.productLayout}>
            <ProductGallery images={productData.gallery_images} />
            <ProductInfo product={productData} />
          </div>
        </div>
        <ProductTabs product={productData} />
        <ProductFeatures />
        <YouMightAlsoLike />
      </div>
    </>
  );
}
