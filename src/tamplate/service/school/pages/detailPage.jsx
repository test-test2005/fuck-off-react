import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import schoolData from '../data.js';
import Breadcrumbs from './breadcrumbs.jsx';
import ImageZoom from './imageZoom.jsx';
import { LuStar, LuBookOpen, LuGraduationCap, LuAward, LuUsers } from 'react-icons/lu';

export default function SchoolDetailPage({ course: propCourse, onNavigate }) {
  let params = {};
  try {
    params = useParams() || {};
  } catch (e) {}
  let nav;
  try {
    nav = useNavigate();
  } catch (e) {
    nav = (to) => { if (typeof window !== 'undefined') window.location.href = to; };
  }
  const navigate = onNavigate || nav;

  const itemId = Number(params.id) || (propCourse ? propCourse.id : 501);
  const item = propCourse || schoolData.items.find((i) => i.id === itemId) || schoolData.items[0];

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
            <ImageZoom src={item.image} alt={item.title} aspectRatio="aspect-4/3" />
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
                    <LuStar key={i} className="text-xs fill-warning" />
                  ))}
                </div>
                <span className="text-xs font-bold text-base-content/80">({item.reviewsCount} Academic Reviews)</span>
              </div>
            </div>

            <p className="text-sm text-base-content/80 leading-relaxed font-normal">{item.desc}</p>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-base-content/60">Curriculum Highlights</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-base-content/80 font-medium">
                {item.specs ? item.specs.map((sp, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 p-2 bg-base-200/50 rounded-lg">
                    <LuBookOpen className="text-primary text-xs" />
                    <span>{sp}</span>
                  </div>
                )) : null}
              </div>
            </div>

            <div className="border-t border-base-300 pt-6 flex items-center justify-between">
              <div>
                <span className="text-xs text-base-content/60">Annual Tuition</span>
                <div className="text-2xl font-black text-primary font-mono">${item.price}</div>
              </div>
              <button
                onClick={() => navigate('admission')}
                className="btn btn-primary font-bold shadow-xs gap-2"
              >
                <LuGraduationCap />
                <span>Apply for this Grade</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
