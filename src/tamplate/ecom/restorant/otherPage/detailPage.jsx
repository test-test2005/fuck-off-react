import React, { useState } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { DOMAINS } from '../../../../data/domainData.js';
import Breadcrumbs from '../../../common/breadcrumbs.jsx';
import ImageZoom from '../../../common/imageZoom.jsx';
import { LuStar, LuShoppingCart, LuCheck, LuUtensils, LuClock, LuFlame, LuHeart, LuZap } from 'react-icons/lu';

/**
 * Restaurant Dish Detail Page
 * Located at: pages/ecom/food/detail.jsx
 */
export default function FoodDetailPage(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const outlet = useOutletContext() || {};
  const onAddToCart = props.onAddToCart || outlet.onAddToCart;
  const onBuyNow = props.onBuyNow || outlet.onBuyNow;
  const onToggleWishlist = props.onToggleWishlist || outlet.onToggleWishlist;
  const isInWishlist = props.isInWishlist || outlet.isInWishlist || (() => false);
  const [added, setAdded] = useState(false);

  const itemId = Number(id) || 301;
  const item = DOMAINS.food.items.find((i) => i.id === itemId) || DOMAINS.food.items[0];

  const handleAdd = () => {
    setAdded(true);
    if (onAddToCart) onAddToCart(item);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuy = () => {
    if (onBuyNow) {
      onBuyNow(item);
    } else {
      if (onAddToCart) onAddToCart(item);
      navigate('/cart');
    }
  };

  const isWished = isInWishlist(item.id);

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'Restaurant', to: '/pages/ecom/food' },
          { label: 'Menu', to: '/pages/ecom/food/foods' },
          { label: item.title, to: `/pages/ecom/food/detail/${item.id}`, isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <div>
            <ImageZoom
              src={item.image}
              alt={item.title}
              aspectRatio="aspect-4/3"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge badge-secondary badge-sm font-bold uppercase">{item.category}</span>
                <span className="badge badge-error badge-sm text-white font-bold">{item.discountBadge}</span>
              </div>
              <h1 className="text-3xl font-black text-base-content">{item.title}</h1>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-warning">
                  {[...Array(5)].map((_, i) => (
                    <LuStar key={i} className="fill-warning text-xs" />
                  ))}
                </div>
                <span className="font-bold text-xs text-base-content">{item.rating}</span>
                <span className="text-xs text-base-content/60">({item.reviewsCount} dining reviews)</span>
              </div>
            </div>

            <div className="bg-base-200/50 p-4 rounded-2xl border border-base-300 flex items-center gap-4">
              <span className="text-3xl font-black text-base-content">BDT {item.price}</span>
              <span className="text-sm text-base-content/50 line-through">BDT {item.originalPrice}</span>
              <span className="badge badge-success badge-sm text-white font-bold">Kitchen Ready</span>
            </div>

            <p className="text-sm text-base-content/80 leading-relaxed">
              {item.desc}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/60">Culinary Ingredients & Profile:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {item.specs?.map((spec, sIdx) => (
                  <div key={sIdx} className="bg-base-200 p-2.5 rounded-xl border border-base-300 font-semibold text-base-content/80 flex items-center gap-1.5">
                    <LuFlame className="text-secondary text-xs" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Food Order Actions: Add to Order, Order Now, Add to Favorites */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleAdd}
                className={`btn btn-secondary btn-md rounded-xl font-bold flex-1 shadow-md shadow-secondary/20 gap-2 ${
                  added ? "btn-success text-white" : ""
                }`}
                title="Add to Order"
              >
                {added ? <><LuCheck /> Added to Order</> : <><LuShoppingCart /> Add to Order</>}
              </button>

              <button
                onClick={handleBuy}
                className="btn btn-primary btn-md rounded-xl font-bold flex-1 shadow-md shadow-primary/20 gap-2"
                title="Order Now"
              >
                <LuZap /> Order Now
              </button>

              <button
                onClick={() => onToggleWishlist && onToggleWishlist(item)}
                className={`btn btn-outline btn-md rounded-xl font-bold gap-2 ${
                  isWished ? "btn-error text-white" : ""
                }`}
                title={isWished ? "Remove from Favorites" : "Save to Favorites"}
              >
                <LuHeart className={isWished ? "fill-current" : ""} />
                <span>{isWished ? "Favorited" : "Favorite"}</span>
              </button>
            </div>

            <div className="border-t border-base-300 pt-4 grid grid-cols-3 gap-2 text-[11px] text-base-content/70">
              <div className="flex items-center gap-1.5"><LuUtensils className="text-secondary text-base" /> Fresh Cooked</div>
              <div className="flex items-center gap-1.5"><LuClock className="text-primary text-base" /> 30m Delivery</div>
              <div className="flex items-center gap-1.5"><LuFlame className="text-accent text-base" /> Thermal Bag</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
