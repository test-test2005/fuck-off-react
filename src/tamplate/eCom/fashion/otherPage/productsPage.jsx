import React, { useState, useMemo } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { DOMAINS } from '../../../../data/domainData.js';
import Breadcrumbs from '../../../common/breadcrumbs.jsx';
import { 
  LuSearch, 
  LuStar, 
  LuShoppingCart, 
  LuCheck, 
  LuEye,
  LuShoppingBag,
  LuHeart,
  LuZap
} from 'react-icons/lu';

/**
 * Fashion Catalog Page
 * Located at: pages/ecom/fashion/products.jsx
 */
export default function FashionProductsPage(props) {
  const outlet = useOutletContext() || {};
  const onAddToCart = props.onAddToCart || outlet.onAddToCart;
  const onBuyNow = props.onBuyNow || outlet.onBuyNow;
  const onToggleWishlist = props.onToggleWishlist || outlet.onToggleWishlist;
  const isInWishlist = props.isInWishlist || outlet.isInWishlist || (() => false);
  const data = DOMAINS.fashion;
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedMap, setAddedMap] = useState({});

  const filteredItems = useMemo(() => {
    return data.items.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                            item.desc.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [data.items, selectedCategory, search]);

  const handleAdd = (e, item) => {
    e.stopPropagation();
    setAddedMap((prev) => ({ ...prev, [item.id]: true }));
    if (onAddToCart) onAddToCart(item);
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  return (
    <div className="space-y-6 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'Fashion', to: '/pages/ecom/fashion' },
          { label: 'Collections', to: '/pages/ecom/fashion/products', isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="border-b border-base-300 pb-4">
          <div className="flex items-center gap-2">
            <span className="badge badge-secondary badge-outline text-xs font-bold uppercase gap-1">
              <LuShoppingBag className="text-xs" />
              <span>Autumn Winter 2026</span>
            </span>
          </div>
          <h1 className="text-3xl font-black text-base-content mt-1">Sartorial Collections & Lookbook</h1>
          <p className="text-xs sm:text-sm text-base-content/70 mt-1">
            Browse our full catalogue of Italian wool blazers, cashmere knitwear, and Goodyear footwear.
          </p>
        </div>

        <div className="bg-base-200/60 border border-base-300 rounded-3xl p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/40 text-sm" />
              <input
                type="text"
                placeholder="Search blazers, cashmere, denim, boots..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input input-sm bg-base-100 border-base-300 rounded-xl pl-9 w-full text-xs"
              />
            </div>

            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="select select-sm bg-base-100 border-base-300 rounded-xl w-full text-xs font-semibold"
              >
                {data.categories.map((c) => (
                  <option key={c} value={c}>Collection: {c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isAdded = !!addedMap[item.id];
            return (
              <div
                key={item.id}
                onClick={() => navigate(`/detail/${item.id}`)}
                className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-secondary/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-square overflow-hidden bg-base-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <span className="badge badge-secondary badge-sm text-secondary-content font-bold absolute top-3 left-3 shadow-md">
                    {item.discountBadge || "LIMITED"}
                  </span>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onToggleWishlist) onToggleWishlist(item);
                    }}
                    title="Save to Wishlist"
                    aria-label="Save to Wishlist"
                    className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 hover:bg-base-100 backdrop-blur-md shadow-md z-10"
                  >
                    <LuHeart className={isInWishlist(item.id) ? "fill-error text-error text-xs" : "text-base-content/70 text-xs"} />
                  </button>

                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/detail/${item.id}`);
                      }}
                      className="btn btn-xs sm:btn-sm btn-block bg-base-100/90 hover:bg-base-100 backdrop-blur-md rounded-xl text-xs gap-1 shadow-md font-semibold"
                    >
                      <LuEye /> View Apparel
                    </button>
                  </div>
                </div>

                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-base-content/60">
                      <span className="font-bold text-secondary uppercase text-[11px] tracking-wider">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-warning font-semibold">
                        <LuStar className="fill-warning text-xs" />
                        <span>{item.rating}</span>
                        <span className="text-base-content/50">({item.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-base text-base-content mt-1 group-hover:text-secondary transition-colors line-clamp-1">
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
                          isAdded ? "btn-success text-white" : "btn-secondary text-secondary-content shadow-xs"
                        }`}
                        title="Add to Bag"
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
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onBuyNow) onBuyNow(item);
                          else if (onAddToCart) { onAddToCart(item); navigate('/cart'); }
                        }}
                        className="btn btn-primary btn-xs rounded-xl font-bold gap-1 shadow-xs"
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

      </div>
    </div>
  );
}
