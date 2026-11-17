import React from 'react';
import { Link } from 'react-router-dom';
import { LuBuilding2, LuPhone, LuMail, LuMapPin, LuAward, LuGlobe } from 'react-icons/lu';
import collegeData from './data.js';

export default function CollegeFooter({ onSelectTab }) {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-content flex items-center justify-center font-bold">
              <LuBuilding2 />
            </div>
            <span className="font-black text-base">{collegeData.brand}</span>
          </div>
          <p className="text-xs text-base-content/70 leading-relaxed">{collegeData.tagline}</p>
          <div className="badge badge-primary badge-outline text-[10px] font-bold gap-1">
            <LuAward /> IEB & UGC Approved Institution
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Academic Faculties</h4>
          <ul className="space-y-2 text-xs text-base-content/70">
            {collegeData.categories.filter(c => c !== 'All').map((cat) => (
              <li key={cat}>
                <Link to="/pages/service/collage/departments" onClick={() => onSelectTab && onSelectTab('departments')} className="hover:text-primary transition-colors">
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Admissions & Campus</h4>
          <ul className="space-y-2 text-xs text-base-content/70">
            <li><Link to="/pages/service/collage/departments" onClick={() => onSelectTab && onSelectTab('departments')} className="hover:text-primary">Degree Programs & Fees</Link></li>
            <li><Link to="/pages/service/collage/about" onClick={() => onSelectTab && onSelectTab('about')} className="hover:text-primary">Faculty & Research Centers</Link></li>
            <li><Link to="/pages/service/collage/contact" onClick={() => onSelectTab && onSelectTab('contact')} className="hover:text-primary">Campus Visit & Registrar</Link></li>
            <li><span className="text-base-content/50">Credit Transfer & Scholarships</span></li>
          </ul>
        </div>

        <div className="space-y-2 text-xs text-base-content/70">
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Registrar Office</h4>
          <p className="flex items-start gap-1.5"><LuMapPin className="text-primary mt-0.5" /> {collegeData.address}</p>
          <p className="flex items-center gap-1.5"><LuPhone className="text-primary" /> {collegeData.phone}</p>
          <p className="flex items-center gap-1.5"><LuMail className="text-primary" /> {collegeData.email}</p>
          <div className="pt-2 flex items-center gap-2 text-xs text-base-content/60">
            <LuGlobe className="text-primary" /> Global Academic Exchange
          </div>
        </div>
      </div>

      <div className="border-t border-base-300 py-4 text-center text-xs text-base-content/60">
        Copyright 2026 {collegeData.title}. All Rights Reserved. Fully Certified Academic Division.
      </div>
    </footer>
  );
}
