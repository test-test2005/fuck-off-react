import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DOMAINS } from '../../../../../data/domainData.js';
import ITFirmServiceCard from "../../otherPage/serviceCard.jsx";

export default function ITFirmFeaturedServices() {
  const items = DOMAINS.itfirm.items || [];
  const navigate = useNavigate();

  return (
    <section className="space-y-8">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-black text-base-content">Enterprise IT Services</h2>
        <p className="text-xs text-base-content/70 mt-1">High-availability engineering tailored for your tech stack.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((svc) => (
          <ITFirmServiceCard
            key={svc.id}
            service={svc}
            onSelect={(s) => navigate(`/detail/${s.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
