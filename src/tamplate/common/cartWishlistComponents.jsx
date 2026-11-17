import React from 'react';
import { LuShoppingCart, LuHeart, LuTrash2, LuPlus, LuMinus, LuArrowRight, LuShoppingBag, LuX } from 'react-icons/lu';
import { useCartWishlist } from './useCartWishlist.jsx';

/**
 * Drop-in Add to Cart Button
 * Usage:
 *   <AddToCartButton item={product} />
 */
export function AddToCartButton({ item, quantity = 1, className = '', children }) {
  const { addToCart } = useCartWishlist();

  return (
    <button
      type="button"
      onClick={() => addToCart(item, quantity)}
      className={`btn btn-primary btn-sm rounded-xl gap-2 font-bold shadow-xs hover:shadow-md transition-all ${className}`}
    >
      <LuShoppingCart className="text-base" />
      <span>{children || 'Add to Cart'}</span>
    </button>
  );
}

/**
 * Drop-in Wishlist Toggle Button
 * Automatically highlights when item is saved in wishlist.
 * Usage:
 *   <WishlistButton item={product} />
 */
export function WishlistButton({ item, className = '', showLabel = false }) {
  const { toggleWishlist, isInWishlist } = useCartWishlist();
  const active = isInWishlist(item?.id);

  return (
    <button
      type="button"
      onClick={() => toggleWishlist(item)}
      aria-label={active ? 'Remove from wishlist' : 'Add to wishlist'}
      className={`btn btn-circle btn-sm transition-all duration-200 ${
        active 
          ? 'btn-secondary text-secondary-content shadow-sm' 
          : 'btn-ghost bg-base-100/80 backdrop-blur-xs text-base-content hover:bg-secondary/20 hover:text-secondary'
      } ${className}`}
    >
      <LuHeart className={`text-base ${active ? 'fill-current' : ''}`} />
      {showLabel && <span className="ml-1 text-xs">{active ? 'Saved' : 'Save'}</span>}
    </button>
  );
}

/**
 * Drop-in Cart Badge with item counter
 * Usage:
 *   <CartBadge to="/cart" onClick={...} />
 */
export function CartBadge({ onClick, className = '' }) {
  const { cartCount } = useCartWishlist();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-ghost btn-circle btn-sm relative ${className}`}
      aria-label="View shopping cart"
    >
      <LuShoppingCart className="text-lg" />
      {cartCount > 0 && (
        <span className="badge badge-primary badge-xs absolute -top-1 -right-1 font-extrabold px-1.5 py-2 shadow-xs">
          {cartCount > 99 ? '99+' : cartCount}
        </span>
      )}
    </button>
  );
}

/**
 * Drop-in Wishlist Badge with item counter
 * Usage:
 *   <WishlistBadge onClick={...} />
 */
export function WishlistBadge({ onClick, className = '' }) {
  const { wishlistCount } = useCartWishlist();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-ghost btn-circle btn-sm relative ${className}`}
      aria-label="View wishlist"
    >
      <LuHeart className="text-lg" />
      {wishlistCount > 0 && (
        <span className="badge badge-secondary badge-xs absolute -top-1 -right-1 font-extrabold px-1.5 py-2 shadow-xs">
          {wishlistCount > 99 ? '99+' : wishlistCount}
        </span>
      )}
    </button>
  );
}

/**
 * Drop-in Slide-out Cart Drawer
 * Works with daisyUI drawer or fixed backdrop.
 * Usage:
 *   <CartDrawer isOpen={open} onClose={() => setOpen(false)} onCheckout={...} />
 */
export function CartDrawer({ isOpen, onClose, onCheckout }) {
  const { cart, updateCartQty, removeFromCart, cartSubtotal, cartCount } = useCartWishlist();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      <div 
        className="absolute inset-0 bg-neutral/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-base-100 shadow-2xl flex flex-col border-l border-base-300">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-base-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LuShoppingBag className="text-xl text-primary" />
              <h2 className="text-lg font-black text-base-content">Shopping Cart</h2>
              <span className="badge badge-primary badge-sm font-bold">{cartCount} items</span>
            </div>
            <button 
              type="button" 
              onClick={onClose} 
              className="btn btn-ghost btn-circle btn-sm"
              aria-label="Close cart"
            >
              <LuX className="text-lg" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-base-200 text-base-content/40 flex items-center justify-center text-2xl">
                  <LuShoppingCart />
                </div>
                <div className="font-bold text-base-content">Your cart is empty</div>
                <p className="text-xs text-base-content/60 max-w-xs">
                  Browse products and click Add to Cart to see them here.
                </p>
              </div>
            ) : (
              cart.map((item) => {
                const qty = Number(item.quantity) || 1;
                const price = Number(item.price) || 0;
                return (
                  <div 
                    key={item.id} 
                    className="flex gap-4 p-3 rounded-2xl bg-base-200/50 border border-base-300 hover:border-primary/30 transition-colors"
                  >
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.title || item.name} 
                        className="w-16 h-16 object-cover rounded-xl bg-base-300 shrink-0" 
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm text-base-content truncate">
                        {item.title || item.name}
                      </div>
                      <div className="text-xs font-semibold text-primary mt-0.5">
                        ${price.toFixed(2)}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="join join-horizontal border border-base-300 rounded-lg bg-base-100">
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, qty - 1)}
                            className="btn btn-ghost btn-xs join-item px-2"
                            aria-label="Decrease quantity"
                          >
                            <LuMinus className="text-[10px]" />
                          </button>
                          <span className="join-item px-2.5 text-xs font-bold flex items-center justify-center">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, qty + 1)}
                            className="btn btn-ghost btn-xs join-item px-2"
                            aria-label="Increase quantity"
                          >
                            <LuPlus className="text-[10px]" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="btn btn-ghost btn-xs text-error hover:bg-error/10 gap-1 rounded-lg"
                        >
                          <LuTrash2 className="text-xs" />
                          <span className="text-[11px]">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-base-200 bg-base-200/30 space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-base-content/70">Subtotal</span>
                <span className="text-base font-black text-base-content">${cartSubtotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-base-content/60">
                Taxes and shipping calculated at checkout.
              </p>
              <button
                type="button"
                onClick={() => {
                  if (typeof onCheckout === 'function') {
                    onCheckout();
                  } else {
                    window.location.href = '/cart';
                  }
                }}
                className="btn btn-primary w-full rounded-xl font-bold shadow-md gap-2"
              >
                <span>Proceed to Checkout</span>
                <LuArrowRight />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default {
  AddToCartButton,
  WishlistButton,
  CartBadge,
  WishlistBadge,
  CartDrawer
};
