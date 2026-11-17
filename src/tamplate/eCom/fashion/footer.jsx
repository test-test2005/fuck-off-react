import React from 'react';
import { Link } from 'react-router-dom';
import { LuShirt, LuMapPin, LuPhone } from 'react-icons/lu';
import fashionData from './data.js';

export default function FashionFooter() {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-content flex items-center justify-center font-bold">
              <LuShirt />
            </div>
            <span className="font-black text-base">{fashionData.brand}</span>
          </div>
          <p className="text-xs text-base-content/70 leading-relaxed">{fashionData.tagline}</p>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Capsule Collections</h4>
          <ul className="space-y-2 text-xs text-base-content/70">
            {fashionData.categories.filter(c => c !== 'All').map((cat) => (
              <li key={cat}>
                <Link to="/pages/ecom/fashion/products" className="hover:text-primary transition-colors">{cat}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 text-xs text-base-content/70">
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Atelier Concierge</h4>
          <p className="flex items-start gap-1.5"><LuMapPin className="text-primary mt-0.5" /> {fashionData.address}</p>
          <p className="flex items-center gap-1.5"><LuPhone className="text-primary" /> {fashionData.phone}</p>
        </div>
      </div>
      <div className="border-t border-base-300 py-4 text-center text-xs text-base-content/60">
        Copyright 2026 {fashionData.title}. Sustainable Luxury Fashion.
      </div>
    </footer>
  );
}
