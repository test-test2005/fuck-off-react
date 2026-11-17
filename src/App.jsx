import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import { LuLayers } from 'react-icons/lu';
import { DOMAINS, getDomainData } from './data/domainData.js';
import { CartWishlistProvider, useCartWishlist } from './tamplate/common/useCartWishlist.jsx';

// Common Components
import HeaderTop from './tamplate/common/headerTop.jsx';
import Nav from './tamplate/common/nav.jsx';
import Footer from './tamplate/common/footer.jsx';

/**
 * Inner Application Layout
 * Consumes CartWishlistContext and manages domain switching and theme.
 */
function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const cartStore = useCartWishlist();

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
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('app_theme') || 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  // Sync data-theme with document.documentElement and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('app_theme', theme);
    } catch (e) {}
  }, [theme]);

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

  const handleBuyNow = (item) => {
    cartStore.buyNow(item, (path) => navigate(path));
  };

  // Outlet context package for all child routes and components
  const contextValue = {
    activeDomain,
    currentData,
    currentJob: currentData,
    isEcom,
    cart: cartStore.cart,
    wishlist: cartStore.wishlist,
    cartCount: cartStore.cartCount,
    wishlistCount: cartStore.wishlistCount,
    cartSubtotal: cartStore.cartSubtotal,
    onAddToCart: cartStore.addToCart,
    onBuyNow: handleBuyNow,
    onToggleWishlist: cartStore.toggleWishlist,
    onRemoveFromWishlist: cartStore.removeFromWishlist,
    onUpdateCartQty: cartStore.updateCartQty,
    onRemoveFromCart: cartStore.removeFromCart,
    isInWishlist: cartStore.isInWishlist,
    addToCart: cartStore.addToCart,
    toggleWishlist: cartStore.toggleWishlist,
    removeFromWishlist: cartStore.removeFromWishlist,
    updateCartQty: cartStore.updateCartQty,
    removeFromCart: cartStore.removeFromCart,
    theme,
    onThemeChange: handleThemeChange
  };

  const isComponentHub = location.pathname === '/' || location.pathname.startsWith('/components') || location.pathname.startsWith('/daisyui');

  if (isComponentHub) {
    return (
      <div data-theme={theme} className="min-h-screen bg-base-100 text-base-content font-sans">
        <Outlet context={contextValue} />
      </div>
    );
  }

  return (
    <div data-theme={theme} className="min-h-screen bg-base-100 text-base-content flex flex-col font-sans transition-colors duration-200">
      
      {/* MASTER QUICK CONTROLLER BAR */}
      <div className="bg-neutral text-neutral-content py-2 px-4 text-xs border-b border-neutral-focus">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <Link
              to="/components"
              className="btn btn-xs btn-primary font-bold gap-1.5 shadow-xs"
              title="daisyUI Component & Website Hub"
            >
              <LuLayers className="text-xs" />
              <span>daisyUI Components Hub</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2">
              <span className={`badge ${isEcom ? 'badge-secondary' : 'badge-primary'} badge-xs font-bold`}>
                {isEcom ? 'E-COMMERCE DOMAIN' : 'SERVICE DOMAIN'}
              </span>
              <span className="font-bold hidden md:inline">Active:</span>
              <span className="font-extrabold text-accent">{currentData.title}</span>
            </div>
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

      {/* COMMON HEADER TOP */}
      <HeaderTop
        phone={currentData.phone}
        email={currentData.email}
        cartCount={cartStore.cartCount}
        wishlistCount={cartStore.wishlistCount}
        domainTitle={currentData.brand}
        isEcom={isEcom}
      />

      {/* COMMON NAVBAR */}
      <Nav
        brand={currentData.brand}
        activeDomain={activeDomain}
        onDomainChange={handleDomainChange}
        cartCount={cartStore.cartCount}
        currentTheme={theme}
        onThemeChange={handleThemeChange}
      />

      {/* ACTIVE ROUTE OUTLET */}
      <main className="flex-1">
        <Outlet context={contextValue} />
      </main>

      {/* COMMON FOOTER */}
      <Footer
        brand={currentData.brand}
        phone={currentData.phone}
        email={currentData.email}
        address={currentData.address}
        domainType={currentData.type}
      />

    </div>
  );
}

/**
 * Root App Component wrapped with CartWishlistProvider
 */
export default function App() {
  return (
    <CartWishlistProvider>
      <AppLayout />
    </CartWishlistProvider>
  );
}
