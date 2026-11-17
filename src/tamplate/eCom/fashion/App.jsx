import React, { useState } from 'react';
import FashionNav from './nav.jsx';
import FashionFooter from './footer.jsx';
import FashionHomePage from './home/homepage.jsx';
import FashionProductsPage from './pages/productsPage.jsx';
import FashionDetailPage from './pages/detailPage.jsx';
import FashionWishlistPage from './pages/wishlistPage.jsx';
import FashionCartPage from './pages/cartPage.jsx';
import fashionData from './data.js';
import { useCartWishlist } from '../../common/useCartWishlist.jsx';

export default function FashionApp() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(fashionData.items[0]);

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

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content font-sans antialiased">
      <FashionNav
        onSelectTab={setCurrentTab}
        activeTab={currentTab}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
      />
      <main className="flex-1">
        {currentTab === 'home' && (
          <FashionHomePage
            onNavigate={setCurrentTab}
            onSelectProduct={(p) => {
              setSelectedProduct(p);
              setCurrentTab('detail');
            }}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onToggleWishlist={handleToggleWishlist}
            isInWishlist={isInWishlist}
          />
        )}
        {currentTab === 'products' && (
          <FashionProductsPage
            onNavigate={setCurrentTab}
            onSelectProduct={(p) => {
              setSelectedProduct(p);
              setCurrentTab('detail');
            }}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onToggleWishlist={handleToggleWishlist}
            isInWishlist={isInWishlist}
          />
        )}
        {currentTab === 'detail' && (
          <FashionDetailPage
            product={selectedProduct}
            onNavigate={setCurrentTab}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onToggleWishlist={handleToggleWishlist}
            isInWishlist={isInWishlist}
          />
        )}
        {currentTab === 'wishlist' && (
          <FashionWishlistPage
            wishlist={wishlist}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onRemoveFromWishlist={removeFromWishlist}
          />
        )}
        {currentTab === 'cart' && (
          <FashionCartPage
            cart={cart}
            onUpdateCartQty={updateCartQty}
            onRemoveFromCart={removeFromCart}
          />
        )}
      </main>
      <FashionFooter onSelectTab={setCurrentTab} />
    </div>
  );
}
