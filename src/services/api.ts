import type { Product } from '../types';
import { products as mockProducts } from '../data/products';

/**
 * SERVICIO API - EL PUENTE AL BACKEND
 * -----------------------------------
 * En la vida real, aquí usarías 'fetch("https://tu-api.com/productos")' 
 * para traer los datos desde Node.js, Firebase o Supabase.
 * Por ahora simulamos que la red tarda 800ms en responder.
 */
export const api = {
  getProducts: async (): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 800);
    });
  }
};
