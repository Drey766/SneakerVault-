import { Product, Category, BlogPost } from '../types';

// Real product data from JSON - converted from object to array
const productData = {
  "nike-react-infinity-run-flyknit": {id:1,name:"Nike React Infinity Run Flyknit",brand:"NIKE",gender:"MEN",category:"RUNNING",price:160,is_in_inventory:true,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",slug:"nike-react-infinity-run-flyknit",featured:0},
  "nike-react-miler": {id:2,name:"Nike React Miler",brand:"NIKE",gender:"MEN",category:"RUNNING",price:130,is_in_inventory:true,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",slug:"nike-react-miler",featured:1},
  "nike-air-zoom-pegasus-37": {id:3,name:"Nike Air Zoom Pegasus 37",brand:"NIKE",gender:"WOMEN",category:"RUNNING",price:120,is_in_inventory:true,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",slug:"nike-air-zoom-pegasus-37",featured:0},
  "nike-joyride-run-flyknit": {id:4,name:"Nike Joyride Run Flyknit",brand:"NIKE",gender:"WOMEN",category:"RUNNING",price:180,is_in_inventory:true,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",slug:"nike-joyride-run-flyknit",featured:0},
  "nike-mercurial-vapor-13-elite-fg": {id:5,name:"Nike Mercurial Vapor 13 Elite FG",brand:"NIKE",gender:"WOMEN",category:"FOOTBALL",price:250,is_in_inventory:true,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",slug:"nike-mercurial-vapor-13-elite-fg",featured:0},
  "nike-phantom-vision-elite-dynamic-fit-fg": {id:6,name:"Nike Phantom Vision Elite Dynamic Fit FG",brand:"NIKE",gender:"WOMEN",category:"FOOTBALL",price:150,is_in_inventory:true,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg",slug:"nike-phantom-vision-elite-dynamic-fit-fg",featured:0},
  "nike-phantom-venom-academy-fg": {id:7,name:"Nike Phantom Venom Academy FG",brand:"NIKE",gender:"WOMEN",category:"FOOTBALL",price:80,is_in_inventory:true,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg",slug:"nike-phantom-venom-academy-fg",featured:0},
  "nike-mercurial-vapor-13-elite-tech-craft-fg": {id:8,name:"Nike Mercurial Vapor 13 Elite Tech Craft FG",brand:"NIKE",gender:"MEN",category:"FOOTBALL",price:145,is_in_inventory:true,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg",slug:"nike-mercurial-vapor-13-elite-tech-craft-fg",featured:0},
  "nike-mercurial-superfly-7-pro-mds-fg": {id:9,name:"Nike Mercurial Superfly 7 Pro MDS FG",brand:"NIKE",gender:"MEN",category:"FOOTBALL",price:137,is_in_inventory:true,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg",slug:"nike-mercurial-superfly-7-pro-mds-fg",featured:0},
  "nike-air-force-1": {id:10,name:"Nike Air Force 1",brand:"NIKE",gender:"KIDS",category:"CASUAL",price:90,is_in_inventory:true,items_left:3,imageURL:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg",slug:"nike-air-force-1",featured:0},
  "nike-air-max-90": {id:11,name:"Nike Air Max 90",brand:"NIKE",gender:"KIDS",category:"CASUAL",price:100,is_in_inventory:true,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",slug:"nike-air-max-90",featured:0},
  "nike-air-max-90-ltr": {id:12,name:"Nike Air Max 90 LTR",brand:"NIKE",gender:"KIDS",category:"CASUAL",price:110,is_in_inventory:true,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-620aeb37-1b28-44b0-9b14-5572f8cbc948/air-max-90-ltr-big-kids-shoe-hdNLQ5.jpg",slug:"nike-air-max-90-ltr",featured:0},
  "nike-joyride-dual-run": {id:13,name:"Nike Joyride Dual Run",brand:"NIKE",gender:"KIDS",category:"RUNNING",price:110,is_in_inventory:false,items_left:3,imageURL:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33888130-0320-41a1-ba53-a026decd8aa2/joyride-dual-run-big-kids-running-shoe-1HDJF8.jpg",slug:"nike-joyride-dual-run",featured:0},
  "nike-renew-run": {id:14,name:"Nike Renew Run",brand:"NIKE",gender:"KIDS",category:"RUNNING",price:80,is_in_inventory:true,items_left:3,imageURL:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73e54c0b-11a6-478b-9f90-bd97fcde872d/renew-run-big-kids-running-shoe-5Bpz93.jpg",slug:"nike-renew-run",featured:0},
  "bridgport-advice": {id:16,name:"Bridgport Advice",brand:"HUSHPUPPIES",gender:"MEN",category:"FORMAL",price:30,is_in_inventory:true,items_left:4,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/BRIDGPORT_ADVICE-BLACK_1_800x800.jpg?v=1576567903",slug:"bridgport-advice",featured:1},
  "beck": {id:15,name:"Beck",brand:"HUSHPUPPIES",gender:"MEN",category:"FORMAL",price:80,is_in_inventory:true,items_left:5,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/Beck-Black_800x800.jpg",slug:"beck",featured:0},
  "fester": {id:17,name:"Fester",brand:"HUSHPUPPIES",gender:"MEN",category:"FORMAL",price:70,is_in_inventory:true,items_left:6,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/fester-Tan_800x800.jpg?v=1575537531",slug:"fester",featured:0},
  "pixel": {id:18,name:"Pixel",brand:"HUSHPUPPIES",gender:"MEN",category:"FORMAL",price:75,is_in_inventory:true,items_left:7,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/PIXEL-TAN_800x800.jpg?v=1577420506",slug:"pixel",featured:0},
  "austin": {id:19,name:"Austin",brand:"HUSHPUPPIES",gender:"MEN",category:"FORMAL",price:75,is_in_inventory:true,items_left:2,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/Austin-Coffee_800x800.jpg?v=1574772988",slug:"austin",featured:0},
  "ss-hl-0135": {id:20,name:"SS-HL-0135",brand:"HUSHPUPPIES",gender:"WOMEN",category:"FORMAL",price:30,is_in_inventory:true,items_left:6,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009240000-11-SS-HL-0135-Black_800x800.jpg?v=1572264270",slug:"ss-hl-0135",featured:0},
  "ss-hl-0136": {id:21,name:"SS-HL-0136",brand:"HUSHPUPPIES",gender:"WOMEN",category:"FORMAL",price:50,is_in_inventory:true,items_left:4,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009250000-779-SS-HL-0136-Coffee_800x800.jpg?v=1571900372",slug:"ss-hl-0136",featured:0},
  "ss-hl-0128": {id:22,name:"SS-HL-0128",brand:"HUSHPUPPIES",gender:"WOMEN",category:"FORMAL",price:35,is_in_inventory:true,items_left:3,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/000300242-484-SS-HL-0128-Blue_800x800.jpg?v=1583235174",slug:"ss-hl-0128",featured:0},
  "ss-ms-0075": {id:23,name:"SS-MS-0075",brand:"HUSHPUPPIES",gender:"WOMEN",category:"CASUAL",price:25,is_in_inventory:true,items_left:7,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009170000-479-SS-MS-0075-Red_800x800.jpg?v=1570688687",slug:"ss-ms-0075",featured:0},
  "ss-pm-0093": {id:25,name:"SS-PM-0093",brand:"HUSHPUPPIES",gender:"WOMEN",category:"CASUAL",price:30,is_in_inventory:true,items_left:3,imageURL:"https://cdn.shopify.com/s/files/1/0016/0074/9623/products/SS-PM-0093_1_800x800.jpg?v=1570601253",slug:"ss-pm-0093",featured:0},
  "nizza-x-disney": {id:26,name:"Nizza X Disney",brand:"ADIDAS",gender:"KIDS",category:"CASUAL",price:55,is_in_inventory:true,items_left:6,imageURL:"https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/ef901c7aeac042578eceab9d0159196c_9366/Nizza_x_Disney_Sport_Goofy_Shoes_White_FW0651_01_standard.jpg",slug:"nizza-x-disney",featured:0},
  "x_plr": {id:27,name:"X_PLR",brand:"ADIDAS",gender:"KIDS",category:"CASUAL",price:65,is_in_inventory:true,items_left:5,imageURL:"https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/a36518227134495da766ab9d01772fa2_9366/X_PLR_Shoes_Red_FY9063_01_standard.jpg",slug:"x_plr",featured:1},
  "stan-smith": {id:28,name:"Stan Smith",brand:"ADIDAS",gender:"KIDS",category:"CASUAL",price:55,is_in_inventory:true,items_left:3,imageURL:"https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/d0720712d81e42b1b30fa80800826447_9366/Stan_Smith_Shoes_White_M20607_M20607_01_standard.jpg",slug:"stan-smith",featured:0},
  "nmd_r1": {id:29,name:"NMD_R1",brand:"ADIDAS",gender:"KIDS",category:"RUNNING",price:120,is_in_inventory:true,items_left:3,imageURL:"https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg",slug:"nmd_r1",featured:0},
  "nmd_r1-flash-red": {id:30,name:"NMD_R1 Flash Red",brand:"ADIDAS",gender:"WOMEN",category:"CASUAL",price:140,is_in_inventory:true,items_left:5,imageURL:"https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/90f85768e3894aeaab67aba0014a3379_9366/NMD_R1_Shoes_Red_FY9389_01_standard.jpg",slug:"nmd_r1-flash-red",featured:0},
  "superstar": {id:31,name:"Superstar",brand:"ADIDAS",gender:"WOMEN",category:"CASUAL",price:90,is_in_inventory:true,items_left:3,imageURL:"https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/12365dbc7c424288b7cdab4900dc7099_9366/Superstar_Shoes_White_FW3553_FW3553_01_standard.jpg",slug:"superstar",featured:0},
  "club-c-revenge-mens": {id:32,name:"Club C Revenge Mens",brand:"REEBOK",gender:"MEN",category:"CASUAL",price:70,is_in_inventory:true,items_left:3,imageURL:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7599294868804d78a1b1ab6f01718a5e_9366/Club_C_Revenge_Men's_Shoes_White_FV9877_01_standard.jpg",slug:"club-c-revenge-mens",featured:0},
  "sk80-low": {id:33,name:"SK80-Low",brand:"VANS",gender:"MEN",category:"CASUAL",price:60,is_in_inventory:true,items_left:3,imageURL:"https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$",slug:"sk80-low",featured:0},
  "michael-feburary-sk8-hi": {id:34,name:"Michael Feburary SK8-Hi",brand:"VANS",gender:"MEN",category:"CASUAL",price:72,is_in_inventory:true,items_left:3,imageURL:"https://images.vans.com/is/image/Vans/MV122M-HERO?$583x583$",slug:"michael-feburary-sk8-hi",featured:0}
};

// Convert object to array and map featured 0/1 to boolean
export const products: Product[] = Object.values(productData).map(p => ({
  ...p,
  featured: p.featured === 1
}));

// Helper function to get product by slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

// Helper function to get product by ID  
export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

// Categories based on actual product data
export const categories: Category[] = [
  { id: 'running', name: 'Running Shoes', image: '/images/category-running.jpg', count: products.filter(p => p.category === 'RUNNING').length },
  { id: 'casual', name: 'Casual Footwear', image: '/images/category-casual.jpg', count: products.filter(p => p.category === 'CASUAL').length },
  { id: 'formal', name: 'Formal Shoes', image: '/images/category-formal.jpg', count: products.filter(p => p.category === 'FORMAL').length },
  { id: 'football', name: 'Football Cleats', image: '/images/category-football.jpg', count: products.filter(p => p.category === 'FOOTBALL').length },
];

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
