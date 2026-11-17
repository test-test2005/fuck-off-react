import React from 'react';
import { useNavigate } from 'react-router-dom';
import FashionBanner from './homeComponent/banner.jsx';
import FashionFeaturedProducts from './homeComponent/featuredProducts.jsx';

export default function FashionHomePage({
  onNavigate,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isInWishlist,
  onSelectProduct
}) {
  let nav;
  try { nav = useNavigate(); } catch (e) {
    nav = (to) => { if (typeof window !== 'undefined') window.location.href = to; };
  }
  const navigate = onNavigate || nav;

  return (
    <div className="space-y-12 pb-16">
      <FashionBanner onShopClick={() => navigate('products')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <FashionFeaturedProducts
          onAddToCart={onAddToCart}
          onBuyNow={onBuyNow}
          onToggleWishlist={onToggleWishlist}
          isInWishlist={isInWishlist}
          onSelectProduct={onSelectProduct}
        />
      </div>
    </div>
  );
}
