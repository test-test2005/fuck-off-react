import React from 'react';
import { Link } from 'react-router-dom';
import { LuGraduationCap, LuPhone, LuMail, LuMapPin, LuAward } from 'react-icons/lu';
import schoolData from './data.js';

export default function SchoolFooter({ onSelectTab }) {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-content flex items-center justify-center font-bold">
              <LuGraduationCap />
            </div>
            <span className="font-black text-base">{schoolData.brand}</span>
          </div>
          <p className="text-xs text-base-content/70 leading-relaxed">{schoolData.tagline}</p>
          <div className="badge badge-primary badge-outline text-[10px] font-bold gap-1">
            <LuAward /> Cambridge CAIE Registered
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Academic Programs</h4>
          <ul className="space-y-2 text-xs text-base-content/70">
            {schoolData.categories.filter(c => c !== 'All').map((cat) => (
              <li key={cat}>
                <Link to="/pages/service/school/courses" onClick={() => onSelectTab && onSelectTab('courses')} className="hover:text-primary transition-colors">
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Admissions & Campus</h4>
          <ul className="space-y-2 text-xs text-base-content/70">
            <li><Link to="/pages/service/school/admission" onClick={() => onSelectTab && onSelectTab('admission')} className="hover:text-primary">Apply Online Portal</Link></li>
            <li><Link to="/pages/service/school/about" onClick={() => onSelectTab && onSelectTab('about')} className="hover:text-primary">Academy History & Faculty</Link></li>
            <li><Link to="/pages/service/school/contact" onClick={() => onSelectTab && onSelectTab('contact')} className="hover:text-primary">Schedule Campus Visit</Link></li>
            <li><span className="text-base-content/50">Tuition Fee Schedules</span></li>
          </ul>
        </div>

        <div className="space-y-2 text-xs text-base-content/70">
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Campus Secretariat</h4>
          <p className="flex items-start gap-1.5"><LuMapPin className="text-primary mt-0.5" /> {schoolData.address}</p>
          <p className="flex items-center gap-1.5"><LuPhone className="text-primary" /> {schoolData.phone}</p>
          <p className="flex items-center gap-1.5"><LuMail className="text-primary" /> {schoolData.email}</p>
        </div>
      </div>

      <div className="border-t border-base-300 py-4 text-center text-xs text-base-content/60">
        Copyright 2026 {schoolData.title}. All Rights Reserved. Cambridge Assessment International Education.
      </div>
    </footer>
  );
}
