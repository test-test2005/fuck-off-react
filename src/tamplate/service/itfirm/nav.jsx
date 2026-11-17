import React from 'react';
import { Link } from 'react-router-dom';
import { LuCpu, LuPhone, LuMail, LuShieldCheck, LuServer, LuArrowRight } from 'react-icons/lu';
import itfirmData from './data.js';

export default function ITFirmNav({ activeTab = 'home', onSelectTab }) {
  const tabs = [
    { id: 'home', label: 'Home', path: '/pages/service/itfirm' },
    { id: 'services', label: 'IT Solutions & Services', path: '/pages/service/itfirm/services' },
    { id: 'quote', label: 'Architecture Quote', path: '/pages/service/itfirm/quote' },
    { id: 'about', label: 'About Agency', path: '/pages/service/itfirm/about' },
    { id: 'contact', label: 'Global Offices', path: '/pages/service/itfirm/contact' }
  ];

  const handleNav = (tabId) => {
    if (onSelectTab) onSelectTab(tabId);
  };

  return (
    <header className="sticky top-0 z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300 shadow-xs">
      <div className="bg-neutral text-neutral-content text-[11px] py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><LuPhone className="text-xs text-primary" /> {itfirmData.phone}</span>
            <span className="hidden sm:flex items-center gap-1"><LuMail className="text-xs text-primary" /> {itfirmData.email}</span>
          </div>
          <span className="font-bold tracking-wider text-xs flex items-center gap-1">
            <LuShieldCheck className="text-primary text-xs" /> 99.999% SLA ENTERPRISE INFRASTRUCTURE
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        <Link to="/pages/service/itfirm" onClick={() => handleNav('home')} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary text-primary-content flex items-center justify-center text-xl font-bold shadow-xs">
            <LuCpu />
          </div>
          <div>
            <div className="font-black text-base tracking-tight text-base-content">{itfirmData.title}</div>
            <div className="text-[10px] text-base-content/60 uppercase tracking-widest">{itfirmData.brand}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {tabs.map((t) => (
            <Link
              key={t.id}
              to={t.path}
              onClick={() => handleNav(t.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === t.id ? 'bg-primary/10 text-primary' : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
              }`}
            >
              {t.label}
            </Link>
          ))}
        </nav>

        <div>
          <Link
            to="/pages/service/itfirm/quote"
            onClick={() => handleNav('quote')}
            className="btn btn-primary btn-sm font-bold shadow-xs gap-1.5"
          >
            <LuServer className="text-xs" />
            <span>Request Proposal</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
