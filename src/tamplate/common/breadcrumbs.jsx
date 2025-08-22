import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuChevronRight, LuHouse } from 'react-icons/lu';

/**
 * Common Breadcrumbs Component
 * Automatically generates breadcrumb trail from location path
 */
export default function Breadcrumbs({ customCrumbs = [] }) {
  const location = useLocation();

  let crumbs = [];
  if (customCrumbs.length > 0) {
    crumbs = customCrumbs;
  } else {
    const segments = location.pathname.split('/').filter(Boolean);
    let accum = '';
    crumbs = segments.map((seg, idx) => {
      accum += `/${seg}`;
      const isLast = idx === segments.length - 1;
      return {
        label: seg.charAt(0).toUpperCase() + seg.slice(1),
        to: accum,
        isCurrent: isLast
      };
    });
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-base-200/50 border-b border-base-300 py-2.5 px-4 sm:px-8 text-xs">
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap text-base-content/70">
        <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors font-medium">
          <LuHouse className="text-xs" />
          <span>Home</span>
        </Link>

        {crumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            <LuChevronRight className="text-base-content/40 text-[10px]" />
            {crumb.isCurrent ? (
              <span className="font-bold text-primary">
                {crumb.label}
              </span>
            ) : (
              <Link to={crumb.to} className="hover:text-primary transition-colors font-medium">
                {crumb.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
