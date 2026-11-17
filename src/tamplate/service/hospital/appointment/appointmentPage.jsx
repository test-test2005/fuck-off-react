import React, { useState } from 'react';
import hospitalData from '../data.js';
import Breadcrumbs from './breadcrumbs.jsx';
import PopupModal from './popupModal.jsx';
import { LuHeartPulse, LuCalendar, LuSend, LuClock, LuUser, LuPhone, LuMail } from 'react-icons/lu';

/**
 * Hospital Doctor Appointment Booking Page
 * Located at: pages/service/hospital/appointment.jsx
 */
export default function HospitalAppointmentPage({ selectedDoctor, onNavigate }) {
  const doctors = hospitalData.items || [];
  const defaultDoc = selectedDoctor || doctors[0] || {
    id: 801,
    title: "Dr. Farhana Rahman, MD",
    category: "Cardiology"
  };

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    department: defaultDoc.category || 'Cardiology',
    doctor: defaultDoc.title,
    date: '2026-11-20',
    timeSlot: '05:00 PM - 06:00 PM',
    problem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'Hospital', to: '/pages/service/hospital' },
          { label: 'Book Appointment', to: '/pages/service/hospital/appointment', isCurrent: true }
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="badge badge-primary badge-outline text-xs font-bold uppercase gap-1">
            <LuHeartPulse className="text-xs" />
            <span>OPD Consultation Desk</span>
          </span>
          <h1 className="text-3xl font-black text-base-content">Book Specialist Doctor Appointment</h1>
          <p className="text-xs sm:text-sm text-base-content/70">
            Select your preferred medical specialist, date, and time slot for immediate booking confirmation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card bg-base-100 border border-base-300 p-6 sm:p-8 rounded-3xl shadow-xs space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuUser className="text-primary text-xs" /> Patient Full Name
              </label>
              <input
                type="text"
                required
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                placeholder="e.g. Mustafizur Rahman"
                className="input input-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuPhone className="text-accent text-xs" /> Mobile Contact Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+880 1712-345678"
                className="input input-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuHeartPulse className="text-primary text-xs" /> Medical Specialty
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="select select-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs font-semibold"
              >
                {(hospitalData.categories || []).filter(c => c !== 'All').map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80">Select Doctor</label>
              <select
                value={formData.doctor}
                onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                className="select select-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs font-semibold"
              >
                {doctors.map((d) => (
                  <option key={d.id} value={d.title}>{d.title} ({d.category})</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuCalendar className="text-secondary text-xs" /> Appointment Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="input input-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuClock className="text-warning text-xs" /> Visiting Time Slot
              </label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="select select-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs font-semibold"
              >
                <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM (Morning OPD)</option>
                <option value="05:00 PM - 06:30 PM">05:00 PM - 06:30 PM (Evening Chamber)</option>
                <option value="07:00 PM - 08:30 PM">07:00 PM - 08:30 PM (Night Chamber)</option>
              </select>
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-base-content/80">
                Brief Health Complaint or Symptoms
              </label>
              <textarea
                rows="3"
                value={formData.problem}
                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                placeholder="Mention chest discomfort, blood pressure issues, or previous prescriptions..."
                className="textarea textarea-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn btn-primary btn-block rounded-xl font-bold gap-2 text-xs sm:text-sm shadow-md shadow-primary/20"
            >
              <LuSend />
              <span>Confirm Appointment Booking</span>
            </button>
          </div>
        </form>
      </div>

      <PopupModal
        isOpen={submitted}
        onClose={() => setSubmitted(false)}
        title="Doctor Appointment Confirmed"
        type="success"
      >
        <div className="space-y-2">
          <p>
            Your appointment with <strong>{formData.doctor}</strong> has been confirmed for <strong>{formData.date}</strong> at <strong>{formData.timeSlot}</strong>.
          </p>
          <p className="text-xs text-base-content/60">
            A confirmation SMS with serial token has been dispatched to <strong>{formData.phone}</strong>. Please report to OPD Desk, Level 4 fifteen minutes prior to the scheduled slot.
          </p>
        </div>
      </PopupModal>
    </div>
  );
}
