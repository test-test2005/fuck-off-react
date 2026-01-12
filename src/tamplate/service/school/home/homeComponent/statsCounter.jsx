import React from 'react';
import { LuGraduationCap, LuAward, LuUsers, LuBookOpen } from 'react-icons/lu';

export default function SchoolStatsCounter({ stats = [] }) {
  const defaultStats = [
    { label: "Enrolled Students", value: "1,850+", desc: "From Kindergarten to Grade 12" },
    { label: "University Placement", value: "100%", desc: "Top global ivy-league & UK universities" },
    { label: "Cambridge Awards", value: "48+", desc: "Top in Country and Top in World honors" },
    { label: "Faculty-to-Student Ratio", value: "1:15", desc: "Individualized coaching and guidance" }
  ];

  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <section className="bg-primary/5 border border-primary/15 rounded-3xl p-6 sm:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {displayStats.map((st, idx) => (
          <div key={idx} className="space-y-1.5 p-3">
            <div className="text-2xl sm:text-4xl font-black text-primary tracking-tight font-mono">
              {st.value}
            </div>
            <div className="text-xs sm:text-sm font-bold text-base-content">
              {st.label}
            </div>
            <div className="text-[11px] text-base-content/65 max-w-[200px] mx-auto leading-tight">
              {st.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
