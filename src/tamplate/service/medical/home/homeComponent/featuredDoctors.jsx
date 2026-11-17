import React from 'react';
import { useNavigate } from 'react-router-dom';
import hospitalData from '../../data.js';
import HospitalDoctorCard from '../../components/doctorCard.jsx';

export default function HospitalFeaturedDoctors({ items, onSelectDoctor, onBookDoctor }) {
  const displayItems = items && items.length > 0 ? items : (hospitalData.items || []);
  const navigate = useNavigate();

  const handleSelect = (doc) => {
    if (onSelectDoctor) {
      onSelectDoctor(doc);
    } else {
      try {
        navigate(`/detail/${doc.id}`);
      } catch (e) {
        console.log('Selected doctor:', doc);
      }
    }
  };

  const handleBook = (doc) => {
    if (onBookDoctor) {
      onBookDoctor(doc);
    } else {
      try {
        navigate('/pages/service/hospital/appointment');
      } catch (e) {
        console.log('Book doctor:', doc);
      }
    }
  };

  return (
    <section className="space-y-8">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-black text-base-content">Senior Consultant Physicians</h2>
        <p className="text-xs text-base-content/70 mt-1">Book an in-person or telemedicine consultation.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayItems.map((doc) => (
          <HospitalDoctorCard
            key={doc.id}
            doctor={doc}
            onSelect={handleSelect}
            onBook={handleBook}
          />
        ))}
      </div>
    </section>
  );
}
