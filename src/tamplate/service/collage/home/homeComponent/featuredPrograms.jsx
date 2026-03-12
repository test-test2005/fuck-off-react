import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DOMAINS } from '../../../../../data/domainData.js';
import CollegeDepartmentCard from "../../otherPage/departmentCard.jsx";

export default function CollegeFeaturedPrograms() {
  const items = DOMAINS.collage.items || [];
  const navigate = useNavigate();

  return (
    <section className="space-y-8">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-black text-base-content">University Academic Faculties</h2>
        <p className="text-xs text-base-content/70 mt-1">Discover industry-accredited degree curricula.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <CollegeDepartmentCard
            key={it.id}
            item={it}
            onSelect={(item) => navigate(`/detail/${item.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
