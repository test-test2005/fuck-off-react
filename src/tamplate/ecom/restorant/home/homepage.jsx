import React from 'react';
import { useNavigate } from 'react-router-dom';
import FoodBanner from './homeComponent/banner.jsx';
import FoodChefSpecials from './homeComponent/chefSpecials.jsx';
import FoodHoursBadge from './homeComponent/hoursBadge.jsx';

export default function FoodHomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-12 pb-16">
      <FoodBanner onExploreMenu={() => navigate('/pages/ecom/food/foods')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <FoodHoursBadge />
        <FoodChefSpecials />
      </div>
    </div>
  );
}
