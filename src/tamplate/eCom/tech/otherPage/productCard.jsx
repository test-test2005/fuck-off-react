import React from 'react';
import { LuStar, LuShoppingCart, LuHeart, LuZap } from 'react-icons/lu';

export default function TechProductCard({
  product,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isInWishlist,
  onSelectProduct
}) {
  if (!product) return null;

  const isWished = isInWishlist ? isInWishlist(product.id) : false;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
      <div>
        <figure className="relative h-48 bg-base-200 overflow-hidden cursor-pointer" onClick={() => onSelectProduct && onSelectProduct(product)}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="badge badge-primary badge-sm font-bold text-[11px] shadow-sm">
              {product.category}
            </span>
          </div>
          {product.discountBadge && (
            <div className="absolute top-3 right-11">
              <span className="badge badge-warning badge-sm font-bold text-[11px] shadow-sm">
                {product.discountBadge}
              </span>
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleWishlist) onToggleWishlist(product);
            }}
            title="Save to Wishlist"
            aria-label="Save to Wishlist"
            className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 hover:bg-base-100 backdrop-blur-md shadow-md z-10"
          >
            <LuHeart className={isWished ? "fill-error text-error text-xs" : "text-base-content/70 text-xs"} />
          </button>
        </figure>

        <div className="p-4 space-y-2.5">
          <div className="flex items-center gap-1 text-warning text-xs">
            <LuStar className="fill-warning" />
            <span className="font-bold text-base-content text-[11px]">{product.rating}</span>
            <span className="text-base-content/50 text-[10px]">({product.reviewsCount || 42})</span>
          </div>

          <h3
            onClick={() => onSelectProduct && onSelectProduct(product)}
            className="font-bold text-sm text-base-content group-hover:text-primary transition-colors cursor-pointer line-clamp-1"
          >
            {product.title}
          </h3>

          <p className="text-xs text-base-content/70 line-clamp-2 leading-relaxed">
            {product.desc}
          </p>

          {/* Specs tags */}
          {product.specs && product.specs.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {product.specs.slice(0, 3).map((sp, idx) => (
                <span key={idx} className="badge badge-ghost badge-xs text-[10px] text-base-content/70">
                  {sp}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 pt-0 border-t border-base-200 mt-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="text-base font-black text-primary font-mono">${product.price.toLocaleString()}</div>
          {product.originalPrice && (
            <div className="text-[11px] text-base-content/40 line-through font-mono">${product.originalPrice.toLocaleString()}</div>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onAddToCart && onAddToCart(product)}
            className="btn btn-primary btn-xs font-bold gap-1 shadow-xs"
            title="Add to Cart"
          >
            <LuShoppingCart className="text-xs" />
            <span>Add</span>
          </button>
          <button
            onClick={() => onBuyNow && onBuyNow(product)}
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
