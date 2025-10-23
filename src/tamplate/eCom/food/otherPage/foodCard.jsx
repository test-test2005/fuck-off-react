import React from 'react';
import { LuStar, LuShoppingBag, LuHeart, LuZap } from 'react-icons/lu';

export default function FoodCard({
  food,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isInWishlist,
  onSelectFood
}) {
  if (!food) return null;

  const isWished = isInWishlist ? isInWishlist(food.id) : false;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
      <div>
        <figure className="relative h-44 bg-base-200 overflow-hidden cursor-pointer" onClick={() => onSelectFood && onSelectFood(food)}>
          <img
            src={food.image}
            alt={food.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="badge badge-primary badge-sm font-bold text-[11px] shadow-sm">
              {food.category}
            </span>
          </div>
          {food.discountBadge && (
            <div className="absolute top-3 right-11">
              <span className="badge badge-warning badge-sm font-bold text-[11px] shadow-sm">
                {food.discountBadge}
              </span>
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleWishlist) onToggleWishlist(food);
            }}
            title="Save to Favorites"
            aria-label="Save to Favorites"
            className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 hover:bg-base-100 backdrop-blur-md shadow-md z-10"
          >
            <LuHeart className={isWished ? "fill-error text-error text-xs" : "text-base-content/70 text-xs"} />
          </button>
        </figure>

        <div className="p-4 space-y-2">
          <div className="flex items-center gap-1 text-warning text-xs">
            <LuStar className="fill-warning" />
            <span className="font-bold text-base-content text-[11px]">{food.rating}</span>
            <span className="text-base-content/50 text-[10px]">({food.reviewsCount || 85})</span>
          </div>

          <h3
            onClick={() => onSelectFood && onSelectFood(food)}
            className="font-bold text-sm text-base-content group-hover:text-primary transition-colors cursor-pointer line-clamp-1"
          >
            {food.title}
          </h3>

          <p className="text-xs text-base-content/70 line-clamp-2 leading-relaxed">
            {food.desc}
          </p>
        </div>
      </div>

      <div className="p-4 pt-0 border-t border-base-200 mt-3 flex flex-wrap items-center justify-between gap-2">
        <div className="text-base font-black text-primary font-mono">${food.price}</div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onAddToCart && onAddToCart(food)}
            className="btn btn-primary btn-xs font-bold gap-1 shadow-xs"
            title="Add to Order"
          >
            <LuShoppingBag className="text-xs" />
            <span>Add</span>
          </button>
          <button
            onClick={() => onBuyNow && onBuyNow(food)}
            className="btn btn-secondary btn-xs font-bold gap-1 shadow-xs"
            title="Order Now"
          >
            <LuZap className="text-xs" />
            <span>Order Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
