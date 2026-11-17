import React from 'react';
import { LuX, LuTrash2, LuShoppingBag, LuArrowRight } from 'react-icons/lu';

export default function TechCartDrawer({ isOpen, onClose, cart = [], onUpdateQty, onCheckout }) {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-neutral/50 backdrop-blur-xs transition-opacity" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-base-100 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-4 border-b border-base-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LuShoppingBag className="text-primary text-lg" />
              <h3 className="font-bold text-base text-base-content">Your Shopping Cart ({cart.length})</h3>
            </div>
            <button onClick={onClose} className="btn btn-ghost btn-circle btn-sm">
              <LuX />
            </button>
          </div>

          {/* Items */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3">
            {cart.length === 0 ? (
              <div className="text-center py-12 space-y-3 text-base-content/60 text-xs">
                <LuShoppingBag className="text-4xl mx-auto opacity-30" />
                <p>Your shopping cart is currently empty.</p>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-base-200/50 rounded-xl border border-base-300">
                  <img src={item.image} alt={item.title} className="w-14 h-14 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs truncate text-base-content">{item.title}</h4>
                    <div className="text-xs text-primary font-black font-mono">$${item.price}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => onUpdateQty && onUpdateQty(item.id, (item.quantity || 1) - 1)}
                        className="btn btn-ghost btn-xs px-1.5"
                      >-</button>
                      <span className="text-xs font-bold">{item.quantity || 1}</span>
                      <button
                        onClick={() => onUpdateQty && onUpdateQty(item.id, (item.quantity || 1) + 1)}
                        className="btn btn-ghost btn-xs px-1.5"
                      >+</button>
                    </div>
                  </div>
                  <button
                    onClick={() => onUpdateQty && onUpdateQty(item.id, 0)}
                    className="btn btn-ghost btn-xs text-error"
                    aria-label="Remove item"
                  >
                    <LuTrash2 />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal */}
          <div className="p-4 border-t border-base-200 space-y-3 bg-base-100">
            <div className="flex justify-between items-center text-sm font-bold">
              <span>Subtotal:</span>
              <span className="text-primary font-mono text-base">$${total.toLocaleString()}</span>
            </div>
            <button
              disabled={cart.length === 0}
              onClick={onCheckout}
              className="btn btn-primary w-full btn-sm font-bold gap-2 shadow-xs"
            >
              <span>Proceed to Checkout</span>
              <LuArrowRight />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
