import React from 'react';
import { LuHeartPulse, LuCalendar, LuAward, LuArrowRight } from 'react-icons/lu';
import hospitalData from '../../data.js';

export default function HospitalBanner({ onBookClick, slides }) {
  const currentSlides = slides && slides.length > 0 ? slides : (hospitalData.slides || []);
  const firstSlide = currentSlides[0] || {
    title: "Compassionate Healthcare Powered by Modern Medical Science",
    tagline: "24/7 Emergency response, world-renowned consultant physicians, and modern robotic diagnostics.",
    tag: "JCI ACCREDITED MEDICAL EXCELLENCE"
  };

  return (
    <div className="bg-base-200 text-base-content py-16 px-4 sm:px-8 border-b border-base-300">
      <div className="max-w-5xl mx-auto space-y-4 text-center">
        <div className="badge badge-primary font-bold text-xs gap-1 mx-auto">
          <LuAward /> {firstSlide.tag || "JCI ACCREDITED MEDICAL EXCELLENCE"}
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-base-content leading-tight">
          {firstSlide.title}
        </h1>
        <p className="text-xs sm:text-sm text-base-content/80 max-w-2xl mx-auto leading-relaxed">
          {firstSlide.tagline}
        </p>
        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            onClick={() => onBookClick && onBookClick()}
            className="btn btn-primary font-bold gap-2 shadow-xs"
          >
            <LuCalendar />
            <span>Book Doctor Consultation</span>
            <LuArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
