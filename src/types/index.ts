export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'clothing' | 'shoes' | 'accessories';
  image: string;
  description: string;
  longDescription?: string;
  sizes?: string[];
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}
