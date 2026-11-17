import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

/**
 * Universal Cart and Wishlist Context & Standalone Hook
 * 
 * Works in two ways:
 * 1. As a React Context Provider: Wrap your App with <CartWishlistProvider>
 *    and call useCartWishlist() in any child component.
 * 2. Standalone Hook: Call useCartWishlist() directly anywhere even without
 *    a provider; it will sync directly with localStorage and storage events.
 */

const STORAGE_KEY_CART = 'app_cart';
const STORAGE_KEY_WISHLIST = 'app_wishlist';

// Helper to safely read from localStorage
const loadStorage = (key, fallback = []) => {
  if (typeof window === 'undefined') return fallback;
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch (err) {
    console.warn(`Failed to read ${key} from localStorage:`, err);
    return fallback;
  }
};

// Helper to safely write to localStorage
const saveStorage = (key, data) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn(`Failed to save ${key} to localStorage:`, err);
  }
};

export const CartWishlistContext = createContext(null);

export function CartWishlistProvider({ children, initialCart, initialWishlist }) {
  const [cart, setCart] = useState(() => initialCart || loadStorage(STORAGE_KEY_CART, []));
  const [wishlist, setWishlist] = useState(() => initialWishlist || loadStorage(STORAGE_KEY_WISHLIST, []));
  const [toast, setToast] = useState(null);

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    saveStorage(STORAGE_KEY_CART, cart);
  }, [cart]);

  // Sync wishlist to localStorage whenever it changes
  useEffect(() => {
    saveStorage(STORAGE_KEY_WISHLIST, wishlist);
  }, [wishlist]);

  // Cross-tab synchronization via window storage event
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === STORAGE_KEY_CART) {
        try {
          setCart(e.newValue ? JSON.parse(e.newValue) : []);
        } catch (err) {}
      }
      if (e.key === STORAGE_KEY_WISHLIST) {
        try {
          setWishlist(e.newValue ? JSON.parse(e.newValue) : []);
        } catch (err) {}
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type });
    const timer = setTimeout(() => {
      setToast(null);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  // Cart operations
  const addToCart = useCallback((item, quantity = 1, notify = true) => {
    if (!item) return;
    const addQty = Math.max(1, Number(quantity) || 1);
    
    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === item.id);
      if (existingIndex > -1) {
        const next = [...prev];
        const currentQty = Number(next[existingIndex].quantity) || 1;
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: currentQty + addQty
        };
        return next;
      }
      return [...prev, { ...item, quantity: addQty }];
    });

    if (notify) {
      showToast(`Added to cart: ${item.title || item.name || 'Item'}`, 'success');
    }
  }, [showToast]);

  const updateCartQty = useCallback((id, quantity) => {
    const nextQty = Number(quantity);
    if (isNaN(nextQty) || nextQty <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== id));
    } else {
      setCart((prev) =>
        prev.map((i) => (i.id === id ? { ...i, quantity: nextQty } : i))
      );
    }
  }, []);

  const removeFromCart = useCallback((id, notify = true) => {
    setCart((prev) => {
      const target = prev.find((i) => i.id === id);
      if (notify && target) {
        showToast(`Removed from cart: ${target.title || target.name || 'Item'}`, 'info');
      }
      return prev.filter((i) => i.id !== id);
    });
  }, [showToast]);

  const clearCart = useCallback((notify = false) => {
    setCart([]);
    if (notify) {
      showToast('Cart cleared', 'info');
    }
  }, [showToast]);

  const buyNow = useCallback((item, onNavigate) => {
    if (!item) return;
    addToCart(item, 1, false);
    showToast(`Proceeding to checkout: ${item.title || item.name || 'Item'}`, 'success');
    if (typeof onNavigate === 'function') {
      onNavigate('/cart');
    }
  }, [addToCart, showToast]);

  // Wishlist operations
  const isInWishlist = useCallback((id) => {
    return wishlist.some((item) => item.id === id);
  }, [wishlist]);

  const addToWishlist = useCallback((item, notify = true) => {
    if (!item) return;
    setWishlist((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
    if (notify) {
      showToast(`Saved to wishlist: ${item.title || item.name || 'Item'}`, 'success');
    }
  }, [showToast]);

  const removeFromWishlist = useCallback((id, notify = true) => {
    setWishlist((prev) => {
      const target = prev.find((i) => i.id === id);
      if (notify && target) {
        showToast(`Removed from wishlist: ${target.title || target.name || 'Item'}`, 'info');
      }
      return prev.filter((i) => i.id !== id);
    });
  }, [showToast]);

  const toggleWishlist = useCallback((item, notify = true) => {
    if (!item) return;
    setWishlist((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        if (notify) {
          showToast(`Removed from wishlist: ${item.title || item.name || 'Item'}`, 'info');
        }
        return prev.filter((i) => i.id !== item.id);
      } else {
        if (notify) {
          showToast(`Saved to wishlist: ${item.title || item.name || 'Item'}`, 'success');
        }
        return [...prev, item];
      }
    });
  }, [showToast]);

  const clearWishlist = useCallback((notify = false) => {
    setWishlist([]);
    if (notify) {
      showToast('Wishlist cleared', 'info');
    }
  }, [showToast]);

  // Computed metrics
  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);
  }, [cart]);

  const wishlistCount = useMemo(() => {
    return wishlist.length;
  }, [wishlist]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const qty = Number(item.quantity) || 1;
      return sum + price * qty;
    }, 0);
  }, [cart]);

  const value = useMemo(() => ({
    // State
    cart,
    wishlist,
    toast,
    cartCount,
    wishlistCount,
    cartSubtotal,

    // Aliases matching template props
    onAddToCart: addToCart,
    onBuyNow: buyNow,
    onToggleWishlist: toggleWishlist,
    onRemoveFromWishlist: removeFromWishlist,
    onUpdateCartQty: updateCartQty,
    onRemoveFromCart: removeFromCart,

    // Cart actions
    addToCart,
    updateCartQty,
    removeFromCart,
    clearCart,
    buyNow,

    // Wishlist actions
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    clearWishlist,

    // Toast actions
    showToast,
    closeToast
  }), [
    cart,
    wishlist,
    toast,
    cartCount,
    wishlistCount,
    cartSubtotal,
    addToCart,
    updateCartQty,
    removeFromCart,
    clearCart,
    buyNow,
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    clearWishlist,
    showToast,
    closeToast
  ]);

  return (
    <CartWishlistContext.Provider value={value}>
      {children}
      {toast && (
        <div className="toast toast-bottom toast-end z-50 p-4 pointer-events-none">
          <div className={`alert ${toast.type === 'success' ? 'alert-success text-white' : 'alert-info text-white'} text-xs font-bold shadow-2xl rounded-2xl py-2.5 px-4 flex items-center gap-2 pointer-events-auto`}>
            <span>{toast.message}</span>
            <button 
              type="button" 
              onClick={closeToast}
              className="btn btn-ghost btn-xs text-white p-0 h-auto min-h-0 ml-1 opacity-75 hover:opacity-100"
            >
              x
            </button>
          </div>
        </div>
      )}
    </CartWishlistContext.Provider>
  );
}

/**
 * Primary hook to access cart & wishlist.
 * If used outside CartWishlistProvider, it gracefully falls back to local component state synced with localStorage.
 */
export function useCartWishlist() {
  const context = useContext(CartWishlistContext);
  if (context) return context;

  // Fallback for standalone usage without Provider
  const [cart, setCart] = useState(() => loadStorage(STORAGE_KEY_CART, []));
  const [wishlist, setWishlist] = useState(() => loadStorage(STORAGE_KEY_WISHLIST, []));
  const [toast, setToast] = useState(null);

  useEffect(() => {
    saveStorage(STORAGE_KEY_CART, cart);
  }, [cart]);

  useEffect(() => {
    saveStorage(STORAGE_KEY_WISHLIST, wishlist);
  }, [wishlist]);

  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  }, []);

  const addToCart = useCallback((item, quantity = 1) => {
    if (!item) return;
    const addQty = Math.max(1, Number(quantity) || 1);
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.id === item.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: (Number(next[idx].quantity) || 1) + addQty };
        return next;
      }
      return [...prev, { ...item, quantity: addQty }];
    });
    showToast(`Added to cart: ${item.title || item.name || 'Item'}`, 'success');
  }, [showToast]);

  const updateCartQty = useCallback((id, quantity) => {
    const qty = Number(quantity);
    if (isNaN(qty) || qty <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== id));
    } else {
      setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i)));
    }
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
    showToast('Removed from cart', 'info');
  }, [showToast]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const isInWishlist = useCallback((id) => {
    return wishlist.some((i) => i.id === id);
  }, [wishlist]);

  const toggleWishlist = useCallback((item) => {
    if (!item) return;
    setWishlist((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        showToast(`Removed from wishlist: ${item.title || item.name || 'Item'}`, 'info');
        return prev.filter((i) => i.id !== item.id);
      } else {
        showToast(`Saved to wishlist: ${item.title || item.name || 'Item'}`, 'success');
        return [...prev, item];
      }
    });
  }, [showToast]);

  const removeFromWishlist = useCallback((id) => {
    setWishlist((prev) => prev.filter((i) => i.id !== id));
    showToast('Removed from wishlist', 'info');
  }, [showToast]);

  const buyNow = useCallback((item, onNavigate) => {
    addToCart(item, 1);
    if (typeof onNavigate === 'function') onNavigate('/cart');
  }, [addToCart]);

  const cartCount = cart.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);
  const wishlistCount = wishlist.length;
  const cartSubtotal = cart.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 1), 0);

  return {
    cart,
    wishlist,
    toast,
    cartCount,
    wishlistCount,
    cartSubtotal,
    addToCart,
    updateCartQty,
    removeFromCart,
    clearCart,
    buyNow,
    isInWishlist,
    toggleWishlist,
    removeFromWishlist,
    onAddToCart: addToCart,
    onBuyNow: buyNow,
    onToggleWishlist: toggleWishlist,
    onRemoveFromWishlist: removeFromWishlist,
    onUpdateCartQty: updateCartQty,
    onRemoveFromCart: removeFromCart,
    showToast,
    closeToast: () => setToast(null)
  };
}

export const useCart = () => {
  const { cart, cartCount, cartSubtotal, addToCart, updateCartQty, removeFromCart, clearCart, buyNow } = useCartWishlist();
  return { cart, cartCount, cartSubtotal, addToCart, updateCartQty, removeFromCart, clearCart, buyNow };
};

export const useWishlist = () => {
  const { wishlist, wishlistCount, isInWishlist, addToWishlist, removeFromWishlist, toggleWishlist, clearWishlist } = useCartWishlist();
  return { wishlist, wishlistCount, isInWishlist, addToWishlist, removeFromWishlist, toggleWishlist, clearWishlist };
};

export default useCartWishlist;
