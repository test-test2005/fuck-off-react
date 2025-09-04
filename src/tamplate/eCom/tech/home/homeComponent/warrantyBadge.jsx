import React from 'react';
import { LuShieldCheck, LuTruck, LuRotateCcw, LuHeadphones } from 'react-icons/lu';

export default function TechWarrantyBanner() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
      <div className="card bg-base-100 border border-base-300 p-4 rounded-2xl space-y-1">
        <LuShieldCheck className="text-2xl text-primary mx-auto" />
        <div className="font-bold text-xs">2-Year Warranty</div>
        <div className="text-[10px] text-base-content/60">Official replacement support</div>
      </div>
      <div className="card bg-base-100 border border-base-300 p-4 rounded-2xl space-y-1">
        <LuTruck className="text-2xl text-secondary mx-auto" />
        <div className="font-bold text-xs">Free Courier</div>
        <div className="text-[10px] text-base-content/60">On all orders over $150</div>
      </div>
      <div className="card bg-base-100 border border-base-300 p-4 rounded-2xl space-y-1">
        <LuRotateCcw className="text-2xl text-accent mx-auto" />
        <div className="font-bold text-xs">30-Day Returns</div>
        <div className="text-[10px] text-base-content/60">No questions asked guarantee</div>
      </div>
      <div className="card bg-base-100 border border-base-300 p-4 rounded-2xl space-y-1">
        <LuHeadphones className="text-2xl text-success mx-auto" />
        <div className="font-bold text-xs">24/7 Tech Help</div>
        <div className="text-[10px] text-base-content/60">Direct engineer assistance</div>
      </div>
    </section>
  );
}
