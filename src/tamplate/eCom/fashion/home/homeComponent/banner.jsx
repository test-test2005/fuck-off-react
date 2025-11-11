import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export default function FashionBanner({ onShopClick }) {
  return (
    <div className="bg-base-200 text-base-content py-20 px-4 sm:px-8 text-center space-y-4">
      <span className="badge badge-primary font-bold text-xs tracking-widest uppercase">SEASON 2026 COUTURE</span>
      <h1 className="text-3xl sm:text-5xl font-black text-base-content">
        Timeless Elegance & Contemporary Craftsmanship
      </h1>
      <p className="text-xs sm:text-sm text-base-content/80 max-w-xl mx-auto">
        Discover the new seasonal runway collection tailored from ethically sourced organic fabrics.
      </p>
      <div className="pt-2">
        <button onClick={onShopClick} className="btn btn-primary font-bold gap-2">
          <span>Explore Lookbook</span>
          <LuArrowRight />
        </button>
      </div>
    </div>
  );
}
