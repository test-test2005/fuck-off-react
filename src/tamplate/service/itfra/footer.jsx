import React from 'react';
import { Link } from 'react-router-dom';
import { LuCpu, LuPhone, LuMail, LuMapPin, LuShieldCheck, LuTerminal } from 'react-icons/lu';
import itfirmData from './data.js';

export default function ITFirmFooter({ onSelectTab }) {
  return (
    <footer className="bg-neutral text-neutral-content border-t border-neutral-focus">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-content flex items-center justify-center font-bold">
              <LuCpu />
            </div>
            <span className="font-black text-base text-white">{itfirmData.brand}</span>
          </div>
          <p className="text-xs text-neutral-content/70 leading-relaxed">{itfirmData.tagline}</p>
          <div className="badge badge-primary badge-outline text-[10px] font-bold gap-1">
            <LuShieldCheck /> ISO 27001 & SOC-2 Type II Certified
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-3">Enterprise Capabilities</h4>
          <ul className="space-y-2 text-xs text-neutral-content/70">
            {itfirmData.categories.filter(c => c !== 'All').map((cat) => (
              <li key={cat}>
                <Link to="/pages/service/itfirm/services" onClick={() => onSelectTab && onSelectTab('services')} className="hover:text-primary transition-colors">
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-3">Architecture & Audit</h4>
          <ul className="space-y-2 text-xs text-neutral-content/70">
            <li><Link to="/pages/service/itfirm/quote" onClick={() => onSelectTab && onSelectTab('quote')} className="hover:text-primary">Request Architecture Proposal</Link></li>
            <li><Link to="/pages/service/itfirm/about" onClick={() => onSelectTab && onSelectTab('about')} className="hover:text-primary">Engineering Leadership & Security</Link></li>
            <li><Link to="/pages/service/itfirm/contact" onClick={() => onSelectTab && onSelectTab('contact')} className="hover:text-primary">Emergency SOC Response</Link></li>
            <li><span className="text-neutral-content/40">Multi-Region Cloud SLAs</span></li>
          </ul>
        </div>

        <div className="space-y-2 text-xs text-neutral-content/70">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-3">Global Headquarters</h4>
          <p className="flex items-start gap-1.5"><LuMapPin className="text-primary mt-0.5" /> {itfirmData.address}</p>
          <p className="flex items-center gap-1.5"><LuPhone className="text-primary" /> {itfirmData.phone}</p>
          <p className="flex items-center gap-1.5"><LuMail className="text-primary" /> {itfirmData.email}</p>
          <div className="pt-2 flex items-center gap-2 text-xs text-neutral-content/60">
            <LuTerminal className="text-primary" /> 24/7 DevOps Hotline
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-focus py-4 text-center text-xs text-neutral-content/50">
        Copyright 2026 {itfirmData.title}. All Rights Reserved. Enterprise Cloud Engineering division.
      </div>
    </footer>
  );
}
