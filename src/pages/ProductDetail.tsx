import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Truck, ShieldCheck, Loader2 } from 'lucide-react';
import { api } from '../services/api';
import type { Product } from '../types';
import { useCartStore } from '../store/useCartStore';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string>('');
  
  const addItem = useCartStore(state => state.addItem);
  const toggleCart = useCartStore(state => state.toggleCart);

  useEffect(() => {
    // Al entrar a una nueva página, siempre hacemos scroll arriba
    window.scrollTo(0, 0);
    
    const fetchProduct = async () => {
      setIsLoading(true);
      const data = await api.getProducts();
      const found = data.find(p => p.id === id);
      setProduct(found || null);
      if (found?.sizes && found.sizes.length > 0) {
        setSelectedSize(found.sizes[0]);
      }
      setIsLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-400">
        <Loader2 className="w-12 h-12 animate-spin mb-4 text-white" />
        Buscando en el almacén...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white space-y-4">
        <h2 className="text-3xl font-black">Producto no encontrado</h2>
        <Link to="/" className="text-gray-400 underline hover:text-white transition-colors">Volver a la página principal</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedSize);
    toggleCart(); // Desplegar sidebar tras agregar
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 animate-in fade-in duration-500">
      <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors font-medium">
        <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Catálogo
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Galería de Imágenes */}
        <div className="aspect-[4/5] lg:aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.isNew && (
            <span className="absolute top-6 left-6 px-4 py-1.5 text-xs font-black uppercase tracking-widest bg-white text-black rounded-full shadow-lg">
              Nuevo Lanzamiento
            </span>
          )}
        </div>

        {/* Detalles e Información Interactiva */}
        <div className="flex flex-col justify-center">
          <div className="mb-8 border-b border-white/10 pb-8">
            <p className="text-gray-400 font-semibold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              {product.category === 'shoes' ? 'Zapatillas' : product.category === 'clothing' ? 'Ropa' : 'Accesorios'}
            </p>
            <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-4xl font-bold text-white">
              ${product.price.toFixed(2)}
            </p>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            {product.longDescription || product.description}
          </p>

          {/* Selector interactivo de Tallas */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-10 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-bold tracking-wide">Talla Seleccionada: <span className="text-gray-400">{selectedSize}</span></h3>
                <button className="text-gray-500 text-sm underline underline-offset-4 hover:text-white transition-colors">Guía de tallas</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-14 min-w-[3.5rem] px-4 rounded-xl font-bold text-lg transition-all ${
                      selectedSize === size 
                        ? 'bg-white text-black ring-4 ring-white/20' 
                        : 'bg-black/50 text-gray-400 border border-white/10 hover:border-white/40 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Botón CTA gigante */}
          <button 
            onClick={handleAddToCart}
            className="w-full bg-white text-black hover:bg-gray-200 h-16 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-xl shadow-white/5"
          >
            <ShoppingCart className="w-6 h-6" />
            Añadir a mi Carrito
          </button>

          {/* Beneficios (Trust Badges) */}
          <div className="grid grid-cols-2 gap-4 mt-10 pt-10 border-t border-white/10">
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
              <Truck className="w-6 h-6 text-white" />
              <div>
                <span className="block text-sm font-bold text-white">Envío Exprés</span>
                <span className="block text-xs text-gray-400">Gratis hoy</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-white" />
              <div>
                <span className="block text-sm font-bold text-white">Garantía</span>
                <span className="block text-xs text-gray-400">Retorno 30 días</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
