import React, { useState } from 'react';
import TechNav from './nav.jsx';
import TechFooter from './footer.jsx';
import TechHomePage from './home/homepage.jsx';
import TechProductsPage from './pages/productsPage.jsx';
import TechDetailPage from './pages/detailPage.jsx';
import CartPage from './pages/cartPage.jsx';
import WishlistPage from './pages/wishlistPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import SignupPage from './pages/signupPage.jsx';
import CartDrawer from './components/cartDrawer.jsx';
import techData from './data.js';
import { useCartWishlist } from '../../common/useCartWishlist.jsx';

export default function TechApp() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(techData.items[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {
    cart,
    wishlist,
    cartCount,
    wishlistCount,
    addToCart: handleAddToCart,
    buyNow,
    toggleWishlist: handleToggleWishlist,
    removeFromWishlist,
    updateCartQty,
    removeFromCart,
    isInWishlist
  } = useCartWishlist();

  const handleBuyNow = (product) => {
    buyNow(product, () => setCurrentTab('cart'));
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentTab('detail');
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content font-sans antialiased">
      <TechNav
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        activeTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenCart={() => setDrawerOpen(true)}
      />

      <main className="flex-1">
        {currentTab === 'home' && (
          <TechHomePage
            onNavigate={setCurrentTab}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onToggleWishlist={handleToggleWishlist}
            isInWishlist={isInWishlist}
          />
        )}
        {currentTab === 'products' && (
          <TechProductsPage
            onNavigate={setCurrentTab}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onToggleWishlist={handleToggleWishlist}
            isInWishlist={isInWishlist}
          />
        )}
        {currentTab === 'detail' && (
          <TechDetailPage
            product={selectedProduct}
            onNavigate={setCurrentTab}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onToggleWishlist={handleToggleWishlist}
            isInWishlist={isInWishlist}
          />
        )}
        {currentTab === 'cart' && (
          <CartPage
            cart={cart}
            onUpdateCartQty={updateCartQty}
            onRemoveFromCart={removeFromCart}
          />
        )}
        {currentTab === 'wishlist' && (
          <WishlistPage
            wishlist={wishlist}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onRemoveFromWishlist={removeFromWishlist}
          />
        )}
        {currentTab === 'login' && <LoginPage onNavigate={setCurrentTab} />}
        {currentTab === 'signup' && <SignupPage onNavigate={setCurrentTab} />}
      </main>

      <TechFooter onSelectTab={setCurrentTab} />

      <CartDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        cart={cart}
        onRemove={removeFromCart}
        onCheckout={() => { setDrawerOpen(false); setCurrentTab('cart'); }}
      />
    </div>
  );
}
