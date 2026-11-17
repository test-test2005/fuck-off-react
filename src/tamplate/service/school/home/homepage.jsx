import React from 'react';
import { useNavigate } from 'react-router-dom';
import SchoolBanner from './homeComponent/banner.jsx';
import SchoolStatsCounter from './homeComponent/statsCounter.jsx';
import SchoolFeaturedCourses from './homeComponent/featuredCourses.jsx';
import SchoolFacultyGrid from './homeComponent/facultyGrid.jsx';
import SchoolTestimonials from './homeComponent/testimonials.jsx';

export default function SchoolHomePage({ onNavigate, onSelectCourse }) {
  let nav;
  try {
    nav = useNavigate();
  } catch (e) {
    nav = (to) => { if (typeof window !== 'undefined') window.location.href = to; };
  }
  const navigate = onNavigate || nav;

  return (
    <div className="space-y-16 pb-16">
      <SchoolBanner
        onApplyClick={() => navigate('admission')}
        onExploreClick={() => navigate('courses')}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        <SchoolStatsCounter />
        <SchoolFeaturedCourses
          onSelectCourse={onSelectCourse}
          onApplyCourse={(c) => {
            if (onSelectCourse) onSelectCourse(c);
            navigate('admission');
          }}
        />
        <SchoolFacultyGrid />
        <SchoolTestimonials />
      </div>
    </div>
  );
}
