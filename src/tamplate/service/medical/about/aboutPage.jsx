import React from 'react';
import { LuHeartPulse, LuAward, LuShieldAlert, LuUserCheck } from 'react-icons/lu';
import hospitalData from '../data.js';
import Breadcrumbs from './breadcrumbs.jsx';

export default function HospitalAboutPage({ onNavigate }) {
  return (
    <div className="space-y-6 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'Hospital', to: '/pages/service/hospital' },
          { label: 'About Medical Center', to: '/pages/service/hospital/about', isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="badge badge-primary badge-sm font-bold tracking-wider">ABOUT THE MEDICAL CENTER</span>
          <h1 className="text-3xl sm:text-4xl font-black text-base-content tracking-tight">{hospitalData.title}</h1>
          <p className="text-xs sm:text-sm text-base-content/70">{hospitalData.tagline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 border border-base-300 p-6 rounded-2xl shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-2">
              <LuHeartPulse />
            </div>
            <h3 className="font-bold text-base text-primary">Clinical History</h3>
            <p className="text-xs text-base-content/80 leading-relaxed">{hospitalData.about?.history}</p>
          </div>

          <div className="card bg-base-100 border border-base-300 p-6 rounded-2xl shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-2">
              <LuAward />
            </div>
            <h3 className="font-bold text-base text-primary">Patient Care Mission</h3>
            <p className="text-xs text-base-content/80 leading-relaxed">{hospitalData.about?.mission}</p>
          </div>

          <div className="card bg-base-100 border border-base-300 p-6 rounded-2xl shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-2">
              <LuShieldAlert />
            </div>
            <h3 className="font-bold text-base text-primary">Medical Excellence Vision</h3>
            <p className="text-xs text-base-content/80 leading-relaxed">{hospitalData.about?.vision}</p>
          </div>
        </div>

        {hospitalData.testimonials && (
          <div className="bg-base-200/50 border border-base-300 rounded-3xl p-8 max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-lg font-black text-base-content">Patient Story</h3>
            <p className="text-sm italic text-base-content/80">"{hospitalData.testimonials[0]?.comment}"</p>
            <div className="text-xs font-bold text-primary">{hospitalData.testimonials[0]?.name} - {hospitalData.testimonials[0]?.role}</div>
          </div>
        )}
      </div>
    </div>
  );
}
