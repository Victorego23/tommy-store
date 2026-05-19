import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { api } from '../services/api';
import type { Product } from '../types';
import { ProductCard } from '../components/products/ProductCard';
import { Loader2 } from 'lucide-react';

type Category = 'all' | 'shoes' | 'clothing' | 'accessories';

const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'all', label: 'Todo' },
  { value: 'shoes', label: 'Zapatillas' },
  { value: 'clothing', label: 'Ropa' },
  { value: 'accessories', label: 'Accesorios' },
];

const SORT_OPTIONS = [
  { value: 'default', label: 'Relevancia' },
  { value: 'price-asc', label: 'Precio: Menor a Mayor' },
  { value: 'price-desc', label: 'Precio: Mayor a Menor' },
  { value: 'newest', label: 'Más Nuevos' },
];

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as Category) || 'all';

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetch = async () => {
      setIsLoading(true);
      const data = await api.getProducts();
      setAllProducts(data);
      setIsLoading(false);
    };
    fetch();
  }, []);

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = allProducts
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Encabezado de la página */}
      <div className="mb-12 border-b border-white/10 pb-10">
        <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-3">
          Catálogo Completo
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tighter">
            Toda la <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
              Colección.
            </span>
          </h1>
          <p className="text-gray-400 max-w-md text-lg">
            {filteredProducts.length} productos encontrados
          </p>
        </div>
      </div>

      {/* Barra de Filtros y Ordenación */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
        {/* Filtros de Categoría */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                activeCategory === cat.value
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Ordenación */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
          <SlidersHorizontal className="w-4 h-4 text-gray-400" />
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="bg-transparent text-gray-300 text-sm font-medium focus:outline-none cursor-pointer"
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value} className="bg-gray-900">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid de Productos */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-32 text-gray-400">
          <Loader2 className="w-12 h-12 animate-spin mb-4 text-white" />
          <p className="text-lg">Cargando catálogo...</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-32 text-gray-500">
          <p className="text-2xl font-bold">No hay productos en esta categoría aún.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
