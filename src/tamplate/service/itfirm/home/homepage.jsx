import React from 'react';
import { useNavigate } from 'react-router-dom';
import ITFirmBanner from './homeComponent/banner.jsx';
import ITFirmFeaturedServices from './homeComponent/featuredServices.jsx';

export default function ITFirmHomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-12 pb-16">
      <ITFirmBanner onQuoteClick={() => navigate('/pages/service/itfirm/quote')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <ITFirmFeaturedServices />
      </div>
    </div>
  );
}
