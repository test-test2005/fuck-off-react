import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { LuStar, LuShoppingCart, LuCheck, LuEye, LuCpu, LuHeart, LuZap } from 'react-icons/lu';
import { DOMAINS } from '../../../../../data/domainData.js';

export default function TechFeaturedProducts() {
  const items = DOMAINS.tech.items || [];
  const categories = ["All", "Laptops", "Smartphones", "Audio", "Smartwear", "Accessories"];
  const outlet = useOutletContext() || {};
  const onAddToCart = outlet.onAddToCart;
  const onBuyNow = outlet.onBuyNow;
  const onToggleWishlist = outlet.onToggleWishlist;
  const isInWishlist = outlet.isInWishlist || (() => false);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addedMap, setAddedMap] = useState({});
  const navigate = useNavigate();

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
              className={`btn btn-xs sm:btn-sm rounded-xl font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "btn-primary text-primary-content shadow-xs"
                  : "btn-ghost text-base-content/70 hover:bg-base-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const isAdded = !!addedMap[item.id];
          const isWished = isInWishlist(item.id);

          return (
            <div
              key={item.id}
              onClick={() => navigate(`/detail/${item.id}`)}
              className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-square overflow-hidden bg-base-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                
                <span className="badge badge-primary badge-sm text-primary-content font-bold absolute top-3 left-3 shadow-md">
                  {item.discountBadge || "FLAGSHIP"}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onToggleWishlist) onToggleWishlist(item);
                  }}
                  title="Save to Wishlist"
                  aria-label="Save to Wishlist"
                  className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 hover:bg-base-100 backdrop-blur-md shadow-md z-10"
                >
                  <LuHeart className={isWished ? "fill-error text-error text-xs" : "text-base-content/70 text-xs"} />
                </button>

                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/detail/${item.id}`);
                    }}
                    className="btn btn-xs sm:btn-sm btn-block bg-base-100/90 hover:bg-base-100 backdrop-blur-md rounded-xl text-xs gap-1 shadow-md font-semibold"
                  >
                    <LuEye /> View Tech Specs
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-base-content/60">
                    <span className="font-bold text-primary uppercase text-[11px] tracking-wider">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-warning font-semibold">
                      <LuStar className="fill-warning text-xs" />
                      <span>{item.rating}</span>
                      <span className="text-base-content/50">({item.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-base-content mt-1 group-hover:text-primary transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-base-content/70 line-clamp-2 mt-1">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-base-200 flex flex-wrap items-center justify-between gap-2 mt-3">
                  <div>
                    <span className="text-[10px] text-base-content/50 line-through block">
                      ${item.originalPrice}
                    </span>
                    <span className="text-base font-black text-base-content font-mono">
                      ${item.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(e) => handleAdd(e, item)}
                      className={`btn btn-xs rounded-xl font-bold gap-1 transition-all ${
                        isAdded ? "btn-success text-white" : "btn-primary shadow-xs"
                      }`}
                      title="Add to Cart"
                    >
                      {isAdded ? (
                        <>
                          <LuCheck className="text-xs" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <LuShoppingCart className="text-xs" />
                          <span>Add</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={(e) => handleBuy(e, item)}
                      className="btn btn-secondary btn-xs rounded-xl font-bold gap-1 shadow-xs"
                      title="Buy Now"
                    >
                      <LuZap className="text-xs" />
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
