import React from 'react';
import { useNavigate } from 'react-router-dom';
import TechBanner from './homeComponent/banner.jsx';
import TechFeaturedProducts from './homeComponent/featuredProducts.jsx';
import TechSpecsOverview from './homeComponent/specsOverview.jsx';
import TechWarrantyBanner from './homeComponent/warrantyBadge.jsx';

export default function TechHomePage({
  onNavigate,
  onSelectProduct,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isInWishlist
}) {
  let nav;
  try { nav = useNavigate(); } catch (e) {
    nav = (to) => { if (typeof window !== 'undefined') window.location.href = to; };
  }
  const navigate = onNavigate || nav;

  return (
    <div className="space-y-12 pb-16">
      <TechBanner onShopClick={() => navigate('products')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <TechFeaturedProducts
          onAddToCart={onAddToCart}
          onBuyNow={onBuyNow}
          onToggleWishlist={onToggleWishlist}
          isInWishlist={isInWishlist}
          onSelectProduct={onSelectProduct}
        />
        <TechSpecsOverview />
        <TechWarrantyBanner />
      </div>
    </div>
  );
}
