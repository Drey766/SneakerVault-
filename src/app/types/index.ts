export interface Product {
  id: string;
  url: string | null;
  title: string;
  brand?: string | null;
  color?: string | null;
  gender?: string | null;
  price: number | null;
  original_price?: number | null;
  discount_pct?: number | null;
  on_sale?: boolean | null;
  selling_fast?: boolean | null;
  has_more_colours?: boolean | null;
  saves?: string | null;
  shipping_restrictions?: boolean | null;
  delivery_info?: string | null;
  rating?: number | null;
  rating_count?: number | null;
  features?: string[];
  materials?: string | null;
  care_instructions?: string | null;
  brand_description?: string | null;
  hero_image: string | null;
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
