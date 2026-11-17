import React from 'react';
import { LuCpu, LuCheck, LuArrowRight, LuServer, LuHeart } from 'react-icons/lu';
import itfirmData from '../data.js';

const fallbackService = {
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

export default function ITFirmServiceCard({
  service,
  onSelect,
  onToggleWishlist,
  isInWishlist
}) {
  const svc = service || itfirmData?.items?.[0] || fallbackService;
  const isWished = isInWishlist ? isInWishlist(svc.id) : false;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
            <LuCpu />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleWishlist) onToggleWishlist(svc);
            }}
            title="Save Service"
            className="btn btn-circle btn-xs btn-ghost"
          >
            <LuHeart className={isWished ? "fill-error text-error text-sm" : "text-base-content/50 text-sm"} />
          </button>
        </div>

        <h3
          onClick={() => onSelect && onSelect(svc)}
          className="font-bold text-base text-base-content leading-snug hover:text-primary transition-colors cursor-pointer"
        >
          {svc.title}
        </h3>
        <p className="text-xs text-base-content/70 leading-relaxed">{svc.desc}</p>
        {svc.specs && (
          <div className="space-y-1 pt-2">
            {svc.specs.map((sp, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[11px] text-base-content/80">
                <LuCheck className="text-primary text-xs shrink-0" />
                <span>{sp}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-6 border-t border-base-200 mt-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-base-content/50 uppercase font-bold block">Starting At</span>
          <span className="text-lg font-black text-primary font-mono">${Number(svc.price).toLocaleString()}</span>
        </div>
        <button
          onClick={() => onSelect && onSelect(svc)}
          className="btn btn-outline btn-xs font-semibold gap-1"
        >
          <span>Architecture Details</span>
          <LuArrowRight className="text-xs" />
        </button>
      </div>
    </div>
  );
}
