import React from 'react';
import { LuShoppingBag, LuStar, LuHeart, LuZap } from 'react-icons/lu';

export default function FashionProductCard({
  item,
  onAdd,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isInWishlist
}) {
  if (!item) return null;

  const handleAdd = onAddToCart || onAdd;
  const isWished = isInWishlist ? isInWishlist(item.id) : false;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <figure className="relative h-56 bg-base-200 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="badge badge-primary badge-sm font-bold text-[10px] shadow-sm">
              {item.category}
            </span>
          </div>

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
            <LuHeart className={isWished ? "fill-error text-error text-xs" : "text-base-content/70 text-xs"} />
          </button>
        </figure>

        <div className="p-4 space-y-2">
          <h3 className="font-bold text-base text-base-content">{item.title}</h3>
          <p className="text-xs text-base-content/70">{item.desc}</p>
        </div>
      </div>

      <div className="p-4 pt-0 border-t border-base-200 mt-3 flex flex-wrap items-center justify-between gap-2">
        <div className="text-base font-black text-primary font-mono">${item.price}</div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => handleAdd && handleAdd(item)}
            className="btn btn-primary btn-xs font-bold gap-1 shadow-xs"
            title="Add to Bag"
          >
            <LuShoppingBag className="text-xs" />
            <span>Add</span>
          </button>
          <button
            onClick={() => onBuyNow && onBuyNow(item)}
            className="btn btn-secondary btn-xs font-bold gap-1 shadow-xs"
            title="Buy Now"
          >
            <LuZap className="text-xs" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
