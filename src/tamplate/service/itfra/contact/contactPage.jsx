import React, { useState } from 'react';
import { LuMapPin, LuPhone, LuMail, LuClock, LuCircleCheck, LuTerminal } from 'react-icons/lu';
import itfirmData from '../data.js';
import Breadcrumbs from './breadcrumbs.jsx';

export default function ITFirmContactPage({ onNavigate }) {
  const [sent, setSent] = useState(false);

  return (
    <div className="space-y-6 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'IT Firm', to: '/pages/service/itfirm' },
          { label: 'Technical Support & NOC', to: '/pages/service/itfirm/contact', isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="badge badge-primary badge-sm font-bold tracking-wider">ENGINEERING SUPPORT</span>
          <h1 className="text-3xl sm:text-4xl font-black text-base-content tracking-tight">Connect with Enterprise NOC</h1>
          <p className="text-xs sm:text-sm text-base-content/70">Reach our 24/7 Security Operations Center or submit an infrastructure ticket.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card bg-base-100 border border-base-300 p-6 sm:p-8 rounded-2xl shadow-xs space-y-6">
            <h3 className="font-bold text-lg text-base-content">Global Data Center Headquarters</h3>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                  <LuMapPin />
                </div>
                <div>
                  <div className="font-bold text-base-content">Headquarters Address</div>
                  <div className="text-base-content/70">{itfirmData.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                  <LuPhone />
                </div>
                <div>
                  <div className="font-bold text-base-content">24/7 SRE Hotline</div>
                  <div className="text-base-content/70">{itfirmData.phone}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                  <LuMail />
                </div>
                <div>
                  <div className="font-bold text-base-content">Corporate Engineering Email</div>
                  <div className="text-base-content/70">{itfirmData.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                  <LuClock />
                </div>
                <div>
                  <div className="font-bold text-base-content">NOC Availability</div>
                  <div className="text-base-content/70">24 Hours / 7 Days / 365 Days Continuous Monitoring</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 p-6 sm:p-8 rounded-2xl shadow-xs space-y-4">
            <h3 className="font-bold text-lg text-base-content">Submit Technical Inquiry</h3>
            {sent ? (
              <div className="p-6 bg-success/10 border border-success/30 rounded-xl text-center space-y-2">
                <LuCircleCheck className="text-success text-3xl mx-auto" />
                <div className="font-bold text-sm text-base-content">Incident Ticket Dispatched</div>
                <div className="text-xs text-base-content/70">An on-call DevOps Engineer will reply within 15 minutes.</div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label py-1 text-xs font-semibold">Your Name</label>
                    <input type="text" required placeholder="Full Name" className="input input-sm input-bordered text-xs" />
                  </div>
                  <div className="form-control">
                    <label className="label py-1 text-xs font-semibold">Contact Email</label>
                    <input type="email" required placeholder="name@company.com" className="input input-sm input-bordered text-xs" />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label py-1 text-xs font-semibold">Target Cloud / Stack</label>
                  <select className="select select-sm select-bordered text-xs">
                    {(itfirmData.categories || []).filter(c => c !== 'All').map(cat => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="form-control">
                  <label className="label py-1 text-xs font-semibold">Technical Scope</label>
                  <textarea rows="3" placeholder="Outline your technical requirements..." className="textarea textarea-bordered text-xs"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-sm font-bold w-full">
                  Submit to DevOps Team
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
