import React, { useState, useEffect } from 'react';
import { LuGraduationCap, LuAward, LuBookOpen, LuArrowRight, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import schoolData from '../../data.js';

export default function SchoolBanner({ slides: propSlides, onApplyClick, onExploreClick }) {
  const defaultSlides = (schoolData && schoolData.slides && schoolData.slides.length > 0)
    ? schoolData.slides
    : [
        {
          title: "World-Class Cambridge Curriculum & STEM Labs",
          tagline: "Empowering children with inquiry-based learning, robotics, and bilingual communication.",
          img: "/images/banner-edu-1.jpg",
          tag: "ACCREDITED 2026"
        },
        {
          title: "Inspiring Arts, Sports & Athletic Facilities",
          tagline: "Olympic standard indoor swimming pool, FIFA astro turf, and dedicated performing arts auditorium.",
          img: "/images/banner-edu-2.jpg",
          tag: "HOLISTIC GROWTH"
        }
      ];

  const slides = (propSlides && propSlides.length > 0) ? propSlides : defaultSlides;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
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

          <p className="text-xs sm:text-sm text-base-content/80 leading-relaxed font-normal">
            {active.tagline}
          </p>

          <div className="pt-2 flex items-center gap-3 flex-wrap">
            <button
              onClick={onApplyClick}
              className="btn btn-primary btn-sm font-bold shadow-xs gap-1.5"
            >
              <span>Apply for Admission</span>
              <LuArrowRight className="text-xs" />
            </button>
            <button
              onClick={onExploreClick}
              className="btn btn-outline btn-sm font-semibold gap-1.5"
            >
              <LuBookOpen className="text-xs" />
              <span>Explore Curriculum</span>
            </button>
          </div>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 btn btn-circle btn-sm btn-ghost bg-base-100/50" aria-label="Previous slide">
        <LuChevronLeft className="text-lg" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 btn btn-circle btn-sm btn-ghost bg-base-100/50" aria-label="Next slide">
        <LuChevronRight className="text-lg" />
      </button>
    </div>
  );
}
