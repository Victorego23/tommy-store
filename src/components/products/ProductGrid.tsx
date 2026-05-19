import { useEffect, useState } from 'react';
import type { Product } from '../../types';
import { api } from '../../services/api';
import { ProductCard } from './ProductCard';
import { Loader2 } from 'lucide-react';

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  filterCategory?: 'shoes' | 'clothing' | 'accessories';
  limit?: number;
}

export const ProductGrid = ({
  title = 'Nuevos Lanzamientos',
  subtitle = 'La colección más exclusiva de Tommy Store.',
  filterCategory,
  limit,
}: ProductGridProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await api.getProducts();
        let filtered = filterCategory
          ? data.filter(p => p.category === filterCategory)
          : data;
        if (limit) filtered = filtered.slice(0, limit);
        setProducts(filtered);
      } catch (error) {
        console.error('Error cargando productos', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [filterCategory, limit]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-white tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">{subtitle}</p>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <Loader2 className="w-12 h-12 animate-spin mb-4 text-white" />
          <p className="text-lg">Cargando catálogo...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
