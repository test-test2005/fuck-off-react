import React, { useState, useEffect } from 'react';
import { LuGraduationCap, LuAward, LuBookOpen, LuArrowRight, LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export default function SchoolBanner({ slides = [], onApplyClick, onExploreClick }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null;

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const active = slides[current] || slides[0];

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] overflow-hidden bg-base-300 flex items-center">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-base-100 via-base-100/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-base-100/20"></div>
        </div>
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="max-w-xl space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="badge badge-primary badge-sm font-bold tracking-wider text-xs gap-1 shadow-xs">
              <LuGraduationCap /> {active.tag || 'CAMBRIDGE CAIE ACCREDITED'}
            </span>
            <span className="badge badge-outline badge-sm text-xs font-semibold gap-1">
              <LuAward className="text-warning text-xs" /> Outstanding Learner Center
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-base-content leading-tight tracking-tight">
            {active.title}
          </h1>

          <p className="text-sm sm:text-base text-base-content/80 leading-relaxed font-normal">
            {active.tagline}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onApplyClick}
              className="btn btn-primary font-bold shadow-sm gap-2"
            >
              <span>Enroll for Academic Year</span>
              <LuArrowRight className="text-sm" />
            </button>
            <button
              onClick={onExploreClick}
              className="btn btn-outline font-semibold gap-1.5"
            >
              <LuBookOpen className="text-sm" />
              <span>Explore Curriculum</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 btn btn-circle btn-sm btn-ghost bg-base-100/60 hover:bg-base-100"
        aria-label="Previous slide"
      >
        <LuChevronLeft className="text-lg" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 btn btn-circle btn-sm btn-ghost bg-base-100/60 hover:bg-base-100"
        aria-label="Next slide"
      >
        <LuChevronRight className="text-lg" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === current ? 'w-8 bg-primary' : 'w-2 bg-base-content/30'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
