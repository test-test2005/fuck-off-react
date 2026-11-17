import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { LuStar, LuShoppingCart, LuCheck, LuEye, LuCpu, LuHeart, LuZap } from 'react-icons/lu';
import techData from '../../data.js';

export default function TechFeaturedProducts({
  items: propItems,
  onAddToCart: propAddToCart,
  onBuyNow: propBuyNow,
  onToggleWishlist: propToggleWishlist,
  isInWishlist: propIsInWishlist,
  onSelectProduct
}) {
  let outlet = {};
  try { outlet = useOutletContext() || {}; } catch (e) {}

  const onAddToCart = propAddToCart || outlet.onAddToCart;
  const onBuyNow = propBuyNow || outlet.onBuyNow;
  const onToggleWishlist = propToggleWishlist || outlet.onToggleWishlist;
  const isInWishlist = propIsInWishlist || outlet.isInWishlist || (() => false);

  const items = (propItems && propItems.length > 0) ? propItems : (techData.items || []);
  const categories = ["All", "Laptops", "Smartphones", "Audio", "Smartwear", "Accessories"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addedMap, setAddedMap] = useState({});

  let nav;
  try { nav = useNavigate(); } catch (e) {
    nav = (to) => { if (typeof window !== 'undefined') window.location.href = to; };
  }
  const navigate = nav;

  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleAdd = (e, item) => {
    e.stopPropagation();
    setAddedMap(prev => ({ ...prev, [item.id]: true }));
    if (onAddToCart) onAddToCart(item);
    setTimeout(() => {
      setAddedMap(prev => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  const handleBuy = (e, item) => {
    e.stopPropagation();
    if (onBuyNow) {
      onBuyNow(item);
    } else {
      if (onAddToCart) onAddToCart(item);
      navigate('/cart');
    }
  };

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-base-300 pb-4">
        <div>
          <span className="badge badge-primary badge-outline text-xs font-bold uppercase gap-1">
            <LuCpu className="text-xs" />
            <span>Tech Hardware</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-base-content mt-1">
            Cutting-Edge Electronics & Workstations
          </h2>
          <p className="text-xs sm:text-sm text-base-content/70 mt-1">
            Engineered for uncompromising processing power and peak speed.
          </p>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn btn-xs rounded-full font-bold px-3 transition-all ${
                selectedCategory === cat ? 'btn-primary shadow-xs' : 'btn-ghost border border-base-300 hover:border-primary/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => {
          const isWished = isInWishlist(item.id);
          return (
            <div
              key={item.id}
              className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <figure
                  className="relative h-48 bg-base-200 overflow-hidden cursor-pointer"
                  onClick={() => onSelectProduct ? onSelectProduct(item) : navigate(`/detail/${item.id}`)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge badge-primary badge-sm font-bold text-[10px] shadow-sm">
                      {item.category}
                    </span>
                  </div>
                  {item.discountBadge && (
                    <div className="absolute top-3 right-11">
                      <span className="badge badge-warning badge-sm font-bold text-[10px] shadow-sm">
                        {item.discountBadge}
                      </span>
                    </div>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onToggleWishlist) onToggleWishlist(item);
                    }}
                    title="Toggle Wishlist"
                    className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 hover:bg-base-100 backdrop-blur-md shadow-md z-10"
                  >
                    <LuHeart className={isWished ? "fill-error text-error text-xs" : "text-base-content/70 text-xs"} />
                  </button>
                </figure>

                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-1 text-warning text-xs">
                    <LuStar className="fill-warning" />
                    <span className="font-bold text-base-content font-mono">{item.rating}</span>
                    <span className="text-base-content/50 text-[11px]">({item.reviewsCount})</span>
                  </div>

                  <h3
                    onClick={() => onSelectProduct ? onSelectProduct(item) : navigate(`/detail/${item.id}`)}
                    className="font-bold text-sm text-base-content hover:text-primary transition-colors cursor-pointer line-clamp-1"
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-base-content/70 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-base-200 mt-2 space-y-3">
                <div className="flex items-baseline justify-between pt-2">
                  <span className="text-base font-black text-primary font-mono">${item.price}</span>
                  <span className="text-[11px] text-success font-semibold flex items-center gap-1">In Stock</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={(e) => handleAdd(e, item)}
                    className="btn btn-outline btn-xs font-bold gap-1"
                  >
                    {addedMap[item.id] ? <LuCheck className="text-success text-xs" /> : <LuShoppingCart className="text-xs" />}
                    <span>{addedMap[item.id] ? 'Added' : 'Cart'}</span>
                  </button>
                  <button
                    onClick={(e) => handleBuy(e, item)}
                    className="btn btn-primary btn-xs font-bold gap-1 shadow-xs"
                  >
                    <LuZap className="text-xs" />
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
