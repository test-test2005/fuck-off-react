import React, { useState } from 'react';
import Breadcrumbs from './breadcrumbs.jsx';
import PopupModal from './popupModal.jsx';
import { LuShoppingBag, LuTrash2, LuArrowRight, LuUtensils } from 'react-icons/lu';

export default function FoodCartPage({
  cart = [],
  onUpdateCartQty,
  onRemoveFromCart,
  onNavigate
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1), 0);
  const serviceCharge = Math.round(subtotal * 0.1);
  const total = subtotal + serviceCharge;

  return (
    <div className="space-y-6 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'Restaurant', to: '/pages/ecom/food' },
          { label: 'Dining Order & Checkout', to: '/cart', isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="border-b border-base-300 pb-4">
          <span className="badge badge-primary badge-outline text-xs font-bold uppercase gap-1">
            <LuUtensils className="text-xs" /> Dining Kitchen Order
          </span>
          <h1 className="text-3xl font-black text-base-content mt-1">Your Dining Order</h1>
          <p className="text-xs sm:text-sm text-base-content/70 mt-1">
            Freshly prepped artisan cuisine dispatched straight to your table or doorstep.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="card bg-base-100 border border-base-300 p-12 text-center rounded-3xl space-y-4 max-w-lg mx-auto shadow-xs">
            <div className="w-16 h-16 rounded-full bg-base-200 text-base-content/40 flex items-center justify-center mx-auto text-2xl">
              <LuShoppingBag />
            </div>
            <h3 className="text-xl font-bold text-base-content">Your Order is Empty</h3>
            <p className="text-xs text-base-content/70">
              Browse our chef specials and fresh pasta to add items to your dining ticket.
            </p>
            <div>
              <button
                onClick={() => onNavigate && onNavigate('foods')}
                className="btn btn-primary btn-sm font-bold gap-2"
              >
                <span>View Full Menu</span>
                <LuArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="card bg-base-100 border border-base-300 p-4 rounded-2xl flex flex-row items-center gap-4 shadow-xs"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-xl bg-base-200 shrink-0"
                  />
                  <div className="flex-1 space-y-1">
                    <span className="badge badge-primary badge-xs text-[10px] font-bold">{item.category}</span>
                    <h4 className="font-bold text-sm text-base-content">{item.title}</h4>
                    <div className="text-sm font-black text-primary font-mono">${item.price}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="join border border-base-300 rounded-xl">
                      <button
                        onClick={() => onUpdateCartQty && onUpdateCartQty(item.id, (item.quantity || 1) - 1)}
                        className="btn btn-xs join-item"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-xs font-bold join-item flex items-center justify-center">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => onUpdateCartQty && onUpdateCartQty(item.id, (item.quantity || 1) + 1)}
                        className="btn btn-xs join-item"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveFromCart && onRemoveFromCart(item.id)}
                      className="btn btn-ghost btn-xs text-error btn-circle"
                      title="Remove item"
                    >
                      <LuTrash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="card bg-base-100 border border-base-300 p-6 rounded-3xl space-y-4 h-fit shadow-xs">
              <h3 className="font-bold text-base text-base-content">Order Breakdown</h3>
              <div className="space-y-2 text-xs text-base-content/80">
                <div className="flex justify-between">
                  <span>Food Subtotal</span>
                  <span className="font-mono font-bold">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service & Kitchen (10%)</span>
                  <span className="font-mono">${serviceCharge}</span>
                </div>
                <div className="border-t border-base-200 pt-3 flex justify-between text-base font-black text-base-content">
                  <span>Total</span>
                  <span className="font-mono text-primary">${total}</span>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="btn btn-primary btn-md w-full font-bold shadow-md shadow-primary/20 gap-2"
              >
                <span>Send Order to Kitchen</span>
                <LuArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>

      <PopupModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Kitchen Order Confirmed"
        type="success"
      >
        <p>Your dining order has been transmitted to the executive chef. Estimated table service time is 20 minutes.</p>
      </PopupModal>
    </div>
  );
}
