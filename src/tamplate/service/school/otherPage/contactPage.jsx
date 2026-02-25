import React, { useState } from 'react';
import { LuMapPin, LuPhone, LuMail, LuClock, LuCircleCheck } from 'react-icons/lu';
import { DOMAINS } from "../../../../data/domainData.js";
const schoolData = DOMAINS.school;

export default function SchoolContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="badge badge-primary badge-sm font-bold tracking-wider">CAMPUS INQUIRIES</span>
        <h1 className="text-3xl sm:text-4xl font-black text-base-content tracking-tight">Connect with Admissions</h1>
        <p className="text-xs sm:text-sm text-base-content/70">Visit our campus or get in touch with our admissions counsellors.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="card bg-base-100 border border-base-300 p-6 sm:p-8 rounded-2xl shadow-xs space-y-6">
          <h3 className="font-bold text-lg text-base-content">Campus Contact Details</h3>
          
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                <LuMapPin />
              </div>
              <div>
                <div className="font-bold text-base-content">Campus Address</div>
                <div className="text-base-content/70">{schoolData.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                <LuPhone />
              </div>
              <div>
                <div className="font-bold text-base-content">Admissions Hotline</div>
                <div className="text-base-content/70">{schoolData.phone}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                <LuMail />
              </div>
              <div>
                <div className="font-bold text-base-content">Admissions Email</div>
                <div className="text-base-content/70">{schoolData.email}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                <LuClock />
              </div>
              <div>
                <div className="font-bold text-base-content">Office Working Hours</div>
                <div className="text-base-content/70">Sunday to Thursday: 8:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="card bg-base-100 border border-base-300 p-6 sm:p-8 rounded-2xl shadow-xs space-y-4">
          <h3 className="font-bold text-lg text-base-content">Book a Campus Tour & Consultation</h3>
          {sent ? (
            <div className="p-6 bg-success/10 border border-success/30 rounded-xl text-center space-y-2">
              <LuCircleCheck className="text-success text-3xl mx-auto" />
              <div className="font-bold text-sm text-base-content">Inquiry Sent Successfully</div>
              <div className="text-xs text-base-content/70">An admissions counsellor will reach out shortly.</div>
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
                  <label className="label py-1 text-xs font-semibold">Contact Phone</label>
                  <input type="tel" required placeholder="Phone number" className="input input-sm input-bordered text-xs" />
                </div>
              </div>
              <div className="form-control">
                <label className="label py-1 text-xs font-semibold">Inquiry Message</label>
                <textarea rows="4" placeholder="How can we assist you?" className="textarea textarea-bordered text-xs"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-sm font-bold w-full">
                Submit Campus Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
