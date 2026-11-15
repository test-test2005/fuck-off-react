import React, { useState, useEffect } from 'react';
import { LuArrowRight, LuUtensils, LuCalendar } from 'react-icons/lu';
import { DOMAINS } from '../../../../../data/domainData.js';

export default function FoodBanner({ onExploreMenu, onBookClick }) {
  const slides = DOMAINS.food.slides || [];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  if (!slides.length) return null;
  const active = slides[current] || slides[0];

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] overflow-hidden bg-base-300 flex items-center">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-base-100 via-base-100/90 to-transparent"></div>
        </div>
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="max-w-xl space-y-4">
          <span className="badge badge-primary font-bold text-xs gap-1 shadow-xs">
            <LuUtensils /> {active.tag || 'CHEF SPECIALTY'}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-base-content leading-tight">
            {active.title}
          </h1>
          <p className="text-xs sm:text-sm text-base-content/80 leading-relaxed font-normal">
            {active.tagline}
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button onClick={onExploreMenu} className="btn btn-primary btn-sm font-bold shadow-xs gap-2">
              <span>Explore Menu</span>
              <LuArrowRight />
            </button>
            <button onClick={onBookClick} className="btn btn-outline btn-sm font-semibold gap-1.5">
              <LuCalendar />
              <span>Reserve Table</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
