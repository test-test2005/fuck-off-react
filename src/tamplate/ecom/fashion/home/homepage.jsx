import React from 'react';
import { useNavigate } from 'react-router-dom';
import FashionBanner from './homeComponent/banner.jsx';
import FashionFeaturedProducts from './homeComponent/featuredProducts.jsx';
import { DOMAINS } from '../../../../data/domainData.js';

export default function FashionHomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-12 pb-16">
      <FashionBanner onShopClick={() => navigate('/pages/ecom/fashion/products')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <FashionFeaturedProducts items={DOMAINS.fashion.items} />
      </div>
    </div>
  );
}
