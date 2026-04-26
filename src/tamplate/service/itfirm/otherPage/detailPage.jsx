import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DOMAINS } from '../../../../data/domainData.js';
import Breadcrumbs from '../../../common/breadcrumbs.jsx';
import ImageZoom from '../../../common/imageZoom.jsx';
import { LuStar, LuServer, LuTerminal, LuShieldCheck, LuLayers } from 'react-icons/lu';

/**
 * IT Service Detail Page
 * Located at: pages/service/itfirm/detail.jsx
 */
export default function ItFirmDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const itemId = Number(id) || 701;
  const item = DOMAINS.itfirm.items.find((i) => i.id === itemId) || DOMAINS.itfirm.items[0];

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
                <span className="text-xs text-base-content/60">({item.reviewsCount} enterprise SLA audits)</span>
              </div>
            </div>

            <div className="bg-base-200/50 p-4 rounded-2xl border border-base-300 flex items-center gap-4">
              <div>
                <span className="text-xs text-base-content/50 uppercase font-bold block">Starting Package Fee</span>
                <span className="text-3xl font-black text-base-content">BDT {item.price}</span>
              </div>
              <span className="badge badge-success badge-sm text-white font-bold ml-auto">99.99% SLA</span>
            </div>

            <p className="text-sm text-base-content/80 leading-relaxed">
              {item.desc}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/60">Engineering Deliverables:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {item.specs?.map((spec, sIdx) => (
                  <div key={sIdx} className="bg-base-200 p-2.5 rounded-xl border border-base-300 font-semibold text-base-content/80 flex items-center gap-1.5">
                    <LuServer className="text-primary text-xs" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => navigate('/pages/service/itfirm/quote')}
                className="btn btn-primary btn-md rounded-xl font-bold flex-1 shadow-md shadow-primary/20 gap-2"
              >
                <LuTerminal />
                <span>Request Custom RFP Quote</span>
              </button>

              <button
                onClick={() => navigate('/pages/service/itfirm/services')}
                className="btn btn-outline btn-md rounded-xl font-bold"
              >
                All Services
              </button>
            </div>

            <div className="border-t border-base-300 pt-4 grid grid-cols-3 gap-2 text-[11px] text-base-content/70">
              <div className="flex items-center gap-1.5"><LuShieldCheck className="text-success text-base" /> ISO 27001</div>
              <div className="flex items-center gap-1.5"><LuLayers className="text-primary text-base" /> Kubernetes SRE</div>
              <div className="flex items-center gap-1.5"><LuServer className="text-secondary text-base" /> Multi-Cloud</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
