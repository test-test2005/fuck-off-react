import React from 'react';
import { Link } from 'react-router-dom';
import { LuHeartPulse, LuPhone, LuMail, LuMapPin, LuShieldAlert, LuAward } from 'react-icons/lu';
import hospitalData from './data.js';

export default function HospitalFooter({ onSelectTab }) {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-content flex items-center justify-center font-bold">
              <LuHeartPulse />
            </div>
            <span className="font-black text-base">{hospitalData.brand}</span>
          </div>
          <p className="text-xs text-base-content/70 leading-relaxed">{hospitalData.tagline}</p>
          <div className="badge badge-primary badge-outline text-[10px] font-bold gap-1">
            <LuAward /> Joint Commission International (JCI) Certified
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Clinical Specialties</h4>
          <ul className="space-y-2 text-xs text-base-content/70">
            {hospitalData.categories.filter(c => c !== 'All').map((cat) => (
              <li key={cat}>
                <Link to="/pages/service/hospital/doctors" onClick={() => onSelectTab && onSelectTab('doctors')} className="hover:text-primary transition-colors">
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Patient Resources</h4>
          <ul className="space-y-2 text-xs text-base-content/70">
            <li><Link to="/pages/service/hospital/appointment" onClick={() => onSelectTab && onSelectTab('appointment')} className="hover:text-primary">Book Doctor Consultation</Link></li>
            <li><Link to="/pages/service/hospital/about" onClick={() => onSelectTab && onSelectTab('about')} className="hover:text-primary">Consultant Faculty & Ethics</Link></li>
            <li><Link to="/pages/service/hospital/contact" onClick={() => onSelectTab && onSelectTab('contact')} className="hover:text-primary">Emergency ICU Directions</Link></li>
            <li><span className="text-base-content/50">Telemedicine & Pharmacy</span></li>
          </ul>
        </div>

        <div className="space-y-2 text-xs text-base-content/70">
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Emergency & Diagnostic Center</h4>
          <p className="flex items-start gap-1.5"><LuMapPin className="text-primary mt-0.5" /> {hospitalData.address}</p>
          <p className="flex items-center gap-1.5 text-error font-bold"><LuShieldAlert className="text-error" /> {hospitalData.phone}</p>
          <p className="flex items-center gap-1.5"><LuMail className="text-primary" /> {hospitalData.email}</p>
          <div className="pt-2 text-xs text-base-content/60">
            Ambulance Dispatch: 24/7 Rapid Trauma Unit
          </div>
        </div>
      </div>

      <div className="border-t border-base-300 py-4 text-center text-xs text-base-content/60">
        Copyright 2026 {hospitalData.title}. All Rights Reserved. Emergency Healthcare Provider.
      </div>
    </footer>
  );
}
