import React from 'react';
import { LuGraduationCap, LuClock } from 'react-icons/lu';

export default function CollegeDepartmentCard({ item, onSelect }) {
  if (!item) return null;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <figure className="h-44 bg-base-200">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </figure>
        <div className="p-4 space-y-2">
          <span className="badge badge-primary badge-sm font-bold text-[10px]">{item.category}</span>
          <h3 className="font-bold text-base text-base-content">{item.title}</h3>
          <p className="text-xs text-base-content/70">{item.desc}</p>
        </div>
      </div>
      <div className="p-4 pt-0 border-t border-base-200 mt-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-base-content/60">Annual Tuition</div>
          <div className="text-base font-black text-primary font-mono">$${item.price.toLocaleString()}</div>
        </div>
        <button onClick={() => onSelect && onSelect(item)} className="btn btn-outline btn-xs font-semibold">
          Program Details
        </button>
      </div>
    </div>
  );
}
