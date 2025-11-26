import React, { useState } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { DOMAINS } from '../../../../data/domainData.js';
import Breadcrumbs from '../../../common/breadcrumbs.jsx';
import ImageZoom from '../../../common/imageZoom.jsx';
import { LuStar, LuShoppingCart, LuCheck, LuShoppingBag, LuShieldCheck, LuSparkles, LuHeart, LuZap } from 'react-icons/lu';

/**
 * Fashion Item Detail Page
 * Located at: pages/ecom/fashion/detail.jsx
 */
export default function FashionDetailPage(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const outlet = useOutletContext() || {};
  const onAddToCart = props.onAddToCart || outlet.onAddToCart;
  const onBuyNow = props.onBuyNow || outlet.onBuyNow;
  const onToggleWishlist = props.onToggleWishlist || outlet.onToggleWishlist;
  const isInWishlist = props.isInWishlist || outlet.isInWishlist || (() => false);
  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');

  const itemId = Number(id) || 401;
  const item = DOMAINS.fashion.items.find((i) => i.id === itemId) || DOMAINS.fashion.items[0];

  const handleAdd = () => {
    setAdded(true);
    if (onAddToCart) onAddToCart({ ...item, size: selectedSize });
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuy = () => {
    if (onBuyNow) {
      onBuyNow({ ...item, size: selectedSize });
    } else {
      if (onAddToCart) onAddToCart({ ...item, size: selectedSize });
      navigate('/cart');
    }
  };

  const isWished = isInWishlist(item.id);

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'Fashion', to: '/pages/ecom/fashion' },
          { label: 'Collections', to: '/pages/ecom/fashion/products' },
          { label: item.title, to: `/pages/ecom/fashion/detail/${item.id}`, isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <ImageZoom
              src={item.image}
              alt={item.title}
              aspectRatio="aspect-square"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge badge-secondary badge-sm font-bold uppercase">{item.category}</span>
                <span className="badge badge-outline badge-sm font-semibold">{item.discountBadge}</span>
              </div>
              <h1 className="text-3xl font-black text-base-content">{item.title}</h1>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-warning">
                  {[...Array(5)].map((_, i) => (
                    <LuStar key={i} className="fill-warning text-xs" />
                  ))}
                </div>
                <span className="font-bold text-xs text-base-content">{item.rating}</span>
                <span className="text-xs text-base-content/60">({item.reviewsCount} verified sartorial reviews)</span>
              </div>
            </div>

            <div className="bg-base-200/50 p-4 rounded-2xl border border-base-300 flex items-center gap-4">
              <span className="text-3xl font-black text-base-content">BDT {item.price}</span>
              <span className="text-sm text-base-content/50 line-through">BDT {item.originalPrice}</span>
              <span className="badge badge-success badge-sm text-white font-bold">Limited Atelier Run</span>
            </div>

            <p className="text-sm text-base-content/80 leading-relaxed">
              {item.desc}
            </p>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-base-content/70">Select Tailored Size:</label>
              <div className="flex gap-2">
                {['S (38)', 'M (40)', 'L (42)', 'XL (44)'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`btn btn-xs rounded-xl font-bold ${
                      selectedSize === s ? "btn-secondary" : "btn-outline"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/60">Material Specifications:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {item.specs?.map((spec, sIdx) => (
                  <div key={sIdx} className="bg-base-200 p-2.5 rounded-xl border border-base-300 font-semibold text-base-content/80">
                    {spec}
                  </div>
                ))}
              </div>
            </div>

            {/* Fashion Order Actions: Add to Bag, Buy Now, Add to Wishlist */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleAdd}
                className={`btn btn-secondary btn-md rounded-xl font-bold flex-1 shadow-md shadow-secondary/20 gap-2 ${
                  added ? "btn-success text-white" : ""
                }`}
                title="Add to Bag"
              >
                {added ? <><LuCheck /> Added to Bag</> : <><LuShoppingCart /> Add to Bag</>}
              </button>

              <button
                onClick={handleBuy}
                className="btn btn-primary btn-md rounded-xl font-bold flex-1 shadow-md shadow-primary/20 gap-2"
                title="Buy Now"
              >
                <LuZap /> Buy Now
              </button>

              <button
                onClick={() => onToggleWishlist && onToggleWishlist(item)}
                className={`btn btn-outline btn-md rounded-xl font-bold gap-2 ${
                  isWished ? "btn-error text-white" : ""
                }`}
                title={isWished ? "Remove from Wishlist" : "Save to Wishlist"}
              >
                <LuHeart className={isWished ? "fill-current" : ""} />
                <span>{isWished ? "In Wishlist" : "Wishlist"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
