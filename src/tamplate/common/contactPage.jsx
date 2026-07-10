import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { DOMAINS } from '../../data/domainData.js';
import Breadcrumbs from './breadcrumbs.jsx';
import PopupModal from './popupModal.jsx';
import { LuMapPin, LuPhone, LuMail, LuSend } from 'react-icons/lu';

/**
 * Service Contact & Appointment Page with React Router
 */
export default function ContactPage() {
  const outlet = useOutletContext() || {};
  const data = outlet.currentData || outlet.currentJob || DOMAINS.hospital;
  const categories = data?.categories || ['General Inquiries', 'Support', 'Feedback'];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: categories[0] || 'General',
    date: '',
    message: ''
  });

  const [modalDetails, setModalDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setModalDetails({
        Name: formData.name,
        Phone: formData.phone,
        Department: formData.department,
        Date: formData.date || "Next Available Slot",
        Token: `APT-${Math.floor(1000 + Math.random() * 9000)}`
      });
    }
  };

  return (
    <div className="space-y-10 pb-14">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs
        items={[{ label: "Contact & Appointments", active: true }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div>
          <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Direct Access</span>
          <h1 className="text-3xl sm:text-4xl font-black text-base-content mt-1">
            Book Appointment & Direct Contact
          </h1>
          <p className="text-xs sm:text-sm text-base-content/70 mt-1">
            Complete the formal appointment schedule below or contact our reception helpdesk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* ================= LEFT PANEL: CONTACT INFO & GOOGLE MAP ================= */}
          <div className="space-y-6">
            
            <div className="bg-base-200/70 border border-base-300 rounded-3xl p-6 space-y-4">
              <h3 className="font-extrabold text-base text-base-content border-b border-base-300 pb-3">
                Official Contact Coordinates
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-base-content/80">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <LuMapPin />
                  </div>
                  <div>
                    <div className="font-bold text-base-content">Headquarters Address</div>
                    <div className="text-xs text-base-content/70">{data.address}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                    <LuPhone />
                  </div>
                  <div>
                    <div className="font-bold text-base-content">Phone Hotline</div>
                    <div className="text-xs text-base-content/70">{data.phone} (24/7 Support)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <LuMail />
                  </div>
                  <div>
                    <div className="font-bold text-base-content">Email Inquiries</div>
                    <div className="text-xs text-base-content/70">{data.email}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed with Offline Visual Fallback */}
            <div className="rounded-3xl overflow-hidden border border-base-300 shadow-sm relative bg-base-200">
              <div className="bg-base-300/80 px-4 py-2 text-xs font-bold flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LuMapPin className="text-primary" />
                  <span>Google Maps Location Embed</span>
                </div>
                <span className="text-[10px] text-base-content/50 font-mono">23.8103° N, 90.4125° E</span>
              </div>
              
              <div className="relative w-full h-[220px] bg-base-300 flex items-center justify-center">
                <iframe
                  title="Company Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.607447471279!2d90.36643837589886!3d23.796918887002087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0cd9b1834e7%3A0x6b772023e9a03b51!2sMirpur-10%20Roundabout%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full relative z-10 opacity-90 hover:opacity-100 transition-opacity"
                ></iframe>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-gradient-to-br from-base-200 to-base-300 z-0">
                  <LuMapPin className="text-3xl text-error mb-1 animate-bounce" />
                  <div className="text-xs font-bold text-base-content">{data.address}</div>
                  <div className="text-[11px] text-base-content/60">GPS Navigation Point Verified</div>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT PANEL: APPOINTMENT FORM ================= */}
          <div className="bg-base-100 border border-base-300 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="font-extrabold text-lg text-base-content mb-1">
              Appointment Application Form
            </h3>
            <p className="text-xs text-base-content/60 mb-6">
              Submitting triggers a JavaScript confirmation popup with your appointment token.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="label text-xs font-bold">Patient / Client Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tanvir Ahmed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input input-sm input-bordered w-full rounded-xl bg-base-100"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="label text-xs font-bold">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="01712-XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input input-sm input-bordered w-full rounded-xl bg-base-100"
                  />
                </div>

                <div>
                  <label className="label text-xs font-bold">Email Address</label>
                  <input
                    type="email"
                    placeholder="client@mail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input input-sm input-bordered w-full rounded-xl bg-base-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="label text-xs font-bold">Department / Discipline</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="select select-sm select-bordered w-full rounded-xl bg-base-100 text-xs"
                  >
                    {data.categories.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label text-xs font-bold">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="input input-sm input-bordered w-full rounded-xl bg-base-100 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="label text-xs font-bold">Notes / Symptoms / Reason for Visit</label>
                <textarea
                  rows="3"
                  placeholder="Provide any additional symptoms or scheduling requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="textarea textarea-bordered w-full rounded-xl bg-base-100 text-xs"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block btn-sm rounded-xl font-bold shadow-md shadow-primary/20 gap-2"
              >
                <LuSend />
                <span>Submit & Confirm (Triggers Popup)</span>
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* CONFIRMATION POPUP WINDOW (Exam Condition #3) */}
      <PopupModal
        isOpen={!!modalDetails}
        onClose={() => {
          setModalDetails(null);
          setFormData({ name: '', email: '', phone: '', department: data.categories[0] || '', date: '', message: '' });
        }}
        title="Appointment Confirmed!"
        message="Your appointment has been validated and recorded into our clinical management system."
        details={modalDetails || {}}
      />
    </div>
  );
}
