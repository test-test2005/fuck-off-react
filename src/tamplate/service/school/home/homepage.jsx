import React from 'react';
import { useNavigate } from 'react-router-dom';
import SchoolBanner from './homeComponent/banner.jsx';
import SchoolStatsCounter from './homeComponent/statsCounter.jsx';
import SchoolFeaturedCourses from './homeComponent/featuredCourses.jsx';
import SchoolFacultyGrid from './homeComponent/facultyGrid.jsx';
import SchoolTestimonials from './homeComponent/testimonials.jsx';

export default function SchoolHomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-16 pb-16">
      <SchoolBanner
        onApplyClick={() => navigate('/pages/service/school/admission')}
        onExploreClick={() => navigate('/pages/service/school/courses')}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        <SchoolStatsCounter />
        <SchoolFeaturedCourses />
        <SchoolFacultyGrid />
        <SchoolTestimonials />
      </div>
    </div>
  );
}
