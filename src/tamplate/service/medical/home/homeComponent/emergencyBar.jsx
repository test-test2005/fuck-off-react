import React from 'react';
import { LuPhoneCall, LuShieldAlert } from 'react-icons/lu';

export default function EmergencyBar() {
  return (
    <div className="bg-error text-error-content py-3 px-4 rounded-xl flex items-center justify-between shadow-xs">
      <div className="flex items-center gap-2 text-xs font-bold uppercase">
        <LuShieldAlert className="text-base" />
        <span>24/7 Emergency Trauma & Ambulance Response</span>
      </div>
      <a href="tel:999" className="btn btn-xs btn-neutral font-bold gap-1">
        <LuPhoneCall className="text-xs" />
        <span>Call 999</span>
      </a>
    </div>
  );
}
