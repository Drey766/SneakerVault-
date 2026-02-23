export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  onSale?: boolean;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  name: string;
  image: string;
  slug: string;
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
