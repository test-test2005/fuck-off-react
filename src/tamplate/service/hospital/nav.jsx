import React from 'react';
import { Link } from 'react-router-dom';
import { LuHeartPulse, LuPhone, LuMail, LuCalendar, LuShieldAlert, LuUserCheck } from 'react-icons/lu';
import hospitalData from './data.js';

export default function HospitalNav({ activeTab = 'home', onSelectTab }) {
  const tabs = [
    { id: 'home', label: 'Home', path: '/pages/service/hospital' },
    { id: 'doctors', label: 'Find a Specialist', path: '/pages/service/hospital/doctors' },
    { id: 'appointment', label: 'Book Appointment', path: '/pages/service/hospital/appointment' },
    { id: 'about', label: 'About Medical Center', path: '/pages/service/hospital/about' },
    { id: 'contact', label: 'Emergency Contact', path: '/pages/service/hospital/contact' }
  ];

  const handleNav = (tabId) => {
    if (onSelectTab) onSelectTab(tabId);
  };

  return (
    <header className="sticky top-0 z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300 shadow-xs">
      <div className="bg-error text-error-content text-[11px] py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-bold">
              <LuShieldAlert className="text-xs" /> EMERGENCY 24/7 HOTLINE: {hospitalData.phone}
            </span>
            <span className="hidden sm:flex items-center gap-1"><LuMail className="text-xs" /> {hospitalData.email}</span>
          </div>
          <span className="font-bold tracking-wider text-xs">JCI ACCREDITED CLINICAL EXCELLENCE</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        <Link to="/pages/service/hospital" onClick={() => handleNav('home')} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary text-primary-content flex items-center justify-center text-xl font-bold shadow-xs">
            <LuHeartPulse />
          </div>
          <div>
            <div className="font-black text-base tracking-tight text-base-content">{hospitalData.title}</div>
            <div className="text-[10px] text-base-content/60 uppercase tracking-widest">{hospitalData.brand}</div>
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
            to="/pages/service/hospital/appointment"
            onClick={() => handleNav('appointment')}
            className="btn btn-primary btn-sm font-bold shadow-xs gap-1.5"
          >
            <LuCalendar className="text-xs" />
            <span>Book Consultation</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
