import React from 'react';
import { LuGraduationCap, LuAward, LuBookOpen, LuUsers } from 'react-icons/lu';
import schoolData from '../data.js';

export default function SchoolAboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="badge badge-primary badge-sm font-bold tracking-wider">ABOUT THE ACADEMY</span>
        <h1 className="text-3xl sm:text-4xl font-black text-base-content tracking-tight">{schoolData.title}</h1>
        <p className="text-xs sm:text-sm text-base-content/70">{schoolData.tagline}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 border border-base-300 p-6 rounded-2xl shadow-xs space-y-2">
          <h3 className="font-bold text-base text-primary">Academy History</h3>
          <p className="text-xs text-base-content/80 leading-relaxed">{schoolData.about.history}</p>
        </div>

        <div className="card bg-base-100 border border-base-300 p-6 rounded-2xl shadow-xs space-y-2">
          <h3 className="font-bold text-base text-primary">Our Mission</h3>
          <p className="text-xs text-base-content/80 leading-relaxed">{schoolData.about.mission}</p>
        </div>

        <div className="card bg-base-100 border border-base-300 p-6 rounded-2xl shadow-xs space-y-2">
          <h3 className="font-bold text-base text-primary">Our Vision</h3>
          <p className="text-xs text-base-content/80 leading-relaxed">{schoolData.about.vision}</p>
        </div>
      </div>
    </div>
  );
}
