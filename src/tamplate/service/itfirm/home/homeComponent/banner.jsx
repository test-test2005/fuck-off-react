import React from 'react';
import { LuCpu, LuArrowRight, LuShieldCheck } from 'react-icons/lu';

export default function ITFirmBanner({ onQuoteClick }) {
  return (
    <div className="bg-neutral text-neutral-content py-16 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-5 text-center">
        <div className="badge badge-primary font-bold text-xs gap-1 mx-auto">
          <LuShieldCheck /> ENTERPRISE CLOUD ARCHITECTURE
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          Scalable Cloud Infrastructure & Autonomous AI Systems
        </h1>
        <p className="text-xs sm:text-sm text-neutral-content/80 max-w-2xl mx-auto leading-relaxed">
          We architect mission-critical cloud pipelines, multi-region Kubernetes clusters, and bespoke AI applications for high-growth enterprises.
        </p>
        <div className="pt-2">
          <button onClick={onQuoteClick} className="btn btn-primary font-bold gap-2 shadow-xs">
            <span>Schedule Architecture Review</span>
            <LuArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
