import React from 'react';
import { LuStar, LuShoppingBag, LuHeart, LuZap } from 'react-icons/lu';

const defaultFood = {
  id: 301,
  title: "Truffle Wagyu Ribeye Steak (250g)",
  category: "Steakhouse",
  price: 48,
  rating: 4.9,
  reviewsCount: 96,
  image: "/images/food-1.jpg",
  desc: "Charcoal grilled Australian Wagyu with black truffle reduction, smoked marrow butter, and roasted asparagus."
};

export default function FoodCard({
  food = defaultFood,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isInWishlist,
  onSelectFood
}) {
  const f = food || defaultFood;
  const isWished = isInWishlist ? isInWishlist(f.id) : false;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
      <div>
        <figure className="relative h-44 bg-base-200 overflow-hidden cursor-pointer" onClick={() => onSelectFood && onSelectFood(f)}>
          <img
            src={f.image}
            alt={f.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="badge badge-primary badge-sm font-bold text-[11px] shadow-sm">
              {f.category}
            </span>
          </div>
          {f.discountBadge && (
            <div className="absolute top-3 right-11">
              <span className="badge badge-warning badge-sm font-bold text-[11px] shadow-sm">
                {f.discountBadge}
              </span>
            </div>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleWishlist) onToggleWishlist(f);
            }}
            title="Save to Favorites"
            className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 hover:bg-base-100 backdrop-blur-md shadow-md z-10"
          >
            <LuHeart className={isWished ? "fill-error text-error text-xs" : "text-base-content/70 text-xs"} />
          </button>
        </figure>

        <div className="p-4 space-y-2">
          <div className="flex items-center gap-1 text-warning text-xs">
            <LuStar className="fill-warning" />
            <span className="font-bold text-base-content font-mono">{f.rating || 4.9}</span>
            <span className="text-base-content/50 text-[11px]">({f.reviewsCount || 60})</span>
          </div>

          <h3
            onClick={() => onSelectFood && onSelectFood(f)}
            className="font-bold text-sm text-base-content hover:text-primary transition-colors cursor-pointer line-clamp-1"
          >
            {f.title}
          </h3>

          <p className="text-xs text-base-content/70 line-clamp-2 leading-relaxed">
            {f.desc}
          </p>
        </div>
      </div>

      <div className="p-4 pt-0 border-t border-base-200 mt-2 space-y-3">
        <div className="flex items-baseline justify-between pt-2">
          <span className="text-base font-black text-primary font-mono">${f.price}</span>
          <span className="text-[11px] text-success font-semibold">Fresh Prep</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onAddToCart && onAddToCart(f)}
            className="btn btn-outline btn-xs font-bold gap-1"
          >
            <LuShoppingBag className="text-xs" />
            <span>Order</span>
          </button>
          <button
            onClick={() => onBuyNow ? onBuyNow(f) : (onAddToCart && onAddToCart(f))}
            className="btn btn-primary btn-xs font-bold gap-1 shadow-xs"
          >
            <LuZap className="text-xs" />
            <span>Instant</span>
          </button>
        </div>
      </div>
    </div>
  );
}
