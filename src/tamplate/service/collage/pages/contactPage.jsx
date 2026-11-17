import React, { useState } from 'react';
import { LuMapPin, LuPhone, LuMail, LuClock, LuCircleCheck, LuBuilding2 } from 'react-icons/lu';
import collegeData from '../data.js';
import Breadcrumbs from './breadcrumbs.jsx';

export default function CollegeContactPage({ onNavigate }) {
  const [sent, setSent] = useState(false);

  return (
    <div className="space-y-6 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'College', to: '/pages/service/collage' },
          { label: 'Campus Contact', to: '/pages/service/collage/contact', isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="badge badge-primary badge-sm font-bold tracking-wider">REGISTRAR & ADMISSIONS</span>
          <h1 className="text-3xl sm:text-4xl font-black text-base-content tracking-tight">Connect with Admissions</h1>
          <p className="text-xs sm:text-sm text-base-content/70">Visit the registrar secretariat or schedule an entrance consultation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="card bg-base-100 border border-base-300 p-6 sm:p-8 rounded-2xl shadow-xs space-y-6">
            <h3 className="font-bold text-lg text-base-content">Campus Secretariat</h3>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                  <LuMapPin />
                </div>
                <div>
                  <div className="font-bold text-base-content">Campus Address</div>
                  <div className="text-base-content/70">{collegeData.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                  <LuPhone />
                </div>
                <div>
                  <div className="font-bold text-base-content">Admissions Hotline</div>
                  <div className="text-base-content/70">{collegeData.phone}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                  <LuMail />
                </div>
                <div>
                  <div className="font-bold text-base-content">Registrar Email</div>
                  <div className="text-base-content/70">{collegeData.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                  <LuClock />
                </div>
                <div>
                  <div className="font-bold text-base-content">Registrar Office Hours</div>
                  <div className="text-base-content/70">Saturday - Thursday: 9:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card bg-base-100 border border-base-300 p-6 sm:p-8 rounded-2xl shadow-xs space-y-4">
            <h3 className="font-bold text-lg text-base-content">Admissions Counseling Request</h3>
            {sent ? (
              <div className="p-6 bg-success/10 border border-success/30 rounded-xl text-center space-y-2">
                <LuCircleCheck className="text-success text-3xl mx-auto" />
                <div className="font-bold text-sm text-base-content">Request Registered</div>
                <div className="text-xs text-base-content/70">A department advisor will reach out to schedule your campus interview.</div>
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
                    <label className="label py-1 text-xs font-semibold">Applicant Name</label>
                    <input type="text" required placeholder="Full Name" className="input input-sm input-bordered text-xs" />
                  </div>
                  <div className="form-control">
                    <label className="label py-1 text-xs font-semibold">Contact Phone</label>
                    <input type="tel" required placeholder="Phone number" className="input input-sm input-bordered text-xs" />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label py-1 text-xs font-semibold">Intended Faculty / Degree</label>
                  <select className="select select-sm select-bordered text-xs">
                    {(collegeData.categories || []).filter(c => c !== 'All').map(cat => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="form-control">
                  <label className="label py-1 text-xs font-semibold">Inquiry Details</label>
                  <textarea rows="3" placeholder="Tell us about your academic background..." className="textarea textarea-bordered text-xs"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-sm font-bold w-full">
                  Submit Admissions Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
