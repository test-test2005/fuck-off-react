import React from 'react';
import { LuCpu, LuCheck, LuArrowRight } from 'react-icons/lu';

export default function ITFirmServiceCard({ service, onSelect }) {
  if (!service) return null;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
          <LuCpu />
        </div>
        <h3 className="font-bold text-base text-base-content">{service.title}</h3>
        <p className="text-xs text-base-content/70 leading-relaxed">{service.desc}</p>
        {service.specs && (
          <div className="space-y-1 pt-2">
            {service.specs.map((sp, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[11px] text-base-content/80">
                <LuCheck className="text-primary text-xs" />
                <span>{sp}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="border-t border-base-200 pt-4 mt-4 flex items-center justify-between">
        <span className="text-base font-black text-primary font-mono">$${service.price}/mo</span>
        <button onClick={() => onSelect && onSelect(service)} className="btn btn-outline btn-xs font-semibold">
          Select Plan
        </button>
      </div>
    </div>
  );
}
