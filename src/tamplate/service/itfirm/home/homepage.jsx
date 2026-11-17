import React from 'react';
import { useNavigate } from 'react-router-dom';
import ITFirmBanner from './homeComponent/banner.jsx';
import ITFirmFeaturedServices from './homeComponent/featuredServices.jsx';

export default function ITFirmHomePage({ onNavigate, onSelectService }) {
  let navigate = null;
  try {
    navigate = useNavigate();
  } catch (e) {
    navigate = null;
  }

  const handleQuoteClick = () => {
    if (onNavigate) {
      onNavigate('quote');
    } else if (navigate) {
      navigate('/pages/service/itfirm/quote');
    }
  };

  return (
    <div className="space-y-12 pb-16">
      <ITFirmBanner onQuoteClick={handleQuoteClick} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <ITFirmFeaturedServices onSelectService={onSelectService} />
      </div>
    </div>
  );
}
