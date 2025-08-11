import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuPhone, LuMail, LuClock, LuHeart, LuShoppingCart, LuUser, LuLayers } from 'react-icons/lu';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

/**
 * Common Header Top Bar
 * Features:
 * - Live JS clock running every second
 * - Active Domain Phone & Email
 * - Social Media links
 * - Cart and Wishlist counters
 * - Portal Authentication link
 */
export default function HeaderTop({
  phone = "+880 1712-889900",
  email = "support@nexustech.com",
  cartCount = 0,
  wishlistCount = 0,
  domainTitle = "Tech Store",
  isEcom = true
}) {
  const [clock, setClock] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setClock(now.toLocaleDateString() + ' | ' + now.toLocaleTimeString());
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-base-200 text-base-content/80 text-xs border-b border-base-300 py-2 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        
        {/* Live JavaScript Date and Clock */}
        <div className="flex items-center gap-3.5 flex-wrap">
          <div className="flex items-center gap-1.5 text-primary font-bold bg-base-100 px-2.5 py-0.5 rounded-full border border-base-300 shadow-xs text-[11px]">
            <LuClock />
            <span>{clock || "Loading Clock..."}</span>
          </div>

          <a href={`tel:${phone}`} className="flex items-center gap-1 hover:text-primary transition-colors hidden sm:flex">
            <LuPhone className="text-secondary text-xs" />
            <span>{phone}</span>
          </a>

          <a href={`mailto:${email}`} className="flex items-center gap-1 hover:text-primary transition-colors hidden md:flex">
            <LuMail className="text-accent text-xs" />
            <span>{email}</span>
          </a>
        </div>

        {/* Domain Badge, Social Links and Cart / Portal */}
        <div className="flex items-center gap-3.5 ml-auto">
          <Link
            to="/websites"
            className="btn btn-xs btn-primary font-bold gap-1 rounded-lg shadow-xs"
          >
            <span>Website Kits (Ready to Copy)</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 px-2 py-0.5 rounded-md bg-base-300 text-[10px] font-extrabold uppercase tracking-wider text-base-content/70">
            <LuLayers className="text-primary" />
            <span>Active: {domainTitle}</span>
          </div>

          <div className="flex items-center gap-2 border-r border-base-300 pr-3">
            <a href="#facebook" aria-label="Facebook" className="hover:text-primary transition-colors"><FaFacebookF /></a>
            <a href="#twitter" aria-label="Twitter" className="hover:text-primary transition-colors"><FaTwitter /></a>
            <a href="#instagram" aria-label="Instagram" className="hover:text-primary transition-colors"><FaInstagram /></a>
            <a href="#youtube" aria-label="YouTube" className="hover:text-primary transition-colors"><FaYoutube /></a>
          </div>

          {isEcom ? (
            <>
              <Link to="/wishlist" className="flex items-center gap-1 hover:text-primary">
                <LuHeart className="text-error" />
                <span className="hidden sm:inline">Wishlist</span>
                <span className="badge badge-xs badge-error font-bold text-white">{wishlistCount}</span>
              </Link>

              <Link to="/cart" className="flex items-center gap-1 hover:text-primary">
                <LuShoppingCart className="text-primary" />
                <span className="hidden sm:inline">Cart</span>
                <span className="badge badge-xs badge-primary font-bold">{cartCount}</span>
              </Link>
            </>
          ) : (
            <Link to="/service/hospital/appointment" className="flex items-center gap-1 hover:text-primary font-bold text-primary">
              <span>Book Appointment</span>
            </Link>
          )}

          <Link 
            to={isEcom ? "/login" : "/contact"}
            className="flex items-center gap-1 font-semibold hover:text-primary text-xs"
          >
            <LuUser />
            <span className="hidden sm:inline">{isEcom ? "Account" : "Client Portal"}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
