import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import fashionData from '../data.js';
import Breadcrumbs from './breadcrumbs.jsx';
import ImageZoom from './imageZoom.jsx';
import { LuStar, LuShoppingBag, LuCheck, LuZap, LuHeart } from 'react-icons/lu';

export default function FashionDetailPage({
  product: propProduct,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isInWishlist
}) {
  let params = {};
  try { params = useParams() || {}; } catch (e) {}
  let nav;
  try { nav = useNavigate(); } catch (e) {
    nav = (to) => { if (typeof window !== 'undefined') window.location.href = to; };
  }
  const navigate = nav;

  const [added, setAdded] = useState(false);
  const itemId = Number(params.id) || (propProduct ? propProduct.id : 401);
  const item = propProduct || fashionData.items.find((i) => i.id === itemId) || fashionData.items[0];

  const isWished = isInWishlist ? isInWishlist(item.id) : false;

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'Fashion', to: '/pages/ecom/fashion' },
          { label: 'Collection', to: '/pages/ecom/fashion/products' },
          { label: item.title, to: `/pages/ecom/fashion/detail/${item.id}`, isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <ImageZoom src={item.image} alt={item.title} aspectRatio="aspect-4/3" />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge badge-primary badge-sm font-bold uppercase">{item.category}</span>
                {item.discountBadge && <span className="badge badge-warning badge-sm font-semibold">{item.discountBadge}</span>}
              </div>
              <h1 className="text-3xl font-black text-base-content">{item.title}</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-warning">
                  {[...Array(5)].map((_, i) => (
                    <LuStar key={i} className="text-xs fill-warning" />
                  ))}
                </div>
                <span className="text-xs font-bold text-base-content/80">({item.reviewsCount} Customer Reviews)</span>
              </div>
            </div>

            <p className="text-sm text-base-content/80 leading-relaxed font-normal">{item.desc}</p>

            {item.specs && (
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-base-content/60">Fabric & Tailoring Specifications</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-base-content/80 font-medium">
                  {item.specs.map((sp, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 p-2 bg-base-200/50 rounded-lg">
                      <LuCheck className="text-primary text-xs" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-base-300 pt-6 flex items-center justify-between">
              <div>
                <span className="text-xs text-base-content/60">Retail Price</span>
                <div className="text-3xl font-black text-primary font-mono">${item.price}</div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onToggleWishlist && onToggleWishlist(item)}
                  className="btn btn-outline btn-circle btn-sm"
                  title="Save to Wishlist"
                >
                  <LuHeart className={isWished ? "fill-error text-error text-sm" : "text-base-content/70 text-sm"} />
                </button>
                <button
                  onClick={() => {
                    setAdded(true);
                    if (onAddToCart) onAddToCart(item);
                    setTimeout(() => setAdded(false), 2000);
                  }}
                  className="btn btn-outline btn-sm font-bold gap-2"
                >
                  {added ? <LuCheck className="text-success" /> : <LuShoppingBag />}
                  <span>{added ? 'Added to Bag' : 'Add to Bag'}</span>
                </button>
                <button
                  onClick={() => {
                    if (onBuyNow) onBuyNow(item);
                    else if (onAddToCart) onAddToCart(item);
                    navigate('/cart');
                  }}
                  className="btn btn-primary btn-sm font-bold gap-2 shadow-xs"
                >
                  <LuZap />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
