import { BlogPost } from '../types';




// Blog posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Behind the Design: What Makes Our Shoes Special',
    excerpt: 'Discover the craftsmanship and attention to detail that goes into every pair of shoes we create.',
    image: '/images/blog-1.jpg',
    date: '2024-01-15',
    slug: 'behind-the-design',
    author: 'Sarah Mitchell',
    category: 'Design',
    content: `
      <p>At Boosy, we believe that great footwear starts with great design. Every shoe in our collection is the result of countless hours of research, sketching, prototyping, and refinement. Our design philosophy centers on three core principles: timeless style, exceptional comfort, and sustainable craftsmanship.</p>
      
      <h2>The Design Process</h2>
      <p>Our journey begins with inspiration drawn from both classic silhouettes and contemporary fashion trends. We study vintage designs, analyze current market needs, and listen closely to customer feedback. This research phase can take months as we identify gaps in the market and opportunities to innovate.</p>
      
      <p>Once we've settled on a concept, our design team creates detailed sketches and 3D models. We experiment with different materials, heel heights, toe shapes, and closure systems. Every element is considered carefully – from the curve of the collar to the placement of stitching.</p>
      
      <h2>Material Selection</h2>
      <p>We source only premium materials from suppliers who share our commitment to quality and sustainability. Our leather comes from tanneries that use vegetable tanning processes, which are better for the environment and result in leather that ages beautifully. For linings, we choose soft, breathable materials that keep feet comfortable all day long.</p>
      
      <h2>Prototype and Testing</h2>
      <p>Before any shoe goes into production, we create multiple prototypes. Our team wears these samples extensively, testing them in various conditions and making adjustments based on real-world performance. We check for pressure points, evaluate flexibility, and ensure the fit is perfect across different foot shapes.</p>
      
      <p>This iterative process might seem time-consuming, but it's essential. We'd rather spend extra months perfecting a design than rush a product to market. When you slip on a pair of Boosy shoes, you should feel the difference that this dedication makes.</p>
    `
  },
  {
    id: '2',
    title: 'How to Choose the Perfect Shoes for Your Style',
    excerpt: 'Expert tips on selecting shoes that complement your unique style and needs.',
    image: '/images/blog-2.jpg',
    date: '2024-01-10',
    slug: 'choosing-perfect-shoes',
    author: 'Emily Chen',
    category: 'Style Guide',
    content: `
      <p>Finding the perfect pair of shoes isn't just about following trends – it's about understanding your lifestyle and choosing styles that enhance your daily comfort and confidence.</p>
      
      <h2>Know Your Purpose</h2>
      <p>Different activities require different types of shoes. Running shoes need cushioning and support, formal shoes need elegance and polish, casual shoes need versatility and comfort. Start by identifying what you'll be doing most in these shoes.</p>
      
      <h2>Fit is Everything</h2>
      <p>The best-looking shoe in the world won't serve you well if it doesn't fit properly. Always try shoes on later in the day when your feet are slightly swollen, and walk around the store to ensure comfort. There should be about a thumb's width between your longest toe and the end of the shoe.</p>
      
      <h2>Quality Over Quantity</h2>
      <p>Investing in fewer, higher-quality pairs of shoes is better than owning many cheap ones. Well-made shoes last longer, feel better, and often save you money in the long run.</p>
    `
  },
  {
    id: '3',
    title: 'The Evolution of Athletic Footwear',
    excerpt: 'From basic function to fashion statement: the history of athletic shoes.',
    image: '/images/blog-3.jpg',
    date: '2024-01-05',
    slug: 'athletic-footwear-evolution',
    author: 'Michael Torres',
    category: 'History',
    content: `
      <p>Athletic footwear has come a long way from simple canvas sneakers to today's high-tech performance shoes. This evolution tells a story of innovation, culture, and the intersection of sport and fashion.</p>
      
      <h2>The Early Days</h2>
      <p>In the early 20th century, athletic shoes were basic rubber-soled canvas shoes. They provided minimal support but were revolutionary for their time, offering better grip and comfort than leather dress shoes.</p>
      
      <h2>The Technology Revolution</h2>
      <p>The 1980s and 90s saw an explosion of athletic shoe technology. Air cushioning, gel inserts, and advanced materials transformed athletic footwear into sophisticated equipment designed for specific sports and movements.</p>
      
      <h2>Fashion Meets Function</h2>
      <p>Today, athletic shoes are as much about style as performance. Sneaker culture has turned athletic footwear into collectible art, with limited editions and collaborations commanding premium prices.</p>
    `
  }
];
