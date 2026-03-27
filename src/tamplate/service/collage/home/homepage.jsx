import React from 'react';
import { useNavigate } from 'react-router-dom';
import CollegeBanner from './homeComponent/banner.jsx';
import CollegeFeaturedPrograms from './homeComponent/featuredPrograms.jsx';

export default function CollegeHomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-12 pb-16">
      <CollegeBanner onApply={() => navigate('/pages/service/collage/departments')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <CollegeFeaturedPrograms />
      </div>
    </div>
  );
}
