export interface Product {
  id: string;
  url: string;
  title: string;
  brand?: string;
  color?: string;
  gender?: string;
  price: number;
  original_price?: number;
  discount_pct?: number;
  on_sale?: boolean;
  selling_fast?: boolean;
  has_more_colours?: boolean;
  saves?: number;
  shipping_restrictions?: boolean;
  delivery_info?: string;
  rating?: number;
  rating_count?: number;
  features?: string[];
  materials?: string;
  care_instructions?: string;
  brand_description?: string;
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
