import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuStar, LuShoppingBag, LuCheck, LuEye, LuHeart, LuZap } from 'react-icons/lu';
import fashionData from '../../data.js';
import FashionProductCard from '../../components/productCard.jsx';

export default function FashionFeaturedProducts({
  items: propItems,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isInWishlist,
  onSelectProduct
}) {
  const items = (propItems && propItems.length > 0) ? propItems : (fashionData.items || []);
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
            <span>Sartorial Wardrobe</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-base-content mt-1">
            Tailored Essentials & Modern Silhouettes
          </h2>
          <p className="text-xs sm:text-sm text-base-content/70 mt-1">
            Italian wool blazers, raw selvedge denim, and Goodyear welted footwear.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <FashionProductCard
            key={it.id}
            item={it}
            onAddToCart={onAddToCart}
            onBuyNow={onBuyNow}
            onToggleWishlist={onToggleWishlist}
            isInWishlist={isInWishlist}
            onSelectProduct={(p) => onSelectProduct ? onSelectProduct(p) : navigate(`/detail/${p.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
