import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import hospitalData from '../data.js';
import Breadcrumbs from './breadcrumbs.jsx';
import ImageZoom from './imageZoom.jsx';
import PopupModal from './popupModal.jsx';
import { LuStar, LuHeartPulse, LuCalendar, LuAward, LuClock, LuCheck } from 'react-icons/lu';

/**
 * Hospital Doctor Detail Page
 * Located at: pages/service/hospital/detail.jsx
 */
export default function HospitalDetailPage({ doctor, onNavigate }) {
  let routeParams = {};
  let navigate = null;
  try {
    routeParams = useParams() || {};
  } catch (e) {
    routeParams = {};
  }
  try {
    navigate = useNavigate();
  } catch (e) {
    navigate = null;
  }

  const [modalOpen, setModalOpen] = useState(false);

  const docId = Number(routeParams.id) || (doctor && doctor.id) || 801;
  const item = doctor || (hospitalData.items || []).find((i) => i.id === docId) || hospitalData.items?.[0] || {
    id: 801,
    title: "Dr. Farhana Rahman, MD",
    category: "Cardiology",
    price: 1500,
    image: "/images/banner-1.jpg",
    desc: "Chief Interventional Cardiologist with 18+ years experience in coronary angioplasty and cardiac ultrasound.",
    rating: 4.9,
    reviewsCount: 164,
    specs: ["MBBS, FCPS (Cardiology)", "Fellow American College of Cardiology", "Visiting Hours: 5PM - 9PM", "Room 402, OPD Complex"]
  };

  const handleBack = () => {
    if (onNavigate) {
      onNavigate('doctors');
    } else if (navigate) {
      navigate('/pages/service/hospital/doctors');
    }
  };

  const handleBook = () => {
    if (onNavigate) {
      onNavigate('appointment');
    } else if (navigate) {
      navigate('/pages/service/hospital/appointment');
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'Hospital', to: '/pages/service/hospital' },
          { label: 'Doctors', to: '/pages/service/hospital/doctors' },
          { label: item.title, to: `/pages/service/hospital/detail/${item.id}`, isCurrent: true }
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
                <span className="badge badge-outline badge-sm font-semibold">{item.discountBadge || "OPD OPEN"}</span>
              </div>
              <h1 className="text-3xl font-black text-base-content">{item.title}</h1>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-warning">
                  {[...Array(5)].map((_, i) => (
                    <LuStar key={i} className="fill-warning text-xs" />
                  ))}
                </div>
                <span className="font-bold text-xs text-base-content">{item.rating || 4.9}</span>
                <span className="text-xs text-base-content/60">({item.reviewsCount || 164} patient verified reviews)</span>
              </div>
            </div>

            <div className="bg-base-200/50 p-4 rounded-2xl border border-base-300 flex items-center gap-4">
              <div>
                <span className="text-xs text-base-content/50 uppercase font-bold block">Consultation Fee</span>
                <span className="text-3xl font-black text-base-content font-mono">BDT {Number(item.price).toLocaleString()}</span>
              </div>
              <span className="badge badge-success badge-sm text-white font-bold ml-auto">Available Today</span>
            </div>

            <p className="text-sm text-base-content/80 leading-relaxed">
              {item.desc}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/60">Qualifications & Chamber Hours:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {item.specs?.map((spec, sIdx) => (
                  <div key={sIdx} className="bg-base-200 p-2.5 rounded-xl border border-base-300 font-semibold text-base-content/80 flex items-center gap-1.5">
                    <LuCheck className="text-primary text-xs shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={handleBook}
                className="btn btn-primary btn-md rounded-xl font-bold flex-1 shadow-md shadow-primary/20 gap-2"
              >
                <LuCalendar />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={handleBack}
                className="btn btn-outline btn-md rounded-xl font-bold"
              >
                All Specialists
              </button>
            </div>

            <div className="border-t border-base-300 pt-4 grid grid-cols-3 gap-2 text-[11px] text-base-content/70">
              <div className="flex items-center gap-1.5"><LuAward className="text-warning text-base" /> JCI Certified</div>
              <div className="flex items-center gap-1.5"><LuHeartPulse className="text-error text-base" /> Emergency ICU</div>
              <div className="flex items-center gap-1.5"><LuClock className="text-primary text-base" /> Zero Wait Time</div>
            </div>
          </div>
        </div>
      </div>

      <PopupModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Consultation Request Logged"
        type="success"
      >
        <p>
          Your appointment request for <strong>{item.title}</strong> has been received. Our OPD Helpdesk will call to confirm your visit time.
        </p>
      </PopupModal>
    </div>
  );
}
