import React from 'react';
import { Link } from 'react-router-dom';
import { LuUtensils, LuMapPin, LuPhone, LuClock } from 'react-icons/lu';
import foodData from './data.js';

export default function FoodFooter() {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-content flex items-center justify-center font-bold">
              <LuUtensils />
            </div>
            <span className="font-black text-base">{foodData.brand}</span>
          </div>
          <p className="text-xs text-base-content/70 leading-relaxed">{foodData.tagline}</p>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Service Hours</h4>
          <div className="space-y-1.5 text-xs text-base-content/70">
            <p>Lunch Service: 12:00 PM - 03:30 PM</p>
            <p>Dinner & Tasting: 06:30 PM - 11:00 PM</p>
            <p>Weekend Artisan Brunch: 10:00 AM - 04:00 PM</p>
          </div>
        </div>

        <div className="space-y-2 text-xs text-base-content/70">
          <h4 className="font-bold text-xs uppercase tracking-wider text-base-content/90 mb-3">Reservations & Location</h4>
          <p className="flex items-start gap-1.5"><LuMapPin className="text-primary mt-0.5" /> {foodData.address}</p>
          <p className="flex items-center gap-1.5"><LuPhone className="text-primary" /> {foodData.phone}</p>
        </div>
      </div>
      <div className="border-t border-base-300 py-4 text-center text-xs text-base-content/60">
        Copyright 2026 {foodData.title}. Gourmet Dining & Hospitality.
      </div>
    </footer>
  );
}
