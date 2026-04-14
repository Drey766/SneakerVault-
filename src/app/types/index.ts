export interface Product {
  id: string;
  supplier_reference: string;
  url: string;
  title: string;
  brand: string;
  color: string;
  price: number;
  selling_fast: boolean;
  has_more_colours: boolean;
  promo_message: string | null;
  saves: string;
  shipping_restrictions: string;
  rating: number;
  rating_count: number;
  recommendation_percentage: string;
  features: string[];
  materials: string;
  care_instructions: string;
  brand_description: string;
  delivery_info: string;
  hero_image: string;
  gallery_images: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
  slug: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  author?: string;
  category?: string;
  content?: string;
}
