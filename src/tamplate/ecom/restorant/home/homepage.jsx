import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FoodBanner from './homeComponent/banner.jsx';
import FoodChefSpecials from './homeComponent/chefSpecials.jsx';
import FoodHoursBadge from './homeComponent/hoursBadge.jsx';
import ReservationModal from '../components/reservationModal.jsx';

export default function FoodHomePage({
  onNavigate,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isInWishlist,
  onSelectFood
}) {
  let nav;
  try { nav = useNavigate(); } catch (e) {
    nav = (to) => { if (typeof window !== 'undefined') window.location.href = to; };
  }
  const navigate = onNavigate || nav;
  const [reserveOpen, setReserveOpen] = useState(false);

  return (
    <div className="space-y-12 pb-16">
      <FoodBanner
        onMenuClick={() => navigate('foods')}
        onReserveClick={() => setReserveOpen(true)}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <FoodChefSpecials
          onAddToCart={onAddToCart}
          onBuyNow={onBuyNow}
          onToggleWishlist={onToggleWishlist}
          isInWishlist={isInWishlist}
          onSelectFood={onSelectFood}
        />
        <FoodHoursBadge onBookClick={() => setReserveOpen(true)} />
      </div>

      <ReservationModal
        isOpen={reserveOpen}
        onClose={() => setReserveOpen(false)}
      />
    </div>
  );
}
