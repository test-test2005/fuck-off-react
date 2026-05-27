import React from 'react';
import { useNavigate } from 'react-router-dom';
import HospitalBanner from './homeComponent/banner.jsx';
import HospitalFeaturedDoctors from './homeComponent/featuredDoctors.jsx';
import EmergencyBar from './homeComponent/emergencyBar.jsx';

export default function HospitalHomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-12 pb-16">
      <HospitalBanner onBookClick={() => navigate('/pages/service/hospital/appointment')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <EmergencyBar />
        <HospitalFeaturedDoctors />
      </div>
    </div>
  );
}
