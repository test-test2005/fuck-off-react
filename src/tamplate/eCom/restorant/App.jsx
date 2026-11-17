import React, { useState } from 'react';
import FoodNav from './nav.jsx';
import FoodFooter from './footer.jsx';
import FoodHomePage from './home/homepage.jsx';
import FoodsPage from './pages/foodsPage.jsx';
import FoodDetailPage from './pages/detailPage.jsx';
import FoodWishlistPage from './pages/wishlistPage.jsx';
import FoodCartPage from './pages/cartPage.jsx';
import ReservationModal from './components/reservationModal.jsx';
import foodData from './data.js';
import { useCartWishlist } from '../../common/useCartWishlist.jsx';

export default function FoodApp() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedDish, setSelectedDish] = useState(foodData.items[0]);
  const [reserveOpen, setReserveOpen] = useState(false);

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

  const handleBuyNow = (dish) => {
    buyNow(dish, () => setCurrentTab('cart'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content font-sans antialiased">
      <FoodNav
        onSelectTab={setCurrentTab}
        activeTab={currentTab}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onOpenReserve={() => setReserveOpen(true)}
      />

      <main className="flex-1">
        {currentTab === 'home' && (
          <FoodHomePage
            onNavigate={setCurrentTab}
            onSelectDish={(dish) => {
              setSelectedDish(dish);
              setCurrentTab('detail');
            }}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onToggleWishlist={handleToggleWishlist}
            isInWishlist={isInWishlist}
            onOpenReserve={() => setReserveOpen(true)}
          />
        )}
        {currentTab === 'foods' && (
          <FoodsPage
            onNavigate={setCurrentTab}
            onSelectDish={(dish) => {
              setSelectedDish(dish);
              setCurrentTab('detail');
            }}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onToggleWishlist={handleToggleWishlist}
            isInWishlist={isInWishlist}
          />
        )}
        {currentTab === 'detail' && (
          <FoodDetailPage
            dish={selectedDish}
            onNavigate={setCurrentTab}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onToggleWishlist={handleToggleWishlist}
            isInWishlist={isInWishlist}
            onOpenReserve={() => setReserveOpen(true)}
          />
        )}
        {currentTab === 'wishlist' && (
          <FoodWishlistPage
            wishlist={wishlist}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onRemoveFromWishlist={removeFromWishlist}
          />
        )}
        {currentTab === 'cart' && (
          <FoodCartPage
            cart={cart}
            onUpdateCartQty={updateCartQty}
            onRemoveFromCart={removeFromCart}
          />
        )}
      </main>

      <FoodFooter onSelectTab={setCurrentTab} />

      <ReservationModal
        isOpen={reserveOpen}
        onClose={() => setReserveOpen(false)}
      />
    </div>
  );
}
