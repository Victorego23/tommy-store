import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { useCartStore } from '../../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);

  // Toma la primera talla por defecto para el botón de compra rápida
  const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : undefined;

  return (
    <div className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col">
      <Link to={`/product/${product.id}`} className="aspect-[4/5] overflow-hidden relative bg-white/5 block">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 text-xs font-black uppercase tracking-wider bg-white text-black rounded-full shadow-lg">
              Nuevo
            </span>
          )}
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md rounded-full text-white border border-white/10 w-fit">
            {product.category === 'shoes' ? 'Zapatillas' : product.category === 'clothing' ? 'Ropa' : 'Accesorios'}
          </span>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-gray-300 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-2xl font-bold text-white tracking-tight">${product.price.toFixed(2)}</p>
        </div>
        
        <p className="text-sm text-gray-400 mb-6 line-clamp-2 flex-1">
          {product.description}
        </p>

        <button 
          onClick={() => addItem(product, defaultSize)}
          className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 py-3.5 rounded-xl font-bold transition-all active:scale-[0.98]"
        >
          <ShoppingCart className="w-4 h-4" />
          Añadir Rápido
        </button>
      </div>
    </div>
  );
};
