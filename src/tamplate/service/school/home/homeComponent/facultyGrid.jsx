import React from 'react';
import { LuAward, LuGraduationCap, LuMail } from 'react-icons/lu';

export default function SchoolFacultyGrid() {
  const facultyMembers = [
    {
      name: "Dr. Alistair Vance",
      role: "Principal & Head of School",
      degree: "Ph.D. Education, Oxford University",
      img: "/images/doctor-1.jpg",
      tag: "School Leadership"
    },
    {
      name: "Sarah Jenkins, M.Ed.",
      role: "Head of Cambridge CAIE Academic Pathway",
      degree: "M.Ed. Curriculum & Pedagogy, Cambridge",
      img: "/images/doctor-2.jpg",
      tag: "Academic Dean"
    },
    {
      name: "Robert Chen, M.Sc.",
      role: "Head of STEM, Robotics & AI Lab",
      degree: "M.Sc. Robotics Engineering, Imperial College",
      img: "/images/doctor-3.jpg",
      tag: "Sciences & Tech"
    },
    {
      name: "Helena Rostova, M.A.",
      role: "Dean of Humanities, Arts & Languages",
      degree: "M.A. English Literature, Edinburgh University",
      img: "/images/doctor-4.jpg",
      tag: "Humanities"
    }
  ];

  return (
    <section className="space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="badge badge-primary badge-sm font-bold tracking-wider">ACADEMIC LEADERSHIP</div>
        <h2 className="text-2xl sm:text-3xl font-black text-base-content tracking-tight">World-Class Educators</h2>
        <p className="text-xs sm:text-sm text-base-content/70">Our faculty brings international pedigree and passion to cultivate every learner.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {facultyMembers.map((fac, idx) => (
          <div
            key={idx}
            className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all text-center p-5 space-y-4"
          >
            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/20 shadow-xs">
              <img src={fac.img} alt={fac.name} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-1">
              <span className="badge badge-primary/10 text-primary badge-sm font-bold text-[10px]">
                {fac.tag}
              </span>
              <h4 className="font-bold text-sm text-base-content">{fac.name}</h4>
              <p className="text-xs text-primary font-semibold">{fac.role}</p>
              <p className="text-[11px] text-base-content/65">{fac.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
