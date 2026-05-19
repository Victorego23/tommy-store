import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero.png';

export const Hero = () => {
  return (
    <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Streetwear Culture"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Nueva Colección 2026
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Define tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Identidad.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
          Ropa y zapatillas premium para aquellos que no siguen tendencias, sino que las crean.
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
          <Link 
            to="/shop" 
            className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-gray-200 hover:scale-105 active:scale-95"
          >
            Comprar Ahora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/shop?category=shoes" 
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-md"
          >
            Ver Zapatillas
          </Link>
        </div>
      </div>
    </div>
  );
};
