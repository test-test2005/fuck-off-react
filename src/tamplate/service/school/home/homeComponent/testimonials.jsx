import React from 'react';
import { LuStar, LuQuote } from 'react-icons/lu';

export default function SchoolTestimonials({ testimonials = [] }) {
  const defaultTestimonials = [
    {
      name: "Prof. Tariq Mahmud",
      role: "Parent of O-Level Student",
      comment: "Cambridge Academy provided my daughter with not just academic excellence, but the critical thinking and debate skills that got her accepted into Cambridge University.",
      rating: 5
    },
    {
      name: "Sultana Yasmin",
      role: "Parent of Grade 5 Scholar",
      comment: "The STEM and robotics laboratory is second to none. The teachers provide personalized feedback that truly nurtures confidence in young learners.",
      rating: 5
    },
    {
      name: "Zayan Karim",
      role: "A-Level Alumnus (Now at UCL)",
      comment: "The teachers here went above and beyond to support my university applications and Olympiad preparation. The school culture is truly exceptional.",
      rating: 5
    }
  ];

  const list = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="space-y-6">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="badge badge-primary badge-sm font-bold tracking-wider">PARENT & ALUMNI VOICES</div>
        <h2 className="text-2xl sm:text-3xl font-black text-base-content tracking-tight">Testimonials of Excellence</h2>
        <p className="text-xs sm:text-sm text-base-content/70">What families and graduates say about their journey at Cambridge Academy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {list.map((t, idx) => (
          <div key={idx} className="card bg-base-100 border border-base-300 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-1 text-warning text-xs">
              {[...Array(t.rating || 5)].map((_, i) => (
                <LuStar key={i} className="fill-warning" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-base-content/80 italic leading-relaxed">
              "{t.comment}"
            </p>
            <div className="border-t border-base-200 pt-3">
              <div className="font-bold text-xs text-base-content">{t.name}</div>
              <div className="text-[11px] text-primary font-medium">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
