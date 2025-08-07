import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { DOMAINS, getDomainData } from './data/domainData.js';

// Common Components
import HeaderTop from './tamplate/common/headerTop.jsx';
import Nav from './tamplate/common/nav.jsx';
import Footer from './tamplate/common/footer.jsx';

/**
 * Root App Layout for React Router
 * Features:
 * - Master Top Architecture Bar: Quickly toggle between Tech, Food, School, College, IT Firm, Hospital
 * - HeaderTop: JS live clock, phone, email, cart and wishlist counters
 * - Common Nav: Responsive navbar with section switcher and theme dropdown
 * - Outlet: Renders the active route
 * - Common Footer: Dynamic footer with newsletter and domain information
 */
export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Detect active domain based on URL path or return null to retain current
  const detectDomainFromPath = (path) => {
    if (path.includes('/food')) return 'food';
    if (path.includes('/fashion')) return 'fashion';
    if (path.includes('/school')) return 'school';
    if (path.includes('/collage') || path.includes('/college')) return 'collage';
    if (path.includes('/itfirm') || path.includes('/itfra')) return 'itfirm';
    if (path.includes('/hospital') || path.includes('/medical')) return 'hospital';
    if (path.includes('/tech')) return 'tech';

    // Detect domain from item id in /detail/:id or /product/:id
    const detailMatch = path.match(/\/(detail|product)\/(\d+)/);
    if (detailMatch) {
      const id = Number(detailMatch[2]);
      if (id >= 200 && id < 300) return 'tech';
      if (id >= 300 && id < 400) return 'food';
      if (id >= 400 && id < 500) return 'fashion';
      if (id >= 500 && id < 600) return 'school';
      if (id >= 600 && id < 700) return 'collage';
      if (id >= 700 && id < 800) return 'itfirm';
      if (id >= 800 && id < 900) return 'hospital';
    }

    return null; // Retain current active domain on neutral routes (/cart, /login, /about, /contact, /)
  };

  const [activeDomain, setActiveDomain] = useState(() => detectDomainFromPath(location.pathname) || 'tech');
  const [theme, setTheme] = useState('dark');

  // Persisted shopping cart state
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('app_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Persisted wishlist state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('app_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Toast notification state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  };

  useEffect(() => {
    try {
      localStorage.setItem('app_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('app_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  // Sync domain state if path changes to a specific domain
  useEffect(() => {
    const matched = detectDomainFromPath(location.pathname);
    if (matched && matched !== activeDomain) {
      setActiveDomain(matched);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, activeDomain]);

  const currentData = getDomainData(activeDomain);
  const isEcom = currentData.type === 'ecom';

  const handleDomainChange = (newKey) => {
    setActiveDomain(newKey);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleAddToCart = (item, quantity = 1) => {
    if (!item) return;
    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: (updated[existingIndex].quantity || 1) + quantity
        };
        return updated;
      }
      return [...prev, { ...item, quantity: Math.max(1, quantity) }];
    });
    showToast(`Added to cart: ${item.title}`, 'success');
  };

  const handleBuyNow = (item) => {
    if (!item) return;
    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: (updated[existingIndex].quantity || 1) + 1
        };
        return updated;
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    showToast(`Proceeding to checkout: ${item.title}`, 'success');
    navigate('/cart');
  };

  const handleToggleWishlist = (item) => {
    if (!item) return;
    setWishlist((prev) => {
      const exists = prev.some((w) => w.id === item.id);
      if (exists) {
        showToast(`Removed from wishlist: ${item.title}`, 'info');
        return prev.filter((w) => w.id !== item.id);
      } else {
        showToast(`Saved to wishlist: ${item.title}`, 'success');
        return [...prev, item];
      }
    });
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((w) => w.id !== id));
    showToast('Removed item from wishlist', 'info');
  };

  const handleUpdateCartQty = (id, newQty) => {
    if (newQty <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== id));
    } else {
      setCart((prev) =>
        prev.map((i) => (i.id === id ? { ...i, quantity: newQty } : i))
      );
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
    showToast('Removed item from cart', 'info');
  };

  const isInWishlist = (id) => wishlist.some((w) => w.id === id);

  const totalCartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalWishlistCount = wishlist.length;

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col font-sans transition-colors duration-300">
      
      {/* =========================================================================
          MASTER QUICK CONTROLLER BAR
          ========================================================================= */}
      <div className="bg-neutral text-neutral-content py-2 px-4 text-xs border-b border-neutral-focus">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <span className={`badge ${isEcom ? 'badge-secondary' : 'badge-primary'} badge-xs font-bold`}>
              {isEcom ? 'E-COMMERCE DOMAIN' : 'SERVICE DOMAIN'}
            </span>
            <span className="font-bold hidden sm:inline">Active Module:</span>
            <span className="font-extrabold text-accent">{currentData.title}</span>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <label htmlFor="quick-domain-selector" className="text-[11px] text-neutral-content/70 hidden md:inline">
              Switch Module:
            </label>
            <select
              id="quick-domain-selector"
              value={activeDomain}
              onChange={(e) => {
                const targetKey = e.target.value;
                setActiveDomain(targetKey);
                if (targetKey === 'tech') navigate('/pages/ecom/tech');
                else if (targetKey === 'food') navigate('/pages/ecom/food');
                else if (targetKey === 'fashion') navigate('/pages/ecom/fashion');
                else if (targetKey === 'school') navigate('/pages/service/school');
                else if (targetKey === 'collage') navigate('/pages/service/collage');
                else if (targetKey === 'itfirm') navigate('/pages/service/itfirm');
                else if (targetKey === 'hospital') navigate('/pages/service/hospital');
              }}
              className="select select-bordered select-xs bg-base-100 text-base-content font-bold rounded-lg"
            >
              <optgroup label="=== E-COMMERCE WEBSITES ===">
                <option value="tech">Tech & Electronics Store</option>
                <option value="food">Gourmet Food Restaurant</option>
                <option value="fashion">Vogue Fashion Boutique</option>
              </optgroup>
              <optgroup label="=== SERVICE WEBSITES ===">
                <option value="school">Cambridge School & STEM</option>
                <option value="collage">Metropolitan University College</option>
                <option value="itfirm">Enterprise IT & Cloud Firm</option>
                <option value="hospital">Apollo Medical Clinic & OPD</option>
              </optgroup>
            </select>
          </div>

        </div>
      </div>

      {/* =========================================================================
          COMMON HEADER TOP
          ========================================================================= */}
      <HeaderTop
        phone={currentData.phone}
        email={currentData.email}
        cartCount={totalCartCount}
        wishlistCount={totalWishlistCount}
        domainTitle={currentData.brand}
        isEcom={isEcom}
      />

      {/* =========================================================================
          COMMON NAVBAR
          ========================================================================= */}
      <Nav
        brand={currentData.brand}
        activeDomain={activeDomain}
        onDomainChange={handleDomainChange}
        cartCount={totalCartCount}
        currentTheme={theme}
        onThemeChange={handleThemeChange}
      />

      {/* =========================================================================
          ACTIVE ROUTE OUTLET
          ========================================================================= */}
      <main className="flex-1">
        <Outlet context={{ 
          activeDomain, 
          currentData, 
          currentJob: currentData, 
          isEcom, 
          cart, 
          wishlist,
          cartCount: totalCartCount,
          wishlistCount: totalWishlistCount,
          onAddToCart: handleAddToCart,
          onBuyNow: handleBuyNow,
          onToggleWishlist: handleToggleWishlist,
          onRemoveFromWishlist: handleRemoveFromWishlist,
          onUpdateCartQty: handleUpdateCartQty,
          onRemoveFromCart: handleRemoveFromCart,
          isInWishlist
        }} />
      </main>

      {/* =========================================================================
          COMMON FOOTER
          ========================================================================= */}
      <Footer
        brand={currentData.brand}
        phone={currentData.phone}
        email={currentData.email}
        address={currentData.address}
        domainType={currentData.type}
      />

      {/* =========================================================================
          TOAST FEEDBACK NOTIFICATIONS
          ========================================================================= */}
      {toast && (
        <div className="toast toast-bottom toast-end z-50 p-4">
          <div className={`alert ${toast.type === 'success' ? 'alert-success text-white' : 'alert-info text-white'} text-xs font-bold shadow-2xl rounded-2xl py-2.5 px-4 flex items-center gap-2`}>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

    </div>
  );
}
