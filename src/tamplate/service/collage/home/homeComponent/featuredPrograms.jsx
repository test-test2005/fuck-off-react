import React from 'react';
import { useNavigate } from 'react-router-dom';
import collegeData from '../../data.js';
import CollegeDepartmentCard from '../../components/departmentCard.jsx';

export default function CollegeFeaturedPrograms({ items, onSelectProgram }) {
  const displayItems = items && items.length > 0 ? items : (collegeData.items || []);
  const navigate = useNavigate();

  const handleSelect = (item) => {
    if (onSelectProgram) {
      onSelectProgram(item);
    } else {
      try {
        navigate(`/detail/${item.id}`);
      } catch (e) {
        console.log('Selected program:', item);
      }
    }
  };

  return (
    <section className="space-y-8">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-black text-base-content">University Academic Faculties</h2>
        <p className="text-xs text-base-content/70 mt-1">Discover industry-accredited degree curricula.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayItems.map((it) => (
          <CollegeDepartmentCard
            key={it.id}
            item={it}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </section>
  );
}
