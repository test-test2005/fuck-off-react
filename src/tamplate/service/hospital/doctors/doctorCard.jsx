import React from 'react';
import { LuCalendar, LuAward, LuHeartPulse, LuHeart } from 'react-icons/lu';
import hospitalData from '../data.js';

const fallbackDoctor = {
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

export default function HospitalDoctorCard({
  doctor,
  onBook,
  onSelect,
  onToggleWishlist,
  isInWishlist
}) {
  const doc = doctor || hospitalData?.items?.[0] || fallbackDoctor;
  const isWished = isInWishlist ? isInWishlist(doc.id) : false;

  return (
    <div
      onClick={() => onSelect && onSelect(doc)}
      className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
    >
      <div>
        <figure className="relative h-44 bg-base-200 overflow-hidden">
          <img
            src={doc.image || "/images/banner-1.jpg"}
            alt={doc.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80';
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleWishlist) onToggleWishlist(doc);
            }}
            title="Save Doctor Profile"
            className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 hover:bg-base-100 shadow-md z-10"
          >
            <LuHeart className={isWished ? "fill-error text-error text-xs" : "text-base-content/70 text-xs"} />
          </button>
        </figure>
        <div className="p-4 space-y-2">
          <span className="badge badge-primary badge-sm font-bold text-[10px]">{doc.category}</span>
          <h3 className="font-bold text-base text-base-content group-hover:text-primary transition-colors leading-snug">{doc.title}</h3>
          <p className="text-xs text-base-content/70 line-clamp-2">{doc.desc}</p>
        </div>
      </div>
      <div className="p-4 pt-0 border-t border-base-200 mt-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-base-content/60">Consultation Fee</div>
          <div className="text-base font-black text-primary font-mono">BDT {Number(doc.price).toLocaleString()}</div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onBook) onBook(doc);
          }}
          className="btn btn-primary btn-xs font-bold gap-1 shadow-xs"
        >
          <LuCalendar className="text-xs" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
}
