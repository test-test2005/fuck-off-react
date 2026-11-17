import React from 'react';
import { LuCpu, LuArrowRight, LuShieldCheck, LuServer } from 'react-icons/lu';
import itfirmData from '../../data.js';

export default function ITFirmBanner({ onQuoteClick, slides }) {
  const currentSlides = slides && slides.length > 0 ? slides : (itfirmData.slides || []);
  const firstSlide = currentSlides[0] || {
    title: "Scalable Cloud Infrastructure & Autonomous AI Systems",
    tagline: "We architect mission-critical cloud pipelines, multi-region Kubernetes clusters, and bespoke AI applications for high-growth enterprises.",
    tag: "ENTERPRISE CLOUD ARCHITECTURE"
  };

  return (
    <div className="bg-neutral text-neutral-content py-16 px-4 sm:px-8 relative overflow-hidden border-b border-neutral-focus">
      <div className="max-w-5xl mx-auto space-y-5 text-center relative z-10">
        <div className="badge badge-primary font-bold text-xs gap-1 mx-auto">
          <LuShieldCheck /> {firstSlide.tag || "ENTERPRISE CLOUD ARCHITECTURE"}
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          {firstSlide.title}
        </h1>
        <p className="text-xs sm:text-sm text-neutral-content/80 max-w-2xl mx-auto leading-relaxed">
          {firstSlide.tagline}
        </p>
        <div className="pt-2">
          <button
            onClick={() => onQuoteClick && onQuoteClick()}
            className="btn btn-primary font-bold gap-2 shadow-xs"
          >
            <LuServer className="text-base" />
            <span>Schedule Architecture Review</span>
            <LuArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
