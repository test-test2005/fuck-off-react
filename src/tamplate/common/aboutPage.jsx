import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { DOMAINS } from '../../data/domainData.js';
import Breadcrumbs from './breadcrumbs.jsx';
import { LuAward, LuTarget, LuEye, LuHistory } from 'react-icons/lu';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

/**
 * Service About Us Page with React Router
 */
export default function AboutPage() {
  const outlet = useOutletContext() || {};
  const data = outlet.currentData || outlet.currentJob || DOMAINS.hospital;
  const about = data?.about || {
    history: "Founded with a mission to deliver certified excellence across all sectors.",
    mission: "To deliver high quality, reliable, and accessible solutions.",
    vision: "Empowering communities through innovative and ethical leadership."
  };
  const team = data?.team || [
    { name: "Dr. Marcus Vance", role: "Executive Director", exp: "14+ Years", img: "/images/team-1.jpg" },
    { name: "Elena Rostova", role: "Senior Consultant", exp: "11+ Years", img: "/images/team-2.jpg" },
    { name: "Sarah Jenkins", role: "Head of Operations", exp: "9+ Years", img: "/images/team-3.jpg" },
    { name: "David Kim", role: "Chief Specialist", exp: "12+ Years", img: "/images/team-4.jpg" }
  ];
  const achievements = data?.about?.achievements || [
    "ISO 9001:2015 Certified System",
    "National Excellence Award 2025",
    "Verified Global Service Standards"
  ];

  return (
    <div className="space-y-12 pb-14">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs
        items={[{ label: "About Us", active: true }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="badge badge-primary badge-outline text-xs font-bold uppercase">Our Legacy</span>
          <h1 className="text-3xl sm:text-4xl font-black text-base-content">About {data.brand}</h1>
          <p className="text-xs sm:text-sm text-base-content/70">
            Dedicated to clinical superiority, compassionate healthcare delivery, and community wellness.
          </p>
        </div>

        {/* 2. Company Overview Section (History, Mission, Vision) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="card bg-base-100 border border-base-300 p-6 rounded-3xl space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl">
              <LuHistory />
            </div>
            <h3 className="font-extrabold text-lg text-base-content">Our History</h3>
            <p className="text-xs text-base-content/70 leading-relaxed">
              {about.history} Over the past decade, we have served tens of thousands of satisfied clients across the metropolitan region.
            </p>
          </div>

          <div className="card bg-base-100 border border-base-300 p-6 rounded-3xl space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-xl">
              <LuTarget />
            </div>
            <h3 className="font-extrabold text-lg text-base-content">Our Mission</h3>
            <p className="text-xs text-base-content/70 leading-relaxed">
              {about.mission}
            </p>
          </div>

          <div className="card bg-base-100 border border-base-300 p-6 rounded-3xl space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center text-xl">
              <LuEye />
            </div>
            <h3 className="font-extrabold text-lg text-base-content">Our Vision</h3>
            <p className="text-xs text-base-content/70 leading-relaxed">
              {about.vision}
            </p>
          </div>

        </div>

        {/* 3. Management Team Section */}
        <section className="space-y-8">
          <div className="border-b border-base-300 pb-4">
            <span className="badge badge-secondary badge-outline text-xs font-bold uppercase">Executive Leadership</span>
            <h2 className="text-2xl sm:text-3xl font-black text-base-content mt-1">Management & Executive Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-sm group">
                <div className="aspect-square overflow-hidden bg-base-200">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 space-y-2 text-center">
                  <h4 className="font-bold text-base text-base-content">{member.name}</h4>
                  <div className="text-xs text-primary font-semibold">{member.role}</div>
                  <div className="text-[11px] text-base-content/50">Experience: {member.exp}</div>
                  <div className="flex justify-center gap-2 pt-2 border-t border-base-200">
                    <a href="#fb" aria-label="Facebook" className="btn btn-circle btn-xs btn-ghost hover:text-primary"><FaFacebookF /></a>
                    <a href="#tw" aria-label="Twitter" className="btn btn-circle btn-xs btn-ghost hover:text-primary"><FaTwitter /></a>
                    <a href="#in" aria-label="LinkedIn" className="btn btn-circle btn-xs btn-ghost hover:text-primary"><FaLinkedinIn /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Achievements & Certifications */}
        <section className="bg-base-200/60 border border-base-300 rounded-3xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-xl">
              <LuAward />
            </div>
            <div>
              <h3 className="text-xl font-black text-base-content">Achievements & Accreditations</h3>
              <p className="text-xs text-base-content/60">National and international standard compliance credentials</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {achievements.map((ach, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-base-100 border border-base-300 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-xs flex-shrink-0">
                  
                </div>
                <span className="text-xs font-bold text-base-content">{ach}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
