import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import Breadcrumbs from '../../../common/breadcrumbs.jsx';
import PopupModal from '../../../common/popupModal.jsx';
import { LuHeart, LuShoppingCart, LuTrash2, LuArrowRight, LuShoppingBag, LuZap } from 'react-icons/lu';

/**
 * Dedicated Wishlist Page
 * Linked from the Wishlist indicator in HeaderTop & Nav
 * Shows all user-saved wishlist items with Add to Cart and Buy Now actions
 */
export default function WishlistPage() {
  const outlet = useOutletContext() || {};
  const wishlist = outlet.wishlist || [];
  const onRemoveFromWishlist = outlet.onRemoveFromWishlist;
  const onAddToCart = outlet.onAddToCart;
  const onBuyNow = outlet.onBuyNow;

  const [modalDetails, setModalDetails] = useState(null);

  const handleMoveAllToCart = () => {
    if (!wishlist.length) return;
    wishlist.forEach((item) => {
      if (onAddToCart) onAddToCart(item);
    });
    setModalDetails({
      ItemsCount: wishlist.length,
      Action: "All Wishlist Items Moved to Cart",
      Status: "Added Successfully",
      TotalEstimate: `$${wishlist.reduce((sum, it) => sum + (Number(it.price) || 0), 0).toLocaleString()}`
    });
  };

  return (
    <div className="space-y-8 pb-14">
      <Breadcrumbs
        items={[{ label: "My Saved Wishlist", active: true }]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-6">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-base-300 pb-4">
          <div>
            <span className="badge badge-secondary badge-outline text-xs font-bold uppercase gap-1">
              <LuHeart className="fill-secondary text-secondary" /> Saved Wishlist
            </span>
            <h1 className="text-3xl font-black text-base-content mt-1">My Wishlist</h1>
            <p className="text-xs text-base-content/70 mt-1">
              Manage your saved devices and products. Add them to cart or buy now directly.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/products" className="btn btn-outline btn-sm rounded-xl gap-1">
              <LuShoppingBag />
              <span>Browse Catalog</span>
            </Link>
            {wishlist.length > 0 && (
              <button
                onClick={handleMoveAllToCart}
                className="btn btn-primary btn-sm rounded-xl font-bold gap-1 shadow-sm"
              >
                <LuShoppingCart />
                <span>Move All to Cart</span>
              </button>
            )}
          </div>
        </div>

        {wishlist.length === 0 ? (
          <div className="card bg-base-100 border border-base-300 rounded-3xl p-12 text-center space-y-4 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto text-2xl">
              <LuHeart />
            </div>
            <h3 className="text-lg font-bold text-base-content">Your wishlist is empty</h3>
            <p className="text-xs text-base-content/60 max-w-sm mx-auto">
              Explore our tech, food, and fashion catalogs and click the heart icon on any product to save it here.
            </p>
            <div className="pt-2">
              <Link to="/products" className="btn btn-primary btn-sm rounded-xl font-bold gap-2 shadow-xs">
                <span>Browse Products</span>
                <LuArrowRight />
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-base-100 border border-base-300 rounded-3xl p-6 shadow-sm overflow-x-auto space-y-4">
            <table className="table w-full text-xs">
              <thead>
                <tr className="border-b border-base-300 text-base-content/60">
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Availability</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((item, idx) => (
                  <tr key={idx} className="border-b border-base-300/40 hover:bg-base-200/30">
                    <td>
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-14 h-14 rounded-xl object-cover bg-base-200 shrink-0 border border-base-300"
                        />
                        <div>
                          <div className="font-bold text-base-content line-clamp-1">{item.title}</div>
                          <div className="text-[11px] text-base-content/50 uppercase">{item.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="font-mono font-bold text-base text-base-content">
                      ${item.price}
                    </td>
                    <td>
                      <span className="badge badge-success badge-sm font-bold text-white text-[10px]">
                        In Stock
                      </span>
                    </td>
                    <td className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onAddToCart && onAddToCart(item)}
                          className="btn btn-primary btn-xs font-bold gap-1 shadow-xs"
                          title="Add to Cart"
                        >
                          <LuShoppingCart className="text-xs" />
                          <span>Add to Cart</span>
                        </button>

                        <button
                          onClick={() => onBuyNow && onBuyNow(item)}
                          className="btn btn-secondary btn-xs font-bold gap-1 shadow-xs"
                          title="Buy Now"
                        >
                          <LuZap className="text-xs" />
                          <span>Buy Now</span>
                        </button>

                        <button
                          onClick={() => onRemoveFromWishlist && onRemoveFromWishlist(item.id)}
                          className="btn btn-ghost btn-xs text-error hover:bg-error/10"
                          title="Remove from Wishlist"
                          aria-label="Remove from Wishlist"
                        >
                          <LuTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center text-xs text-base-content/60 pt-3 border-t border-base-200">
              <span>Saved Items: <strong className="text-base-content">{wishlist.length}</strong></span>
              <div className="flex gap-2">
                <Link to="/cart" className="text-primary hover:underline font-semibold flex items-center gap-1">
                  <LuShoppingCart /> View Shopping Cart
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>

      <PopupModal
        isOpen={!!modalDetails}
        onClose={() => setModalDetails(null)}
        title="Items Moved to Cart"
        message="All saved items from your wishlist have been transferred to your active shopping cart."
        details={modalDetails || {}}
      />
    </div>
  );
}
