import React from 'react';
import { LuCpu, LuZap, LuBatteryCharging, LuShieldCheck } from 'react-icons/lu';

export default function TechSpecsOverview() {
  const specs = [
    { icon: <LuCpu />, title: "M4 Max Architecture", desc: "Up to 32-core GPU with dedicated neural accelerators" },
    { icon: <LuZap />, title: "144Hz Liquid AMOLED", desc: "Dynamic refresh rate and 1600 nits peak brightness" },
    { icon: <LuBatteryCharging />, title: "48-Hour Ultra Battery", desc: "Fast charge 0 to 80% in under 35 minutes" },
    { icon: <LuShieldCheck />, title: "Titanium Chassis", desc: "Aerospace-grade structural frame and sapphire glass" }
  ];

  return (
    <section className="bg-base-200/50 border border-base-300 rounded-3xl p-6 sm:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {specs.map((s, idx) => (
          <div key={idx} className="flex items-start gap-4 p-3 bg-base-100 rounded-2xl border border-base-300 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0">
              {s.icon}
            </div>
            <div>
              <h4 className="font-bold text-sm text-base-content">{s.title}</h4>
              <p className="text-xs text-base-content/70 mt-0.5">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
