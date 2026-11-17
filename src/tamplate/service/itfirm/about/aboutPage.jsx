import React from 'react';
import { LuCpu, LuShieldCheck, LuServer, LuTerminal } from 'react-icons/lu';
import itfirmData from '../data.js';
import Breadcrumbs from './breadcrumbs.jsx';

export default function ITFirmAboutPage({ onNavigate }) {
  return (
    <div className="space-y-6 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'IT Firm', to: '/pages/service/itfirm' },
          { label: 'About Engineering Team', to: '/pages/service/itfirm/about', isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="badge badge-primary badge-sm font-bold tracking-wider">ABOUT CYBERNET IT</span>
          <h1 className="text-3xl sm:text-4xl font-black text-base-content tracking-tight">{itfirmData.title}</h1>
          <p className="text-xs sm:text-sm text-base-content/70">{itfirmData.tagline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 border border-base-300 p-6 rounded-2xl shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-2">
              <LuCpu />
            </div>
            <h3 className="font-bold text-base text-primary">Engineering History</h3>
            <p className="text-xs text-base-content/80 leading-relaxed">{itfirmData.about?.history}</p>
          </div>

          <div className="card bg-base-100 border border-base-300 p-6 rounded-2xl shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-2">
              <LuShieldCheck />
            </div>
            <h3 className="font-bold text-base text-primary">Security & SRE Mission</h3>
            <p className="text-xs text-base-content/80 leading-relaxed">{itfirmData.about?.mission}</p>
          </div>

          <div className="card bg-base-100 border border-base-300 p-6 rounded-2xl shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-2">
              <LuServer />
            </div>
            <h3 className="font-bold text-base text-primary">Autonomous Cloud Vision</h3>
            <p className="text-xs text-base-content/80 leading-relaxed">{itfirmData.about?.vision}</p>
          </div>
        </div>

        {itfirmData.testimonials && (
          <div className="bg-neutral text-neutral-content rounded-3xl p-8 max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-lg font-black text-white">Client Testimonial</h3>
            <p className="text-sm italic text-neutral-content/80">"{itfirmData.testimonials[0]?.comment}"</p>
            <div className="text-xs font-bold text-primary">{itfirmData.testimonials[0]?.name} - {itfirmData.testimonials[0]?.role}</div>
          </div>
        )}
      </div>
    </div>
  );
}
