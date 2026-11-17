import React from 'react';
import { useNavigate } from 'react-router-dom';
import CollegeBanner from './homeComponent/banner.jsx';
import CollegeFeaturedPrograms from './homeComponent/featuredPrograms.jsx';

export default function CollegeHomePage({ onNavigate, onSelectProgram }) {
  let navigate = null;
  try {
    navigate = useNavigate();
  } catch (e) {
    navigate = null;
  }

  const handleApply = () => {
    if (onNavigate) {
      onNavigate('departments');
    } else if (navigate) {
      navigate('/pages/service/collage/departments');
    }
  };

  return (
    <div className="space-y-12 pb-16">
      <CollegeBanner onApply={handleApply} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <CollegeFeaturedPrograms onSelectProgram={onSelectProgram} />
      </div>
    </div>
  );
}
