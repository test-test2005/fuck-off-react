import React from 'react';
import { Link } from 'react-router-dom';
import { LuCpu, LuShoppingCart, LuHeart, LuSearch, LuLayers } from 'react-icons/lu';
import techData from './data.js';

export default function TechNav({
  cartCount = 0,
  wishlistCount = 0,
  onOpenCart,
  onSelectTab,
  activeTab = 'home'
}) {
  return (
    <header className="sticky top-0 z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300 shadow-xs">
      <div className="bg-neutral text-neutral-content text-[11px] py-1 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span>Official Authorized Distributor - 100% Genuine Certified Hardware</span>
          <span className="hidden sm:inline">Support Hotline: {techData.phone}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        <Link to="/pages/ecom/tech" onClick={() => onSelectTab && onSelectTab('home')} className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary text-primary-content flex items-center justify-center text-lg font-bold shadow-xs">
            <LuCpu />
          </div>
          <div>
            <div className="font-black text-base tracking-tight text-base-content">{techData.brand}</div>
            <div className="text-[10px] text-base-content/60 uppercase tracking-widest">{techData.title}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/pages/ecom/tech"
            onClick={() => onSelectTab && onSelectTab('home')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeTab === 'home' ? 'bg-primary/10 text-primary' : 'text-base-content/70 hover:bg-base-200'}`}
          >
            Home
          </Link>
          <Link
            to="/pages/ecom/tech/products"
            onClick={() => onSelectTab && onSelectTab('products')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeTab === 'products' ? 'bg-primary/10 text-primary' : 'text-base-content/70 hover:bg-base-200'}`}
          >
            Hardware Catalog
          </Link>
          <Link
            to="/cart"
            onClick={() => onSelectTab && onSelectTab('cart')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeTab === 'cart' ? 'bg-primary/10 text-primary' : 'text-base-content/70 hover:bg-base-200'}`}
          >
            Cart Checkout
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/wishlist"
            onClick={() => onSelectTab && onSelectTab('wishlist')}
            className="btn btn-circle btn-sm btn-ghost relative"
            title="View Wishlist"
          >
            <LuHeart className="text-base" />
            {wishlistCount > 0 && (
              <span className="badge badge-error badge-xs absolute -top-1 -right-1 text-[10px] font-bold">
                {wishlistCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => onOpenCart ? onOpenCart() : (onSelectTab && onSelectTab('cart'))}
            className="btn btn-primary btn-sm font-bold shadow-xs gap-2"
          >
            <LuShoppingCart className="text-xs" />
            <span>Cart</span>
            <span className="badge badge-sm badge-neutral font-mono">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
