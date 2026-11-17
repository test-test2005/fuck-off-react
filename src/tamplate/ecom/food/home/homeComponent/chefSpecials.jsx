import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuUtensils, LuStar } from 'react-icons/lu';
import foodData from '../../data.js';
import FoodCard from '../../components/foodCard.jsx';

export default function FoodChefSpecials({
  items: propItems,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isInWishlist,
  onSelectFood
}) {
  const items = (propItems && propItems.length > 0) ? propItems : (foodData.items || []);
  let nav;
  try { nav = useNavigate(); } catch (e) {
    nav = (to) => { if (typeof window !== 'undefined') window.location.href = to; };
  }
  const navigate = nav;

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-base-300 pb-4">
        <div>
          <span className="badge badge-primary badge-outline text-xs font-bold uppercase gap-1">
            <LuUtensils className="text-xs" />
            <span>Chef Selections</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-base-content mt-1">
            Artisan Signature Dishes
          </h2>
          <p className="text-xs sm:text-sm text-base-content/70 mt-1">
            Handcrafted with organic farm produce and authentic Mediterranean heritage.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            onAddToCart={onAddToCart}
            onBuyNow={onBuyNow}
            onToggleWishlist={onToggleWishlist}
            isInWishlist={isInWishlist}
            onSelectFood={(item) => onSelectFood ? onSelectFood(item) : navigate(`/detail/${item.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
