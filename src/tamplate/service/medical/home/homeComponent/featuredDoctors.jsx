import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DOMAINS } from '../../../../../data/domainData.js';
import HospitalDoctorCard from "../../otherPage/doctorCard.jsx";

export default function HospitalFeaturedDoctors() {
  const items = DOMAINS.hospital.items || [];
  const navigate = useNavigate();

  return (
    <section className="space-y-8">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-black text-base-content">Senior Consultant Physicians</h2>
        <p className="text-xs text-base-content/70 mt-1">Book an in-person or telemedicine consultation.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((doc) => (
          <HospitalDoctorCard
            key={doc.id}
            doctor={doc}
            onBook={() => navigate('/pages/service/hospital/appointment')}
          />
        ))}
      </div>
    </section>
  );
}
