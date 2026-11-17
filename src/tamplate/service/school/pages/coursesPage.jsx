import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import schoolData from '../data.js';
import Breadcrumbs from './breadcrumbs.jsx';
import CourseCard from './courseCard.jsx';
import { LuSearch, LuStar, LuBookOpen, LuCheck, LuEye, LuGraduationCap } from 'react-icons/lu';

export default function SchoolCoursesPage({ courses: propCourses, onNavigate, onSelectCourse }) {
  let nav;
  try {
    nav = useNavigate();
  } catch (e) {
    nav = (to) => { if (typeof window !== 'undefined') window.location.href = to; };
  }
  const navigate = onNavigate || nav;

  const items = (propCourses && propCourses.length > 0) ? propCourses : (schoolData.items || []);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                            item.desc.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, search]);

  return (
    <div className="space-y-6 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'School', to: '/pages/service/school' },
          { label: 'Academic Courses', to: '/pages/service/school/courses', isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="border-b border-base-300 pb-4">
          <div className="flex items-center gap-2">
            <span className="badge badge-primary badge-outline text-xs font-bold uppercase gap-1">
              <LuGraduationCap className="text-xs" />
              <span>Full Curriculum</span>
            </span>
          </div>
          <h1 className="text-3xl font-black text-base-content mt-1">Cambridge Academic Programs</h1>
          <p className="text-xs sm:text-sm text-base-content/70 mt-1">
            Complete qualification pathway recognized by universities worldwide.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1">
            {['All', ...schoolData.categories.filter(c => c !== 'All')].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-xs rounded-full font-semibold ${
                  selectedCategory === cat ? 'btn-primary' : 'btn-ghost border border-base-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search curriculum..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-sm input-bordered w-full pl-8 text-xs"
            />
            <LuSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 text-base-content/40 text-xs" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((c) => (
            <CourseCard
              key={c.id}
              course={c}
              onSelect={(item) => {
                if (onSelectCourse) onSelectCourse(item);
                else navigate(`/detail/${item.id}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
