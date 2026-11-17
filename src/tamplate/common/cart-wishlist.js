/**
 * Standalone Drop-in Cart & Wishlist JavaScript Engine
 * Zero dependencies. Drop into any HTML or React project.
 * 
 * Usage 1 (Declarative HTML):
 *   Add <script src="cart-wishlist.js"></script>
 *   Add to Cart Button:
 *     <button data-add-to-cart='{"id":1,"title":"Cool Headphones","price":99,"image":"..."}'>
 *       Add to Cart
 *     </button>
 *   Wishlist Button:
 *     <button data-toggle-wishlist='{"id":1,"title":"Cool Headphones","price":99}'>
 *       Save Wishlist
 *     </button>
 *   Counters:
 *     <span data-cart-count>0</span>
 *     <span data-wishlist-count>0</span>
 *     <span data-cart-total>$0.00</span>
 * 
 * Usage 2 (JavaScript API):
 *   CartWishlist.addToCart({ id: 1, title: "Product", price: 50 });
 *   CartWishlist.toggleWishlist({ id: 1, title: "Product", price: 50 });
 *   CartWishlist.getCart();
 *   CartWishlist.getWishlist();
 *   CartWishlist.on('change', (state) => console.log(state));
 */

(function (window, document) {
  'use strict';

  var STORAGE_CART_KEY = 'app_cart';
  var STORAGE_WISHLIST_KEY = 'app_wishlist';

  function readJSON(key) {
    try {
      var item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (e) {
      return [];
    }
  }

  function writeJSON(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {}
  }

  var cart = readJSON(STORAGE_CART_KEY);
  var wishlist = readJSON(STORAGE_WISHLIST_KEY);
  var listeners = [];

  // Show modern notification toast without external styles
  function showToast(message, type) {
    var toastContainer = document.getElementById('cart-wishlist-toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'cart-wishlist-toast-container';
      toastContainer.style.position = 'fixed';
      toastContainer.style.bottom = '20px';
      toastContainer.style.right = '20px';
      toastContainer.style.zIndex = '999999';
      toastContainer.style.display = 'flex';
      toastContainer.style.flexDirection = 'column';
      toastContainer.style.gap = '8px';
      toastContainer.style.pointerEvents = 'none';
      document.body.appendChild(toastContainer);
    }

    var toast = document.createElement('div');
    var isSuccess = type === 'success';
    toast.style.padding = '10px 16px';
    toast.style.borderRadius = '12px';
    toast.style.fontSize = '13px';
    toast.style.fontWeight = '600';
    toast.style.fontFamily = 'system-ui, -apple-system, sans-serif';
    toast.style.color = '#ffffff';
    toast.style.backgroundColor = isSuccess ? '#059669' : '#0284c7';
    toast.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
    toast.style.transition = 'all 0.25s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.textContent = message;

    toastContainer.appendChild(toast);

    requestAnimationFrame(function () {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });

    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(function () {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 2500);
  }

  function emitChange() {
    writeJSON(STORAGE_CART_KEY, cart);
    writeJSON(STORAGE_WISHLIST_KEY, wishlist);
    updateDOM();

    var state = {
      cart: cart,
      wishlist: wishlist,
      cartCount: CartWishlist.getCartCount(),
      wishlistCount: CartWishlist.getWishlistCount(),
      cartTotal: CartWishlist.getCartTotal()
    };

    listeners.forEach(function (fn) {
      try {
        fn(state);
      } catch (e) {}
    });

    try {
      window.dispatchEvent(new CustomEvent('cartWishlistChange', { detail: state }));
    } catch (e) {}
  }

  // Sync DOM elements with data-cart-count, data-wishlist-count, data-cart-total
  function updateDOM() {
    var cartCount = CartWishlist.getCartCount();
    var wishlistCount = CartWishlist.getWishlistCount();
    var cartTotal = CartWishlist.getCartTotal();

    document.querySelectorAll('[data-cart-count]').forEach(function (el) {
      el.textContent = cartCount;
    });

    document.querySelectorAll('[data-wishlist-count]').forEach(function (el) {
      el.textContent = wishlistCount;
    });

    document.querySelectorAll('[data-cart-total]').forEach(function (el) {
      el.textContent = '$' + cartTotal.toFixed(2);
    });

    // Update active state on wishlist buttons
    document.querySelectorAll('[data-toggle-wishlist]').forEach(function (btn) {
      try {
        var raw = btn.getAttribute('data-toggle-wishlist');
        var item = JSON.parse(raw);
        var active = CartWishlist.isInWishlist(item.id);
        if (active) {
          btn.classList.add('in-wishlist', 'btn-secondary');
          btn.setAttribute('aria-pressed', 'true');
        } else {
          btn.classList.remove('in-wishlist', 'btn-secondary');
          btn.setAttribute('aria-pressed', 'false');
        }
      } catch (e) {}
    });

    // Render automatic cart container if present
    var cartContainers = document.querySelectorAll('[data-cart-container]');
    cartContainers.forEach(function (container) {
      renderCartTable(container);
    });

    // Render automatic wishlist container if present
    var wishlistContainers = document.querySelectorAll('[data-wishlist-container]');
    wishlistContainers.forEach(function (container) {
      renderWishlistGrid(container);
    });
  }

  function renderCartTable(container) {
    if (cart.length === 0) {
      container.innerHTML = '<div style="padding: 30px; text-align: center; color: #888;">Your cart is currently empty.</div>';
      return;
    }

    var html = '<table style="width: 100%; border-collapse: collapse; font-family: inherit;">';
    html += '<thead><tr style="border-bottom: 2px solid #ddd; text-align: left; font-size: 13px;">';
    html += '<th style="padding: 10px;">Item</th>';
    html += '<th style="padding: 10px;">Price</th>';
    html += '<th style="padding: 10px;">Qty</th>';
    html += '<th style="padding: 10px;">Total</th>';
    html += '<th style="padding: 10px;">Action</th>';
    html += '</tr></thead><tbody>';

    cart.forEach(function (item) {
      var itemTotal = (Number(item.price) || 0) * (Number(item.quantity) || 1);
      html += '<tr style="border-bottom: 1px solid #eee; font-size: 14px;">';
      html += '<td style="padding: 12px; display: flex; align-items: center; gap: 10px;">';
      if (item.image) {
        html += '<img src="' + item.image + '" style="width: 44px; height: 44px; object-fit: cover; border-radius: 8px;" />';
      }
      html += '<strong>' + (item.title || item.name || 'Product') + '</strong></td>';
      html += '<td style="padding: 12px;">$' + (Number(item.price) || 0).toFixed(2) + '</td>';
      html += '<td style="padding: 12px;">';
      html += '<button onclick="CartWishlist.updateCartQty(' + item.id + ', ' + ((item.quantity || 1) - 1) + ')" style="padding: 2px 8px; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; background: #fff;">-</button> ';
      html += '<span style="padding: 0 6px; font-weight: bold;">' + (item.quantity || 1) + '</span> ';
      html += '<button onclick="CartWishlist.updateCartQty(' + item.id + ', ' + ((item.quantity || 1) + 1) + ')" style="padding: 2px 8px; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; background: #fff;">+</button>';
      html += '</td>';
      html += '<td style="padding: 12px; font-weight: bold;">$' + itemTotal.toFixed(2) + '</td>';
      html += '<td style="padding: 12px;"><button onclick="CartWishlist.removeFromCart(' + item.id + ')" style="padding: 4px 8px; color: #dc2626; background: transparent; border: 1px solid #fca5a5; border-radius: 6px; cursor: pointer; font-size: 12px;">Remove</button></td>';
      html += '</tr>';
    });

    html += '</tbody></table>';
    html += '<div style="margin-top: 15px; text-align: right; font-size: 16px; font-weight: bold;">Total: $' + CartWishlist.getCartTotal().toFixed(2) + '</div>';

    container.innerHTML = html;
  }

  function renderWishlistGrid(container) {
    if (wishlist.length === 0) {
      container.innerHTML = '<div style="padding: 30px; text-align: center; color: #888;">Your wishlist is empty.</div>';
      return;
    }

    var html = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px;">';
    wishlist.forEach(function (item) {
      html += '<div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px; text-align: center;">';
      if (item.image) {
        html += '<img src="' + item.image + '" style="width: 100%; height: 140px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;" />';
      }
      html += '<div style="font-weight: bold; font-size: 14px; margin-bottom: 4px;">' + (item.title || item.name || 'Product') + '</div>';
      html += '<div style="color: #059669; font-weight: bold; margin-bottom: 12px;">$' + (Number(item.price) || 0).toFixed(2) + '</div>';
      html += '<div style="display: flex; gap: 6px; justify-content: center;">';
      html += '<button onclick=\'CartWishlist.addToCart(' + JSON.stringify(item) + ')\' style="padding: 6px 12px; background: #2563eb; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;">Add to Cart</button>';
      html += '<button onclick="CartWishlist.removeFromWishlist(' + item.id + ')" style="padding: 6px 10px; background: transparent; border: 1px solid #ccc; border-radius: 6px; cursor: pointer; font-size: 12px;">Remove</button>';
      html += '</div></div>';
    });
    html += '</div>';

    container.innerHTML = html;
  }

  // Delegated click handler for declarative elements
  document.addEventListener('click', function (e) {
    // Check for [data-add-to-cart]
    var addBtn = e.target.closest('[data-add-to-cart]');
    if (addBtn) {
      try {
        var rawItem = addBtn.getAttribute('data-add-to-cart');
        var itemData = JSON.parse(rawItem);
        var qty = Number(addBtn.getAttribute('data-qty')) || 1;
        CartWishlist.addToCart(itemData, qty);
      } catch (err) {
        console.error('Invalid JSON in data-add-to-cart attribute', err);
      }
      return;
    }

    // Check for [data-toggle-wishlist]
    var wishBtn = e.target.closest('[data-toggle-wishlist]');
    if (wishBtn) {
      try {
        var rawWishItem = wishBtn.getAttribute('data-toggle-wishlist');
        var wishItemData = JSON.parse(rawWishItem);
        CartWishlist.toggleWishlist(wishItemData);
      } catch (err) {
        console.error('Invalid JSON in data-toggle-wishlist attribute', err);
      }
      return;
    }

    // Check for [data-buy-now]
    var buyBtn = e.target.closest('[data-buy-now]');
    if (buyBtn) {
      try {
        var rawBuyItem = buyBtn.getAttribute('data-buy-now');
        var buyItemData = JSON.parse(rawBuyItem);
        CartWishlist.addToCart(buyItemData, 1);
        var targetUrl = buyBtn.getAttribute('data-redirect') || '/cart';
        window.location.href = targetUrl;
      } catch (err) {
        console.error('Invalid JSON in data-buy-now attribute', err);
      }
      return;
    }
  });

  // Cross-tab storage synchronization
  window.addEventListener('storage', function (e) {
    if (e.key === STORAGE_CART_KEY) {
      cart = readJSON(STORAGE_CART_KEY);
      emitChange();
    }
    if (e.key === STORAGE_WISHLIST_KEY) {
      wishlist = readJSON(STORAGE_WISHLIST_KEY);
      emitChange();
    }
  });

  // Public Cart & Wishlist API
  var CartWishlist = {
    // Cart operations
    addToCart: function (item, qty, notify) {
      if (!item) return;
      var quantity = Math.max(1, Number(qty) || 1);
      var idx = cart.findIndex(function (i) { return i.id === item.id; });
      if (idx > -1) {
        cart[idx].quantity = (Number(cart[idx].quantity) || 1) + quantity;
      } else {
        cart.push(Object.assign({}, item, { quantity: quantity }));
      }
      if (notify !== false) {
        showToast('Added to cart: ' + (item.title || item.name || 'Item'), 'success');
      }
      emitChange();
    },

    updateCartQty: function (id, qty) {
      var nextQty = Number(qty);
      if (isNaN(nextQty) || nextQty <= 0) {
        cart = cart.filter(function (i) { return i.id !== id; });
      } else {
        cart = cart.map(function (i) {
          if (i.id === id) return Object.assign({}, i, { quantity: nextQty });
          return i;
        });
      }
      emitChange();
    },

    removeFromCart: function (id, notify) {
      var target = cart.find(function (i) { return i.id === id; });
      cart = cart.filter(function (i) { return i.id !== id; });
      if (notify !== false && target) {
        showToast('Removed from cart: ' + (target.title || target.name || 'Item'), 'info');
      }
      emitChange();
    },

    clearCart: function (notify) {
      cart = [];
      if (notify !== false) {
        showToast('Cart cleared', 'info');
      }
      emitChange();
    },

    getCart: function () {
      return cart.slice();
    },

    getCartCount: function () {
      return cart.reduce(function (sum, item) {
        return sum + (Number(item.quantity) || 1);
      }, 0);
    },

    getCartTotal: function () {
      return cart.reduce(function (sum, item) {
        return sum + (Number(item.price) || 0) * (Number(item.quantity) || 1);
      }, 0);
    },

    // Wishlist operations
    isInWishlist: function (id) {
      return wishlist.some(function (i) { return i.id === id; });
    },

    toggleWishlist: function (item, notify) {
      if (!item) return;
      var exists = wishlist.some(function (i) { return i.id === item.id; });
      if (exists) {
        wishlist = wishlist.filter(function (i) { return i.id !== item.id; });
        if (notify !== false) {
          showToast('Removed from wishlist: ' + (item.title || item.name || 'Item'), 'info');
        }
      } else {
        wishlist.push(Object.assign({}, item));
        if (notify !== false) {
          showToast('Saved to wishlist: ' + (item.title || item.name || 'Item'), 'success');
        }
      }
      emitChange();
    },

    addToWishlist: function (item, notify) {
      if (!item) return;
      if (!CartWishlist.isInWishlist(item.id)) {
        wishlist.push(Object.assign({}, item));
        if (notify !== false) {
          showToast('Saved to wishlist: ' + (item.title || item.name || 'Item'), 'success');
        }
        emitChange();
      }
    },

    removeFromWishlist: function (id, notify) {
      var target = wishlist.find(function (i) { return i.id === id; });
      wishlist = wishlist.filter(function (i) { return i.id !== id; });
      if (notify !== false && target) {
        showToast('Removed from wishlist: ' + (target.title || target.name || 'Item'), 'info');
      }
      emitChange();
    },

    clearWishlist: function (notify) {
      wishlist = [];
      if (notify !== false) {
        showToast('Wishlist cleared', 'info');
      }
      emitChange();
    },

    getWishlist: function () {
      return wishlist.slice();
    },

    getWishlistCount: function () {
      return wishlist.length;
    },

    // Subscriptions
    on: function (event, callback) {
      if (typeof callback === 'function') {
        listeners.push(callback);
      }
    },

    showToast: showToast,
    refresh: updateDOM
  };

  window.CartWishlist = CartWishlist;

  // Initial DOM synchronization on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateDOM);
  } else {
    updateDOM();
  }

})(window, document);
