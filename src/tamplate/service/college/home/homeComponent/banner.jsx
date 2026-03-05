import React from 'react';
import { LuGraduationCap, LuArrowRight } from 'react-icons/lu';

export default function CollegeBanner({ onApply }) {
  return (
    <div className="bg-base-200 text-base-content py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        <span className="badge badge-primary font-bold text-xs">GLOBAL ACADEMIC EXCELLENCE</span>
        <h1 className="text-3xl sm:text-5xl font-black text-base-content leading-tight">
          Pioneering Future Leaders Through Science, Technology & Business
        </h1>
        <p className="text-xs sm:text-sm text-base-content/80 max-w-xl mx-auto">
          Explore internationally aligned undergraduate and graduate degree programs designed for the global economy.
        </p>
        <div className="pt-2">
          <button onClick={onApply} className="btn btn-primary font-bold gap-2">
            <span>Explore Degree Programs</span>
            <LuArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
