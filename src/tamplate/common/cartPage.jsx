import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { DOMAINS } from '../../data/domainData.js';
import Breadcrumbs from './breadcrumbs.jsx';
import PopupModal from './popupModal.jsx';
import { LuShoppingCart, LuArrowRight, LuShieldCheck, LuTruck, LuTrash2, LuShoppingBag } from 'react-icons/lu';

/**
 * Dedicated Shopping Cart & Checkout Page
 * Linked from the Shopping Cart indicator in the navbar and HeaderTop
 */
export default function CartPage() {
  const outlet = useOutletContext() || {};
  const data = outlet.currentData || outlet.currentJob || DOMAINS.tech;
  const cart = outlet.cart || [];
  const onUpdateCartQty = outlet.onUpdateCartQty;
  const onRemoveFromCart = outlet.onRemoveFromCart;

  const [modalDetails, setModalDetails] = useState(null);

  const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1), 0);
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 15;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setModalDetails({
      OrderRef: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
      TotalPaid: `$${total.toLocaleString()}`,
      ItemsCount: cart.reduce((sum, item) => sum + (item.quantity || 1), 0),
      Delivery: "Express Courier Dispatch (1-2 Business Days)",
      Status: "Paid & Order Confirmed"
    });
  };

  return (
    <div className="space-y-8 pb-14">
      <Breadcrumbs
        items={[{ label: "Shopping Cart & Checkout", active: true }]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-base-300 pb-4">
          <div>
            <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Order Basket</span>
            <h1 className="text-3xl font-black text-base-content mt-1">Your Shopping Cart</h1>
            <p className="text-xs text-base-content/70 mt-1">
              Review your items, update quantities, or proceed to express checkout.
            </p>
          </div>
          <Link to="/products" className="btn btn-outline btn-sm rounded-xl gap-1">
            <LuShoppingBag />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="card bg-base-100 border border-base-300 rounded-3xl p-12 text-center space-y-4 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-3xl">
              <LuShoppingCart />
            </div>
            <h3 className="text-xl font-bold text-base-content">Your shopping cart is empty</h3>
            <p className="text-xs text-base-content/60 max-w-sm mx-auto">
              You haven't added any products to your cart yet. Explore our catalogs and click "Add to Cart" or "Buy Now".
            </p>
            <div className="pt-2">
              <Link to="/products" className="btn btn-primary btn-sm rounded-xl font-bold gap-2 shadow-xs">
                <span>Browse Hardware Catalog</span>
                <LuArrowRight />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Cart Table (8 cols) */}
            <div className="lg:col-span-8 bg-base-100 border border-base-300 rounded-3xl p-6 shadow-sm overflow-x-auto space-y-4">
              <table className="table w-full text-xs">
                <thead>
                  <tr className="border-b border-base-300 text-base-content/60">
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, idx) => (
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
                      <td className="font-mono font-semibold">${item.price}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onUpdateCartQty && onUpdateCartQty(item.id, (item.quantity || 1) - 1)}
                            className="btn btn-xs btn-circle btn-ghost bg-base-200 hover:bg-base-300"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="font-bold font-mono px-1 text-xs">
                            {item.quantity || 1}
                          </span>
                          <button
                            onClick={() => onUpdateCartQty && onUpdateCartQty(item.id, (item.quantity || 1) + 1)}
                            className="btn btn-xs btn-circle btn-ghost bg-base-200 hover:bg-base-300"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="font-mono font-bold text-primary">
                        ${(Number(item.price) || 0) * (item.quantity || 1)}
                      </td>
                      <td className="text-right">
                        <button
                          onClick={() => onRemoveFromCart && onRemoveFromCart(item.id)}
                          className="btn btn-ghost btn-xs text-error hover:bg-error/10"
                          title="Remove item"
                          aria-label="Remove item"
                        >
                          <LuTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-between items-center text-xs text-base-content/60 pt-2 border-t border-base-200">
                <span>Items in Cart: <strong className="text-base-content">{cart.reduce((s, i) => s + (i.quantity || 1), 0)}</strong></span>
                <Link to="/products" className="text-primary hover:underline font-semibold">
                  + Add more items
                </Link>
              </div>
            </div>

            {/* Checkout Summary (4 cols) */}
            <div className="lg:col-span-4 bg-base-100 border border-base-300 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="font-extrabold text-base text-base-content border-b border-base-300 pb-2">
                Order Summary
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-base-content/70">
                  <span>Subtotal</span>
                  <span className="font-mono font-bold">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base-content/70">
                  <span>Shipping & Handling</span>
                  <span className="font-mono font-bold text-success">
                    {shipping === 0 ? "FREE (Orders over $150)" : `$${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black text-base-content pt-3 border-t border-base-300">
                  <span>Total Amount</span>
                  <span className="font-mono text-primary text-xl">${total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="btn btn-primary btn-block btn-md rounded-xl font-bold shadow-lg shadow-primary/20 gap-2 mt-2"
              >
                <span>Proceed to Checkout</span>
                <LuArrowRight />
              </button>

              <div className="pt-2 text-[11px] text-base-content/60 space-y-1.5 border-t border-base-200">
                <div className="flex items-center gap-1.5">
                  <LuTruck className="text-primary" /> Free worldwide shipping over $150
                </div>
                <div className="flex items-center gap-1.5">
                  <LuShieldCheck className="text-success" /> 2-Year Official Hardware Warranty
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      <PopupModal
        isOpen={!!modalDetails}
        onClose={() => setModalDetails(null)}
        title="Order Placed Successfully"
        message="Thank you for shopping with us! Your order receipt has been processed."
        details={modalDetails || {}}
      />
    </div>
  );
}
