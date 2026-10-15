import React from 'react';
import { useNavigate } from 'react-router-dom';
import TechBanner from './homeComponent/banner.jsx';
import TechFeaturedProducts from './homeComponent/featuredProducts.jsx';
import TechSpecsOverview from './homeComponent/specsOverview.jsx';
import TechWarrantyBanner from './homeComponent/warrantyBadge.jsx';

export default function TechHomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-12 pb-16">
      <TechBanner onShopClick={() => navigate('/pages/ecom/tech/products')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <TechSpecsOverview />
        <TechFeaturedProducts />
        <TechWarrantyBanner />
      </div>
    </div>
  );
}
