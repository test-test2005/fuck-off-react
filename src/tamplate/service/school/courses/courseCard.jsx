import React from 'react';
import { LuGraduationCap, LuHeart } from 'react-icons/lu';

const defaultCourse = {
  id: 501,
  title: "Cambridge Primary Stage 1-6 (Ages 5-11)",
  category: "Primary School",
  price: 4200,
  desc: "Foundational English, Mathematics, Science, Computing, and Global Perspectives nurturing inquiry and bilingual communication.",
  image: "/images/edu-1.jpg"
};

export default function CourseCard({
  course = defaultCourse,
  onSelect,
  onToggleWishlist,
  isInWishlist
}) {
  const c = course || defaultCourse;
  const isWished = isInWishlist ? isInWishlist(c.id) : false;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <figure className="relative h-44 bg-base-200 overflow-hidden cursor-pointer" onClick={() => onSelect && onSelect(c)}>
          <img
            src={c.image}
            alt={c.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80';
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleWishlist) onToggleWishlist(c);
            }}
            title="Save to Wishlist"
            className="absolute top-3 right-3 btn btn-circle btn-xs bg-base-100/90 hover:bg-base-100 shadow-md z-10"
          >
            <LuHeart className={isWished ? "fill-error text-error text-xs" : "text-base-content/70 text-xs"} />
          </button>
        </figure>
        <div className="p-4 space-y-2">
          <span className="badge badge-primary badge-sm font-bold text-[10px]">{c.category}</span>
          <h3
            onClick={() => onSelect && onSelect(c)}
            className="font-bold text-base text-base-content hover:text-primary transition-colors cursor-pointer"
          >
            {c.title}
          </h3>
          <p className="text-xs text-base-content/70 line-clamp-2">{c.desc}</p>
        </div>
      </div>
      <div className="p-4 pt-0 border-t border-base-200 mt-3 flex items-center justify-between">
        <div className="text-sm font-black text-primary font-mono">${c.price}</div>
        <button onClick={() => onSelect && onSelect(c)} className="btn btn-outline btn-xs font-semibold gap-1">
          <LuGraduationCap className="text-xs" />
          <span>Course Details</span>
        </button>
      </div>
    </div>
  );
}
