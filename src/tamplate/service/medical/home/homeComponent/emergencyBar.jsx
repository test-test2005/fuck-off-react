import React from 'react';
import { LuPhoneCall, LuShieldAlert } from 'react-icons/lu';
import hospitalData from '../../data.js';

export default function EmergencyBar() {
  const phone = hospitalData?.phone || "+880 1712-345678";

  return (
    <div className="bg-error text-error-content py-3.5 px-6 rounded-2xl flex items-center justify-between shadow-xs">
      <div className="flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider">
        <LuShieldAlert className="text-xl shrink-0" />
        <span>24/7 Emergency Trauma, Ambulance & ICU Hotline</span>
      </div>
      <a href={`tel:${phone}`} className="btn btn-xs sm:btn-sm btn-neutral font-bold gap-1.5 shadow-xs">
        <LuPhoneCall className="text-xs" />
        <span>Call Now</span>
      </a>
    </div>
  );
}
