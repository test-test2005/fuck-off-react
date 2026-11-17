import React from 'react';
import { LuGraduationCap, LuClock, LuAward, LuHeart } from 'react-icons/lu';
import collegeData from '../data.js';

const fallbackDepartment = {
  id: 601,
  title: "Department of Computer Science & Engineering",
  category: "Computer Science",
  price: 85000,
  image: "/images/banner-edu-2.jpg",
  desc: "Four-year Bachelor of Science curriculum accredited by IEB with specialized tracks in AI and Systems Architecture.",
  rating: 4.9,
  reviewsCount: 142
};

export default function CollegeDepartmentCard({
  item,
  onSelect,
  onToggleWishlist,
  isInWishlist
}) {
  const department = item || collegeData?.items?.[0] || fallbackDepartment;
  const isWished = isInWishlist ? isInWishlist(department.id) : false;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <figure className="relative h-44 bg-base-200 overflow-hidden cursor-pointer" onClick={() => onSelect && onSelect(department)}>
          <img
            src={department.image || "/images/banner-edu-2.jpg"}
            alt={department.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80';
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleWishlist) onToggleWishlist(department);
            }}
            title="Save Degree"
            className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 hover:bg-base-100 shadow-md z-10"
          >
            <LuHeart className={isWished ? "fill-error text-error text-xs" : "text-base-content/70 text-xs"} />
          </button>
        </figure>
        <div className="p-4 space-y-2">
          <span className="badge badge-primary badge-sm font-bold text-[10px]">{department.category}</span>
          <h3
            onClick={() => onSelect && onSelect(department)}
            className="font-bold text-base text-base-content leading-snug hover:text-primary transition-colors cursor-pointer"
          >
            {department.title}
          </h3>
          <p className="text-xs text-base-content/70 line-clamp-2">{department.desc}</p>
        </div>
      </div>
      <div className="p-4 pt-0 border-t border-base-200 mt-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-base-content/60">Annual Tuition</div>
          <div className="text-base font-black text-primary font-mono">BDT {Number(department.price).toLocaleString()}</div>
        </div>
        <button
          onClick={() => onSelect && onSelect(department)}
          className="btn btn-outline btn-xs font-semibold gap-1"
        >
          <LuGraduationCap className="text-xs" />
          <span>Program Details</span>
        </button>
      </div>
    </div>
  );
}
