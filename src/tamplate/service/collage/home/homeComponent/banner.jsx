import React from 'react';
import { LuGraduationCap, LuArrowRight, LuAward, LuBookOpen } from 'react-icons/lu';
import collegeData from '../../data.js';

export default function CollegeBanner({ onApply, slides }) {
  const currentSlides = slides && slides.length > 0 ? slides : (collegeData.slides || []);
  const firstSlide = currentSlides[0] || {
    title: "Pioneering Future Leaders Through Science, Technology & Business",
    tagline: "Explore internationally aligned undergraduate and graduate degree programs designed for the global economy.",
    tag: "GLOBAL ACADEMIC EXCELLENCE"
  };

  return (
    <div className="bg-base-200 text-base-content py-16 px-4 sm:px-8 border-b border-base-300">
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        <span className="badge badge-primary font-bold text-xs tracking-wider gap-1">
          <LuAward className="text-xs" />
          {firstSlide.tag || "GLOBAL ACADEMIC EXCELLENCE"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-base-content leading-tight">
          {firstSlide.title}
        </h1>
        <p className="text-xs sm:text-sm text-base-content/80 max-w-xl mx-auto leading-relaxed">
          {firstSlide.tagline}
        </p>
        <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => onApply && onApply()}
            className="btn btn-primary font-bold gap-2 shadow-xs"
          >
            <LuGraduationCap className="text-base" />
            <span>Explore Degree Programs</span>
            <LuArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
