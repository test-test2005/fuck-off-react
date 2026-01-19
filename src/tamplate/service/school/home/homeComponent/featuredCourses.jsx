import React, { useState } from 'react';
import { LuBookOpen, LuGraduationCap, LuClock, LuUsers, LuArrowRight, LuSearch, LuFilter } from 'react-icons/lu';

export default function SchoolFeaturedCourses({ items = [], onSelectCourse, onApplyCourse }) {
  const [selectedCategory, setSelectedCategory] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState('');

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

        {/* Search Input */}
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

      {/* Category Filter Pills */}
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

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((course) => (
          <div
            key={course.id}
            className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <figure className="relative h-44 overflow-hidden bg-base-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="badge badge-primary badge-sm font-bold text-[11px] shadow-sm">
                    {course.category}
                  </span>
                </div>
                {course.discountBadge && (
                  <div className="absolute top-3 right-3">
                    <span className="badge badge-warning badge-sm font-bold text-[11px] shadow-sm">
                      {course.discountBadge}
                    </span>
                  </div>
                )}
              </figure>

              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-base-content/60 font-medium">
                  <span className="flex items-center gap-1"><LuClock className="text-xs text-primary" /> Full Academic Year</span>
                  <span>|</span>
                  <span className="flex items-center gap-1"><LuUsers className="text-xs text-secondary" /> Max 20 / Cohort</span>
                </div>

                <h3 className="font-bold text-base text-base-content line-clamp-1 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs text-base-content/70 line-clamp-2 leading-relaxed">
                  {course.desc}
                </p>

                {/* Specs / Curriculum bullets */}
                {course.specs && course.specs.length > 0 && (
                  <div className="space-y-1 pt-1">
                    {course.specs.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="text-[11px] text-base-content/80 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-base-200 mt-4 flex items-center justify-between gap-2">
              <div>
                <span className="text-[11px] text-base-content/60 block font-medium">Annual Tuition</span>
                <span className="text-base font-black text-primary">$${course.price.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onSelectCourse && onSelectCourse(course)}
                  className="btn btn-ghost btn-xs text-xs font-semibold hover:text-primary"
                >
                  Details
                </button>
                <button
                  onClick={() => onApplyCourse && onApplyCourse(course)}
                  className="btn btn-primary btn-xs font-bold gap-1 shadow-xs"
                >
                  <span>Apply</span>
                  <LuArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
