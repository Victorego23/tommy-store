import { useState } from 'react';
import { CheckCircle2, Loader2, X, CreditCard } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';

export const CheckoutModal = () => {
  const { isCheckoutOpen, closeCheckout, cartTotal, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isCheckoutOpen) return null;

  // Función que simula el cobro en la tarjeta
  const handlePayment = () => {
    setIsProcessing(true);
    // Simulamos 2.5 segundos de procesamiento con el banco (MercadoPago / Stripe)
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart(); // ¡El pago fue exitoso, vaciamos la bolsa de compras!
    }, 2500);
  };

  const handleClose = () => {
    setIsSuccess(false);
    closeCheckout();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
      <div className="bg-background border border-white/10 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Cabecera del Modal */}
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-gray-300" />
            Pasarela de Pago
          </h2>
          {!isProcessing && !isSuccess && (
            <button onClick={handleClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Contenido principal */}
        <div className="p-8 text-center flex flex-col items-center">
          {isSuccess ? (
            <div className="space-y-4 animate-in fade-in zoom-in duration-500">
              <div className="mx-auto w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-white">¡Pago Exitoso!</h3>
              <p className="text-gray-400">
                Tu orden ha sido procesada. Recibirás un correo con los detalles del envío pronto.
              </p>
              <button onClick={handleClose} className="mt-6 w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">
                Volver a la tienda
              </button>
            </div>
          ) : (
            <div className="w-full">
              <p className="text-gray-400 mb-2">Monto a pagar</p>
              <h3 className="text-5xl font-black text-white mb-8 tracking-tighter">${cartTotal().toFixed(2)}</h3>
              
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-left text-sm text-gray-300 mb-8 space-y-2">
                <p>🔒 <strong>Entorno Seguro:</strong> Esta es una simulación que replica el flujo de Stripe o MercadoPago.</p>
                <p>En el mundo real, aquí iría el formulario de tarjeta de crédito (Iframe).</p>
              </div>

              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Procesando con el banco...
                  </>
                ) : (
                  'Pagar Ahora'
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
