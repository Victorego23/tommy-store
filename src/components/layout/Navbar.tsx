import { ShoppingBag, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';

export const Navbar = () => {
  const cartCount = useCartStore(state => state.cartCount());
  const toggleCart = useCartStore(state => state.toggleCart);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Mobile Menu */}
        <button className="md:hidden p-2 -ml-2 text-gray-400 hover:text-white transition-colors">
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-black text-2xl tracking-tighter cursor-pointer hover:opacity-80 transition-opacity">
          <span className="text-white">Tommy</span>
          <span className="text-primary-foreground text-xs px-1.5 py-0.5 bg-white text-black rounded uppercase tracking-widest mt-1">Store</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link to="/" className="text-white transition-colors hover:text-white relative after:absolute after:-bottom-5 after:left-0 after:w-full after:h-0.5 after:bg-white">Inicio</Link>
          <Link to="/shop?category=shoes" className="transition-colors hover:text-white">Zapatillas</Link>
          <Link to="/shop?category=clothing" className="transition-colors hover:text-white">Ropa</Link>
          <Link to="/shop" className="transition-colors hover:text-white">Colecciones</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={toggleCart}
            className="relative p-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-white text-black text-[10px] font-bold flex items-center justify-center rounded-full shadow-lg shadow-white/20 animate-in zoom-in">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
