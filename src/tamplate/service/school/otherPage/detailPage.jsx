import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DOMAINS } from '../../../../data/domainData.js';
import Breadcrumbs from '../../../common/breadcrumbs.jsx';
import ImageZoom from '../../../common/imageZoom.jsx';
import { LuStar, LuBookOpen, LuGraduationCap, LuAward, LuUsers } from 'react-icons/lu';

/**
 * School Course Detail Page
 * Located at: pages/service/school/detail.jsx
 */
export default function SchoolDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const itemId = Number(id) || 501;
  const item = DOMAINS.school.items.find((i) => i.id === itemId) || DOMAINS.school.items[0];

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'School', to: '/pages/service/school' },
          { label: 'Courses', to: '/pages/service/school/courses' },
          { label: item.title, to: `/pages/service/school/detail/${item.id}`, isCurrent: true }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <div>
            <ImageZoom
              src={item.image}
              alt={item.title}
              aspectRatio="aspect-4/3"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge badge-primary badge-sm font-bold uppercase">{item.category}</span>
                <span className="badge badge-outline badge-sm font-semibold">{item.discountBadge}</span>
              </div>
              <h1 className="text-3xl font-black text-base-content">{item.title}</h1>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-warning">
                  {[...Array(5)].map((_, i) => (
                    <LuStar key={i} className="fill-warning text-xs" />
                  ))}
                </div>
                <span className="font-bold text-xs text-base-content">{item.rating}</span>
                <span className="text-xs text-base-content/60">({item.reviewsCount} verified student evaluations)</span>
              </div>
            </div>

            <div className="bg-base-200/50 p-4 rounded-2xl border border-base-300 flex items-center gap-4">
              <div>
                <span className="text-xs text-base-content/50 uppercase font-bold block">Standard Term Fee</span>
                <span className="text-3xl font-black text-base-content">BDT {item.price}</span>
              </div>
              <span className="badge badge-success badge-sm text-white font-bold ml-auto">Enrollment Open</span>
            </div>

            <p className="text-sm text-base-content/80 leading-relaxed">
              {item.desc}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/60">Curriculum Highlights:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {item.specs?.map((spec, sIdx) => (
                  <div key={sIdx} className="bg-base-200 p-2.5 rounded-xl border border-base-300 font-semibold text-base-content/80 flex items-center gap-1.5">
                    <LuGraduationCap className="text-primary text-xs" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => navigate('/pages/service/school/admission')}
                className="btn btn-primary btn-md rounded-xl font-bold flex-1 shadow-md shadow-primary/20 gap-2"
              >
                <LuBookOpen />
                <span>Apply for Admission</span>
              </button>

              <button
                onClick={() => navigate('/pages/service/school/courses')}
                className="btn btn-outline btn-md rounded-xl font-bold"
              >
                Back to Curriculum
              </button>
            </div>

            <div className="border-t border-base-300 pt-4 grid grid-cols-3 gap-2 text-[11px] text-base-content/70">
              <div className="flex items-center gap-1.5"><LuAward className="text-warning text-base" /> CAIE Accredited</div>
              <div className="flex items-center gap-1.5"><LuUsers className="text-primary text-base" /> Small Class Size</div>
              <div className="flex items-center gap-1.5"><LuGraduationCap className="text-secondary text-base" /> STEM Facilities</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
