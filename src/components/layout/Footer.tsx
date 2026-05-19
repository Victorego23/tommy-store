export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md py-16 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter mb-4">
              <span className="text-white">Tommy</span>
              <span className="text-primary-foreground text-xs px-1.5 py-0.5 bg-white text-black rounded uppercase tracking-widest mt-1">Store</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              La tienda definitiva para encontrar tu estilo urbano. Calidad premium, colecciones exclusivas y envíos a todo el país.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Explorar</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Novedades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Zapatillas Urbanas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Streetwear</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Soporte</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Estado del Envío</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Devoluciones</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tommy Store. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
