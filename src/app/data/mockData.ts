import { Product, Category, BlogPost } from '@/app/types';

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
    name: 'Heeled Boots',
    image: '/images/home/ba159-1.jpg',
    slug: 'heeled-boots'
  },
  {
    name: 'Street Style Boots',
    image: '/images/home/ba159-2.jpg',
    slug: 'street-style-boots'
  },
  {
    name: 'Flat Boots',
    image: '/images/home/ba159-3.jpg',
    slug: 'flat-boots'
  },
  {
    name: 'Chelsea Boots',
    image: '/images/home/ba159-4.jpg',
    slug: 'chelsea-boots'
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Behind the Design: What Makes Our Boots Special',
    excerpt: 'Discover the craftsmanship and attention to detail that goes into every pair of boots we create.',
    image: '/images/blog-1.jpg',
    date: '2024-01-15',
    slug: 'behind-the-design',
    author: 'Sarah Mitchell',
    category: 'Design',
    content: `
      <p>At Boosy, we believe that great footwear starts with great design. Every boot in our collection is the result of countless hours of research, sketching, prototyping, and refinement. Our design philosophy centers on three core principles: timeless style, exceptional comfort, and sustainable craftsmanship.</p>
      
      <h2>The Design Process</h2>
      <p>Our journey begins with inspiration drawn from both classic boot silhouettes and contemporary fashion trends. We study vintage designs, analyze current market needs, and listen closely to customer feedback. This research phase can take months as we identify gaps in the market and opportunities to innovate.</p>
      
      <p>Once we've settled on a concept, our design team creates detailed sketches and 3D models. We experiment with different materials, heel heights, toe shapes, and closure systems. Every element is considered carefully – from the curve of the collar to the placement of stitching.</p>
      
      <h2>Material Selection</h2>
      <p>We source only premium materials from suppliers who share our commitment to quality and sustainability. Our leather comes from tanneries that use vegetable tanning processes, which are better for the environment and result in leather that ages beautifully. For linings, we choose soft, breathable materials that keep feet comfortable all day long.</p>
      
      <h2>Prototype and Testing</h2>
      <p>Before any boot goes into production, we create multiple prototypes. Our team wears these samples extensively, testing them in various conditions and making adjustments based on real-world performance. We check for pressure points, evaluate flexibility, and ensure the fit is perfect across different foot shapes.</p>
      
      <p>This iterative process might seem time-consuming, but it's essential. We'd rather spend extra months perfecting a design than rush a product to market. When you slip on a pair of Boosy boots, you should feel the difference that this dedication makes.</p>
    `
  },
  {
    id: '2',
    title: 'How to Choose the Perfect Boots for Your Body Type',
    excerpt: 'Expert tips on selecting boots that complement your unique style and proportions.',
    image: '/images/blog-2.jpg',
    date: '2024-01-10',
    slug: 'choosing-perfect-boots',
    author: 'Emily Chen',
    category: 'Style Guide',
    content: `
      <p>Finding the perfect pair of boots isn't just about following trends – it's about understanding your body proportions and choosing styles that enhance your natural silhouette. Let's explore how to select boots that make you look and feel amazing.</p>
      
      <h2>Understanding Boot Heights</h2>
      <p>The height of your boots can dramatically affect how your legs appear. Ankle boots work well for most body types and are especially flattering on petite frames as they don't cut the leg line. Knee-high boots can elongate the legs but should be chosen carefully based on calf width and height.</p>
      
      <h2>Heel Height Matters</h2>
      <p>While high heels can add height and elegance, they're not the only option. Block heels offer stability and comfort while still providing lift. Flat boots can look incredibly chic when styled properly and are perfect for everyday wear.</p>
      
      <h2>Consider Your Leg Shape</h2>
      <p>If you have athletic calves, look for boots with stretchy panels or adjustable closures. For slimmer legs, fitted boots with minimal slouching create a sleek line. Those with curvier legs might prefer boots with a slight flare at the top or styles with lacing that can be adjusted for the perfect fit.</p>
      
      <h2>Proportion and Balance</h2>
      <p>Think about the overall balance of your outfit. If you're wearing wide-leg pants, sleeker boots work better. With skinny jeans, you can go bold with chunkier styles. Over-the-knee boots pair beautifully with shorter skirts or dresses.</p>
      
      <p>Remember, these are guidelines, not rules. The most important factor is how you feel when wearing your boots. Confidence is always the best accessory!</p>
    `
  },
  {
    id: '3',
    title: 'Luxury Meets Comfort: Our Softest Boots Yet',
    excerpt: 'Introducing our new collection that combines premium materials with all-day comfort.',
    image: '/images/blog-3.jpg',
    date: '2024-01-05',
    slug: 'luxury-comfort-boots',
    author: 'Michael Torres',
    category: 'Product Launch',
    content: `
      <p>We're thrilled to announce our newest collection: boots that prove you don't have to sacrifice comfort for style. After two years of development, we've created footwear that feels as good at the end of the day as it does when you first put it on.</p>
      
      <h2>Revolutionary Comfort Technology</h2>
      <p>Our new Comfort Plus line features memory foam insoles that mold to your unique foot shape. These insoles provide cushioning where you need it most while maintaining excellent arch support. We've also added extra padding around the heel and ankle to prevent blisters and chafing.</p>
      
      <h2>Breathable Luxury Materials</h2>
      <p>The upper is crafted from buttery-soft Italian leather that requires minimal break-in time. Unlike traditional leather boots that can feel stiff initially, these boots are comfortable from day one. The leather is also treated to be water-resistant, protecting your feet in light rain.</p>
      
      <h2>Flexible Construction</h2>
      <p>We've redesigned the sole to be more flexible without compromising durability. This allows for a more natural walking motion and reduces fatigue. The lightweight construction means these boots won't weigh you down, even after hours of wear.</p>
      
      <h2>Style Without Compromise</h2>
      <p>Best of all, you'd never know these boots are engineered for comfort just by looking at them. The sleek silhouettes and elegant details make them perfect for both office and evening wear. Available in five sophisticated colors, there's a style for every wardrobe.</p>
      
      <p>Visit our store or shop online to experience the perfect blend of luxury and comfort. Your feet will thank you!</p>
    `
  },
  {
    id: '4',
    title: 'Caring for Your Leather Boots: A Complete Guide',
    excerpt: 'Learn how to maintain and protect your investment with proper boot care techniques.',
    image: '/images/blog-4.jpg',
    date: '2024-01-02',
    slug: 'leather-boot-care-guide',
    author: 'Sarah Mitchell',
    category: 'Care Guide',
    content: `
      <p>Quality leather boots are an investment that can last for years with proper care. Follow these expert tips to keep your boots looking beautiful and performing well season after season.</p>
      
      <h2>Regular Cleaning</h2>
      <p>After each wear, wipe down your boots with a soft, dry cloth to remove dirt and dust. For deeper cleaning, use a leather cleaner specifically formulated for boots. Apply with a soft cloth, working in circular motions, then wipe away any excess.</p>
      
      <h2>Conditioning</h2>
      <p>Leather needs moisture to stay supple. Apply a quality leather conditioner every few months, or more frequently if you wear your boots often. This prevents cracking and maintains the leather's natural oils.</p>
      
      <h2>Weather Protection</h2>
      <p>Use a waterproofing spray to protect against rain and snow. Reapply every few weeks during wet seasons. If your boots do get soaked, stuff them with newspaper and let them dry naturally – never use direct heat, which can damage the leather.</p>
      
      <h2>Storage</h2>
      <p>Store boots in a cool, dry place away from direct sunlight. Use boot trees or stuff them with paper to maintain their shape. Cedar shoe trees are ideal as they also absorb moisture and odors.</p>
      
      <h2>Professional Care</h2>
      <p>Consider taking your boots to a professional cobbler annually for a thorough cleaning, conditioning, and sole inspection. They can address issues before they become major problems and extend the life of your boots significantly.</p>
    `
  },
  {
    id: '5',
    title: 'Fall Fashion: Trending Boot Styles for This Season',
    excerpt: 'Discover the hottest boot trends and how to incorporate them into your wardrobe.',
    image: '/images/blog-5.jpg',
    date: '2023-12-28',
    slug: 'fall-boot-trends',
    author: 'Emily Chen',
    category: 'Trends',
    content: `
      <p>As the leaves change color and temperatures drop, it's time to update your boot collection. This fall brings exciting new trends alongside timeless classics. Here's what's hot in footwear this season.</p>
      
      <h2>Chunky Chelsea Boots</h2>
      <p>The classic Chelsea boot gets a modern update with chunkier soles and platform heels. These boots add edge to any outfit while providing comfort and stability. Pair them with everything from jeans to midi dresses.</p>
      
      <h2>Western-Inspired Details</h2>
      <p>Cowboy boots continue their fashion moment, but this season it's all about subtle Western touches on contemporary silhouettes. Look for boots with decorative stitching, metal hardware, or pointed toes that nod to Western style without going full rodeo.</p>
      
      <h2>Lug Sole Everything</h2>
      <p>Chunky lug soles aren't going anywhere. These practical yet stylish soles provide traction in wet weather while adding a bold statement to your look. Combat boots and hiking-inspired styles are particularly popular.</p>
      
      <h2>Rich Jewel Tones</h2>
      <p>Move over black and brown – this season is all about deep, luxurious colors. Think burgundy, forest green, navy, and chocolate. These rich hues add sophistication while remaining versatile enough to pair with most outfits.</p>
      
      <h2>Sustainable Choices</h2>
      <p>Perhaps the biggest trend is the shift toward sustainable, ethically-made boots. Consumers are increasingly choosing quality over quantity, investing in well-made boots that will last for years rather than fast fashion alternatives.</p>
      
      <p>Whatever trend speaks to you, remember that the best boots are ones that fit your lifestyle and make you feel confident. Happy shopping!</p>
    `
  },
  {
    id: '6',
    title: 'The History of Boots: From Function to Fashion',
    excerpt: 'Explore how boots evolved from practical workwear to essential fashion statements.',
    image: '/images/blog-6.jpg',
    date: '2023-12-20',
    slug: 'history-of-boots',
    author: 'Michael Torres',
    category: 'History',
    content: `
      <p>Boots have been protecting human feet for thousands of years, but their journey from purely functional footwear to fashion staple is a fascinating story of innovation, culture, and style evolution.</p>
      
      <h2>Ancient Origins</h2>
      <p>The earliest boots date back to ancient civilizations, where they served primarily protective purposes. Soldiers wore boots for battle, while workers used them for harsh labor conditions. These early designs were simple but effective, focusing on durability and protection.</p>
      
      <h2>The Victorian Era</h2>
      <p>The 19th century saw boots become more refined and fashionable, particularly for women. Button boots and lace-up styles became popular, with boots worn as everyday footwear by all social classes. This era established many of the boot silhouettes we still recognize today.</p>
      
      <h2>The 20th Century Revolution</h2>
      <p>The 1960s brought a fashion revolution that included boots. Go-go boots became iconic symbols of the era, while the 1970s introduced platform boots and Western styles. Each decade added its own twist, from punk's combat boots in the 80s to grunge's chunky styles in the 90s.</p>
      
      <h2>Modern Era</h2>
      <p>Today's boots seamlessly blend fashion and function. Advanced materials and construction techniques allow for boots that are both stylish and comfortable. Technology like waterproof membranes and cushioned insoles make boots practical for daily wear, while designer collaborations keep them at the forefront of fashion.</p>
      
      <h2>The Future of Boots</h2>
      <p>As we look ahead, sustainability and innovation will shape boot design. Eco-friendly materials, ethical manufacturing, and smart features like temperature regulation are becoming standard. Yet the fundamental appeal of boots – their ability to make us feel confident and protected – remains timeless.</p>
    `
  }
];
