import React from 'react';
import { Link } from 'react-router-dom';
import { LuCpu, LuShieldCheck, LuTruck, LuRotateCcw, LuHeadphones } from 'react-icons/lu';
import techData from './data.js';

export default function TechFooter({ onSelectTab }) {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-content flex items-center justify-center font-bold">
              <LuCpu />
            </div>
            <span className="font-black text-base">{techData.brand}</span>
          </div>
          <p className="text-xs text-base-content/70 leading-relaxed">{techData.tagline}</p>
          <div className="flex items-center gap-2 text-xs font-semibold text-primary">
            <LuShieldCheck /> Official 3-Year Hardware Warranty
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Product Categories</h4>
          <ul className="space-y-2 text-xs text-base-content/70">
            {techData.categories.filter(c => c !== 'All').map((cat) => (
              <li key={cat}>
                <Link to="/pages/ecom/tech/products" onClick={() => onSelectTab && onSelectTab('products')} className="hover:text-primary transition-colors">
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Customer Support</h4>
          <ul className="space-y-2 text-xs text-base-content/70">
            <li><span className="flex items-center gap-1.5"><LuTruck className="text-primary" /> Express Global Dispatch</span></li>
            <li><span className="flex items-center gap-1.5"><LuRotateCcw className="text-primary" /> 30-Day Hassle-Free Returns</span></li>
            <li><span className="flex items-center gap-1.5"><LuHeadphones className="text-primary" /> 24/7 Priority Tech Support</span></li>
            <li><span className="text-base-content/50">Enterprise Procurement B2B</span></li>
          </ul>
        </div>

        <div className="space-y-2 text-xs text-base-content/70">
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Store Location</h4>
          <p>{techData.address}</p>
          <p>Direct: {techData.phone}</p>
          <p>Email: {techData.email}</p>
        </div>
      </div>

      <div className="border-t border-base-300 py-4 text-center text-xs text-base-content/60">
        Copyright 2026 {techData.title}. Authorized Electronics Retailer.
      </div>
    </footer>
  );
}
