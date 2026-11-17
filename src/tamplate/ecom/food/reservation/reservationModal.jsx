import React, { useState } from 'react';
import { LuCalendar, LuClock, LuUsers, LuCircleCheck, LuX } from 'react-icons/lu';

export default function FoodReservationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral/50 backdrop-blur-xs">
      <div className="bg-base-100 rounded-2xl border border-base-300 max-w-lg w-full p-6 shadow-2xl relative">
        <button onClick={onClose} className="btn btn-ghost btn-circle btn-xs absolute right-4 top-4">
          <LuX />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-success/10 text-success flex items-center justify-center text-2xl mx-auto">
              <LuCircleCheck />
            </div>
            <h3 className="font-black text-lg">Table Reservation Confirmed</h3>
            <p className="text-xs text-base-content/70">
              We look forward to welcoming you at La Terrazza Bistro. A confirmation SMS has been sent.
            </p>
            <button onClick={onClose} className="btn btn-primary btn-sm font-bold">
              Done
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div className="border-b border-base-200 pb-3">
              <h3 className="font-black text-lg text-base-content">Reserve Your Table</h3>
              <p className="text-xs text-base-content/70">Select your date, guest count, and seating preference.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label py-1 text-xs font-semibold">Date</label>
                <input type="date" required className="input input-xs sm:input-sm input-bordered text-xs" />
              </div>
              <div className="form-control">
                <label className="label py-1 text-xs font-semibold">Time Slot</label>
                <select className="select select-xs sm:select-sm select-bordered text-xs">
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                  <option>8:30 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label py-1 text-xs font-semibold">Number of Guests</label>
                <select className="select select-xs sm:select-sm select-bordered text-xs">
                  <option>2 Guests</option>
                  <option>3-4 Guests</option>
                  <option>5-8 Guests</option>
                  <option>Large Party (8+)</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label py-1 text-xs font-semibold">Seating Area</label>
                <select className="select select-xs sm:select-sm select-bordered text-xs">
                  <option>Main Dining Hall</option>
                  <option>Outdoor Garden Terrace</option>
                  <option>Private Chef Booth</option>
                </select>
              </div>
            </div>

            <div className="form-control">
              <label className="label py-1 text-xs font-semibold">Contact Name & Phone</label>
              <input type="text" required placeholder="Name and Phone number" className="input input-xs sm:input-sm input-bordered text-xs" />
            </div>

            <button type="submit" className="btn btn-primary w-full btn-sm font-bold shadow-xs">
              Confirm Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
