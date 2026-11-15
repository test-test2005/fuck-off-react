import React from 'react';
import { LuClock, LuPhone, LuUtensils, LuMapPin } from 'react-icons/lu';

export default function FoodHoursBadge() {
  return (
    <section className="bg-primary/5 border border-primary/20 rounded-3xl p-6 sm:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary text-primary-content flex items-center justify-center text-xl shrink-0">
            <LuClock />
          </div>
          <div>
            <div className="font-bold text-xs uppercase tracking-wider text-primary">Dining Hours</div>
            <div className="text-sm font-black text-base-content">Daily 11:30 AM - 11:00 PM</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary text-secondary-content flex items-center justify-center text-xl shrink-0">
            <LuPhone />
          </div>
          <div>
            <div className="font-bold text-xs uppercase tracking-wider text-secondary">Table Bookings</div>
            <div className="text-sm font-black text-base-content">+880 1912-334455</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent text-accent-content flex items-center justify-center text-xl shrink-0">
            <LuMapPin />
          </div>
          <div>
            <div className="font-bold text-xs uppercase tracking-wider text-accent">Bistro Location</div>
            <div className="text-sm font-black text-base-content">House 45, Road 11, Banani, Dhaka</div>
          </div>
        </div>
      </div>
    </section>
  );
}
