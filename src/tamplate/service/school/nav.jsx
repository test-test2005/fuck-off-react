import React from 'react';
import { Link } from 'react-router-dom';
import { LuGraduationCap, LuPhone, LuMail, LuBookOpen, LuCalendar, LuUser } from 'react-icons/lu';
import schoolData from './data.js';

export default function SchoolNav({ activeTab = 'home', onSelectTab }) {
  const tabs = [
    { id: 'home', label: 'Home', path: '/pages/service/school' },
    { id: 'courses', label: 'Curriculum & Courses', path: '/pages/service/school/courses' },
    { id: 'admission', label: 'Student Admissions', path: '/pages/service/school/admission' },
    { id: 'about', label: 'About Academy', path: '/pages/service/school/about' },
    { id: 'contact', label: 'Campus Contact', path: '/pages/service/school/contact' }
  ];

  const handleNav = (tabId, path) => {
    if (onSelectTab) onSelectTab(tabId);
  };

  return (
    <header className="sticky top-0 z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300 shadow-xs">
      <div className="bg-primary text-primary-content text-[11px] py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><LuPhone className="text-xs" /> {schoolData.phone}</span>
            <span className="hidden sm:flex items-center gap-1"><LuMail className="text-xs" /> {schoolData.email}</span>
          </div>
          <span className="font-bold tracking-wider">CAMBRIDGE CAIE ACCREDITED CENTER BD-412</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        <Link to="/pages/service/school" onClick={() => handleNav('home')} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary text-primary-content flex items-center justify-center text-xl font-bold shadow-xs">
            <LuGraduationCap />
          </div>
          <div>
            <div className="font-black text-base tracking-tight text-base-content">{schoolData.title}</div>
            <div className="text-[10px] text-base-content/60 uppercase tracking-widest">{schoolData.brand}</div>
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
            to="/pages/service/school/admission"
            onClick={() => handleNav('admission')}
            className="btn btn-primary btn-sm font-bold shadow-xs gap-1.5"
          >
            <LuCalendar className="text-xs" />
            <span>Apply 2026-27</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
