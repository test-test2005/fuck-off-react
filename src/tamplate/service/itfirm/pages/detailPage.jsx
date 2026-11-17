import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import itfirmData from '../data.js';
import Breadcrumbs from './breadcrumbs.jsx';
import ImageZoom from './imageZoom.jsx';
import PopupModal from './popupModal.jsx';
import { LuStar, LuCpu, LuShieldCheck, LuServer, LuArrowRight, LuCheck } from 'react-icons/lu';

/**
 * IT Firm Service Detail Page
 * Located at: pages/service/itfirm/detail.jsx
 */
export default function ItFirmDetailPage({ service, onNavigate }) {
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

  const serviceId = Number(routeParams.id) || (service && service.id) || 701;
  const item = service || (itfirmData.items || []).find((i) => i.id === serviceId) || itfirmData.items?.[0] || {
    id: 701,
    title: "Multi-Cloud Migration & Kubernetes",
    category: "Cloud Infrastructure",
    price: 2500,
    image: "/images/banner-1.jpg",
    desc: "Zero-downtime architectural migration across AWS, Google Cloud, and Azure with automated Terraform pipelines.",
    rating: 4.9,
    reviewsCount: 88,
    specs: ["AWS/GCP Well-Architected", "Kubernetes Auto-scaling", "Zero Downtime Cutover", "24/7 SRE Support"]
  };

  const handleBackToServices = () => {
    if (onNavigate) {
      onNavigate('services');
    } else if (navigate) {
      navigate('/pages/service/itfirm/services');
    }
  };

  const handleQuote = () => {
    if (onNavigate) {
      onNavigate('quote');
    } else if (navigate) {
      navigate('/pages/service/itfirm/quote');
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'IT Firm', to: '/pages/service/itfirm' },
          { label: 'Services', to: '/pages/service/itfirm/services' },
          { label: item.title, to: `/pages/service/itfirm/detail/${item.id}`, isCurrent: true }
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
                <span className="badge badge-outline badge-sm font-semibold">{item.discountBadge || "ENTERPRISE GRADE"}</span>
              </div>
              <h1 className="text-3xl font-black text-base-content">{item.title}</h1>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-warning">
                  {[...Array(5)].map((_, i) => (
                    <LuStar key={i} className="fill-warning text-xs" />
                  ))}
                </div>
                <span className="font-bold text-xs text-base-content">{item.rating || 4.9}</span>
                <span className="text-xs text-base-content/60">({item.reviewsCount || 88} enterprise reviews)</span>
              </div>
            </div>

            <div className="bg-base-200/50 p-4 rounded-2xl border border-base-300 flex items-center gap-4">
              <div>
                <span className="text-xs text-base-content/50 uppercase font-bold block">Engineering Retainer Starting At</span>
                <span className="text-3xl font-black text-base-content font-mono">BDT {Number(item.price).toLocaleString()}</span>
              </div>
              <span className="badge badge-success badge-sm text-white font-bold ml-auto">99.999% SLA Guaranteed</span>
            </div>

            <p className="text-sm text-base-content/80 leading-relaxed">
              {item.desc}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/60">Deliverables & Technical Standards:</h4>
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
                onClick={handleQuote}
                className="btn btn-primary btn-md rounded-xl font-bold flex-1 shadow-md shadow-primary/20 gap-2"
              >
                <LuServer />
                <span>Request Architecture Review</span>
              </button>

              <button
                onClick={handleBackToServices}
                className="btn btn-outline btn-md rounded-xl font-bold"
              >
                All Services
              </button>
            </div>

            <div className="border-t border-base-300 pt-4 grid grid-cols-3 gap-2 text-[11px] text-base-content/70">
              <div className="flex items-center gap-1.5"><LuShieldCheck className="text-success text-base" /> ISO 27001</div>
              <div className="flex items-center gap-1.5"><LuServer className="text-primary text-base" /> Multi-Cloud</div>
              <div className="flex items-center gap-1.5"><LuCpu className="text-secondary text-base" /> Zero-Downtime</div>
            </div>
          </div>
        </div>
      </div>

      <PopupModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Architecture Request Submitted"
        type="success"
      >
        <p>
          Your discovery request for <strong>{item.title}</strong> has been received. An infrastructure specialist will contact you with initial architecture diagrams.
        </p>
      </PopupModal>
    </div>
  );
}
