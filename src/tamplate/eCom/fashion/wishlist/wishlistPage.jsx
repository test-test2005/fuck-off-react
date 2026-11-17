import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './breadcrumbs.jsx';
import PopupModal from './popupModal.jsx';
import { LuHeart, LuShoppingBag, LuTrash2, LuArrowRight, LuZap } from 'react-icons/lu';

export default function FashionWishlistPage({
  wishlist = [],
  onAddToCart,
  onBuyNow,
  onRemoveFromWishlist,
  onNavigate
}) {
  const [modalDetails, setModalDetails] = useState(null);

  const handleMoveAllToCart = () => {
    if (!wishlist.length) return;
    wishlist.forEach((item) => {
      if (onAddToCart) onAddToCart(item);
    });
    setModalDetails({
      Action: "All Wishlist Items Moved to Bag",
      Count: wishlist.length,
      Message: "Your wishlist items have been transferred to your shopping bag."
    });
  };

  return (
    <div className="space-y-6 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'Fashion', to: '/pages/ecom/fashion' },
          { label: 'My Saved Wishlist', to: '/wishlist', isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-base-300 pb-4">
          <div>
            <span className="badge badge-secondary badge-outline text-xs font-bold uppercase gap-1">
              <LuHeart className="fill-secondary text-secondary" /> Saved Items
            </span>
            <h1 className="text-3xl font-black text-base-content mt-1">My Saved Wishlist</h1>
            <p className="text-xs sm:text-sm text-base-content/70 mt-1">
              Review your favorite garments, check sizing availability, and move to your shopping bag.
            </p>
          </div>

          {wishlist.length > 0 && (
            <div className="flex items-center gap-3">
              <button
                onClick={handleMoveAllToCart}
                className="btn btn-primary btn-sm font-bold gap-2 shadow-xs"
              >
                <LuShoppingBag className="text-sm" />
                <span>Move All to Bag ({wishlist.length})</span>
              </button>
            </div>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="card bg-base-100 border border-base-300 p-12 text-center rounded-3xl space-y-4 max-w-lg mx-auto shadow-xs">
            <div className="w-16 h-16 rounded-full bg-base-200 text-base-content/40 flex items-center justify-center mx-auto text-2xl">
              <LuHeart />
            </div>
            <h3 className="text-xl font-bold text-base-content">Your Wishlist is Empty</h3>
            <p className="text-xs text-base-content/70 leading-relaxed">
              Explore our capsule collections, Italian tailoring, and footwear to save pieces for later.
            </p>
            <div>
              <button
                onClick={() => onNavigate && onNavigate('products')}
                className="btn btn-primary btn-sm font-bold gap-2"
              >
                <span>Browse Full Collection</span>
                <LuArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <figure className="relative h-56 bg-base-200 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80';
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge badge-primary badge-sm font-bold text-[10px]">
                        {item.category}
                      </span>
                    </div>
                    <button
                      onClick={() => onRemoveFromWishlist && onRemoveFromWishlist(item.id)}
                      title="Remove from Wishlist"
                      className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 hover:bg-base-100 shadow-md text-error"
                    >
                      <LuTrash2 className="text-xs" />
                    </button>
                  </figure>

                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-base text-base-content line-clamp-1">{item.title}</h3>
                    <p className="text-xs text-base-content/70 line-clamp-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-base-200 mt-2 space-y-3">
                  <div className="flex items-baseline justify-between pt-2">
                    <span className="text-base font-black text-primary font-mono">${item.price}</span>
                    <span className="text-[11px] text-success font-semibold">In Stock</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onAddToCart && onAddToCart(item)}
                      className="btn btn-outline btn-xs font-bold gap-1"
                    >
                      <LuShoppingBag className="text-xs" />
                      <span>Add to Bag</span>
                    </button>
                    <button
                      onClick={() => {
                        if (onBuyNow) onBuyNow(item);
                        else if (onAddToCart) onAddToCart(item);
                      }}
                      className="btn btn-primary btn-xs font-bold gap-1 shadow-xs"
                    >
                      <LuZap className="text-xs" />
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <PopupModal
        isOpen={Boolean(modalDetails)}
        onClose={() => setModalDetails(null)}
        title={modalDetails?.Action || "Wishlist Updated"}
        type="success"
      >
        <p>{modalDetails?.Message}</p>
      </PopupModal>
    </div>
  );
}
