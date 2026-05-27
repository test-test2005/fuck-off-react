import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { DOMAINS } from '../../../../data/domainData.js';
import Breadcrumbs from '../../../common/breadcrumbs.jsx';
import { LuSearch, LuStar, LuHeartPulse, LuCalendar, LuEye } from 'react-icons/lu';

/**
 * Hospital Doctors Directory Page
 * Located at: pages/service/hospital/doctors.jsx
 */
export default function HospitalDoctorsPage() {
  const data = DOMAINS.hospital;
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = useMemo(() => {
    return data.items.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                            item.desc.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [data.items, selectedCategory, search]);

  return (
    <div className="space-y-6 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'Hospital', to: '/pages/service/hospital' },
          { label: 'Specialist Doctors', to: '/pages/service/hospital/doctors', isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        <div className="border-b border-base-300 pb-4">
          <div className="flex items-center gap-2">
            <span className="badge badge-primary badge-outline text-xs font-bold uppercase gap-1">
              <LuHeartPulse className="text-xs" />
              <span>Medical Specialists</span>
            </span>
          </div>
          <h1 className="text-3xl font-black text-base-content mt-1">Consultant Doctors & Surgeons Directory</h1>
          <p className="text-xs sm:text-sm text-base-content/70 mt-1">
            View chamber schedules, OPD timings, and book online consultation appointments.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-base-200/60 border border-base-300 rounded-3xl p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/40 text-sm" />
              <input
                type="text"
                placeholder="Search doctors by name or medical specialty..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input input-sm bg-base-100 border-base-300 rounded-xl pl-9 w-full text-xs"
              />
            </div>

            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="select select-sm bg-base-100 border-base-300 rounded-xl w-full text-xs font-semibold"
              >
                {data.categories.map((c) => (
                  <option key={c} value={c}>Specialty: {c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/detail/${item.id}`)}
              className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-square overflow-hidden bg-base-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                <span className="badge badge-primary badge-sm text-primary-content font-bold absolute top-3 left-3 shadow-md">
                  {item.discountBadge || "OPD OPEN"}
                </span>

                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/detail/${item.id}`);
                    }}
                    className="btn btn-xs sm:btn-sm btn-block bg-base-100/90 hover:bg-base-100 backdrop-blur-md rounded-xl text-xs gap-1 shadow-md font-semibold"
                  >
                    <LuEye /> View Doctor Profile
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-base-content/60">
                    <span className="font-bold text-primary uppercase text-[11px] tracking-wider">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-warning font-semibold">
                      <LuStar className="fill-warning text-xs" />
                      <span>{item.rating}</span>
                      <span className="text-base-content/50">({item.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-base-content mt-1 group-hover:text-primary transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-base-content/70 line-clamp-2 mt-1">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {item.specs?.map((s, idx) => (
                      <span key={idx} className="badge badge-neutral badge-xs text-[10px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-base-200 flex items-center justify-between mt-3">
                  <div>
                    <span className="text-[10px] text-base-content/50 uppercase font-bold block">
                      Consultation Fee
                    </span>
                    <span className="text-lg font-black text-base-content">
                      BDT {item.price}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/pages/service/hospital/appointment');
                    }}
                    className="btn btn-xs sm:btn-sm btn-primary rounded-xl font-bold gap-1 shadow-xs"
                  >
                    <LuCalendar className="text-sm" />
                    <span>Appoint</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
