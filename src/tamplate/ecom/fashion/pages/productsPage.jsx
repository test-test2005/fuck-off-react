import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import fashionData from '../data.js';
import Breadcrumbs from './breadcrumbs.jsx';
import FashionProductCard from './productCard.jsx';
import { LuSearch, LuShirt } from 'react-icons/lu';

export default function FashionProductsPage({ products: propProducts, onAddToCart, onBuyNow, onToggleWishlist, isInWishlist }) {
  const items = (propProducts && propProducts.length > 0) ? propProducts : (fashionData.items || []);
  let nav;
  try { nav = useNavigate(); } catch (e) {
    nav = (to) => { if (typeof window !== 'undefined') window.location.href = to; };
  }
  const navigate = nav;

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                            item.desc.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, search]);

  return (
    <div className="space-y-6 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'Fashion', to: '/pages/ecom/fashion' },
          { label: 'Collection', to: '/pages/ecom/fashion/products', isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="border-b border-base-300 pb-4">
          <div className="flex items-center gap-2">
            <span className="badge badge-primary badge-outline text-xs font-bold uppercase gap-1">
              <LuShirt className="text-xs" />
              <span>Full Collection</span>
            </span>
          </div>
          <h1 className="text-3xl font-black text-base-content mt-1">Sartorial Wardrobe Catalog</h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1">
            {['All', ...fashionData.categories.filter(c => c !== 'All')].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-xs rounded-full font-semibold ${
                  selectedCategory === cat ? 'btn-primary' : 'btn-ghost border border-base-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search garments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-sm input-bordered w-full pl-8 text-xs"
            />
            <LuSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 text-base-content/40 text-xs" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <FashionProductCard
              key={item.id}
              item={item}
              onAddToCart={onAddToCart}
              onBuyNow={onBuyNow}
              onToggleWishlist={onToggleWishlist}
              isInWishlist={isInWishlist}
              onSelectProduct={(p) => navigate(`/detail/${p.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
