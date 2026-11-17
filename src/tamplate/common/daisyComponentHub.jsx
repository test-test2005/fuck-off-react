import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import {
  LuSearch,
  LuCopy,
  LuCheck,
  LuExternalLink,
  LuMonitor,
  LuTablet,
  LuSmartphone,
  LuCode,
  LuEye,
  LuPalette,
  LuSun,
  LuMoon,
  LuFolder,
  LuGraduationCap,
  LuLaptop,
  LuUtensils,
  LuShirt,
  LuCpu,
  LuHeartPulse,
  LuLayers,
  LuShoppingBag,
  LuShoppingCart,
  LuHeart,
  LuCalendar,
  LuShieldAlert,
  LuMenu,
  LuX,
  LuChevronRight,
  LuShieldCheck,
  LuPhone,
  LuClock,
  LuTrash2,
  LuArrowRight,
  LuZap,
  LuStar,
  LuSlidersHorizontal,
  LuLock,
  LuUser,
  LuMail,
  LuTruck
} from 'react-icons/lu';

// Domain navbars
import TechNav from '../eCom/tech/nav.jsx';
import FoodNav from '../eCom/food/nav.jsx';
import FashionNav from '../eCom/fashion/nav.jsx';
import SchoolNav from '../service/school/nav.jsx';
import CollegeNav from '../service/college/nav.jsx';
import ITFirmNav from '../service/itfirm/nav.jsx';
import HospitalNav from '../service/hospital/nav.jsx';

// Domain cards
import { ProductCard as TechProductCard } from '../eCom/tech/index.js';
import { FashionProductCard } from '../eCom/fashion/index.js';
import { FoodCard } from '../eCom/food/index.js';
import { CourseCard } from '../service/school/index.js';
import { CollegeDepartmentCard } from '../service/college/index.js';
import { ITFirmServiceCard } from '../service/itfirm/index.js';
import { HospitalDoctorCard } from '../service/hospital/index.js';

// Domain banners & heroes
import { TechBanner } from '../eCom/tech/index.js';
import { FoodBanner } from '../eCom/food/index.js';
import { FashionBanner } from '../eCom/fashion/index.js';
import { SchoolBanner, SchoolStatsCounter } from '../service/school/index.js';
import { CollegeBanner } from '../service/college/index.js';
import { ITFirmBanner } from '../service/itfirm/index.js';
import { HospitalBanner, EmergencyBar } from '../service/hospital/index.js';

// Domain footers
import { TechFooter } from '../eCom/tech/index.js';
import { FoodFooter } from '../eCom/food/index.js';
import { FashionFooter } from '../eCom/fashion/index.js';
import { SchoolFooter } from '../service/school/index.js';
import { CollegeFooter } from '../service/college/index.js';
import { ITFirmFooter } from '../service/itfirm/index.js';
import { HospitalFooter } from '../service/hospital/index.js';

// Cart, Wishlist, Drawer & Modals
import { CartPage as TechCartPage, WishlistPage as TechWishlistPage, CartDrawer as TechCartDrawer } from '../eCom/tech/index.js';
import { FoodCartPage, FoodWishlistPage } from '../eCom/food/index.js';
import { FashionCartPage, FashionWishlistPage } from '../eCom/fashion/index.js';

// Fetcher (Featured Grids)
import { TechFeaturedProducts } from '../eCom/tech/index.js';
import { FoodChefSpecials } from '../eCom/food/index.js';
import { FashionFeaturedProducts } from '../eCom/fashion/index.js';
import { SchoolFeaturedCourses } from '../service/school/index.js';
import { HospitalFeaturedDoctors } from '../service/hospital/index.js';
import { ITFirmFeaturedServices } from '../service/itfirm/index.js';

// Details, Catalog & Forms
import { TechDetailPage, TechProductsPage, LoginPage as TechLoginPage, SignupPage as TechSignupPage } from '../eCom/tech/index.js';
import { FoodDetailPage, ReservationModal } from '../eCom/food/index.js';
import { SchoolAdmissionForm } from '../service/school/index.js';

// Modals, Breadcrumbs, Image Zoom
import PopupModal from './popupModal.jsx';
import Breadcrumbs from './breadcrumbs.jsx';
import ImageZoom from './imageZoom.jsx';

// Full Apps
import { SchoolApp } from '../service/school/index.js';
import { TechApp } from '../eCom/tech/index.js';
import { FoodApp } from '../eCom/food/index.js';
import { FashionApp } from '../eCom/fashion/index.js';
import { CollegeApp } from '../service/college/index.js';
import { ITFirmApp } from '../service/itfirm/index.js';
import { HospitalApp } from '../service/hospital/index.js';

const DAISY_THEMES = [
  "dark", "light", "cupcake", "bumblebee", "emerald", "corporate",
  "synthwave", "retro", "cyberpunk", "valentine", "halloween",
  "garden", "forest", "aqua", "lofi", "pastel", "fantasy",
  "wireframe", "black", "luxury", "dracula", "cmyk", "autumn",
  "business", "acid", "lemonade", "night", "coffee", "winter",
  "dim", "nord", "sunset"
];

// Reusable Component Preview Block matching daisyui.com/components
function ComponentPreviewBlock({
  title,
  subtitle,
  jsxCode,
  htmlCode,
  children
}) {
  const [tab, setTab] = useState('preview'); // 'preview' | 'jsx' | 'html'
  const [viewport, setViewport] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = tab === 'html' ? htmlCode : jsxCode;
    if (navigator?.clipboard && code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-3">
      {/* Block Title */}
      {(title || subtitle) && (
        <div className="flex items-center justify-between">
          <div>
            {title && <h3 className="font-black text-lg text-base-content">{title}</h3>}
            {subtitle && <p className="text-xs text-base-content/70 mt-0.5">{subtitle}</p>}
          </div>
        </div>
      )}

      {/* daisyUI Card with Mockup Window Header */}
      <div className="card bg-base-100 border border-base-300 rounded-3xl shadow-xs overflow-hidden">
        
        {/* Top bar with tabs & device switcher */}
        <div className="bg-base-200/80 border-b border-base-300 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2.5">
          {/* OS Window Dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-error/70 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-warning/70 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-success/70 inline-block"></span>
          </div>

          <div className="flex items-center gap-2">
            {/* Viewport Width Controls */}
            {tab === 'preview' && (
              <div className="join border border-base-300 rounded-xl bg-base-100 p-0.5">
                <button
                  onClick={() => setViewport('desktop')}
                  className={`btn btn-xs join-item ${viewport === 'desktop' ? 'btn-primary' : 'btn-ghost'}`}
                  title="Desktop (100%)"
                >
                  <LuMonitor className="text-xs" />
                </button>
                <button
                  onClick={() => setViewport('tablet')}
                  className={`btn btn-xs join-item ${viewport === 'tablet' ? 'btn-primary' : 'btn-ghost'}`}
                  title="Tablet (768px)"
                >
                  <LuTablet className="text-xs" />
                </button>
                <button
                  onClick={() => setViewport('mobile')}
                  className={`btn btn-xs join-item ${viewport === 'mobile' ? 'btn-primary' : 'btn-ghost'}`}
                  title="Mobile (375px)"
                >
                  <LuSmartphone className="text-xs" />
                </button>
              </div>
            )}

            {/* Code / Preview Tabs */}
            <div className="join border border-base-300 rounded-xl bg-base-100 p-0.5">
              <button
                onClick={() => setTab('preview')}
                className={`btn btn-xs join-item font-bold ${tab === 'preview' ? 'btn-neutral' : 'btn-ghost'}`}
              >
                <LuEye className="text-xs" />
                <span>Preview</span>
              </button>
              <button
                onClick={() => setTab('jsx')}
                className={`btn btn-xs join-item font-bold ${tab === 'jsx' ? 'btn-neutral' : 'btn-ghost'}`}
              >
                <LuCode className="text-xs" />
                <span>JSX</span>
              </button>
              <button
                onClick={() => setTab('html')}
                className={`btn btn-xs join-item font-bold ${tab === 'html' ? 'btn-neutral' : 'btn-ghost'}`}
              >
                <span className="text-[10px] font-mono font-bold">&lt;/&gt;</span>
                <span>HTML</span>
              </button>
            </div>

            {/* Copy Code Button */}
            <button
              onClick={handleCopy}
              className="btn btn-xs btn-ghost border border-base-300 rounded-xl font-bold gap-1"
              title="Copy Component Markup"
            >
              {copied ? (
                <>
                  <LuCheck className="text-success text-xs" />
                  <span className="text-success">Copied!</span>
                </>
              ) : (
                <>
                  <LuCopy className="text-xs" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Preview or Code Display */}
        <div className="p-6 bg-base-100 flex items-center justify-center min-h-[140px] overflow-x-auto">
          {tab === 'preview' ? (
            <div
              className={`transition-all duration-300 w-full ${
                viewport === 'mobile'
                  ? 'max-w-[375px] border border-dashed border-base-300 p-2 rounded-2xl'
                  : viewport === 'tablet'
                  ? 'max-w-[768px] border border-dashed border-base-300 p-3 rounded-2xl'
                  : 'w-full'
              }`}
            >
              {children}
            </div>
          ) : (
            <div className="w-full">
              <div className="bg-neutral text-neutral-content p-5 rounded-2xl font-mono text-xs overflow-x-auto max-h-96">
                <pre className="text-primary font-bold leading-relaxed whitespace-pre">
                  {tab === 'html' ? htmlCode : jsxCode}
                </pre>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function DaisyComponentHub() {
  const navigate = useNavigate();
  let outlet = {};
  try {
    outlet = useOutletContext() || {};
  } catch (e) {}

  // Active section in the DaisyUI sidebar
  const [activeSection, setActiveSection] = useState('navbar');
  const [search, setSearch] = useState('');
  const [localTheme, setLocalTheme] = useState(() => {
    try {
      return localStorage.getItem('app_theme') || document.documentElement.getAttribute('data-theme') || 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  const currentTheme = outlet.theme || localTheme;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Demo state for interactive Cart, Wishlist, Drawer, Modals
  const [wishlistMap, setWishlistMap] = useState({ 1: true, 3: true, 101: true });
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [popupModalOpen, setPopupModalOpen] = useState(false);

  const toggleWish = (id) => {
    setWishlistMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleThemeSwitch = (th) => {
    setLocalTheme(th);
    if (outlet.onThemeChange) {
      outlet.onThemeChange(th);
    }
    document.documentElement.setAttribute('data-theme', th);
    try {
      localStorage.setItem('app_theme', th);
    } catch (e) {}
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  // Realistic sample cart items for interactive demo
  const sampleCart = [
    { id: 1, title: "Nexus Pro Ultrabook M3", price: 1899, quantity: 1, category: "Laptops", image: "/images/tech-1.jpg" },
    { id: 3, title: 'Curved UltraWide 34-inch OLED Monitor', price: 799, quantity: 2, category: "Monitors", image: "/images/tech-3.jpg" },
    { id: 5, title: "Studio Wireless Noise-Cancelling Headphones", price: 349, quantity: 1, category: "Audio", image: "/images/tech-5.jpg" }
  ];

  // Realistic sample wishlist items for interactive demo
  const sampleWishlist = [
    { id: 2, title: "GeForce RTX 5090 Ti Gaming GPU", price: 1999, category: "Components", image: "/images/tech-2.jpg", desc: "Flagship Ada Lovelace architecture with 32GB GDDR7 memory." },
    { id: 4, title: "Pro Studio Mechanical Keyboard", price: 220, category: "Accessories", image: "/images/tech-4.jpg", desc: "Hot-swappable tactile switches with aircraft aluminum chassis." },
    { id: 6, title: "Ergonomic Mesh Task Chair", price: 450, category: "Furniture", image: "/images/tech-6.jpg", desc: "Dynamic lumbar support and 4D adjustable armrests." }
  ];

  const sampleFoodCart = [
    { id: 201, title: "Truffle Wagyu Ribeye Steak", price: 48, quantity: 2, category: "Steakhouse", image: "/images/food-1.jpg" },
    { id: 202, title: "Artisan Woodfire Margherita Pizza", price: 24, quantity: 1, category: "Pizza", image: "/images/food-2.jpg" }
  ];

  const sampleFashionWishlist = [
    { id: 101, title: "Cashmere Sartorial Overcoat", price: 680, category: "Outerwear", image: "/images/fashion-1.jpg", desc: "Italian double-faced virgin wool and Mongolian cashmere." },
    { id: 102, title: "Tailored Linen Formal Blazer", price: 340, category: "Suits", image: "/images/fashion-2.jpg", desc: "Breathable European flax linen with unstructured silhouette." }
  ];

  // Sidebar Menu Items matching https://daisyui.com/components/
  const sidebarNavGroups = [
    {
      group: "Navigation",
      items: [
        { id: 'navbar', label: 'Navbar (e - com, restorant...)', count: 7 },
        { id: 'breadcrumbs', label: 'Breadcrumbs', count: 1 },
        { id: 'footer', label: 'Footer (e-com, school...)', count: 7 }
      ]
    },
    {
      group: "Commerce & Actions",
      items: [
        { id: 'cart', label: 'Cart (Shopping Bag & Checkout)', count: 3 },
        { id: 'wishlist', label: 'Wishlist (Saved Items & Hearts)', count: 2 },
        { id: 'drawer', label: 'Drawer (Cart Slide-Out)', count: 1 },
        { id: 'modal', label: 'Modal & Dialog (table, doctor...)', count: 5 }
      ]
    },
    {
      group: "Fetcher & Featured",
      items: [
        { id: 'fetcher', label: 'Fetcher (Featured Grids)', count: 6 }
      ]
    },
    {
      group: "Data Display",
      items: [
        { id: 'card', label: 'Card (products, food, docs...)', count: 7 },
        { id: 'hero', label: 'Hero & Banner (e-com, alerts...)', count: 8 },
        { id: 'detail', label: 'Product & Item Detail', count: 2 },
        { id: 'catalog', label: 'Catalog & Filters (Search, Pills)', count: 1 },
        { id: 'image-zoom', label: 'Image Zoom & Lightbox', count: 1 },
        { id: 'stats', label: 'Stats Counter', count: 1 }
      ]
    },
    {
      group: "Forms & Auth",
      items: [
        { id: 'forms', label: 'Forms & Auth (Login, Sign-Up...)', count: 4 }
      ]
    },
    {
      group: "Full Websites & Kits",
      items: [
        { id: 'templates', label: 'Full Website Kits (7 Sites)', count: 7 }
      ]
    }
  ];

  const filteredNavGroups = useMemo(() => {
    if (!search.trim()) return sidebarNavGroups;
    const q = search.toLowerCase();
    return sidebarNavGroups.map(grp => ({
      ...grp,
      items: grp.items.filter(it => it.label.toLowerCase().includes(q) || it.id.toLowerCase().includes(q))
    })).filter(grp => grp.items.length > 0);
  }, [search]);

  return (
    <div data-theme={currentTheme} className="min-h-screen flex flex-col bg-base-100 text-base-content font-sans antialiased transition-colors duration-200">
      
      {/* DAISYUI HEADER (Identical to daisyui.com top bar) */}
      <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="btn btn-ghost btn-circle btn-sm lg:hidden"
              title="Menu"
            >
              <LuMenu className="text-lg" />
            </button>

            <div
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => { setActiveSection('navbar'); setSearch(''); }}
            >
              <div className="w-9 h-9 rounded-xl bg-primary text-primary-content flex items-center justify-center text-lg font-black shadow-xs">
                <LuLayers />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-lg tracking-tight text-base-content">daisyUI</span>
                  <span className="badge badge-primary badge-xs font-bold text-[10px]">v5.8.0</span>
                </div>
                <div className="text-[10px] text-base-content/60 font-semibold uppercase tracking-wider">
                  Components & Templates Hub
                </div>
              </div>
            </div>
          </div>

          {/* Quick Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/40 text-sm" />
              <input
                type="text"
                placeholder="Search components (cart, wishlist, fetcher, nav, card)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input input-sm bg-base-200/60 border-base-300 rounded-xl pl-9 w-full text-xs"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 btn btn-ghost btn-circle btn-xs text-base-content/50"
                >
                  <LuX />
                </button>
              )}
            </div>
          </div>

          {/* Simple, Direct, Robust Theme Switcher */}
          <div className="flex items-center gap-2">
            {/* Quick 1-Click Dark/Light Toggle */}
            <button
              onClick={() => handleThemeSwitch(currentTheme === 'dark' ? 'light' : 'dark')}
              className="btn btn-ghost btn-circle btn-sm border border-base-300 shadow-xs"
              title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
              aria-label="Toggle theme mode"
            >
              {currentTheme === 'dark' ? (
                <LuSun className="text-sm text-warning" />
              ) : (
                <LuMoon className="text-sm text-primary" />
              )}
            </button>

            {/* Direct DaisyUI Theme Select */}
            <div className="flex items-center gap-1.5 bg-base-200/80 border border-base-300 rounded-xl px-2.5 py-1">
              <LuPalette className="text-primary text-xs shrink-0" />
              <select
                value={currentTheme}
                onChange={(e) => handleThemeSwitch(e.target.value)}
                className="bg-transparent text-base-content font-bold capitalize text-xs cursor-pointer focus:outline-none"
                title="Select daisyUI Theme"
              >
                {DAISY_THEMES.map((th) => (
                  <option key={th} value={th} className="bg-base-100 text-base-content capitalize">
                    {th}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => navigate('/pages/ecom/tech')}
              className="btn btn-outline btn-sm rounded-xl font-bold text-xs gap-1.5 hidden sm:flex"
            >
              <LuExternalLink className="text-xs" />
              <span>Live Websites</span>
            </button>
          </div>

        </div>
      </header>

      {/* BODY: SIDEBAR + MAIN SHOWCASE (like daisyui.com/components/) */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 flex gap-8 relative">
        
        {/* Left Sidebar */}
        <aside
          className={`w-72 shrink-0 space-y-6 lg:block ${
            sidebarOpen
              ? 'fixed inset-y-0 left-0 z-50 bg-base-100 p-6 shadow-2xl w-80 overflow-y-auto border-r border-base-300'
              : 'hidden'
          }`}
        >
          {sidebarOpen && (
            <div className="flex items-center justify-between pb-3 border-b border-base-300 lg:hidden">
              <span className="font-black text-sm">daisyUI Components</span>
              <button onClick={() => setSidebarOpen(false)} className="btn btn-ghost btn-circle btn-sm">
                <LuX />
              </button>
            </div>
          )}

          <div className="space-y-6">
            {filteredNavGroups.map((grp) => (
              <div key={grp.group} className="space-y-1.5">
                <div className="text-[10px] uppercase font-black tracking-wider text-base-content/50 px-3">
                  {grp.group}
                </div>
                <ul className="menu menu-sm bg-base-200/50 border border-base-300 rounded-2xl p-1.5 space-y-0.5">
                  {grp.items.map((it) => (
                    <li key={it.id}>
                      <button
                        onClick={() => {
                          setActiveSection(it.id);
                          setSidebarOpen(false);
                        }}
                        className={`flex items-center justify-between py-2 rounded-xl text-xs font-semibold ${
                          activeSection === it.id
                            ? 'bg-primary text-primary-content font-bold shadow-xs'
                            : 'hover:bg-base-300/50'
                        }`}
                      >
                        <span className="truncate">{it.label}</span>
                        <span className={`badge badge-xs text-[9px] font-mono shrink-0 ml-1 ${
                          activeSection === it.id ? 'badge-neutral text-white' : 'badge-ghost text-base-content/60'
                        }`}>
                          {it.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Copy Info Card */}
          <div className="card bg-base-200/50 border border-base-300 p-4 rounded-2xl space-y-1.5 text-xs">
            <div className="font-bold text-base-content flex items-center gap-1.5">
              <LuFolder className="text-primary text-xs" />
              <span>Ready-To-Copy JSX Code</span>
            </div>
            <p className="text-[11px] text-base-content/70 leading-relaxed">
              Every component shows authentic, full JSX markup in the <strong>JSX</strong> tab. Click <strong>Copy</strong> to instantly copy the code.
            </p>
          </div>
        </aside>

        {/* Main Component Showcase Content */}
        <main className="flex-1 min-w-0 space-y-10">

          {/* =========================================================================
              SECTION: NAVBAR (e-com nav, restorant nav, school nav, college nav, etc.)
              ========================================================================= */}
          {activeSection === 'navbar' && (
            <div className="space-y-8">
              <div className="border-b border-base-300 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Navigation</span>
                  <span className="badge badge-neutral text-xs font-mono font-bold">7 Variants</span>
                </div>
                <h1 className="text-3xl font-black text-base-content tracking-tight">Navbar</h1>
                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                  Navbar is used to show a navigation bar on top of the page. Here are dedicated responsive navbars for E-Commerce, Restaurants, Schools, Colleges, IT Firms, and Hospitals.
                </p>
              </div>

              {/* 1. e - com nav (Tech & Hardware) */}
              <ComponentPreviewBlock
                title="1. e - com nav (Tech E-Commerce Navbar)"
                subtitle="Features top announcement bar, store crest, category navigation, live wishlist badge, and shopping cart counter."
                jsxCode={`<header className="sticky top-0 z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300">
  {/* Announcement bar */}
  <div className="bg-neutral text-neutral-content text-[11px] py-1 px-4 sm:px-8">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <span>Official Authorized Distributor - 100% Genuine Certified Hardware</span>
      <span>Support Hotline: +880 1711-223344</span>
    </div>
  </div>

  {/* Main navigation container */}
  <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-primary text-primary-content flex items-center justify-center text-xl font-bold shadow-xs">
        <LuLaptop />
      </div>
      <div>
        <div className="text-lg font-black tracking-tight text-base-content leading-none">NEXUS TECH</div>
        <div className="text-[10px] text-base-content/60 font-medium">Flagship Computing & Hardware</div>
      </div>
    </div>

    {/* Navigation Links */}
    <nav className="hidden lg:flex items-center gap-1 font-semibold text-xs text-base-content/80">
      <a href="/pages/ecom/tech" className="px-3 py-1.5 rounded-lg bg-base-200 text-primary font-bold">Home</a>
      <a href="/pages/ecom/tech/products" className="px-3 py-1.5 rounded-lg hover:bg-base-200">Catalog</a>
      <a href="/pages/ecom/tech/wishlist" className="px-3 py-1.5 rounded-lg hover:bg-base-200">Wishlist</a>
      <a href="/pages/ecom/tech/cart" className="px-3 py-1.5 rounded-lg hover:bg-base-200">Cart</a>
    </nav>

    {/* Action Buttons: Wishlist & Cart */}
    <div className="flex items-center gap-2">
      <a href="/pages/ecom/tech/wishlist" className="btn btn-ghost btn-circle btn-sm relative">
        <LuHeart className="text-lg" />
        <span className="badge badge-secondary badge-xs font-mono absolute -top-1 -right-1">3</span>
      </a>
      <a href="/pages/ecom/tech/cart" className="btn btn-primary btn-sm rounded-xl font-bold gap-2 shadow-xs">
        <LuShoppingCart className="text-base" />
        <span className="badge badge-neutral badge-xs font-mono text-white">3</span>
      </a>
    </div>
  </div>
</header>`}
                htmlCode={`<header class="sticky top-0 z-40 bg-base-100 border-b border-base-300">
  <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <span class="text-lg font-black">NEXUS TECH</span>
    </div>
    <div class="flex items-center gap-2">
      <button class="btn btn-primary btn-sm">Cart (3)</button>
    </div>
  </div>
</header>`}
              >
                <div className="w-full bg-base-100 rounded-xl overflow-hidden border border-base-300 shadow-xs">
                  <TechNav />
                </div>
              </ComponentPreviewBlock>

              {/* 2. restorant nav (Mediterranean Bistro) */}
              <ComponentPreviewBlock
                title="2. restorant nav (Gourmet Bistro Navbar)"
                subtitle="Features culinary branding, menu tabs, live table reservation modal trigger, and chef ordering bag."
                jsxCode={`<header className="sticky top-0 z-40 bg-base-100/90 backdrop-blur-md border-b border-base-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-primary text-primary-content flex items-center justify-center text-xl font-bold shadow-xs">
        <LuUtensils />
      </div>
      <div>
        <div className="text-lg font-black tracking-tight text-base-content leading-none">LA TERRAZZA</div>
        <div className="text-[10px] text-base-content/60 font-medium tracking-wide">Artisan Mediterranean Bistro</div>
      </div>
    </div>

    <nav className="hidden lg:flex items-center gap-2 font-semibold text-xs">
      <a href="/pages/ecom/food" className="px-3 py-1.5 rounded-lg bg-base-200 text-primary font-bold">Home</a>
      <a href="/pages/ecom/food/foods" className="px-3 py-1.5 rounded-lg hover:bg-base-200">A La Carte</a>
      <a href="/pages/ecom/food/wishlist" className="px-3 py-1.5 rounded-lg hover:bg-base-200">Favorites</a>
    </nav>

    <div className="flex items-center gap-2">
      <button className="btn btn-outline btn-primary btn-sm rounded-xl font-bold gap-1.5">
        <LuCalendar className="text-sm" />
        <span>Reserve Table</span>
      </button>
      <a href="/pages/ecom/food/cart" className="btn btn-primary btn-sm rounded-xl font-bold gap-1.5 shadow-xs">
        <LuShoppingBag className="text-sm" />
        <span className="badge badge-neutral badge-xs font-mono text-white">2</span>
      </a>
    </div>
  </div>
</header>`}
                htmlCode={`<header class="navbar bg-base-100 border-b border-base-300 px-4">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl font-black">LA TERRAZZA</a>
  </div>
  <div class="flex-none gap-2">
    <button class="btn btn-primary btn-sm">Reserve Table</button>
  </div>
</header>`}
              >
                <div className="w-full bg-base-100 rounded-xl overflow-hidden border border-base-300 shadow-xs">
                  <FoodNav />
                </div>
              </ComponentPreviewBlock>

              {/* 3. fashion nav (Sartorial Haute Couture) */}
              <ComponentPreviewBlock
                title="3. fashion nav (Haute Couture Fashion Navbar)"
                subtitle="Editorial fashion layout with season lookbook links, saved styles heart badge, and designer shopping bag."
                jsxCode={`<header className="sticky top-0 z-40 bg-base-100/90 backdrop-blur-md border-b border-base-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-primary text-primary-content flex items-center justify-center text-xl font-bold shadow-xs">
        <LuShirt />
      </div>
      <div>
        <div className="text-lg font-black tracking-widest text-base-content leading-none">SARTORIAL</div>
        <div className="text-[10px] text-base-content/60 uppercase tracking-widest">Atelier Milano</div>
      </div>
    </div>

    <nav className="hidden lg:flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
      <a href="/pages/ecom/fashion" className="text-primary">Collection</a>
      <a href="/pages/ecom/fashion/products" className="hover:text-primary">Lookbook</a>
      <a href="/pages/ecom/fashion/wishlist" className="hover:text-primary">Wishlist</a>
    </nav>

    <div className="flex items-center gap-2">
      <a href="/pages/ecom/fashion/cart" className="btn btn-primary btn-sm rounded-xl font-bold gap-2">
        <LuShoppingBag />
        <span className="badge badge-neutral badge-xs font-mono text-white">1</span>
      </a>
    </div>
  </div>
</header>`}
                htmlCode={`<header class="navbar bg-base-100 border-b border-base-300 px-4">
  <a class="font-black text-xl tracking-widest">SARTORIAL</a>
</header>`}
              >
                <div className="w-full bg-base-100 rounded-xl overflow-hidden border border-base-300 shadow-xs">
                  <FashionNav />
                </div>
              </ComponentPreviewBlock>

              {/* 4. school nav (Cambridge International Academy) */}
              <ComponentPreviewBlock
                title="4. school nav (Cambridge Academy Navbar)"
                subtitle="Features official school crest, curriculum directory, academic calendar, and admission portal button."
                jsxCode={`<header className="sticky top-0 z-40 bg-base-100/90 backdrop-blur-md border-b border-base-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-primary text-primary-content flex items-center justify-center text-xl font-bold shadow-xs">
        <LuGraduationCap />
      </div>
      <div>
        <div className="text-lg font-black tracking-tight text-base-content leading-none">CAMBRIDGE ACADEMY</div>
        <div className="text-[10px] text-base-content/60 font-medium">Excellence in Global Education</div>
      </div>
    </div>

    <nav className="hidden lg:flex items-center gap-1 font-semibold text-xs">
      <a href="/pages/service/school" className="px-3 py-1.5 rounded-lg bg-base-200 text-primary font-bold">Home</a>
      <a href="/pages/service/school/courses" className="px-3 py-1.5 rounded-lg hover:bg-base-200">Curriculum</a>
      <a href="/pages/service/school/about" className="px-3 py-1.5 rounded-lg hover:bg-base-200">Faculty</a>
    </nav>

    <a href="/pages/service/school/admission" className="btn btn-primary btn-sm rounded-xl font-bold shadow-xs">
      Apply for Admission
    </a>
  </div>
</header>`}
                htmlCode={`<header class="navbar bg-base-100 border-b border-base-300 px-4">
  <a class="font-black text-lg">CAMBRIDGE ACADEMY</a>
  <a class="btn btn-primary btn-sm ml-auto">Apply for Admission</a>
</header>`}
              >
                <div className="w-full bg-base-100 rounded-xl overflow-hidden border border-base-300 shadow-xs">
                  <SchoolNav />
                </div>
              </ComponentPreviewBlock>

              {/* 5. college nav (Imperial Engineering College) */}
              <ComponentPreviewBlock
                title="5. college nav (Imperial University Navbar)"
                subtitle="Academic layout with engineering faculties, accreditation standards, and research portal."
                jsxCode={`<header className="sticky top-0 z-40 bg-base-100/90 backdrop-blur-md border-b border-base-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-primary text-primary-content flex items-center justify-center text-xl font-bold shadow-xs">
        <LuGraduationCap />
      </div>
      <div>
        <div className="text-lg font-black tracking-tight text-base-content leading-none">IMPERIAL COLLEGE</div>
        <div className="text-[10px] text-base-content/60 font-medium">Faculty of Engineering & Technology</div>
      </div>
    </div>

    <nav className="hidden lg:flex items-center gap-1 font-semibold text-xs">
      <a href="/pages/service/college" className="px-3 py-1.5 rounded-lg bg-base-200 text-primary font-bold">Faculties</a>
      <a href="/pages/service/college/departments" className="px-3 py-1.5 rounded-lg hover:bg-base-200">Degree Programs</a>
    </nav>

    <a href="/pages/service/college/contact" className="btn btn-outline btn-primary btn-sm rounded-xl font-bold">
      Contact Registry
    </a>
  </div>
</header>`}
                htmlCode={`<header class="navbar bg-base-100 border-b border-base-300 px-4">
  <a class="font-black text-lg">IMPERIAL COLLEGE</a>
</header>`}
              >
                <div className="w-full bg-base-100 rounded-xl overflow-hidden border border-base-300 shadow-xs">
                  <CollegeNav />
                </div>
              </ComponentPreviewBlock>

              {/* 6. it firm nav (Enterprise IT & Cloud Firm) */}
              <ComponentPreviewBlock
                title="6. it firm nav (Enterprise Cloud & IT Navbar)"
                subtitle="High-tech corporate navigation with cloud architecture solutions, 99.999% SLA metrics, and RFP button."
                jsxCode={`<header className="sticky top-0 z-40 bg-base-100/90 backdrop-blur-md border-b border-base-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-primary text-primary-content flex items-center justify-center text-xl font-bold shadow-xs">
        <LuCpu />
      </div>
      <div>
        <div className="text-lg font-black tracking-tight text-base-content leading-none">VERTEX SOLUTIONS</div>
        <div className="text-[10px] text-base-content/60 font-medium">Enterprise Cloud Infrastructure & AI</div>
      </div>
    </div>

    <nav className="hidden lg:flex items-center gap-1 font-semibold text-xs">
      <a href="/pages/service/itfirm" className="px-3 py-1.5 rounded-lg bg-base-200 text-primary font-bold">Services</a>
      <a href="/pages/service/itfirm/services" className="px-3 py-1.5 rounded-lg hover:bg-base-200">Case Studies</a>
    </nav>

    <a href="/pages/service/itfirm/quote" className="btn btn-primary btn-sm rounded-xl font-bold shadow-xs">
      Request RFP Quote
    </a>
  </div>
</header>`}
                htmlCode={`<header class="navbar bg-base-100 border-b border-base-300 px-4">
  <a class="font-black text-lg">VERTEX SOLUTIONS</a>
  <a class="btn btn-primary btn-sm ml-auto">Request RFP Quote</a>
</header>`}
              >
                <div className="w-full bg-base-100 rounded-xl overflow-hidden border border-base-300 shadow-xs">
                  <ITFirmNav />
                </div>
              </ComponentPreviewBlock>

              {/* 7. hospital nav (Central Care Hospital & 24/7 ER) */}
              <ComponentPreviewBlock
                title="7. hospital nav (Central Care Hospital & ER Navbar)"
                subtitle="Includes top 24/7 emergency hotline ticker, physician directory, OPD schedule, and appointment button."
                jsxCode={`<header className="sticky top-0 z-40 bg-base-100/90 backdrop-blur-md border-b border-base-300">
  {/* Emergency Alert Banner */}
  <div className="bg-error text-error-content text-[11px] py-1 px-4 sm:px-8 font-bold flex justify-between items-center">
    <span>24/7 Emergency Trauma & Ambulance Service Hotline: 10666</span>
    <span>Immediate Critical Care Center</span>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-primary text-primary-content flex items-center justify-center text-xl font-bold shadow-xs">
        <LuHeartPulse />
      </div>
      <div>
        <div className="text-lg font-black tracking-tight text-base-content leading-none">CENTRAL CARE</div>
        <div className="text-[10px] text-base-content/60 font-medium">Specialized Hospital & Diagnostics</div>
      </div>
    </div>

    <a href="/pages/service/hospital/appointment" className="btn btn-primary btn-sm rounded-xl font-bold gap-1.5 shadow-xs">
      <LuCalendar className="text-sm" />
      <span>Book Consultation</span>
    </a>
  </div>
</header>`}
                htmlCode={`<header class="bg-base-100 border-b border-base-300">
  <div class="bg-error text-error-content p-1 text-xs text-center font-bold">24/7 Emergency Hotline: 10666</div>
  <div class="navbar px-4">
    <a class="font-black text-lg">CENTRAL CARE</a>
  </div>
</header>`}
              >
                <div className="w-full bg-base-100 rounded-xl overflow-hidden border border-base-300 shadow-xs">
                  <HospitalNav />
                </div>
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: CART (Shopping Bag, Order Summary, Food Order)
              ========================================================================= */}
          {activeSection === 'cart' && (
            <div className="space-y-8">
              <div className="border-b border-base-300 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Commerce</span>
                  <span className="badge badge-neutral text-xs font-mono font-bold">3 Variants</span>
                </div>
                <h1 className="text-3xl font-black text-base-content tracking-tight">Cart</h1>
                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                  Cart components manage the customer shopping bag, line-item quantity controls, order total calculations, shipping rates, and checkout triggers.
                </p>
              </div>

              {/* 1. Tech E-Commerce Shopping Cart Page */}
              <ComponentPreviewBlock
                title="1. E-Commerce Cart & Order Summary"
                subtitle="Complete shopping cart with responsive items table, quantity increment/decrement, tax calculation, free shipping threshold, and checkout button."
                jsxCode={`<div className="max-w-5xl mx-auto p-6 space-y-6">
  <div className="flex items-center justify-between border-b border-base-300 pb-4">
    <div>
      <h1 className="text-2xl font-black">Shopping Cart</h1>
      <p className="text-xs text-base-content/70">3 items currently in your shopping bag</p>
    </div>
    <button className="btn btn-ghost btn-xs text-error font-semibold">Clear Bag</button>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* Cart Items Table */}
    <div className="lg:col-span-2 overflow-x-auto border border-base-300 rounded-2xl bg-base-100">
      <table className="table table-zebra w-full text-xs">
        <thead>
          <tr className="bg-base-200 text-base-content/70">
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-xl">
                    <img src="/images/tech-1.jpg" alt="Nexus Pro Ultrabook" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Nexus Pro Ultrabook M3</div>
                  <div className="text-[10px] text-base-content/50">Space Gray | 32GB RAM</div>
                </div>
              </div>
            </td>
            <td className="font-mono font-bold">$1,899</td>
            <td>
              <div className="join border border-base-300 rounded-lg">
                <button className="join-item btn btn-xs btn-ghost">-</button>
                <span className="join-item px-2 flex items-center font-bold">1</span>
                <button className="join-item btn btn-xs btn-ghost">+</button>
              </div>
            </td>
            <td className="font-mono font-bold text-primary">$1,899</td>
            <td>
              <button className="btn btn-circle btn-ghost btn-xs text-error">
                <LuTrash2 className="text-xs" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Order Summary */}
    <div className="card bg-base-200/50 border border-base-300 rounded-2xl p-5 space-y-4 h-fit">
      <h3 className="font-bold text-sm">Order Summary</h3>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-base-content/70">Subtotal</span>
          <span className="font-mono font-bold">$1,899.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-base-content/70">Estimated VAT (5%)</span>
          <span className="font-mono font-bold">$94.95</span>
        </div>
        <div className="flex justify-between text-success">
          <span>Standard Shipping</span>
          <span className="font-bold uppercase text-[10px]">FREE</span>
        </div>
        <div className="divider my-1"></div>
        <div className="flex justify-between font-black text-sm">
          <span>Grand Total</span>
          <span className="text-primary font-mono">$1,993.95</span>
        </div>
      </div>
      <button className="btn btn-primary btn-block btn-sm font-bold shadow-xs">
        Proceed to Checkout
      </button>
    </div>
  </div>
</div>`}
                htmlCode={`<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div class="lg:col-span-2 overflow-x-auto">
    <table class="table">
      <thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Total</th></tr></thead>
      <tbody><tr><td>Nexus Pro Ultrabook</td><td>$1,899</td><td>1</td><td>$1,899</td></tr></tbody>
    </table>
  </div>
  <div class="card bg-base-200 p-5">
    <h3 class="font-bold">Order Summary</h3>
    <button class="btn btn-primary btn-block mt-4">Checkout</button>
  </div>
</div>`}
              >
                <div className="w-full bg-base-100 rounded-2xl border border-base-300 p-2 overflow-hidden">
                  <TechCartPage cart={sampleCart} />
                </div>
              </ComponentPreviewBlock>

              {/* 2. Restaurant Food Dining Order Bag */}
              <ComponentPreviewBlock
                title="2. Restaurant Gourmet Dining Order Bag"
                subtitle="Designed for restaurant food ordering with course categorization, 10% kitchen service charge, and instant checkout."
                jsxCode={`<div className="max-w-4xl mx-auto p-6 space-y-6">
  <div className="flex items-center justify-between border-b border-base-300 pb-4">
    <div>
      <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Kitchen Order</span>
      <h2 className="text-2xl font-black mt-1">Your Dining Order</h2>
    </div>
  </div>

  <div className="space-y-4">
    {/* Food Order Card */}
    <div className="flex items-center justify-between p-4 bg-base-100 border border-base-300 rounded-2xl">
      <div className="flex items-center gap-4">
        <img src="/images/food-1.jpg" alt="Wagyu Steak" className="w-16 h-16 rounded-xl object-cover" />
        <div>
          <h4 className="font-bold text-sm">Truffle Wagyu Ribeye Steak</h4>
          <span className="text-xs text-base-content/60 font-mono">$48 x 2</span>
        </div>
      </div>
      <div className="text-right">
        <div className="font-black text-primary font-mono text-base">$96</div>
        <button className="btn btn-ghost btn-xs text-error">Remove</button>
      </div>
    </div>
  </div>
</div>`}
                htmlCode={`<div class="card bg-base-100 border border-base-300 p-4">
  <h3 class="font-bold">Dining Kitchen Order</h3>
  <div class="flex justify-between items-center mt-3">
    <span>Truffle Wagyu Ribeye Steak (x2)</span>
    <span class="font-bold font-mono">$96</span>
  </div>
</div>`}
              >
                <div className="w-full bg-base-100 rounded-2xl border border-base-300 p-2 overflow-hidden">
                  <FoodCartPage cart={sampleFoodCart} />
                </div>
              </ComponentPreviewBlock>

              {/* 3. Sticky Order Summary Breakdown Card */}
              <ComponentPreviewBlock
                title="3. Sticky Order Summary Card"
                subtitle="Compact DaisyUI card containing promo code redemption field, financial breakdown, and checkout CTA."
                jsxCode={`<div className="card bg-base-200/60 border border-base-300 rounded-2xl p-6 space-y-4 max-w-sm mx-auto">
  <h3 className="font-black text-base text-base-content">Order Summary</h3>
  
  <div className="space-y-2 text-xs">
    <div className="flex justify-between text-base-content/70">
      <span>Subtotal (3 items)</span>
      <span className="font-mono font-bold text-base-content">$3,047.00</span>
    </div>
    <div className="flex justify-between text-base-content/70">
      <span>Estimated VAT (5%)</span>
      <span className="font-mono font-bold text-base-content">$152.35</span>
    </div>
    <div className="flex justify-between text-success">
      <span>Standard Courier Delivery</span>
      <span className="font-bold uppercase text-[10px]">FREE</span>
    </div>
    <div className="divider my-1"></div>
    <div className="flex justify-between font-black text-base">
      <span>Total Amount</span>
      <span className="text-primary font-mono">$3,199.35</span>
    </div>
  </div>

  <div className="join w-full">
    <input type="text" placeholder="Promo code..." className="input input-sm join-item w-full bg-base-100 text-xs" />
    <button className="btn btn-sm btn-neutral join-item">Apply</button>
  </div>

  <button className="btn btn-primary btn-block btn-sm font-bold shadow-xs">
    Complete Checkout
  </button>
</div>`}
                htmlCode={`<div class="card bg-base-200 border border-base-300 p-6 max-w-sm mx-auto">
  <h3 class="font-bold">Order Summary</h3>
  <div class="flex justify-between mt-2 text-xs"><span>Subtotal</span><span class="font-mono font-bold">$3,047.00</span></div>
  <button class="btn btn-primary btn-block btn-sm mt-4">Complete Checkout</button>
</div>`}
              >
                <div className="max-w-sm mx-auto p-4">
                  <div className="card bg-base-200/60 border border-base-300 rounded-2xl p-6 space-y-4 shadow-xs">
                    <h3 className="font-black text-base text-base-content">Order Summary</h3>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between text-base-content/70">
                        <span>Subtotal (3 items)</span>
                        <span className="font-mono font-bold text-base-content">$3,047.00</span>
                      </div>
                      <div className="flex justify-between text-base-content/70">
                        <span>Estimated VAT (5%)</span>
                        <span className="font-mono font-bold text-base-content">$152.35</span>
                      </div>
                      <div className="flex justify-between text-success">
                        <span>Standard Courier Delivery</span>
                        <span className="font-bold uppercase text-[10px]">FREE</span>
                      </div>
                      <div className="divider my-1"></div>
                      <div className="flex justify-between font-black text-base">
                        <span>Total Amount</span>
                        <span className="text-primary font-mono">$3,199.35</span>
                      </div>
                    </div>
                    <div className="join w-full">
                      <input type="text" placeholder="Promo code..." className="input input-sm join-item w-full bg-base-100 text-xs" />
                      <button className="btn btn-sm btn-neutral join-item">Apply</button>
                    </div>
                    <button className="btn btn-primary btn-block btn-sm font-bold shadow-xs">
                      Complete Checkout
                    </button>
                  </div>
                </div>
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: WISHLIST (Saved Items, Hearts, Move to Cart)
              ========================================================================= */}
          {activeSection === 'wishlist' && (
            <div className="space-y-8">
              <div className="border-b border-base-300 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-secondary badge-outline text-xs font-bold uppercase">Commerce</span>
                  <span className="badge badge-neutral text-xs font-mono font-bold">2 Variants</span>
                </div>
                <h1 className="text-3xl font-black text-base-content tracking-tight">Wishlist</h1>
                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                  Wishlist enables customers to bookmark desirable products, review saved items, and bulk-transfer bookmarks to their shopping cart with a single action.
                </p>
              </div>

              {/* 1. Tech E-Commerce Saved Hardware Wishlist */}
              <ComponentPreviewBlock
                title="1. Hardware Wishlist & Bulk Cart Transfer"
                subtitle="Features heart indicators, Move All to Cart button, single-item remove button, and in-stock badges."
                jsxCode={`<div className="max-w-5xl mx-auto p-6 space-y-6">
  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-base-300 pb-4">
    <div>
      <span className="badge badge-secondary badge-outline text-xs font-bold uppercase gap-1">
        <LuHeart className="fill-secondary text-secondary" /> Saved Wishlist
      </span>
      <h1 className="text-2xl font-black text-base-content mt-1">My Wishlist</h1>
      <p className="text-xs text-base-content/70">Saved hardware & accessories for later purchase</p>
    </div>
    <div className="flex gap-2">
      <button className="btn btn-outline btn-xs font-bold">Clear All</button>
      <button className="btn btn-primary btn-xs font-bold shadow-xs">Move All to Cart</button>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Wishlist Item Card */}
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <figure className="relative h-44 bg-base-200">
        <img src="/images/tech-2.jpg" alt="RTX 5090" className="w-full h-full object-cover" />
        <button className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 text-error shadow-md">
          <LuHeart className="fill-error text-xs" />
        </button>
      </figure>
      <div className="p-4 space-y-1.5">
        <span className="badge badge-primary badge-xs font-bold">Components</span>
        <h3 className="font-bold text-sm">GeForce RTX 5090 Ti Gaming GPU</h3>
        <div className="text-base font-black text-primary font-mono">$1,999</div>
      </div>
      <div className="p-4 pt-0">
        <button className="btn btn-primary btn-block btn-xs font-bold shadow-xs">
          Add to Shopping Cart
        </button>
      </div>
    </div>
  </div>
</div>`}
                htmlCode={`<div class="p-6">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-2xl font-black">My Wishlist</h2>
    <button class="btn btn-primary btn-sm">Move All to Cart</button>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="card bg-base-100 border border-base-300">
      <div class="p-4 font-bold">GeForce RTX 5090 Ti</div>
    </div>
  </div>
</div>`}
              >
                <div className="w-full bg-base-100 rounded-2xl border border-base-300 p-2 overflow-hidden">
                  <TechWishlistPage wishlist={sampleWishlist} />
                </div>
              </ComponentPreviewBlock>

              {/* 2. Fashion Sartorial Lookbook Wishlist */}
              <ComponentPreviewBlock
                title="2. Fashion Atelier Saved Garments"
                subtitle="Editorial fashion bookmarks grid with Italian wool overcoats, tailored blazers, and immediate Move to Bag action."
                jsxCode={`<div className="max-w-5xl mx-auto p-6 space-y-6">
  <div className="flex justify-between items-center border-b border-base-300 pb-4">
    <div>
      <span className="badge badge-secondary badge-sm font-bold">Sartorial Saved</span>
      <h2 className="text-2xl font-black mt-1">Bookmarked Outfits</h2>
    </div>
    <button className="btn btn-primary btn-xs font-bold">Move All to Bag</button>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden p-4 flex flex-row gap-4">
      <img src="/images/fashion-1.jpg" alt="Overcoat" className="w-24 h-32 rounded-xl object-cover" />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-sm">Cashmere Sartorial Overcoat</h4>
          <span className="text-xs text-base-content/60">Italian double-faced virgin wool</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-base font-black text-primary font-mono">$680</span>
          <button className="btn btn-primary btn-xs font-bold">Add to Bag</button>
        </div>
      </div>
    </div>
  </div>
</div>`}
                htmlCode={`<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div class="card bg-base-100 border border-base-300 p-4">
    <h3 class="font-bold">Cashmere Sartorial Overcoat</h3>
    <button class="btn btn-primary btn-xs mt-2">Add to Bag</button>
  </div>
</div>`}
              >
                <div className="w-full bg-base-100 rounded-2xl border border-base-300 p-2 overflow-hidden">
                  <FashionWishlistPage wishlist={sampleFashionWishlist} />
                </div>
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: DRAWER (Cart Slide-Out)
              ========================================================================= */}
          {activeSection === 'drawer' && (
            <div className="space-y-8">
              <div className="border-b border-base-300 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Actions</span>
                  <span className="badge badge-neutral text-xs font-mono font-bold">1 Variant</span>
                </div>
                <h1 className="text-3xl font-black text-base-content tracking-tight">Drawer</h1>
                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                  Drawer is a slide-in sidebar container. Commonly used for rapid slide-out shopping carts, filter panels, and off-canvas mobile menus.
                </p>
              </div>

              <ComponentPreviewBlock
                title="Slide-Out Shopping Cart Drawer"
                subtitle="Full slide-out drawer with backdrop blur, item counters, remove actions, live total calculation, and checkout trigger."
                jsxCode={`<div className="fixed inset-0 z-50 overflow-hidden">
  {/* Backdrop overlay */}
  <div className="absolute inset-0 bg-neutral/50 backdrop-blur-xs transition-opacity" />
  
  {/* Slide-out drawer panel */}
  <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
    <div className="w-screen max-w-md bg-base-100 shadow-2xl flex flex-col justify-between">
      
      {/* Drawer Header */}
      <div className="p-4 border-b border-base-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LuShoppingBag className="text-primary text-lg" />
          <h3 className="font-bold text-base text-base-content">Your Shopping Cart (3)</h3>
        </div>
        <button className="btn btn-ghost btn-circle btn-sm">
          <LuX />
        </button>
      </div>

      {/* Drawer Items List */}
      <div className="p-4 flex-1 overflow-y-auto space-y-3">
        <div className="flex items-center gap-3 p-3 bg-base-200/50 rounded-xl border border-base-300">
          <img src="/images/tech-1.jpg" alt="Item" className="w-14 h-14 rounded-lg object-cover" />
          <div className="flex-1">
            <h4 className="font-bold text-xs">Nexus Pro Ultrabook M3</h4>
            <div className="text-[11px] font-mono text-primary font-bold">$1,899 x 1</div>
          </div>
          <button className="btn btn-ghost btn-xs text-error">
            <LuTrash2 className="text-xs" />
          </button>
        </div>
      </div>

      {/* Drawer Footer Total & Checkout */}
      <div className="p-4 border-t border-base-200 space-y-3 bg-base-200/30">
        <div className="flex justify-between items-center text-sm font-bold">
          <span>Total</span>
          <span className="text-primary font-mono font-black text-base">$3,047.00</span>
        </div>
        <button className="btn btn-primary btn-block btn-sm font-bold shadow-xs">
          Checkout Now
        </button>
      </div>

    </div>
  </div>
</div>`}
                htmlCode={`<div class="drawer drawer-end">
  <input id="cart-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <label for="cart-drawer" class="btn btn-primary">Open Cart Drawer</label>
  </div>
  <div class="drawer-side z-50">
    <label for="cart-drawer" class="drawer-overlay"></label>
    <div class="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
      <h3 class="font-bold text-lg mb-4">Cart Items</h3>
      <button class="btn btn-primary btn-block mt-auto">Checkout</button>
    </div>
  </div>
</div>`}
              >
                <div className="p-6 text-center space-y-4">
                  <div className="max-w-md mx-auto p-6 bg-base-200/40 rounded-2xl border border-base-300 space-y-3">
                    <LuShoppingBag className="text-4xl text-primary mx-auto" />
                    <h3 className="font-bold text-base">Interactive Cart Drawer Demo</h3>
                    <p className="text-xs text-base-content/70">
                      Click the button below to trigger the live slide-out cart drawer with sample hardware items.
                    </p>
                    <button
                      onClick={() => setCartDrawerOpen(true)}
                      className="btn btn-primary btn-sm font-bold gap-2 shadow-xs"
                    >
                      <LuShoppingBag />
                      <span>Open Slide-Out Cart Drawer ({sampleCart.length})</span>
                    </button>
                  </div>

                  <TechCartDrawer
                    isOpen={cartDrawerOpen}
                    onClose={() => setCartDrawerOpen(false)}
                    cart={sampleCart}
                    onCheckout={() => {
                      alert("Checkout initiated from Drawer!");
                      setCartDrawerOpen(false);
                    }}
                  />
                </div>
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: FETCHER (Featured Products Grids across Domains)
              ========================================================================= */}
          {activeSection === 'fetcher' && (
            <div className="space-y-8">
              <div className="border-b border-base-300 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Featured & Feeds</span>
                  <span className="badge badge-neutral text-xs font-mono font-bold">6 Grid Variants</span>
                </div>
                <h1 className="text-3xl font-black text-base-content tracking-tight">Fetcher (Featured Items Grid)</h1>
                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                  Fetcher components retrieve, categorize, and render curated featured items grids (hardware, gourmet specials, lookbooks, courses, doctors, services) with live filter tabs and bookmarking.
                </p>
              </div>

              {/* 1. Tech Featured Hardware Fetcher Grid */}
              <ComponentPreviewBlock
                title="1. Nexus Tech Featured Products Fetcher Grid"
                subtitle="Curated hardware showcase with category pill filters (Laptops, Audio, Monitors), ratings, live Add to Cart, and Wishlist toggling."
                jsxCode={`<section className="py-8 space-y-6">
  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-base-300 pb-4">
    <div>
      <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Curated Showcase</span>
      <h2 className="text-2xl font-black text-base-content tracking-tight mt-1">Featured Hardware & Peripherals</h2>
      <p className="text-xs text-base-content/70">Certified high-performance equipment with official warranty.</p>
    </div>
    
    {/* Category Filter Pills */}
    <div className="join border border-base-300 rounded-xl bg-base-100 p-0.5">
      <button className="btn btn-xs join-item btn-primary">All Gear</button>
      <button className="btn btn-xs join-item btn-ghost">Laptops</button>
      <button className="btn btn-xs join-item btn-ghost">Audio</button>
      <button className="btn btn-xs join-item btn-ghost">Monitors</button>
    </div>
  </div>

  {/* 3-Column Responsive Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Product Card with Heart Bookmark and Buy Now */}
  </div>
</section>`}
                htmlCode={`<section class="space-y-6">
  <div class="flex justify-between items-center">
    <h2 class="text-2xl font-black">Featured Products</h2>
    <div class="join"><button class="btn btn-sm btn-primary">All</button></div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Products Cards -->
  </div>
</section>`}
              >
                <div className="w-full bg-base-100 rounded-2xl border border-base-300 p-4">
                  <TechFeaturedProducts
                    onAddToCart={(p) => alert(`Added ${p.title} to cart!`)}
                    onToggleWishlist={(p) => toggleWish(p.id)}
                    isInWishlist={(id) => Boolean(wishlistMap[id])}
                  />
                </div>
              </ComponentPreviewBlock>

              {/* 2. Restaurant Food Chef Specials Fetcher Grid */}
              <ComponentPreviewBlock
                title="2. Restaurant Chef's Specials Fetcher Grid"
                subtitle="Gourmet dining grid showcasing chef recommendations, spice tags, and instant kitchen ordering."
                jsxCode={`<section className="space-y-6">
  <div className="border-b border-base-300 pb-4">
    <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Chef Selections</span>
    <h2 className="text-2xl font-black text-base-content mt-1">Artisan Signature Dishes</h2>
    <p className="text-xs text-base-content/70">Handcrafted with organic farm produce and Mediterranean heritage.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Food Cards Grid */}
  </div>
</section>`}
                htmlCode={`<section class="space-y-6">
  <h2 class="text-2xl font-black">Chef Specials</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Food Cards -->
  </div>
</section>`}
              >
                <div className="w-full bg-base-100 rounded-2xl border border-base-300 p-4">
                  <FoodChefSpecials
                    onAddToCart={(f) => alert(`Ordered dish: ${f.title}`)}
                    onToggleWishlist={(f) => toggleWish(f.id)}
                    isInWishlist={(id) => Boolean(wishlistMap[id])}
                  />
                </div>
              </ComponentPreviewBlock>

              {/* 3. Fashion Lookbook Featured Products */}
              <ComponentPreviewBlock
                title="3. Fashion Seasonal Lookbook Fetcher Grid"
                subtitle="Curated apparel lookbook with category tags, pricing, and direct add to bag."
                jsxCode={`<section className="space-y-6">
  <div className="text-center max-w-xl mx-auto space-y-2">
    <span className="badge badge-primary badge-outline text-xs font-bold uppercase tracking-widest">Seasonal Capsule</span>
    <h2 className="text-3xl font-black">Featured Collection</h2>
    <p className="text-xs text-base-content/70">Timeless European tailoring crafted from virgin wool and linen.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Fashion Cards */}
  </div>
</section>`}
                htmlCode={`<section>
  <h2 class="text-2xl font-black text-center">Featured Collection</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"></div>
</section>`}
              >
                <div className="w-full bg-base-100 rounded-2xl border border-base-300 p-4">
                  <FashionFeaturedProducts
                    onAddToCart={(p) => alert(`Added ${p.title} to bag!`)}
                    onToggleWishlist={(p) => toggleWish(p.id)}
                    isInWishlist={(id) => Boolean(wishlistMap[id])}
                  />
                </div>
              </ComponentPreviewBlock>

              {/* 4. Cambridge Academic Curriculum Courses Grid */}
              <ComponentPreviewBlock
                title="4. Cambridge Academic Curriculum Courses Grid"
                subtitle="School curriculum directory with stage filtering (Primary, Middle, IGCSE, A Levels) and course syllabus triggers."
                jsxCode={`<section className="space-y-6">
  <div className="border-b border-base-300 pb-4">
    <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Curriculum Directory</span>
    <h2 className="text-2xl font-black text-base-content mt-1">Academic Qualifications</h2>
    <p className="text-xs text-base-content/70">Rigorous British education pathway designed for holistic student success.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Course Cards Grid */}
  </div>
</section>`}
                htmlCode={`<section class="space-y-6">
  <h2 class="text-2xl font-black">Academic Qualifications</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
</section>`}
              >
                <div className="w-full bg-base-100 rounded-2xl border border-base-300 p-4">
                  <SchoolFeaturedCourses
                    onSelectCourse={(c) => alert(`Course selected: ${c.title}`)}
                  />
                </div>
              </ComponentPreviewBlock>

              {/* 5. Hospital Specialist Doctors Grid */}
              <ComponentPreviewBlock
                title="5. Hospital Consultant Physicians Grid"
                subtitle="Medical specialist directory with department pills, consulting fees, and instant OPD booking."
                jsxCode={`<section className="space-y-6">
  <div className="border-b border-base-300 pb-4">
    <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Medical Specialists</span>
    <h2 className="text-2xl font-black text-base-content mt-1">Senior Consultant Physicians</h2>
    <p className="text-xs text-base-content/70">Distinguished faculty across Cardiology, Neurology, Pediatrics, and Orthopedics.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Doctor Cards Grid */}
  </div>
</section>`}
                htmlCode={`<section>
  <h2 class="text-2xl font-black">Consultant Physicians</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
</section>`}
              >
                <div className="w-full bg-base-100 rounded-2xl border border-base-300 p-4">
                  <HospitalFeaturedDoctors
                    onBookDoctor={(doc) => alert(`Booking consultation with ${doc.title}`)}
                  />
                </div>
              </ComponentPreviewBlock>

              {/* 6. IT Enterprise Cloud Solutions Grid */}
              <ComponentPreviewBlock
                title="6. Vertex Enterprise IT Cloud Solutions Grid"
                subtitle="Corporate IT solutions showcase with multi-cloud architecture, DevOps SLA checkmarks, and RFP triggers."
                jsxCode={`<section className="space-y-6">
  <div className="border-b border-base-300 pb-4">
    <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Enterprise IT</span>
    <h2 className="text-2xl font-black text-base-content mt-1">Cloud & Infrastructure Solutions</h2>
    <p className="text-xs text-base-content/70">Enterprise-grade engineering with 99.999% SLA uptime guarantees.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Service Cards Grid */}
  </div>
</section>`}
                htmlCode={`<section>
  <h2 class="text-2xl font-black">Enterprise Cloud Solutions</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
</section>`}
              >
                <div className="w-full bg-base-100 rounded-2xl border border-base-300 p-4">
                  <ITFirmFeaturedServices
                    onSelectService={(s) => alert(`Service selected: ${s.title}`)}
                  />
                </div>
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: CARD (tech, food, hospital, itfirm, school, college, fashion)
              ========================================================================= */}
          {activeSection === 'card' && (
            <div className="space-y-8">
              <div className="border-b border-base-300 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Data Display</span>
                  <span className="badge badge-neutral text-xs font-mono font-bold">7 Variants</span>
                </div>
                <h1 className="text-3xl font-black text-base-content tracking-tight">Card</h1>
                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                  Cards are used to group and display related content in a structured container. Here are 7 production cards with full wishlist toggles, badges, action CTAs, and fallbacks.
                </p>
              </div>

              {/* 1. Tech Product Card */}
              <ComponentPreviewBlock
                title="1. Tech E-Commerce Product Card"
                subtitle="Features image hover scale, wishlist heart toggle, specs tags, ratings, Add to Cart, and Buy Now."
                jsxCode={`<div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between max-w-xs">
  <div>
    <figure className="relative h-48 bg-base-200 overflow-hidden">
      <img src="/images/tech-1.jpg" alt="Nexus Pro Ultrabook" className="w-full h-full object-cover" />
      <span className="badge badge-primary badge-sm font-bold absolute top-3 left-3 text-[10px]">
        Laptops
      </span>
      <button className="btn btn-circle btn-xs bg-base-100/90 absolute top-3 right-3 shadow-md">
        <LuHeart className="text-xs" />
      </button>
    </figure>

    <div className="p-4 space-y-2">
      <h3 className="font-bold text-base text-base-content">Nexus Pro Ultrabook M3</h3>
      <p className="text-xs text-base-content/70 line-clamp-2">Ultra-slim magnesium chassis with 16-core GPU.</p>
    </div>
  </div>

  <div className="p-4 pt-0 border-t border-base-200 mt-2 space-y-3">
    <div className="flex justify-between items-baseline pt-2">
      <span className="text-lg font-black text-primary font-mono">$1,899</span>
      <span className="text-[11px] text-success font-semibold">In Stock</span>
    </div>
    <div className="grid grid-cols-2 gap-2">
      <button className="btn btn-outline btn-xs font-bold">Cart</button>
      <button className="btn btn-primary btn-xs font-bold shadow-xs">Buy Now</button>
    </div>
  </div>
</div>`}
                htmlCode={`<div class="card bg-base-100 border border-base-300 rounded-2xl max-w-xs overflow-hidden">
  <figure class="relative h-48 bg-base-200">
    <img src="/images/tech-1.jpg" alt="Product" class="w-full h-full object-cover" />
  </figure>
  <div class="p-4">
    <h3 class="font-bold text-base text-base-content">Nexus Pro Ultrabook</h3>
    <div class="text-lg font-black text-primary mt-2 font-mono">$1,899</div>
  </div>
</div>`}
              >
                <div className="max-w-xs mx-auto">
                  <TechProductCard
                    onToggleWishlist={(p) => toggleWish(p.id)}
                    isInWishlist={(id) => Boolean(wishlistMap[id])}
                  />
                </div>
              </ComponentPreviewBlock>

              {/* 2. Restaurant Food Card */}
              <ComponentPreviewBlock
                title="2. Restaurant Gourmet Dish Card"
                subtitle="Includes chef special tag, fresh prep status, star ratings, Add to Order, and Instant button."
                jsxCode={`<div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all max-w-xs flex flex-col justify-between">
  <div>
    <figure className="relative h-44 bg-base-200">
      <img src="/images/food-1.jpg" alt="Wagyu Steak" className="w-full h-full object-cover" />
      <span className="badge badge-primary badge-sm font-bold absolute top-3 left-3 text-[11px]">Steakhouse</span>
      <button className="btn btn-circle btn-xs bg-base-100/90 absolute top-3 right-3 shadow-md">
        <LuHeart className="text-xs" />
      </button>
    </figure>
    <div className="p-4 space-y-1.5">
      <h3 className="font-bold text-sm text-base-content">Truffle Wagyu Ribeye Steak</h3>
      <p className="text-xs text-base-content/70 line-clamp-2">Charcoal grilled Australian Wagyu with black truffle reduction.</p>
    </div>
  </div>
  <div className="p-4 pt-0 border-t border-base-200 mt-2 space-y-2">
    <div className="flex justify-between items-baseline pt-2">
      <span className="text-base font-black text-primary font-mono">$48</span>
      <span className="text-[11px] text-success font-semibold">Fresh Prep</span>
    </div>
    <div className="grid grid-cols-2 gap-2">
      <button className="btn btn-outline btn-xs font-bold">Order</button>
      <button className="btn btn-primary btn-xs font-bold">Instant</button>
    </div>
  </div>
</div>`}
                htmlCode={`<div class="card bg-base-100 border border-base-300 rounded-2xl max-w-xs overflow-hidden">
  <figure class="h-44 bg-base-200">
    <img src="/images/food-1.jpg" class="w-full h-full object-cover" />
  </figure>
  <div class="p-4">
    <h3 class="font-bold text-sm">Truffle Wagyu Ribeye Steak</h3>
    <div class="text-base font-black text-primary font-mono mt-2">$48</div>
  </div>
</div>`}
              >
                <div className="max-w-xs mx-auto">
                  <FoodCard
                    onToggleWishlist={(f) => toggleWish(f.id)}
                    isInWishlist={(id) => Boolean(wishlistMap[id])}
                  />
                </div>
              </ComponentPreviewBlock>

              {/* 3. Hospital Doctor Card */}
              <ComponentPreviewBlock
                title="3. Hospital Consultant Physician Card"
                subtitle="Shows physician qualifications, OPD consulting fees, department badge, and Book Now CTA."
                jsxCode={`<div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md max-w-xs flex flex-col justify-between">
  <div>
    <figure className="relative h-44 bg-base-200">
      <img src="/images/doctor-1.jpg" alt="Physician" className="w-full h-full object-cover" />
      <span className="badge badge-primary badge-sm font-bold absolute top-3 left-3 text-[10px]">Cardiology</span>
      <button className="btn btn-circle btn-xs bg-base-100/90 absolute top-3 right-3 shadow-md">
        <LuHeart className="text-xs" />
      </button>
    </figure>
    <div className="p-4 space-y-1.5">
      <h3 className="font-bold text-base text-base-content">Dr. Farhana Rahman, MD</h3>
      <p className="text-xs text-base-content/70 line-clamp-2">Chief Interventional Cardiologist with 18+ years experience.</p>
    </div>
  </div>
  <div className="p-4 pt-0 border-t border-base-200 mt-2 flex items-center justify-between">
    <div>
      <div className="text-[10px] text-base-content/60">Consultation Fee</div>
      <div className="text-base font-black text-primary font-mono">BDT 1,500</div>
    </div>
    <button className="btn btn-primary btn-xs font-bold gap-1 shadow-xs">
      <LuCalendar className="text-xs" />
      <span>Book Now</span>
    </button>
  </div>
</div>`}
                htmlCode={`<div class="card bg-base-100 border border-base-300 rounded-2xl max-w-xs overflow-hidden">
  <div class="p-4">
    <h3 class="font-bold text-base">Dr. Farhana Rahman, MD</h3>
    <button class="btn btn-primary btn-xs font-bold mt-2">Book Now</button>
  </div>
</div>`}
              >
                <div className="max-w-xs mx-auto">
                  <HospitalDoctorCard
                    onToggleWishlist={(d) => toggleWish(d.id)}
                    isInWishlist={(id) => Boolean(wishlistMap[id])}
                    onBook={(doc) => alert(`Booking consultation with ${doc.title}`)}
                  />
                </div>
              </ComponentPreviewBlock>

              {/* 4. IT Firm Service Card */}
              <ComponentPreviewBlock
                title="4. IT Firm Enterprise Service Card"
                subtitle="Contains cloud engineering deliverables, 99.999% SLA metrics checkmarks, and Architecture RFP button."
                jsxCode={`<div className="card bg-base-100 border border-base-300 rounded-2xl p-6 shadow-xs hover:shadow-md max-w-xs flex flex-col justify-between">
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
        <LuCpu />
      </div>
      <button className="btn btn-circle btn-xs btn-ghost">
        <LuHeart className="text-sm text-base-content/50" />
      </button>
    </div>
    <h3 className="font-bold text-base text-base-content">Multi-Cloud Migration & Kubernetes</h3>
    <p className="text-xs text-base-content/70">Zero-downtime architectural migration across AWS, Google Cloud, and Azure.</p>
  </div>
  <div className="pt-6 border-t border-base-200 mt-4 flex items-center justify-between">
    <div>
      <span className="text-[10px] text-base-content/50 uppercase font-bold block">Starting At</span>
      <span className="text-lg font-black text-primary font-mono">$2,500</span>
    </div>
    <button className="btn btn-outline btn-xs font-semibold">Details</button>
  </div>
</div>`}
                htmlCode={`<div class="card bg-base-100 border border-base-300 rounded-2xl p-6 max-w-xs">
  <h3 class="font-bold text-base">Multi-Cloud Migration</h3>
  <div class="text-lg font-black text-primary mt-3">$2,500</div>
</div>`}
              >
                <div className="max-w-xs mx-auto">
                  <ITFirmServiceCard
                    onToggleWishlist={(s) => toggleWish(s.id)}
                    isInWishlist={(id) => Boolean(wishlistMap[id])}
                  />
                </div>
              </ComponentPreviewBlock>

              {/* 5. School Course Card */}
              <ComponentPreviewBlock
                title="5. Cambridge Academic Course Card"
                subtitle="Features academic stage badge, curriculum description, tuition fee, and syllabus button."
                jsxCode={`<div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between max-w-xs">
  <div>
    <figure className="relative h-44 bg-base-200 overflow-hidden">
      <img src="/images/edu-1.jpg" alt="Course" className="w-full h-full object-cover" />
      <button className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 shadow-md">
        <LuHeart className="text-xs" />
      </button>
    </figure>
    <div className="p-4 space-y-2">
      <span className="badge badge-primary badge-sm font-bold text-[10px]">Primary School</span>
      <h3 className="font-bold text-base text-base-content">Cambridge Primary Stage 1-6</h3>
      <p className="text-xs text-base-content/70 line-clamp-2">Foundational English, Mathematics, Science, and Global Perspectives.</p>
    </div>
  </div>
  <div className="p-4 pt-0 border-t border-base-200 mt-3 flex items-center justify-between">
    <div className="text-sm font-black text-primary font-mono">$4,200/yr</div>
    <button className="btn btn-outline btn-xs font-semibold gap-1">
      <LuGraduationCap className="text-xs" />
      <span>Details</span>
    </button>
  </div>
</div>`}
                htmlCode={`<div class="card bg-base-100 border border-base-300 rounded-2xl max-w-xs">
  <div class="p-4">
    <span class="badge badge-primary text-xs">Primary School</span>
    <h3 class="font-bold mt-2">Cambridge Primary Stage 1-6</h3>
  </div>
</div>`}
              >
                <div className="max-w-xs mx-auto">
                  <CourseCard
                    onToggleWishlist={(c) => toggleWish(c.id)}
                    isInWishlist={(id) => Boolean(wishlistMap[id])}
                  />
                </div>
              </ComponentPreviewBlock>

              {/* 6. College Academic Department Card (Real JSX markup!) */}
              <ComponentPreviewBlock
                title="6. College Academic Faculty & Degree Card"
                subtitle="Displays academic discipline badge, degree accreditation, annual tuition rate, and save degree heart button."
                jsxCode={`<div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between max-w-xs">
  <div>
    <figure className="relative h-44 bg-base-200 overflow-hidden cursor-pointer">
      <img
        src="/images/banner-edu-2.jpg"
        alt="Department of Computer Science & Engineering"
        className="w-full h-full object-cover"
      />
      <button title="Save Degree" className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 shadow-md">
        <LuHeart className="fill-error text-error text-xs" />
      </button>
    </figure>
    <div className="p-4 space-y-2">
      <span className="badge badge-primary badge-sm font-bold text-[10px]">Computer Science</span>
      <h3 className="font-bold text-base text-base-content leading-snug">
        Department of Computer Science & Engineering
      </h3>
      <p className="text-xs text-base-content/70 line-clamp-2">
        Four-year Bachelor of Science curriculum accredited by IEB with specialized tracks in AI and Systems Architecture.
      </p>
    </div>
  </div>
  <div className="p-4 pt-0 border-t border-base-200 mt-3 flex items-center justify-between">
    <div>
      <div className="text-[10px] text-base-content/60">Annual Tuition</div>
      <div className="text-base font-black text-primary font-mono">BDT 85,000</div>
    </div>
    <button className="btn btn-outline btn-xs font-semibold gap-1">
      <LuGraduationCap className="text-xs" />
      <span>Program Details</span>
    </button>
  </div>
</div>`}
                htmlCode={`<div class="card bg-base-100 border border-base-300 rounded-2xl max-w-xs overflow-hidden">
  <figure class="h-44 bg-base-200">
    <img src="/images/banner-edu-2.jpg" class="w-full h-full object-cover" />
  </figure>
  <div class="p-4">
    <span class="badge badge-primary text-xs">Computer Science</span>
    <h3 class="font-bold text-base mt-2">Department of Computer Science</h3>
    <div class="text-base font-black text-primary font-mono mt-2">BDT 85,000</div>
  </div>
</div>`}
              >
                <div className="max-w-xs mx-auto">
                  <CollegeDepartmentCard
                    onToggleWishlist={(dept) => toggleWish(dept.id)}
                    isInWishlist={(id) => Boolean(wishlistMap[id])}
                  />
                </div>
              </ComponentPreviewBlock>

              {/* 7. Fashion Product Card */}
              <ComponentPreviewBlock
                title="7. Fashion Sartorial Apparel Card"
                subtitle="Editorial fashion card with seasonal category pill, zoom hover effect, wishlist bookmark, and quick Bag button."
                jsxCode={`<div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between max-w-xs">
  <div>
    <figure className="relative h-56 bg-base-200 overflow-hidden">
      <img src="/images/item-1.jpg" alt="Tailored Blazer" className="w-full h-full object-cover hover:scale-105 transition-transform" />
      <span className="badge badge-primary badge-sm font-bold absolute top-3 left-3 text-[10px]">Jackets</span>
      <button className="btn btn-circle btn-xs bg-base-100/90 absolute top-3 right-3 shadow-md">
        <LuHeart className="text-xs" />
      </button>
    </figure>
    <div className="p-4 space-y-2">
      <h3 className="font-bold text-base text-base-content line-clamp-1">Italian Wool Tailored Blazer</h3>
      <p className="text-xs text-base-content/70 line-clamp-2">Structured canvassed shoulder line with horn buttons.</p>
    </div>
  </div>
  <div className="p-4 pt-0 border-t border-base-200 mt-2 space-y-3">
    <div className="flex items-baseline justify-between pt-2">
      <span className="text-base font-black text-primary font-mono">$520</span>
      <span className="text-[11px] text-success font-semibold">In Stock</span>
    </div>
    <div className="grid grid-cols-2 gap-2">
      <button className="btn btn-outline btn-xs font-bold">Bag</button>
      <button className="btn btn-primary btn-xs font-bold">Buy Now</button>
    </div>
  </div>
</div>`}
                htmlCode={`<div class="card bg-base-100 border border-base-300 rounded-2xl max-w-xs">
  <div class="p-4">
    <h3 class="font-bold text-base">Italian Wool Tailored Blazer</h3>
    <div class="text-base font-black text-primary mt-2">$520</div>
  </div>
</div>`}
              >
                <div className="max-w-xs mx-auto">
                  <FashionProductCard
                    onToggleWishlist={(p) => toggleWish(p.id)}
                    isInWishlist={(id) => Boolean(wishlistMap[id])}
                  />
                </div>
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: HERO & BANNER (heroes, alert bars, counters)
              ========================================================================= */}
          {activeSection === 'hero' && (
            <div className="space-y-8">
              <div className="border-b border-base-300 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Layout</span>
                  <span className="badge badge-neutral text-xs font-mono font-bold">8 Variants</span>
                </div>
                <h1 className="text-3xl font-black text-base-content tracking-tight">Hero & Banner</h1>
                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                  Hero and Banner components establish primary visual hierarchy, deliver promotional announcements, and convey brand authority.
                </p>
              </div>

              {/* 1. Tech Banner */}
              <ComponentPreviewBlock
                title="1. Nexus Tech Promotional Hardware Banner"
                subtitle="Hero section highlighting flagship ultrabooks with pricing callout and instant preorder CTA."
                jsxCode={`<div className="hero bg-base-200 rounded-3xl overflow-hidden p-8 sm:p-12">
  <div className="hero-content flex-col lg:flex-row-reverse gap-8 max-w-6xl">
    <img src="/images/banner-tech.jpg" className="max-w-sm rounded-2xl shadow-2xl w-full object-cover" />
    <div className="space-y-4">
      <span className="badge badge-primary font-bold">Next-Gen Architecture</span>
      <h1 className="text-4xl font-black">Nexus Pro M3 Ultrabook</h1>
      <p className="text-sm text-base-content/70">Unprecedented computing performance with 22-hour battery life and Liquid Retina XDR display.</p>
      <div className="flex gap-3">
        <button className="btn btn-primary btn-sm font-bold">Preorder Now</button>
        <button className="btn btn-outline btn-sm font-bold">Explore Specs</button>
      </div>
    </div>
  </div>
</div>`}
                htmlCode={`<div class="hero bg-base-200 rounded-3xl p-8">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="space-y-4">
      <h1 class="text-4xl font-black">Nexus Pro M3</h1>
      <button class="btn btn-primary">Preorder</button>
    </div>
  </div>
</div>`}
              >
                <TechBanner />
              </ComponentPreviewBlock>

              {/* 2. Restaurant Banner */}
              <ComponentPreviewBlock
                title="2. Restaurant Gourmet Bistro Banner"
                subtitle="Woodfire hearth ambiance with chef reservation button and culinary heritage badge."
                jsxCode={`<div className="relative rounded-3xl overflow-hidden bg-neutral text-neutral-content p-8 sm:p-14 text-center">
  <div className="max-w-2xl mx-auto space-y-4">
    <span className="badge badge-primary badge-outline text-xs uppercase font-bold">Artisan Mediterranean</span>
    <h1 className="text-4xl sm:text-5xl font-black">Culinary Tradition Meets Modern Passion</h1>
    <p className="text-xs sm:text-sm opacity-80">Handmade pasta, charcoal-seared meats, and fine Mediterranean wines.</p>
    <button className="btn btn-primary btn-sm font-bold">Reserve a Table Tonight</button>
  </div>
</div>`}
                htmlCode={`<div class="bg-neutral text-neutral-content p-12 text-center rounded-3xl">
  <h1 class="text-4xl font-black">La Terrazza Bistro</h1>
  <button class="btn btn-primary mt-4">Reserve</button>
</div>`}
              >
                <FoodBanner />
              </ComponentPreviewBlock>

              {/* 3. Hospital Emergency Bar */}
              <ComponentPreviewBlock
                title="3. Hospital Emergency 24/7 Red Alert Bar"
                subtitle="High-visibility urgent care header bar with flashing ambulance hotline and immediate directions."
                jsxCode={`<div className="bg-error text-error-content px-4 py-2.5 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-md">
  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
    <LuShieldAlert className="text-lg animate-pulse" />
    <span>24/7 Emergency Medical Response & Critical Care</span>
  </div>
  <div className="flex items-center gap-4 text-xs font-bold">
    <span>Hotline: +880 1800-EMERGENCY</span>
    <button className="btn btn-neutral btn-xs font-bold">Request Ambulance</button>
  </div>
</div>`}
                htmlCode={`<div class="bg-error text-error-content p-3 rounded-2xl flex justify-between">
  <span class="font-bold">24/7 Emergency Hotline</span>
  <button class="btn btn-neutral btn-xs">Call</button>
</div>`}
              >
                <EmergencyBar />
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: PRODUCT DETAIL (Detail View, Specs, Zoom, Buy)
              ========================================================================= */}
          {activeSection === 'detail' && (
            <div className="space-y-8">
              <div className="border-b border-base-300 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Commerce</span>
                  <span className="badge badge-neutral text-xs font-mono font-bold">2 Variants</span>
                </div>
                <h1 className="text-3xl font-black text-base-content tracking-tight">Product & Item Detail</h1>
                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                  Full product detail views with interactive image zoom, specifications sheet, warranty verification, quantity selection, Add to Cart, Buy Now, and Wishlist toggling.
                </p>
              </div>

              {/* 1. Tech Hardware Detail Page */}
              <ComponentPreviewBlock
                title="1. High-Performance Hardware Detail View"
                subtitle="2-column product layout with high-resolution image zoom lens, technical specs sheet, stock status, and direct purchase CTAs."
                jsxCode={`<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto p-6">
  {/* Left: Image Zoom Magnifier */}
  <div>
    <div className="relative overflow-hidden rounded-2xl border border-base-300 bg-base-200">
      <img src="/images/tech-1.jpg" alt="Nexus Pro Ultrabook" className="w-full object-cover" />
    </div>
  </div>

  {/* Right: Specifications & Purchasing Controls */}
  <div className="space-y-6">
    <div>
      <span className="badge badge-primary font-bold text-xs">Flagship Laptops</span>
      <h1 className="text-3xl font-black text-base-content mt-2">Nexus Pro Ultrabook M3</h1>
      <div className="text-2xl font-black text-primary font-mono mt-2">$1,899</div>
      <p className="text-xs text-base-content/70 mt-2">16-core Apple Silicon CPU with unified memory architecture and Liquid Retina display.</p>
    </div>

    {/* Technical Specs Breakdown */}
    <div className="border border-base-300 rounded-2xl p-4 bg-base-200/40 text-xs space-y-2">
      <div className="flex justify-between"><span>Processor</span><span className="font-bold">M3 Pro (12-core CPU)</span></div>
      <div className="flex justify-between"><span>Unified Memory</span><span className="font-bold">36GB RAM</span></div>
      <div className="flex justify-between"><span>Storage</span><span className="font-bold">1TB NVMe PCIe 4.0</span></div>
      <div className="flex justify-between"><span>Battery Life</span><span className="font-bold">Up to 22 Hours</span></div>
    </div>

    {/* Actions */}
    <div className="flex gap-3">
      <button className="btn btn-outline flex-1 btn-sm font-bold">Add to Cart</button>
      <button className="btn btn-primary flex-1 btn-sm font-bold shadow-xs">Buy Now</button>
      <button className="btn btn-circle btn-sm btn-ghost border border-base-300">
        <LuHeart className="text-error" />
      </button>
    </div>
  </div>
</div>`}
                htmlCode={`<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <img src="/images/tech-1.jpg" class="rounded-2xl" />
  <div>
    <h1 class="text-3xl font-black">Nexus Pro Ultrabook</h1>
    <div class="text-2xl font-mono text-primary">$1,899</div>
    <button class="btn btn-primary mt-4">Buy Now</button>
  </div>
</div>`}
              >
                <div className="w-full bg-base-100 rounded-2xl border border-base-300 p-2 overflow-hidden">
                  <TechDetailPage
                    onAddToCart={(p) => alert(`Added ${p.title} to cart!`)}
                    onToggleWishlist={(p) => toggleWish(p.id)}
                    isInWishlist={(id) => Boolean(wishlistMap[id])}
                  />
                </div>
              </ComponentPreviewBlock>

              {/* 2. Restaurant Food Dish Detail */}
              <ComponentPreviewBlock
                title="2. Restaurant Gourmet Dish Detail View"
                subtitle="Culinary dish presentation with dietary allergens, spice index, wine pairing recommendation, and kitchen order button."
                jsxCode={`<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto p-6">
  <div>
    <img src="/images/food-1.jpg" alt="Dish" className="rounded-2xl w-full object-cover" />
  </div>
  <div className="space-y-4">
    <span className="badge badge-primary font-bold">Steakhouse Special</span>
    <h2 className="text-3xl font-black">Truffle Wagyu Ribeye Steak</h2>
    <div className="text-2xl font-black text-primary font-mono">$48</div>
    <p className="text-xs text-base-content/70">Australian Wagyu MB9+ cut grilled over binchotan charcoal with fresh Périgord truffle reduction.</p>
    <button className="btn btn-primary btn-sm font-bold">Order Dish for Table</button>
  </div>
</div>`}
                htmlCode={`<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <img src="/images/food-1.jpg" class="rounded-2xl" />
  <div>
    <h2 class="text-3xl font-black">Truffle Wagyu Ribeye</h2>
    <button class="btn btn-primary mt-4">Order</button>
  </div>
</div>`}
              >
                <div className="w-full bg-base-100 rounded-2xl border border-base-300 p-2 overflow-hidden">
                  <FoodDetailPage
                    onAddToCart={(f) => alert(`Ordered dish: ${f.title}`)}
                    onToggleWishlist={(f) => toggleWish(f.id)}
                    isInWishlist={(id) => Boolean(wishlistMap[id])}
                  />
                </div>
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: CATALOG (Full Products Catalog with Multi-Filters)
              ========================================================================= */}
          {activeSection === 'catalog' && (
            <div className="space-y-8">
              <div className="border-b border-base-300 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Commerce</span>
                  <span className="badge badge-neutral text-xs font-mono font-bold">1 Variant</span>
                </div>
                <h1 className="text-3xl font-black text-base-content tracking-tight">Catalog & Filters</h1>
                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                  Full product catalog page with search input, category filter buttons, price range slider, sort dropdown, and interactive product cards.
                </p>
              </div>

              <ComponentPreviewBlock
                title="Full E-Commerce Products Catalog"
                subtitle="Complete catalog page with real-time text query filtering, category pill selection, price threshold slider, and ascending/descending sort."
                jsxCode={`<div className="max-w-7xl mx-auto p-6 space-y-8">
  {/* Catalog Header with Search & Filters */}
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-base-300 pb-6">
    <div>
      <h1 className="text-3xl font-black">Products Catalog</h1>
      <p className="text-xs text-base-content/70">Browse verified electronics and hardware</p>
    </div>

    <div className="flex items-center gap-3">
      {/* Search Input */}
      <div className="relative">
        <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
        <input type="text" placeholder="Search devices..." className="input input-sm pl-9 bg-base-200 rounded-xl text-xs" />
      </div>

      {/* Sort Dropdown */}
      <select className="select select-sm bg-base-200 rounded-xl text-xs font-bold">
        <option>Sort: Featured</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  </div>

  {/* Category Pills & Price Slider */}
  <div className="flex flex-wrap items-center justify-between gap-4 bg-base-200/40 p-4 rounded-2xl border border-base-300">
    <div className="flex flex-wrap gap-2">
      <button className="btn btn-xs btn-primary">All Products</button>
      <button className="btn btn-xs btn-ghost">Laptops</button>
      <button className="btn btn-xs btn-ghost">Monitors</button>
      <button className="btn btn-xs btn-ghost">Audio</button>
    </div>
    <div className="flex items-center gap-3 text-xs font-bold">
      <span>Max Price: $3,000</span>
      <input type="range" min="100" max="3000" className="range range-xs range-primary w-32" />
    </div>
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Product Cards */}
  </div>
</div>`}
                htmlCode={`<div class="space-y-6">
  <div class="flex justify-between items-center">
    <h1 class="text-3xl font-black">Products Catalog</h1>
    <input type="text" placeholder="Search..." class="input input-sm" />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
</div>`}
              >
                <div className="w-full bg-base-100 rounded-2xl border border-base-300 p-2 overflow-hidden">
                  <TechProductsPage
                    onAddToCart={(p) => alert(`Added ${p.title} to cart!`)}
                    onToggleWishlist={(p) => toggleWish(p.id)}
                    isInWishlist={(id) => Boolean(wishlistMap[id])}
                  />
                </div>
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: FORMS & AUTH (Login, Sign-up, Admission, Reservation)
              ========================================================================= */}
          {activeSection === 'forms' && (
            <div className="space-y-8">
              <div className="border-b border-base-300 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Forms & Inputs</span>
                  <span className="badge badge-neutral text-xs font-mono font-bold">4 Variants</span>
                </div>
                <h1 className="text-3xl font-black text-base-content tracking-tight">Forms & Auth</h1>
                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                  Authentication and inquiry forms featuring validation, accessible labels, security badges, and responsive card containers.
                </p>
              </div>

              {/* 1. Login Form */}
              <ComponentPreviewBlock
                title="1. User Sign-In / Login Form"
                subtitle="Clean DaisyUI authentication card with username/email input, password reveal, Remember Me checkbox, and OAuth triggers."
                jsxCode={`<div className="card bg-base-100 border border-base-300 rounded-3xl p-8 max-w-md mx-auto shadow-sm space-y-6">
  <div className="text-center space-y-1">
    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mx-auto">
      <LuLock />
    </div>
    <h2 className="text-2xl font-black">Sign In to Your Account</h2>
    <p className="text-xs text-base-content/70">Access your orders, saved wishlist, and devices</p>
  </div>

  <form className="space-y-4">
    <div className="space-y-1">
      <label className="text-xs font-bold text-base-content">Username or Email</label>
      <input type="text" placeholder="user@company.com" className="input input-sm bg-base-200 w-full rounded-xl text-xs" />
    </div>

    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <label className="font-bold text-base-content">Password</label>
        <a href="#" className="text-primary hover:underline">Forgot?</a>
      </div>
      <input type="password" placeholder="••••••••" className="input input-sm bg-base-200 w-full rounded-xl text-xs" />
    </div>

    <div className="flex items-center gap-2">
      <input type="checkbox" defaultChecked className="checkbox checkbox-xs checkbox-primary" />
      <span className="text-xs font-semibold">Keep me signed in for 30 days</span>
    </div>

    <button type="submit" className="btn btn-primary btn-block btn-sm font-bold shadow-xs">
      Sign In
    </button>
  </form>
</div>`}
                htmlCode={`<div class="card bg-base-100 border border-base-300 p-8 max-w-md mx-auto">
  <h2 class="text-2xl font-black text-center">Sign In</h2>
  <form class="space-y-4 mt-4">
    <input type="text" placeholder="Email" class="input input-sm w-full" />
    <input type="password" placeholder="Password" class="input input-sm w-full" />
    <button class="btn btn-primary btn-block btn-sm">Sign In</button>
  </form>
</div>`}
              >
                <div className="max-w-md mx-auto p-4">
                  <TechLoginPage />
                </div>
              </ComponentPreviewBlock>

              {/* 2. Sign-Up Form */}
              <ComponentPreviewBlock
                title="2. User Registration / Sign-Up Form"
                subtitle="Multi-field user onboarding form with full name, email, password strength confirmation, and terms agreement."
                jsxCode={`<div className="card bg-base-100 border border-base-300 rounded-3xl p-8 max-w-md mx-auto shadow-sm space-y-6">
  <div className="text-center space-y-1">
    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mx-auto">
      <LuUser />
    </div>
    <h2 className="text-2xl font-black">Create an Account</h2>
    <p className="text-xs text-base-content/70">Join thousands of verified hardware developers</p>
  </div>

  <form className="space-y-4">
    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-1">
        <label className="text-xs font-bold">First Name</label>
        <input type="text" placeholder="John" className="input input-sm bg-base-200 w-full rounded-xl text-xs" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold">Last Name</label>
        <input type="text" placeholder="Doe" className="input input-sm bg-base-200 w-full rounded-xl text-xs" />
      </div>
    </div>

    <div className="space-y-1">
      <label className="text-xs font-bold">Email Address</label>
      <input type="email" placeholder="john@domain.com" className="input input-sm bg-base-200 w-full rounded-xl text-xs" />
    </div>

    <div className="space-y-1">
      <label className="text-xs font-bold">Choose Password</label>
      <input type="password" placeholder="Minimum 8 characters" className="input input-sm bg-base-200 w-full rounded-xl text-xs" />
    </div>

    <button type="submit" className="btn btn-primary btn-block btn-sm font-bold shadow-xs">
      Create Free Account
    </button>
  </form>
</div>`}
                htmlCode={`<div class="card bg-base-100 border border-base-300 p-8 max-w-md mx-auto">
  <h2 class="text-2xl font-black text-center">Sign Up</h2>
  <form class="space-y-3 mt-4">
    <input type="text" placeholder="Name" class="input input-sm w-full" />
    <input type="email" placeholder="Email" class="input input-sm w-full" />
    <button class="btn btn-primary btn-block btn-sm">Register</button>
  </form>
</div>`}
              >
                <div className="max-w-md mx-auto p-4">
                  <TechSignupPage />
                </div>
              </ComponentPreviewBlock>

              {/* 3. Student Admission Form */}
              <ComponentPreviewBlock
                title="3. Cambridge Student Admission Form"
                subtitle="School admission application form collecting student bio, grade level, guardian contact, and notes."
                jsxCode={`<div className="card bg-base-100 border border-base-300 rounded-3xl p-8 max-w-xl mx-auto shadow-sm space-y-6">
  <div className="text-center space-y-1">
    <span className="badge badge-primary font-bold text-xs">Admissions 2026-2027</span>
    <h2 className="text-2xl font-black">Student Admission Application</h2>
  </div>

  <form className="space-y-4">
    <div className="space-y-1">
      <label className="text-xs font-bold">Full Student Name</label>
      <input type="text" placeholder="Student Full Legal Name" className="input input-sm bg-base-200 w-full rounded-xl text-xs" />
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-1">
        <label className="text-xs font-bold">Date of Birth</label>
        <input type="date" className="input input-sm bg-base-200 w-full rounded-xl text-xs" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold">Target Grade</label>
        <select className="select select-sm bg-base-200 w-full rounded-xl text-xs">
          <option>Cambridge Primary (Grades 1-5)</option>
          <option>Cambridge Lower Secondary (Grades 6-8)</option>
          <option>IGCSE / O Level (Grades 9-10)</option>
          <option>A Level / CAIE (Grades 11-12)</option>
        </select>
      </div>
    </div>

    <button type="submit" className="btn btn-primary btn-block btn-sm font-bold shadow-xs">
      Submit Admission Dossier
    </button>
  </form>
</div>`}
                htmlCode={`<div class="card bg-base-100 border border-base-300 p-6 max-w-xl mx-auto">
  <h2 class="text-2xl font-black">Student Admission</h2>
  <button class="btn btn-primary btn-sm mt-4">Submit</button>
</div>`}
              >
                <div className="max-w-xl mx-auto p-4">
                  <SchoolAdmissionForm />
                </div>
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: FOOTER (7 Domains)
              ========================================================================= */}
          {activeSection === 'footer' && (
            <div className="space-y-8">
              <div className="border-b border-base-300 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Navigation</span>
                  <span className="badge badge-neutral text-xs font-mono font-bold">7 Variants</span>
                </div>
                <h1 className="text-3xl font-black text-base-content tracking-tight">Footer</h1>
                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                  Footer is an essential navigation component placed at the bottom of the page containing legal disclaimers, sitemap columns, social links, and copyrights.
                </p>
              </div>

              {/* 1. Tech Footer */}
              <ComponentPreviewBlock
                title="1. Nexus Tech E-Commerce Footer"
                subtitle="Four-column sitemap footer with hardware certification logos, support hotline, and newsletter input."
                jsxCode={`<footer className="bg-base-200/90 border-t border-base-300 text-base-content text-xs">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-primary text-primary-content flex items-center justify-center font-bold">
          <LuLaptop />
        </div>
        <span className="font-black text-base">NEXUS TECH</span>
      </div>
      <p className="text-base-content/70 text-[11px] leading-relaxed">
        Certified hardware and workstation distributor supporting developers worldwide.
      </p>
    </div>

    <div>
      <h4 className="font-bold text-sm mb-3">Hardware Catalog</h4>
      <ul className="space-y-1.5 text-base-content/70">
        <li><a href="#" className="hover:text-primary">Flagship Laptops</a></li>
        <li><a href="#" className="hover:text-primary">Graphics Cards</a></li>
        <li><a href="#" className="hover:text-primary">OLED Monitors</a></li>
      </ul>
    </div>

    <div>
      <h4 className="font-bold text-sm mb-3">Customer Support</h4>
      <ul className="space-y-1.5 text-base-content/70">
        <li><a href="#" className="hover:text-primary">Warranty Claim</a></li>
        <li><a href="#" className="hover:text-primary">Order Tracking</a></li>
        <li><a href="#" className="hover:text-primary">RMA Repairs</a></li>
      </ul>
    </div>

    <div>
      <h4 className="font-bold text-sm mb-3">Newsletter</h4>
      <div className="join w-full">
        <input type="text" placeholder="Email..." className="input input-sm join-item bg-base-100 text-xs w-full" />
        <button className="btn btn-sm btn-primary join-item">Join</button>
      </div>
    </div>
  </div>
</footer>`}
                htmlCode={`<footer class="footer p-10 bg-base-200 text-base-content">
  <div><span class="footer-title">Hardware</span><a class="link link-hover">Laptops</a></div>
  <div><span class="footer-title">Legal</span><a class="link link-hover">Terms</a></div>
</footer>`}
              >
                <TechFooter />
              </ComponentPreviewBlock>

              {/* 2. Restaurant Footer */}
              <ComponentPreviewBlock
                title="2. Restaurant Bistro Culinary Footer"
                subtitle="Mediterranean bistro footer with kitchen hours, address, and table reservation hotline."
                jsxCode={`<footer className="bg-neutral text-neutral-content py-10 px-4 text-xs">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    <div>
      <h3 className="font-black text-lg text-primary">LA TERRAZZA</h3>
      <p className="text-neutral-content/70 mt-2">Artisan Mediterranean dining crafted with local organic produce.</p>
    </div>
    <div>
      <h4 className="font-bold text-sm mb-2">Kitchen Hours</h4>
      <p className="text-neutral-content/70">Mon - Fri: 12:00 PM - 11:00 PM</p>
      <p className="text-neutral-content/70">Sat - Sun: 11:00 AM - 12:00 AM</p>
    </div>
    <div>
      <h4 className="font-bold text-sm mb-2">Table Booking</h4>
      <p className="text-neutral-content/70">Direct Concierge: +880 1711-889900</p>
    </div>
  </div>
</footer>`}
                htmlCode={`<footer class="footer p-8 bg-neutral text-neutral-content">
  <div><span class="font-bold">LA TERRAZZA BISTRO</span></div>
</footer>`}
              >
                <FoodFooter />
              </ComponentPreviewBlock>

              {/* 3. School Academic Footer */}
              <ComponentPreviewBlock
                title="3. Cambridge International Academy Footer"
                subtitle="Education institutional footer with Cambridge accreditation emblems and academic terms."
                jsxCode={`<footer className="bg-base-200 border-t border-base-300 py-10 px-4 text-xs text-base-content/80">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
    <div className="flex items-center gap-2">
      <LuGraduationCap className="text-2xl text-primary" />
      <span className="font-black text-base text-base-content">Cambridge Academy</span>
    </div>
    <div>Accredited by Cambridge Assessment International Education (Centre BD-042).</div>
  </div>
</footer>`}
                htmlCode={`<footer class="footer p-8 bg-base-200"><div>Cambridge Academy</div></footer>`}
              >
                <SchoolFooter />
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: MODAL & DIALOG (reservation, doctor, admission, quote, popup)
              ========================================================================= */}
          {activeSection === 'modal' && (
            <div className="space-y-8">
              <div className="border-b border-base-300 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Feedback & Overlays</span>
                  <span className="badge badge-neutral text-xs font-mono font-bold">5 Variants</span>
                </div>
                <h1 className="text-3xl font-black text-base-content tracking-tight">Modal & Dialog</h1>
                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                  Modals are used for dialog boxes, confirmations, appointment forms, and important notifications that require user attention.
                </p>
              </div>

              {/* 1. Restaurant Reservation Modal */}
              <ComponentPreviewBlock
                title="1. Restaurant Table Reservation Modal"
                subtitle="Booking dialog with guest party size, date/time pickers, dining section, and instant confirmation."
                jsxCode={`<dialog className="modal modal-open">
  <div className="modal-box bg-base-100 border border-base-300 rounded-3xl max-w-md p-6 space-y-4">
    <h3 className="font-black text-lg">Reserve a Table</h3>
    <p className="text-xs text-base-content/70">Enjoy artisan Mediterranean dining at La Terrazza.</p>
    <div className="space-y-3">
      <input type="text" placeholder="Your Name" className="input input-sm bg-base-200 w-full rounded-xl text-xs" />
      <input type="tel" placeholder="Phone Number" className="input input-sm bg-base-200 w-full rounded-xl text-xs" />
      <div className="grid grid-cols-2 gap-2">
        <input type="date" className="input input-sm bg-base-200 rounded-xl text-xs" />
        <select className="select select-sm bg-base-200 rounded-xl text-xs">
          <option>2 Guests</option>
          <option>4 Guests</option>
          <option>6+ Guests</option>
        </select>
      </div>
    </div>
    <div className="modal-action">
      <button className="btn btn-sm btn-ghost">Cancel</button>
      <button className="btn btn-sm btn-primary font-bold">Confirm Booking</button>
    </div>
  </div>
</dialog>`}
                htmlCode={`<dialog class="modal">
  <div class="modal-box">
    <h3 class="font-bold">Reserve Table</h3>
    <button class="btn btn-primary mt-4">Confirm</button>
  </div>
</dialog>`}
              >
                <div className="p-6 text-center">
                  <button
                    onClick={() => setReservationModalOpen(true)}
                    className="btn btn-primary btn-sm font-bold shadow-xs gap-1.5"
                  >
                    <LuCalendar />
                    <span>Open Table Reservation Dialog</span>
                  </button>
                  <ReservationModal
                    isOpen={reservationModalOpen}
                    onClose={() => setReservationModalOpen(false)}
                  />
                </div>
              </ComponentPreviewBlock>

              {/* 2. Generic Popup Modal */}
              <ComponentPreviewBlock
                title="2. Structured Key-Value Detail Dialog"
                subtitle="Interactive pop-up showing structured purchase receipt or order invoice confirmation."
                jsxCode={`<dialog className="modal modal-open">
  <div className="modal-box bg-base-100 border border-base-300 rounded-3xl max-w-md p-6 space-y-4">
    <h3 className="font-black text-lg">Order Confirmation</h3>
    <div className="space-y-2 text-xs">
      <div className="flex justify-between py-1 border-b border-base-200">
        <span className="text-base-content/60">Reference Code</span>
        <span className="font-mono font-bold">ORD-781920</span>
      </div>
      <div className="flex justify-between py-1 border-b border-base-200">
        <span className="text-base-content/60">Total Paid</span>
        <span className="font-mono font-bold text-primary">$1,899.00</span>
      </div>
    </div>
    <div className="modal-action">
      <button className="btn btn-sm btn-primary">Done</button>
    </div>
  </div>
</dialog>`}
                htmlCode={`<dialog class="modal">
  <div class="modal-box">
    <h3 class="font-bold">Order Confirmed</h3>
  </div>
</dialog>`}
              >
                <div className="p-6 text-center">
                  <button
                    onClick={() => setPopupModalOpen(true)}
                    className="btn btn-outline btn-sm font-bold"
                  >
                    Open Confirmation Modal
                  </button>
                  <PopupModal
                    isOpen={popupModalOpen}
                    onClose={() => setPopupModalOpen(false)}
                    details={{
                      OrderRef: "ORD-991240",
                      Customer: "Developer Enterprise",
                      PaymentMethod: "Corporate Wire",
                      Status: "Approved & Dispatched"
                    }}
                  />
                </div>
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: BREADCRUMBS
              ========================================================================= */}
          {activeSection === 'breadcrumbs' && (
            <div className="space-y-6">
              <div className="border-b border-base-300 pb-4">
                <h1 className="text-3xl font-black text-base-content tracking-tight">Breadcrumbs</h1>
                <p className="text-xs sm:text-sm text-base-content/70 mt-1">Responsive route-aware navigation trail.</p>
              </div>
              <ComponentPreviewBlock
                title="Route-Aware Breadcrumb Trail"
                subtitle="Clean chevrons with home icon and active current page label."
                jsxCode={`<div className="breadcrumbs text-xs">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/catalog">E-Commerce</a></li>
    <li className="font-bold text-primary">Nexus Pro Ultrabook</li>
  </ul>
</div>`}
                htmlCode={`<div class="breadcrumbs text-xs">
  <ul>
    <li><a>Home</a></li>
    <li><a>E-Commerce</a></li>
    <li class="font-bold">Nexus Pro Ultrabook</li>
  </ul>
</div>`}
              >
                <div className="p-4 bg-base-200/50 rounded-2xl">
                  <Breadcrumbs
                    customCrumbs={[
                      { label: 'daisyUI Components', to: '#' },
                      { label: 'Navigation', to: '#' },
                      { label: 'Navbar Showcase', to: '#', isCurrent: true }
                    ]}
                  />
                </div>
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: IMAGE ZOOM
              ========================================================================= */}
          {activeSection === 'image-zoom' && (
            <div className="space-y-6">
              <div className="border-b border-base-300 pb-4">
                <h1 className="text-3xl font-black text-base-content tracking-tight">Image Zoom</h1>
                <p className="text-xs sm:text-sm text-base-content/70 mt-1">Interactive product image magnifier and lightbox.</p>
              </div>
              <ComponentPreviewBlock
                title="Product Image Zoom & Gallery"
                subtitle="High-resolution image zoom lens that expands on mouse hover."
                jsxCode={`<div className="relative overflow-hidden rounded-2xl border border-base-300 group cursor-crosshair">
  <img
    src="/images/item-1.jpg"
    alt="Garment Showcase"
    className="w-full object-cover transition-transform duration-300 group-hover:scale-125"
  />
  <div className="absolute bottom-3 right-3 badge badge-neutral text-[10px] font-bold">
    Hover to Zoom 1.25x
  </div>
</div>`}
                htmlCode={`<div class="relative overflow-hidden rounded-2xl group">
  <img src="/images/item-1.jpg" class="w-full object-cover transition-transform group-hover:scale-125" />
</div>`}
              >
                <div className="max-w-md mx-auto">
                  <ImageZoom src="/images/item-1.jpg" alt="Showcase" aspectRatio="aspect-4/3" />
                </div>
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: STATS
              ========================================================================= */}
          {activeSection === 'stats' && (
            <div className="space-y-6">
              <div className="border-b border-base-300 pb-4">
                <h1 className="text-3xl font-black text-base-content tracking-tight">Stats Counter</h1>
                <p className="text-xs sm:text-sm text-base-content/70 mt-1">Numerical metric counters for academic and business achievements.</p>
              </div>
              <ComponentPreviewBlock
                title="Four-Column Statistics Grid"
                subtitle="Shows enrolled scholars, pass rates, research labs, and faculty ratios."
                jsxCode={`<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="stat bg-base-200/60 rounded-2xl p-4 text-center">
    <div className="stat-value text-primary font-mono text-3xl">1,850+</div>
    <div className="stat-title text-xs font-bold text-base-content/70">Enrolled Scholars</div>
  </div>
  <div className="stat bg-base-200/60 rounded-2xl p-4 text-center">
    <div className="stat-value text-primary font-mono text-3xl">99.4%</div>
    <div className="stat-title text-xs font-bold text-base-content/70">IGCSE Pass Rate</div>
  </div>
</div>`}
                htmlCode={`<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div class="stat bg-base-200 rounded-2xl p-4 text-center">
    <div class="stat-value text-primary text-3xl font-mono">1,850+</div>
    <div class="stat-title text-xs font-bold">Enrolled Scholars</div>
  </div>
</div>`}
              >
                <SchoolStatsCounter />
              </ComponentPreviewBlock>
            </div>
          )}

          {/* =========================================================================
              SECTION: FULL WEBSITES & KITS (7 Sites with Clean Layout Markup)
              ========================================================================= */}
          {activeSection === 'templates' && (
            <div className="space-y-8">
              <div className="border-b border-base-300 pb-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Web Kits</span>
                  <span className="badge badge-neutral text-xs font-mono font-bold">7 Full Sites</span>
                </div>
                <h1 className="text-3xl font-black text-base-content tracking-tight">Full Website Templates</h1>
                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
                  Complete, independent, multi-page web applications with local data, zero external dependencies, responsive layouts, and tab navigation.
                </p>
              </div>

              {/* 1. School App */}
              <ComponentPreviewBlock
                title="1. Cambridge Academy Web Kit (Education)"
                subtitle="Complete school website with curriculum levels, admission form, faculty grid, and campus metrics."
                jsxCode={`<div className="min-h-screen bg-base-100 text-base-content flex flex-col justify-between">
  {/* Header */}
  <header className="sticky top-0 z-40 bg-base-100/90 backdrop-blur-md border-b border-base-300">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-primary text-primary-content flex items-center justify-center font-bold">
          <LuGraduationCap className="text-xl" />
        </div>
        <div>
          <h1 className="font-black text-lg">Cambridge Academy</h1>
          <p className="text-[10px] text-base-content/60">Excellence in Global Education</p>
        </div>
      </div>
      <button className="btn btn-primary btn-sm font-bold">Apply for Admission</button>
    </div>
  </header>

  {/* Main Content: Hero Banner + Academic Curriculum + Statistics */}
  <main className="max-w-7xl mx-auto px-4 py-8 flex-1 space-y-10">
    {/* Academic Programs & Faculty Directory */}
  </main>

  {/* Footer */}
  <footer className="footer p-8 bg-base-200 border-t border-base-300 text-xs">
    <div>© 2026 Cambridge Academy. All rights reserved.</div>
  </footer>
</div>`}
                htmlCode={`<div class="min-h-screen flex flex-col">
  <header class="navbar bg-base-100 border-b border-base-300 px-4">
    <span class="font-black text-lg">Cambridge Academy</span>
  </header>
  <main class="flex-1 p-8"></main>
  <footer class="footer p-4 bg-base-200 text-center">Cambridge Academy</footer>
</div>`}
              >
                <div className="h-[520px] overflow-y-auto bg-base-100 rounded-xl border border-base-300">
                  <SchoolApp />
                </div>
              </ComponentPreviewBlock>

              {/* 2. Tech App */}
              <ComponentPreviewBlock
                title="2. Nexus Tech E-Commerce Store (Hardware)"
                subtitle="High-performance electronics store with hardware catalog, specifications table, and cart drawer."
                jsxCode={`<div className="min-h-screen bg-base-100 text-base-content flex flex-col justify-between">
  {/* Sticky Tech Navbar with Cart Counter */}
  <header className="sticky top-0 z-40 bg-base-100/90 backdrop-blur-md border-b border-base-300">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2 font-black text-lg">NEXUS TECH</div>
      <button className="btn btn-primary btn-sm font-bold">Cart (3)</button>
    </div>
  </header>

  {/* Main Storefront: Banner + Featured Hardware + Reviews */}
  <main className="max-w-7xl mx-auto px-4 py-8 flex-1 space-y-10">
    {/* Hardware Catalog Grid */}
  </main>

  {/* Footer */}
  <footer className="p-8 bg-base-200 border-t border-base-300 text-xs">
    <div>© 2026 Nexus Tech Enterprise. All rights reserved.</div>
  </footer>
</div>`}
                htmlCode={`<div class="min-h-screen flex flex-col">
  <header class="navbar bg-base-100 border-b border-base-300 px-4">
    <span class="font-black text-lg">NEXUS TECH</span>
  </header>
  <main class="flex-1 p-8"></main>
</div>`}
              >
                <div className="h-[520px] overflow-y-auto bg-base-100 rounded-xl border border-base-300">
                  <TechApp />
                </div>
              </ComponentPreviewBlock>

              {/* 3. Food App */}
              <ComponentPreviewBlock
                title="3. La Terrazza Mediterranean Bistro (Restaurant)"
                subtitle="Artisan restaurant website with chef specials, woodfire pizza menu, and online table reservations."
                jsxCode={`<div className="min-h-screen bg-base-100 text-base-content flex flex-col justify-between">
  <header className="sticky top-0 z-40 bg-base-100/90 backdrop-blur-md border-b border-base-300">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <span className="font-black text-lg">LA TERRAZZA</span>
      <button className="btn btn-primary btn-sm font-bold">Reserve Table</button>
    </div>
  </header>
  <main className="max-w-7xl mx-auto px-4 py-8 flex-1 space-y-10">
    {/* Culinary Dishes & Specials */}
  </main>
</div>`}
                htmlCode={`<div class="min-h-screen flex flex-col">
  <header class="navbar bg-base-100 border-b border-base-300 px-4">
    <span class="font-black text-lg">LA TERRAZZA</span>
  </header>
</div>`}
              >
                <div className="h-[520px] overflow-y-auto bg-base-100 rounded-xl border border-base-300">
                  <FoodApp />
                </div>
              </ComponentPreviewBlock>
            </div>
          )}

        </main>
      </div>

      {/* DAISYUI FOOTER */}
      <footer className="bg-base-200 border-t border-base-300 mt-16 py-8 text-center text-xs text-base-content/60 space-y-2">
        <div className="flex items-center justify-center gap-2">
          <div className="w-5 h-5 rounded-md bg-primary text-primary-content flex items-center justify-center text-xs font-black">
            <LuLayers />
          </div>
          <span className="font-black text-sm text-base-content">daisyUI Component & Website Hub</span>
        </div>
        <p>Built with React 19, daisyUI 5.8, Tailwind CSS v4, and Lucide Icons.</p>
        <p className="text-[11px]">All components, navbars, and templates are 100% self-contained and open-source.</p>
      </footer>
    </div>
  );
}
