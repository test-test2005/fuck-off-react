import React, { useState } from 'react';
import { LuBookOpen, LuGraduationCap, LuClock, LuUsers, LuArrowRight, LuSearch } from 'react-icons/lu';
import schoolData from '../../data.js';

export default function SchoolFeaturedCourses({ items: propItems, onSelectCourse, onApplyCourse }) {
  const [selectedCategory, setSelectedCategory] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState('');

  const items = (propItems && propItems.length > 0) ? propItems : (schoolData.items || []);
  const categories = ['All Levels', 'Early Years', 'Primary School', 'Middle School', 'O Level (IGCSE)', 'A Level (CAIE)'];

  const filtered = items.filter((item) => {
    const matchCat = selectedCategory === 'All Levels' || item.category === selectedCategory;
    const matchQuery = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="badge badge-primary badge-sm font-bold tracking-wider mb-2">CURRICULUM DIRECTORY</div>
          <h2 className="text-2xl sm:text-3xl font-black text-base-content tracking-tight">Academic Qualifications</h2>
          <p className="text-xs sm:text-sm text-base-content/70 mt-1">Rigorous British education pathway designed for holistic student success.</p>
        </div>

        <div className="w-full md:w-72">
          <div className="relative">
            <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/40 text-sm" />
            <input
              type="text"
              placeholder="Search courses, levels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-sm input-bordered w-full pl-9 text-xs"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`btn btn-xs sm:btn-sm rounded-lg font-semibold whitespace-nowrap ${
              selectedCategory === cat ? 'btn-primary shadow-xs' : 'btn-outline border-base-300 hover:border-base-content/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <figure className="relative h-44 bg-base-200 overflow-hidden cursor-pointer" onClick={() => onSelectCourse && onSelectCourse(item)}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="badge badge-primary badge-sm font-bold text-[10px] shadow-sm">
                    {item.category}
                  </span>
                </div>
              </figure>

              <div className="p-5 space-y-3">
                <h3
                  onClick={() => onSelectCourse && onSelectCourse(item)}
                  className="font-bold text-base text-base-content hover:text-primary transition-colors cursor-pointer"
                >
                  {item.title}
                </h3>
                <p className="text-xs text-base-content/70 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-base-200 mt-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-base-content/50 uppercase font-semibold">Annual Tuition</div>
                <div className="text-base font-black text-primary font-mono">${item.price}</div>
              </div>
              <button
                onClick={() => onApplyCourse ? onApplyCourse(item) : (onSelectCourse && onSelectCourse(item))}
                className="btn btn-outline btn-xs font-semibold gap-1"
              >
                <span>Details & Enroll</span>
                <LuArrowRight className="text-[10px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
