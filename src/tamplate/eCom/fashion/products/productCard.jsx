import React from 'react';
import { LuShoppingBag, LuStar, LuHeart, LuZap } from 'react-icons/lu';

const defaultFashionItem = {
  id: 401,
  title: "Italian Wool Double-Breasted Tailored Blazer",
  category: "Jackets",
  price: 520,
  rating: 4.9,
  reviewsCount: 78,
  image: "/images/item-1.jpg",
  desc: "Structured canvassed shoulder line, horn buttons, and unlined interior tailored from Vitale Barberis Canonico 120s wool."
};

export default function FashionProductCard({
  item = defaultFashionItem,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isInWishlist,
  onSelectProduct
}) {
  const p = item || defaultFashionItem;
  const isWished = isInWishlist ? isInWishlist(p.id) : false;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <figure className="relative h-56 bg-base-200 overflow-hidden cursor-pointer" onClick={() => onSelectProduct && onSelectProduct(p)}>
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="badge badge-primary badge-sm font-bold text-[10px] shadow-sm">
              {p.category}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleWishlist) onToggleWishlist(p);
            }}
            title="Save to Wishlist"
            className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 hover:bg-base-100 backdrop-blur-md shadow-md z-10"
          >
            <LuHeart className={isWished ? "fill-error text-error text-xs" : "text-base-content/70 text-xs"} />
          </button>
        </figure>

        <div className="p-4 space-y-2">
          <h3
            onClick={() => onSelectProduct && onSelectProduct(p)}
            className="font-bold text-base text-base-content hover:text-primary transition-colors cursor-pointer line-clamp-1"
          >
            {p.title}
          </h3>
          <p className="text-xs text-base-content/70 line-clamp-2 leading-relaxed">{p.desc}</p>
        </div>
      </div>

      <div className="p-4 pt-0 border-t border-base-200 mt-2 space-y-3">
        <div className="flex items-baseline justify-between pt-2">
          <span className="text-base font-black text-primary font-mono">${p.price}</span>
          <span className="text-[11px] text-success font-semibold">In Stock</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onAddToCart && onAddToCart(p)}
            className="btn btn-outline btn-xs font-bold gap-1"
          >
            <LuShoppingBag className="text-xs" />
            <span>Bag</span>
          </button>
          <button
            onClick={() => onBuyNow ? onBuyNow(p) : (onAddToCart && onAddToCart(p))}
            className="btn btn-primary btn-xs font-bold gap-1 shadow-xs"
          >
            <LuZap className="text-xs" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
