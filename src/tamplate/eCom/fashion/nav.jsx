import React from 'react';
import { Link } from 'react-router-dom';
import { LuShirt, LuHeart, LuShoppingBag, LuSearch } from 'react-icons/lu';
import fashionData from './data.js';

export default function FashionNav({ onSelectTab, cartCount = 0, wishlistCount = 0, activeTab = 'home' }) {
  const handleNav = (tabId) => {
    if (onSelectTab) onSelectTab(tabId);
  };

  return (
    <header className="sticky top-0 z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300 shadow-xs">
      <div className="bg-neutral text-neutral-content text-[11px] py-1 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span>Sustainable Luxury Tailoring & Contemporary Capsule Wardrobes</span>
          <span className="hidden sm:inline">Concierge: {fashionData.phone}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        <Link to="/pages/ecom/fashion" onClick={() => handleNav('home')} className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary text-primary-content flex items-center justify-center text-lg font-bold shadow-xs">
            <LuShirt />
          </div>
          <div>
            <div className="font-black text-base tracking-tight text-base-content">{fashionData.brand}</div>
            <div className="text-[10px] text-base-content/60 uppercase tracking-widest">{fashionData.title}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/pages/ecom/fashion"
            onClick={() => handleNav('home')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'home' ? 'bg-primary/10 text-primary' : 'text-base-content/70 hover:bg-base-200'
            }`}
          >
            Home
          </Link>
          <Link
            to="/pages/ecom/fashion/products"
            onClick={() => handleNav('products')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'products' ? 'bg-primary/10 text-primary' : 'text-base-content/70 hover:bg-base-200'
            }`}
          >
            Full Collection
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/wishlist"
            onClick={() => handleNav('wishlist')}
            className={`btn btn-circle btn-sm relative ${activeTab === 'wishlist' ? 'btn-secondary text-secondary-content' : 'btn-ghost'}`}
            title="View Wishlist"
          >
            <LuHeart className="text-base" />
            {wishlistCount > 0 && (
              <span className="badge badge-error badge-xs absolute -top-1 -right-1 font-bold">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link
            to="/cart"
            onClick={() => handleNav('cart')}
            className="btn btn-primary btn-sm font-bold shadow-xs gap-1.5"
          >
            <LuShoppingBag className="text-xs" />
            <span>Bag</span>
            <span className="badge badge-sm badge-neutral font-mono">{cartCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
