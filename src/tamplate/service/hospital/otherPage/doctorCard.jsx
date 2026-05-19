import React from 'react';
import { LuCalendar, LuAward } from 'react-icons/lu';

export default function HospitalDoctorCard({ doctor, onBook }) {
  if (!doctor) return null;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <figure className="h-44 bg-base-200">
          <img src={doctor.image} alt={doctor.title} className="w-full h-full object-cover" />
        </figure>
        <div className="p-4 space-y-2">
          <span className="badge badge-primary badge-sm font-bold text-[10px]">{doctor.category}</span>
          <h3 className="font-bold text-base text-base-content">{doctor.title}</h3>
          <p className="text-xs text-base-content/70">{doctor.desc}</p>
        </div>
      </div>
      <div className="p-4 pt-0 border-t border-base-200 mt-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-base-content/60">Consultation Fee</div>
          <div className="text-base font-black text-primary font-mono">$${doctor.price}</div>
        </div>
        <button onClick={() => onBook && onBook(doctor)} className="btn btn-primary btn-xs font-bold gap-1 shadow-xs">
          <LuCalendar className="text-xs" />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
}
