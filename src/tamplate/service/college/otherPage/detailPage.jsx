import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DOMAINS } from '../../../../data/domainData.js';
import Breadcrumbs from '../../../common/breadcrumbs.jsx';
import ImageZoom from '../../../common/imageZoom.jsx';
import PopupModal from '../../../common/popupModal.jsx';
import { LuStar, LuGraduationCap, LuBuilding2, LuAward, LuGlobe } from 'react-icons/lu';

/**
 * College Department Detail Page
 * Located at: pages/service/collage/detail.jsx
 */
export default function CollegeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const itemId = Number(id) || 601;
  const item = DOMAINS.collage.items.find((i) => i.id === itemId) || DOMAINS.collage.items[0];

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'College', to: '/pages/service/collage' },
          { label: 'Departments', to: '/pages/service/collage/departments' },
          { label: item.title, to: `/pages/service/collage/detail/${item.id}`, isCurrent: true }
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
                <span className="text-xs text-base-content/60">({item.reviewsCount} alumni verified reviews)</span>
              </div>
            </div>

            <div className="bg-base-200/50 p-4 rounded-2xl border border-base-300 flex items-center gap-4">
              <div>
                <span className="text-xs text-base-content/50 uppercase font-bold block">Semester Tuition</span>
                <span className="text-3xl font-black text-base-content">BDT {item.price}</span>
              </div>
              <span className="badge badge-success badge-sm text-white font-bold ml-auto">Admissions Active</span>
            </div>

            <p className="text-sm text-base-content/80 leading-relaxed">
              {item.desc}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/60">Program Highlights & Lab Access:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {item.specs?.map((spec, sIdx) => (
                  <div key={sIdx} className="bg-base-200 p-2.5 rounded-xl border border-base-300 font-semibold text-base-content/80 flex items-center gap-1.5">
                    <LuBuilding2 className="text-primary text-xs" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="btn btn-primary btn-md rounded-xl font-bold flex-1 shadow-md shadow-primary/20 gap-2"
              >
                <LuGraduationCap />
                <span>Submit Admission Inquiry</span>
              </button>

              <button
                onClick={() => navigate('/pages/service/collage/departments')}
                className="btn btn-outline btn-md rounded-xl font-bold"
              >
                All Departments
              </button>
            </div>

            <div className="border-t border-base-300 pt-4 grid grid-cols-3 gap-2 text-[11px] text-base-content/70">
              <div className="flex items-center gap-1.5"><LuAward className="text-warning text-base" /> IEB Approved</div>
              <div className="flex items-center gap-1.5"><LuGlobe className="text-primary text-base" /> Global Transfer</div>
              <div className="flex items-center gap-1.5"><LuBuilding2 className="text-secondary text-base" /> High-Tech Labs</div>
            </div>
          </div>

        </div>
      </div>

      <PopupModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="College Admissions Registered"
        type="success"
      >
        <p>
          Your inquiry for <strong>{item.title}</strong> has been received. The faculty office will reach out regarding prerequisite credits and entrance counseling.
        </p>
      </PopupModal>
    </div>
  );
}
