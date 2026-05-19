import { X, Trash2, Plus, Minus, CreditCard } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';

export const CartSidebar = () => {
  const { isOpen, toggleCart, items, removeItem, cartTotal, addItem, openCheckout } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay oscuro */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={toggleCart}
      />

      {/* Panel del carrito */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background border-l border-white/10 z-50 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Cabecera */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white flex items-center gap-3">
            Tu Carrito 
            <span className="bg-white text-black text-xs px-2.5 py-1 rounded-full font-black">
              {items.length}
            </span>
          </h2>
          <button 
            onClick={toggleCart}
            className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all hover:rotate-90"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Lista de items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-gray-400">
              <div className="p-6 bg-white/5 rounded-full">
                <Trash2 className="w-8 h-8 opacity-50" />
              </div>
              <p className="font-medium text-lg">Tu carrito está vacío</p>
              <button 
                onClick={toggleCart}
                className="mt-4 text-sm text-white underline underline-offset-4 opacity-70 hover:opacity-100"
              >
                Volver a la tienda
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.product.id}-${item.selectedSize || 'none'}`} className="flex gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 group hover:border-white/20 transition-colors">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/5 flex-shrink-0">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="font-semibold text-white line-clamp-1">{item.product.name}</h3>
                      {item.selectedSize && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-white/10 text-white rounded-md">
                          Talla: {item.selectedSize}
                        </span>
                      )}
                      <p className="text-sm font-bold text-gray-300 mt-1">${item.product.price.toFixed(2)}</p>
                    </div>
                    <button 
                      onClick={() => removeItem(item.product.id, item.selectedSize)}
                      className="text-gray-500 hover:text-red-400 bg-black/20 hover:bg-red-500/10 p-2 rounded-lg transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Controles de cantidad */}
                  <div className="flex items-center mt-3">
                    <div className="flex items-center bg-black/50 rounded-lg border border-white/10">
                      <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-white">{item.quantity}</span>
                      <button 
                        onClick={() => addItem(item.product, item.selectedSize)} 
                        className="p-1.5 text-gray-400 hover:text-white transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer del checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-black/40 backdrop-blur-md">
            <div className="flex justify-between items-end mb-6">
              <span className="text-gray-400 font-medium">Total estimado</span>
              <span className="text-3xl font-black text-white tracking-tight">${cartTotal().toFixed(2)}</span>
            </div>
            <button 
              onClick={() => {
                toggleCart();
                openCheckout();
              }}
              className="w-full bg-white text-black hover:bg-gray-200 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-lg shadow-white/10"
            >
              <CreditCard className="w-5 h-5" />
              Proceder al Pago
            </button>
          </div>
        )}
      </div>
    </>
  );
};
