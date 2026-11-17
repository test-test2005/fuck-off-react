import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import collegeData from '../data.js';
import Breadcrumbs from './breadcrumbs.jsx';
import PopupModal from './popupModal.jsx';
import { LuSearch, LuStar, LuBuilding2, LuCheck, LuEye, LuGraduationCap } from 'react-icons/lu';

/**
 * College Academic Departments & Degree Programs Page
 * Located at: pages/service/collage/departments.jsx
 */
export default function CollegeDepartmentsPage({ onSelectProgram, onNavigate }) {
  const data = collegeData;
  let navigate = null;
  try {
    navigate = useNavigate();
  } catch (e) {
    navigate = null;
  }

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filteredItems = useMemo(() => {
    return (data.items || []).filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                            item.desc.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [data.items, selectedCategory, search]);

  const handleApplyClick = (item) => {
    setSelectedProgram(item);
    setModalOpen(true);
  };

  const handleItemClick = (item) => {
    if (onSelectProgram) {
      onSelectProgram(item);
    } else if (onNavigate) {
      onNavigate('detail');
    } else if (navigate) {
      navigate(`/detail/${item.id}`);
    }
  };

  return (
    <div className="space-y-6 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'College', to: '/pages/service/collage' },
          { label: 'Academic Departments', to: '/pages/service/collage/departments', isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="border-b border-base-300 pb-4">
          <div className="flex items-center gap-2">
            <span className="badge badge-primary badge-outline text-xs font-bold uppercase gap-1">
              <LuBuilding2 className="text-xs" />
              <span>Higher Education</span>
            </span>
          </div>
          <h1 className="text-3xl font-black text-base-content mt-1">Departments & Degree Programs</h1>
          <p className="text-xs sm:text-sm text-base-content/70 mt-1">
            Explore 4-year undergraduate and 2-year postgraduate degrees with IEB and UGC accreditation.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-base-200/60 border border-base-300 rounded-3xl p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/40 text-sm" />
              <input
                type="text"
                placeholder="Search degrees, engineering, business, or data science..."
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
                {(data.categories || []).map((c) => (
                  <option key={c} value={c}>Faculty: {c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Degree Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="card bg-base-100 border border-base-300 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer flex flex-col md:flex-row"
            >
              <div className="relative md:w-2/5 aspect-4/3 md:aspect-auto overflow-hidden bg-base-200 shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80';
                  }}
                />
                <span className="badge badge-primary badge-sm text-primary-content font-bold absolute top-3 left-3 shadow-md">
                  {item.discountBadge || "IEB APPROVED"}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
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

                  <h3 className="font-bold text-lg text-base-content mt-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-base-content/70 line-clamp-2 mt-1">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {item.specs?.map((spec, sIdx) => (
                      <span key={sIdx} className="badge badge-neutral badge-xs text-[10px] font-semibold">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-base-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-base-content/50 uppercase font-bold block">
                      Semester Tuition
                    </span>
                    <span className="text-lg font-black text-base-content">
                      BDT {item.price}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApplyClick(item);
                    }}
                    className="btn btn-sm btn-primary rounded-xl font-bold gap-1 shadow-xs"
                  >
                    <LuGraduationCap className="text-sm" />
                    <span>Apply Admission</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Application Modal */}
      <PopupModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="College Admissions Inquiry"
        type="success"
      >
        {selectedProgram && (
          <div className="space-y-2">
            <p>
              You are applying for <strong>{selectedProgram.title}</strong> in the Department of <strong>{selectedProgram.category}</strong>.
            </p>
            <p className="text-xs text-base-content/70">
              Standard semester fee is <strong>BDT {selectedProgram.price}</strong>. Our admissions officer will review your academic transcript and contact you for the entrance examination schedule.
            </p>
          </div>
        )}
      </PopupModal>
    </div>
  );
}
