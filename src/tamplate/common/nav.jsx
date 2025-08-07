import React, { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LuMenu, 
  LuX, 
  LuShoppingCart, 
  LuSparkles, 
  LuSun, 
  LuChevronDown,
  LuCpu,
  LuUtensils,
  LuShoppingBag,
  LuGraduationCap,
  LuBuilding2,
  LuServer,
  LuHeartPulse,
  LuCheck
} from 'react-icons/lu';

/**
 * Common Navigation Component
 * Features:
 * - Domain Selector Dropdown with auto-closing on select
 * - Intelligent Active Tab Highlighting for both root and deep paths
 * - Domain-specific CTA buttons (Cart for Ecom, Appointment/Admissions for Services)
 * - Theme Switcher with auto-close
 * - Responsive Mobile Drawer
 */
export default function Nav({
  brand = "NEXUS TECH GEAR",
  activeDomain = "tech",
  onDomainChange,
  cartCount = 0,
  currentTheme = "dark",
  onThemeChange
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const themes = [
    "light", "dark", "cupcake", "synthwave", "cyberpunk", 
    "forest", "luxury", "business", "night", "emerald"
  ];

  const domainOptions = [
    { key: "tech", label: "E-Com: Tech & Gadgets", icon: LuCpu, path: "/pages/ecom/tech" },
    { key: "food", label: "E-Com: Food & Restaurant", icon: LuUtensils, path: "/pages/ecom/food" },
    { key: "fashion", label: "E-Com: Fashion & Apparel", icon: LuShoppingBag, path: "/pages/ecom/fashion" },
    { key: "school", label: "Service: Cambridge School", icon: LuGraduationCap, path: "/pages/service/school" },
    { key: "collage", label: "Service: Metropolitan College", icon: LuBuilding2, path: "/pages/service/collage" },
    { key: "itfirm", label: "Service: Enterprise IT Firm", icon: LuServer, path: "/pages/service/itfirm" },
    { key: "hospital", label: "Service: Apollo Hospital Clinic", icon: LuHeartPulse, path: "/pages/service/hospital" }
  ];

  // Dynamic Navigation Tabs for current active domain
  const getDomainTabs = (dom) => {
    switch (dom) {
      case "tech":
        return [
          { to: "/pages/ecom/tech", label: "Home", isHome: true },
          { to: "/pages/ecom/tech/products", label: "Products" },
          { to: "/detail/201", label: "Tech Specs", isDetail: true },
          { to: "/cart", label: "Cart" },
          { to: "/login", label: "Login" }
        ];
      case "food":
        return [
          { to: "/pages/ecom/food", label: "Home", isHome: true },
          { to: "/pages/ecom/food/foods", label: "Menu" },
          { to: "/detail/301", label: "Dish Detail", isDetail: true },
          { to: "/cart", label: "Order Cart" },
          { to: "/login", label: "Login" }
        ];
      case "fashion":
        return [
          { to: "/pages/ecom/fashion", label: "Home", isHome: true },
          { to: "/pages/ecom/fashion/products", label: "Collections" },
          { to: "/detail/401", label: "Apparel Detail", isDetail: true },
          { to: "/cart", label: "Shopping Bag" },
          { to: "/login", label: "Login" }
        ];
      case "school":
        return [
          { to: "/pages/service/school", label: "Home", isHome: true },
          { to: "/pages/service/school/courses", label: "Academic Courses" },
          { to: "/pages/service/school/admission", label: "Admissions" },
          { to: "/detail/501", label: "Course Detail", isDetail: true },
          { to: "/contact", label: "Contact Us" }
        ];
      case "collage":
        return [
          { to: "/pages/service/collage", label: "Home", isHome: true },
          { to: "/pages/service/collage/departments", label: "Departments" },
          { to: "/detail/601", label: "Program Detail", isDetail: true },
          { to: "/about", label: "Campus Life" },
          { to: "/contact", label: "Admissions Office" }
        ];
      case "itfirm":
        return [
          { to: "/pages/service/itfirm", label: "Home", isHome: true },
          { to: "/pages/service/itfirm/services", label: "IT Services" },
          { to: "/pages/service/itfirm/quote", label: "Request Quote" },
          { to: "/detail/701", label: "Architecture Detail", isDetail: true },
          { to: "/contact", label: "Consult Engineers" }
        ];
      case "hospital":
        return [
          { to: "/pages/service/hospital", label: "Home", isHome: true },
          { to: "/pages/service/hospital/doctors", label: "Specialists" },
          { to: "/pages/service/hospital/appointment", label: "Book Appointment" },
          { to: "/detail/801", label: "Doctor Profile", isDetail: true },
          { to: "/contact", label: "Emergency Help" }
        ];
      default:
        return [
          { to: "/", label: "Home", isHome: true },
          { to: "/products", label: "Products" },
          { to: "/services", label: "Services" },
          { to: "/contact", label: "Contact" }
        ];
    }
  };

  const navLinks = getDomainTabs(activeDomain);

  // Check if a link is currently active
  const isLinkActive = (link) => {
    const currentPath = location.pathname;
    if (link.isHome) {
      return currentPath === "/" || currentPath === link.to || currentPath.endsWith("/home");
    }
    if (link.isDetail) {
      return currentPath.startsWith("/detail") || currentPath.startsWith("/product");
    }
    return currentPath === link.to || currentPath.startsWith(link.to);
  };

  const handleDomainSelect = (key) => {
    if (onDomainChange) {
      onDomainChange(key);
    }
    const target = domainOptions.find(d => d.key === key);
    if (target) {
      navigate(target.path);
    }
    setMobileOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const handleThemeSelect = (t) => {
    if (onThemeChange) onThemeChange(t);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300 shadow-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          
          {/* Brand Logo & Title */}
          <Link 
            to={domainOptions.find(d => d.key === activeDomain)?.path || "/"}
            className="flex items-center gap-2.5 font-black text-lg sm:text-2xl tracking-tight text-base-content hover:opacity-90 transition-opacity shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary text-primary-content flex items-center justify-center font-black shadow-md shadow-primary/30">
              <LuSparkles className="text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-black">{brand}</span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                {activeDomain.toUpperCase()} PORTAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    active
                      ? "bg-primary text-primary-content shadow-sm shadow-primary/20"
                      : "text-base-content/80 hover:text-base-content hover:bg-base-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Section Switcher Dropdown */}
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="btn btn-sm btn-outline rounded-xl font-bold gap-1 text-xs px-2.5"
                title="Switch Section Architecture"
              >
                <span className="hidden sm:inline text-base-content/70">Section:</span>
                <span className="text-primary font-black uppercase">{activeDomain}</span>
                <LuChevronDown className="text-xs" />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-2xl bg-base-100 rounded-2xl w-64 border border-base-300 mt-2 z-50 text-xs font-semibold"
              >
                <li className="menu-title text-[10px] font-extrabold uppercase tracking-wider text-base-content/50">
                  Switch Architecture
                </li>
                {domainOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isCurrent = activeDomain === opt.key;
                  return (
                    <li key={opt.key}>
                      <button
                        onClick={() => handleDomainSelect(opt.key)}
                        className={`flex items-center justify-between rounded-xl py-2 ${
                          isCurrent ? "bg-primary text-primary-content font-bold" : ""
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Icon className="text-sm" />
                          <span>{opt.label}</span>
                        </span>
                        {isCurrent && <LuCheck className="text-xs" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Theme Switcher Dropdown */}
            <div className="dropdown dropdown-end">
              <button 
                tabIndex={0} 
                className="btn btn-ghost btn-circle btn-sm" 
                title="Change Theme"
                aria-label="Change Theme"
              >
                <LuSun className="text-base" />
              </button>
              <ul 
                tabIndex={0} 
                className="dropdown-content menu p-2 shadow-2xl bg-base-100 rounded-2xl w-36 border border-base-300 mt-2 z-50 text-xs max-h-60 overflow-y-auto"
              >
                <li className="menu-title text-[10px] font-bold uppercase text-base-content/50">Theme</li>
                {themes.map((t) => (
                  <li key={t}>
                    <button
                      onClick={() => handleThemeSelect(t)}
                      className={`capitalize py-1.5 rounded-lg flex items-center justify-between ${
                        currentTheme === t ? "active font-bold" : ""
                      }`}
                    >
                      <span>{t}</span>
                      {currentTheme === t && <LuCheck className="text-xs" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Context-Aware Primary Action Button */}
            {activeDomain === "tech" || activeDomain === "food" || activeDomain === "fashion" ? (
              <Link
                to="/cart"
                className="btn btn-sm btn-primary rounded-xl font-bold gap-1.5 text-xs shadow-md shadow-primary/20"
                aria-label="View Cart"
              >
                <LuShoppingCart className="text-sm" />
                <span className="hidden sm:inline">Cart</span>
                <span className="badge badge-xs badge-neutral text-white font-bold">{cartCount}</span>
              </Link>
            ) : activeDomain === "hospital" ? (
              <Link
                to="/pages/service/hospital/appointment"
                className="btn btn-sm btn-primary rounded-xl font-bold gap-1 text-xs shadow-md shadow-primary/20"
              >
                <LuHeartPulse className="text-sm" />
                <span className="hidden sm:inline">Appoint</span>
              </Link>
            ) : activeDomain === "school" ? (
              <Link
                to="/pages/service/school/admission"
                className="btn btn-sm btn-primary rounded-xl font-bold gap-1 text-xs shadow-md shadow-primary/20"
              >
                <LuGraduationCap className="text-sm" />
                <span className="hidden sm:inline">Admissions</span>
              </Link>
            ) : activeDomain === "itfirm" ? (
              <Link
                to="/pages/service/itfirm/quote"
                className="btn btn-sm btn-primary rounded-xl font-bold gap-1 text-xs shadow-md shadow-primary/20"
              >
                <LuServer className="text-sm" />
                <span className="hidden sm:inline">Get Quote</span>
              </Link>
            ) : activeDomain === "collage" ? (
              <Link
                to="/pages/service/collage/departments"
                className="btn btn-sm btn-primary rounded-xl font-bold gap-1 text-xs shadow-md shadow-primary/20"
              >
                <LuBuilding2 className="text-sm" />
                <span className="hidden sm:inline">Degrees</span>
              </Link>
            ) : null}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="btn btn-ghost btn-circle btn-sm lg:hidden"
              aria-label="Toggle Mobile Menu"
            >
              {mobileOpen ? <LuX className="text-xl" /> : <LuMenu className="text-xl" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-base-300 bg-base-100 px-4 py-4 space-y-4 shadow-xl">
          <div className="text-[11px] font-black uppercase text-base-content/50 px-2 tracking-wider">
            {activeDomain.toUpperCase()} Navigation
          </div>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                    active
                      ? "bg-primary text-primary-content"
                      : "text-base-content/80 hover:bg-base-200"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="badge badge-xs badge-neutral">ACTIVE</span>}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-base-200">
            <div className="text-[11px] font-black uppercase text-base-content/50 px-2 tracking-wider mb-2">
              Switch Architecture Section
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {domainOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => handleDomainSelect(opt.key)}
                  className={`btn btn-xs rounded-lg text-[11px] justify-start ${
                    activeDomain === opt.key ? "btn-primary font-bold" : "btn-ghost"
                  }`}
                >
                  {opt.label.split(":")[1] || opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
