import React from 'react';
import { useNavigate } from 'react-router-dom';
import HospitalBanner from './homeComponent/banner.jsx';
import HospitalFeaturedDoctors from './homeComponent/featuredDoctors.jsx';
import EmergencyBar from './homeComponent/emergencyBar.jsx';

export default function HospitalHomePage({ onNavigate, onSelectDoctor, onBookDoctor }) {
  let navigate = null;
  try {
    navigate = useNavigate();
  } catch (e) {
    navigate = null;
  }

  const handleBook = () => {
    if (onNavigate) {
      onNavigate('appointment');
    } else if (navigate) {
      navigate('/pages/service/hospital/appointment');
    }
  };

  return (
    <div className="space-y-12 pb-16">
      <HospitalBanner onBookClick={handleBook} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <EmergencyBar />
        <HospitalFeaturedDoctors
          onSelectDoctor={onSelectDoctor}
          onBookDoctor={onBookDoctor || (() => handleBook())}
        />
      </div>
    </div>
  );
}
