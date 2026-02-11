import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';

export default function CourseCard({ course, onSelect }) {
  if (!course) return null;
  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <figure className="h-44 bg-base-200">
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        </figure>
        <div className="p-4 space-y-2">
          <span className="badge badge-primary badge-sm font-bold text-[10px]">{course.category}</span>
          <h3 className="font-bold text-base text-base-content">{course.title}</h3>
          <p className="text-xs text-base-content/70">{course.desc}</p>
        </div>
      </div>
      <div className="p-4 pt-0 border-t border-base-200 mt-3 flex items-center justify-between">
        <div className="text-sm font-black text-primary font-mono">${course.price}</div>
        <button onClick={() => onSelect && onSelect(course)} className="btn btn-outline btn-xs font-semibold">
          Course Details
        </button>
      </div>
    </div>
  );
}
