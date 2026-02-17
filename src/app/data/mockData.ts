import { Product, Category, BlogPost } from '../types';

export const products: Product[] = [
  // Featured Products
  {
    id: '1',
    name: 'Puddle Proof',
    price: 99.99,
    originalPrice: 120.00,
    image: '/images/puddle-proof.jpg',
    category: 'featured',
    onSale: true,
    description: 'Stylish waterproof boots with chunky heel'
  },
  {
    id: '2',
    name: 'Everyday Fit',
    price: 120.00,
    originalPrice: 150.00,
    image: '/images/everyday-fit.jpg',
    category: 'featured',
    onSale: true,
    description: 'Classic black combat boots for everyday wear'
  },
  {
    id: '3',
    name: 'Minimal Edge',
    price: 89.99,
    originalPrice: 110.00,
    image: '/images/minimal-edge.jpg',
    category: 'featured',
    onSale: true,
    description: 'Minimalist white ankle boots'
  },
  
  // Boho Boots
  {
    id: '4',
    name: 'Desert Walker',
    price: 95.00,
    originalPrice: 125.00,
    image: '/images/desert-walker.jpg',
    category: 'boho',
    onSale: true,
    description: 'Bohemian style boots with fringe details'
  },
  {
    id: '5',
    name: 'Festival Spirit',
    price: 110.00,
    originalPrice: 140.00,
    image: '/images/festival-spirit.jpg',
    category: 'boho',
    onSale: true,
    description: 'Embroidered boho boots perfect for festivals'
  },
  {
    id: '6',
    name: 'Gypsy Soul',
    price: 105.00,
    originalPrice: 130.00,
    image: '/images/gypsy-soul.jpg',
    category: 'boho',
    onSale: true,
    description: 'Free-spirited design with leather details'
  },

  // Classic Boots
  {
    id: '7',
    name: 'Timeless Charm',
    price: 130.00,
    originalPrice: 160.00,
    image: '/images/timeless-charm.jpg',
    category: 'classic',
    onSale: true,
    description: 'Classic leather ankle boots'
  },
  {
    id: '8',
    name: 'Heritage Boot',
    price: 145.00,
    originalPrice: 180.00,
    image: '/images/heritage-boot.jpg',
    category: 'classic',
    onSale: true,
    description: 'Traditional design with modern comfort'
  },
  {
    id: '9',
    name: 'Urban Classic',
    price: 125.00,
    originalPrice: 155.00,
    image: '/images/urban-classic.jpg',
    category: 'classic',
    onSale: true,
    description: 'Sleek and sophisticated city boots'
  },

  // Combat Boots
  {
    id: '10',
    name: 'Night Walk',
    price: 95.00,
    originalPrice: 110.00,
    image: '/images/night-walk.jpg',
    category: 'combat',
    onSale: true,
    description: 'Elegant heeled boots with bow detail'
  },
  {
    id: '11',
    name: 'Urban Warrior',
    price: 115.00,
    originalPrice: 145.00,
    image: '/images/urban-warrior.jpg',
    category: 'combat',
    onSale: true,
    description: 'Heavy-duty combat boots with platform sole'
  },
  {
    id: '12',
    name: 'Street Fighter',
    price: 108.00,
    originalPrice: 135.00,
    image: '/images/street-fighter.jpg',
    category: 'combat',
    onSale: true,
    description: 'Tough leather combat boots for urban adventures'
  },
  {
    id: '13',
    name: 'Military Edge',
    price: 120.00,
    originalPrice: 150.00,
    image: '/images/military-edge.jpg',
    category: 'combat',
    onSale: true,
    description: 'Military-inspired lace-up boots'
  },

  // Best Seller
  {
    id: '14',
    name: 'Customer Favorite',
    price: 135.00,
    originalPrice: 170.00,
    image: '/images/customer-favorite.jpg',
    category: 'bestseller',
    onSale: true,
    description: 'Our most popular boot style'
  },
  {
    id: '15',
    name: 'Top Rated',
    price: 128.00,
    originalPrice: 160.00,
    image: '/images/top-rated.jpg',
    category: 'bestseller',
    onSale: true,
    description: 'Highest rated by customers'
  },
  {
    id: '16',
    name: 'Best Choice',
    price: 142.00,
    originalPrice: 175.00,
    image: '/images/best-choice.jpg',
    category: 'bestseller',
    onSale: true,
    description: 'Award-winning design and comfort'
  },
  {
    id: '17',
    name: 'Staff Pick',
    price: 138.00,
    originalPrice: 165.00,
    image: '/images/staff-pick.jpg',
    category: 'bestseller',
    onSale: true,
    description: 'Recommended by our style experts'
  },

  // Top Rating
  {
    id: '18',
    name: 'Five Star',
    price: 155.00,
    originalPrice: 190.00,
    image: '/images/five-star.jpg',
    category: 'toprating',
    onSale: true,
    description: 'Perfect 5-star customer reviews'
  },
  {
    id: '19',
    name: 'Premium Quality',
    price: 165.00,
    originalPrice: 200.00,
    image: '/images/premium-quality.jpg',
    category: 'toprating',
    onSale: true,
    description: 'Exceptional quality and craftsmanship'
  },
  {
    id: '20',
    name: 'Editor Choice',
    price: 148.00,
    originalPrice: 185.00,
    image: '/images/editor-choice.jpg',
    category: 'toprating',
    onSale: true,
    description: 'Featured in top fashion magazines'
  },
  {
    id: '21',
    name: 'Kara Trail',
    price: 105.00,
    originalPrice: 125.00,
    image: '/images/kara-trail.jpg',
    category: 'toprating',
    onSale: true,
    description: 'Chunky heeled ankle boots in grey'
  },
];

export const categories: Category[] = [
  {
    name: 'Running Shoes',
    image: '/images/category-running.jpg',
    slug: 'running-shoes'
  },
  {
    name: 'Street Sneakers',
    image: '/images/category-street.jpg',
    slug: 'street-sneakers'
  },
  {
    name: 'Casual Shoes',
    image: '/images/category-flat.jpg',
    slug: 'casual-shoes'
  },
  {
    name: 'Sports Trainers',
    image: '/images/category-chelsea.jpg',
    slug: 'sports-trainers'
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Behind the Design: What Makes Our Sneakers Special',
    excerpt: 'Discover the craftsmanship and attention to detail that goes into every pair of boots we create.',
    image: '/images/blog-1.jpg',
    date: '2024-01-15',
    slug: 'behind-the-design'
  },
  {
    id: '2',
    title: 'How to Choose the Perfect Sneakers for Your Lifestyle',
    excerpt: 'Expert tips on selecting boots that complement your unique style and proportions.',
    image: '/images/blog-2.jpg',
    date: '2024-01-10',
    slug: 'choosing-perfect-sneakers'
  },
  {
    id: '3',
    title: 'Luxury Meets Comfort: Our Softest Sneakers Yet',
    excerpt: 'Introducing our new collection that combines premium materials with all-day comfort.',
    image: '/images/blog-3.jpg',
    date: '2024-01-05',
    slug: 'luxury-comfort-sneakers'
  },
];
