import React from 'react';
import { LuHeartPulse, LuCalendar, LuAward } from 'react-icons/lu';

export default function HospitalBanner({ onBookClick }) {
  return (
    <div className="bg-base-200 text-base-content py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto space-y-4 text-center">
        <div className="badge badge-primary font-bold text-xs gap-1 mx-auto">
          <LuAward /> JCI ACCREDITED MEDICAL EXCELLENCE
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-base-content leading-tight">
          Compassionate Healthcare Powered by Modern Medical Science
        </h1>
        <p className="text-xs sm:text-sm text-base-content/80 max-w-2xl mx-auto leading-relaxed">
          24/7 Emergency response, world-renowned consultant physicians, and modern robotic diagnostics.
        </p>
        <div className="pt-2">
          <button onClick={onBookClick} className="btn btn-primary font-bold gap-2 shadow-xs">
            <LuCalendar />
            <span>Book Doctor Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
}
