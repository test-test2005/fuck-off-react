import React, { useState, useEffect } from 'react';
import { LuArrowRight, LuChevronLeft, LuChevronRight, LuUtensils } from 'react-icons/lu';
import foodData from '../../data.js';

export default function FoodBanner({ slides: propSlides, onMenuClick, onReserveClick }) {
  const defaultSlides = (foodData && foodData.slides && foodData.slides.length > 0)
    ? foodData.slides
    : [
        {
          title: "Artisan Woodfire Neapolitan Pizza & Handmade Pasta",
          tagline: "Slow-fermented 72-hour sourdough, San Marzano D.O.P. tomatoes, and fresh buffalo mozzarella.",
          img: "/images/banner-food-1.jpg",
          tag: "AUTHENTIC ITALIAN"
        },
        {
          title: "Prime Black Angus Ribeye & Truffle Butter Reduction",
          tagline: "Charcoal grilled to perfection over aromatic hickory wood embers with roasted farm greens.",
          img: "/images/banner-food-2.jpg",
          tag: "CHEF SPECIALTY"
        }
      ];

  const slides = (propSlides && propSlides.length > 0) ? propSlides : defaultSlides;
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
            <LuUtensils /> {active.tag || 'MICHELIN RECOGNIZED'}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-base-content leading-tight">
            {active.title}
          </h1>
          <p className="text-xs sm:text-sm text-base-content/80 leading-relaxed font-normal">
            {active.tagline}
          </p>
          <div className="pt-2 flex items-center gap-3">
            <button onClick={onMenuClick} className="btn btn-primary btn-sm font-bold shadow-xs gap-2">
              <span>View Full Menu</span>
              <LuArrowRight />
            </button>
            <button onClick={onReserveClick} className="btn btn-outline btn-sm font-semibold">
              <span>Reserve Table</span>
            </button>
          </div>
        </div>
      </div>

      <button onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 btn btn-circle btn-sm btn-ghost bg-base-100/50" aria-label="Previous slide">
        <LuChevronLeft className="text-lg" />
      </button>
      <button onClick={() => setCurrent((c) => (c + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 btn btn-circle btn-sm btn-ghost bg-base-100/50" aria-label="Next slide">
        <LuChevronRight className="text-lg" />
      </button>
    </div>
  );
}
