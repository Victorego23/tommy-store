import { create } from 'zustand';
import type { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  isCheckoutOpen: boolean;
  
  addItem: (product: Product, selectedSize?: string) => void;
  removeItem: (productId: string, selectedSize?: string) => void;
  clearCart: () => void;
  
  toggleCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  
  cartTotal: () => number;
  cartCount: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  isCheckoutOpen: false,
  
  addItem: (product, selectedSize) => set((state) => {
    // Buscar si ya existe el mismo producto con la MISMA TALLA
    const existingItemIndex = state.items.findIndex(
      item => item.product.id === product.id && item.selectedSize === selectedSize
    );

    if (existingItemIndex >= 0) {
      const newItems = [...state.items];
      newItems[existingItemIndex].quantity += 1;
      return { items: newItems };
    }
    return { items: [...state.items, { product, quantity: 1, selectedSize }] };
  }),
  
  removeItem: (productId, selectedSize) => set((state) => ({
    // Se elimina el producto que coincida en ID y en Talla
    items: state.items.filter(item => !(item.product.id === productId && item.selectedSize === selectedSize))
  })),

  clearCart: () => set({ items: [] }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCheckout: () => set({ isCheckoutOpen: true }),
  closeCheckout: () => set({ isCheckoutOpen: false }),
  
  cartTotal: () => get().items.reduce((total, item) => total + (item.product.price * item.quantity), 0),
  cartCount: () => get().items.reduce((count, item) => count + item.quantity, 0)
}));
