import Hero from './components/home/Hero';
import CategoryGrid from './components/home/CategoryGrid';
import ProductShowcase from './components/home/ProductShowcase';
import FeatureBanner from './components/home/FeatureBanner';
import TopProducts from './components/home/TopProducts';
import BlogSection from './components/home/BlogSection';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductShowcase />
      <FeatureBanner />
      <TopProducts />
      <BlogSection />
    </>
  );
}
