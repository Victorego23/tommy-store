import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Hero } from '../components/home/Hero';
import { ProductGrid } from '../components/products/ProductGrid';

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero gigante */}
      <Hero />

      {/* Productos destacados: solo los 4 más nuevos */}
      <ProductGrid
        title="Destacados"
        subtitle="Los lanzamientos más esperados de la temporada."
        limit={4}
      />

      {/* CTA para ver catálogo completo */}
      <div className="text-center pb-24">
        <Link
          to="/shop"
          className="group inline-flex items-center gap-3 border border-white/20 text-white hover:bg-white hover:text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300"
        >
          Ver Catálogo Completo
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Sección de Beneficios */}
      <section className="border-y border-white/10 bg-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-3xl">🚚</div>
              <h3 className="text-xl font-bold text-white">Envíos Gratis</h3>
              <p className="text-gray-400">A todo el país en pedidos superiores a $200.</p>
            </div>
            <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
              <div className="text-3xl">🏆</div>
              <h3 className="text-xl font-bold text-white">Calidad Premium</h3>
              <p className="text-gray-400">Materiales seleccionados para máxima durabilidad.</p>
            </div>
            <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
              <div className="text-3xl">↩️</div>
              <h3 className="text-xl font-bold text-white">Devoluciones Fáciles</h3>
              <p className="text-gray-400">30 días para devolverlo sin costo.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
