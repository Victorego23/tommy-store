import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { CartSidebar } from './components/cart/CartSidebar';
import { CheckoutModal } from './features/checkout/CheckoutModal';

function App() {
  document.documentElement.classList.add('dark');

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col relative bg-background">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>

        <Footer />
        <CartSidebar />
        <CheckoutModal />
      </div>
    </BrowserRouter>
  );
}

export default App;
