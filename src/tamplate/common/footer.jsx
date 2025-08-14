import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LuPhone, 
  LuMail, 
  LuMapPin, 
  LuSend, 
  LuShieldCheck, 
  LuAward, 
  LuClock,
  LuSparkles
} from 'react-icons/lu';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

/**
 * Common Footer Component
 * Features:
 * - Domain Info & Brand Vision
 * - Quick Navigation Links
 * - Newsletter subscription form with feedback state
 * - Certification and Security Badges
 * - Copyright & Policy Links
 */
export default function Footer({
  brand = "NEXUS TECH GEAR",
  phone = "+880 1712-889900",
  email = "support@nexustech.com",
  address = "Level 5, Silicon Tower, Tech Zone, Dhaka 1216",
  domainType = "ecom"
}) {
  const [subscribed, setSubscribed] = useState(false);
  const [newsEmail, setNewsEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsEmail) return;
    setSubscribed(true);
    setNewsEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-neutral text-neutral-content pt-14 pb-8 border-t border-neutral-focus">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-content flex items-center justify-center font-black">
                <LuSparkles className="text-sm" />
              </div>
              <span className="font-black text-xl text-white tracking-tight">{brand}</span>
            </div>
            
            <p className="text-xs sm:text-sm text-neutral-content/70 leading-relaxed max-w-sm">
              Certified European IT design standards with production-ready architecture, interactive dynamic routing, and validated user interfaces.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="badge badge-outline badge-sm text-xs gap-1 font-semibold text-neutral-content/80">
                <LuShieldCheck className="text-success text-xs" />
                <span>ISO 9001 Certified</span>
              </span>
              <span className="badge badge-outline badge-sm text-xs gap-1 font-semibold text-neutral-content/80">
                <LuAward className="text-warning text-xs" />
                <span>Verified Quality</span>
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#fb" aria-label="Facebook" className="w-8 h-8 rounded-lg bg-neutral-focus hover:bg-primary hover:text-primary-content flex items-center justify-center transition-colors">
                <FaFacebookF className="text-xs" />
              </a>
              <a href="#tw" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-neutral-focus hover:bg-primary hover:text-primary-content flex items-center justify-center transition-colors">
                <FaTwitter className="text-xs" />
              </a>
              <a href="#ig" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-neutral-focus hover:bg-primary hover:text-primary-content flex items-center justify-center transition-colors">
                <FaInstagram className="text-xs" />
              </a>
              <a href="#in" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-neutral-focus hover:bg-primary hover:text-primary-content flex items-center justify-center transition-colors">
                <FaLinkedinIn className="text-xs" />
              </a>
              <a href="#yt" aria-label="YouTube" className="w-8 h-8 rounded-lg bg-neutral-focus hover:bg-primary hover:text-primary-content flex items-center justify-center transition-colors">
                <FaYoutube className="text-xs" />
              </a>
            </div>
          </div>

          {/* Col 2: E-Commerce Portals */}
          <div className="space-y-3">
            <h4 className="font-black text-xs uppercase tracking-widest text-accent">E-Commerce Sections</h4>
            <ul className="space-y-2 text-xs text-neutral-content/80">
              <li><Link to="/pages/ecom/tech" className="hover:text-primary transition-colors">Tech Store Home</Link></li>
              <li><Link to="/pages/ecom/tech/products" className="hover:text-primary transition-colors">Tech Products Catalog</Link></li>
              <li><Link to="/pages/ecom/food" className="hover:text-primary transition-colors">Gourmet Food Restaurant</Link></li>
              <li><Link to="/pages/ecom/food/foods" className="hover:text-primary transition-colors">Restaurant Menu Items</Link></li>
              <li><Link to="/pages/ecom/fashion" className="hover:text-primary transition-colors">Vogue Fashion Boutique</Link></li>
              <li><Link to="/cart" className="hover:text-primary transition-colors">Shopping Cart</Link></li>
            </ul>
          </div>

          {/* Col 3: Service Portals */}
          <div className="space-y-3">
            <h4 className="font-black text-xs uppercase tracking-widest text-accent">Service Sections</h4>
            <ul className="space-y-2 text-xs text-neutral-content/80">
              <li><Link to="/pages/service/school" className="hover:text-primary transition-colors">Cambridge School Home</Link></li>
              <li><Link to="/pages/service/school/courses" className="hover:text-primary transition-colors">Academic Syllabus</Link></li>
              <li><Link to="/pages/service/collage" className="hover:text-primary transition-colors">Metropolitan College</Link></li>
              <li><Link to="/pages/service/itfirm" className="hover:text-primary transition-colors">Enterprise IT Solutions</Link></li>
              <li><Link to="/pages/service/hospital" className="hover:text-primary transition-colors">Apollo Medical Clinic</Link></li>
              <li><Link to="/pages/service/hospital/appointment" className="hover:text-primary transition-colors">Doctor Appointment</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact */}
          <div className="space-y-3">
            <h4 className="font-black text-xs uppercase tracking-widest text-accent">Direct Contact</h4>
            <div className="space-y-2 text-xs text-neutral-content/80">
              <div className="flex items-start gap-2">
                <LuMapPin className="text-secondary shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2">
                <LuPhone className="text-primary shrink-0" />
                <a href={`tel:${phone}`} className="hover:text-primary">{phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <LuMail className="text-accent shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-primary">{email}</a>
              </div>
              <div className="flex items-center gap-2">
                <LuClock className="text-warning shrink-0" />
                <span>Sun - Thu: 09:00 AM - 08:00 PM</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="pt-2 space-y-1.5">
              <div className="text-[11px] font-bold text-neutral-content/70">Subscribe for Updates:</div>
              <div className="join w-full">
                <input
                  type="email"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  placeholder="Enter email..."
                  required
                  className="input input-xs join-item bg-base-100 text-base-content w-full focus:outline-hidden"
                />
                <button type="submit" className="btn btn-xs btn-primary join-item">
                  <LuSend />
                </button>
              </div>
              {subscribed && (
                <div className="text-[10px] text-success font-bold mt-1">
                  Thank you! You are now subscribed.
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-focus pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-content/60">
          <div>
            (c) {new Date().getFullYear()} {brand}. All rights reserved. Level 3 Web Architecture.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Help Desk</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
