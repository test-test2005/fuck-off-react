import React from 'react';
import { useNavigate } from 'react-router-dom';
import itfirmData from '../../data.js';
import ITFirmServiceCard from '../../components/serviceCard.jsx';

export default function ITFirmFeaturedServices({ items, onSelectService }) {
  const displayItems = items && items.length > 0 ? items : (itfirmData.items || []);
  const navigate = useNavigate();

  const handleSelect = (s) => {
    if (onSelectService) {
      onSelectService(s);
    } else {
      try {
        navigate(`/detail/${s.id}`);
      } catch (e) {
        console.log('Selected service:', s);
      }
    }
  };

  return (
    <section className="space-y-8">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-black text-base-content">Enterprise IT Services</h2>
        <p className="text-xs text-base-content/70 mt-1">High-availability engineering tailored for your tech stack.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayItems.map((svc) => (
          <ITFirmServiceCard
            key={svc.id}
            service={svc}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </section>
  );
}
