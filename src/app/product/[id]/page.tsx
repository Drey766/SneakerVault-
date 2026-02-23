import ProductGallery from '@/app/components/product/ProductGallery';
import ProductInfo from '@/app/components/product/ProductInfo';
import ProductTabs from '@/app/components/product/ProductTabs';
import ProductFeatures from '@/app/components/product/ProductFeatures';
import YouMightAlsoLike from '@/app/components/product/YouMightAlsoLike';
import Breadcrumb from '@/app/components/product/Breadcrumb';
import styles from './product.module.css';

// In a real app this would fetch from API by id
const mockProduct = {
  id: '3',
  name: 'Minimal Edge',
  price: 30.00,
  originalPrice: 40.00,
  rating: 2.5,
  reviewCount: 0,
  colors: [
    { name: 'Black', hex: '#1a1a1a' },
    { name: 'Cream', hex: '#d4c5a9' },
  ],
  description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as oppos...`,
  images: [
    '/images/minimal-edge.jpg',
    '/images/minimal-edge-2.jpg',
    '/images/minimal-edge-3.jpg',
    '/images/minimal-edge-4.jpg',
    '/images/minimal-edge-5.jpg',
  ],
  category: 'boots',
  onSale: true,
  deliveryTime: '12-26 days (International), 3-6 days (United States)',
  returnPolicy: '45 days of purchase. Duties & taxes are non-refundable.',
};

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.container}>
          <Breadcrumb productName={mockProduct.name} />
          <div className={styles.productLayout}>
            <ProductGallery images={mockProduct.images} />
            <ProductInfo product={mockProduct} />
          </div>
        </div>
        <ProductTabs product={mockProduct} />
        <ProductFeatures />
        <YouMightAlsoLike />
      </div>
    </>
  );
}
