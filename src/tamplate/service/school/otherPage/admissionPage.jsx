import React, { useState } from 'react';
import Breadcrumbs from '../../../common/breadcrumbs.jsx';
import PopupModal from '../../../common/popupModal.jsx';
import { LuGraduationCap, LuCircleCheck, LuSend, LuCalendar, LuUser, LuPhone, LuMail } from 'react-icons/lu';

/**
 * School Admission Application Form
 * Located at: pages/service/school/admission.jsx
 */
export default function SchoolAdmissionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    grade: 'Primary Grade 3',
    phone: '',
    email: '',
    previousSchool: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'School', to: '/pages/service/school' },
          { label: 'Admissions', to: '/pages/service/school/admission', isCurrent: true }
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6">
        
        <div className="text-center space-y-2">
          <span className="badge badge-primary badge-outline text-xs font-bold uppercase gap-1">
            <LuGraduationCap className="text-xs" />
            <span>Academic Year 2026-2027</span>
          </span>
          <h1 className="text-3xl font-black text-base-content">Student Admission Application</h1>
          <p className="text-xs sm:text-sm text-base-content/70">
            Submit your child's enrollment inquiry to schedule the Cambridge entry assessment.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card bg-base-100 border border-base-300 p-6 sm:p-8 rounded-3xl shadow-xs space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuUser className="text-primary text-xs" /> Student Full Name
              </label>
              <input
                type="text"
                required
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                placeholder="e.g. Aayan Rahman"
                className="input input-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuUser className="text-secondary text-xs" /> Parent / Guardian Name
              </label>
              <input
                type="text"
                required
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                placeholder="e.g. Dr. Kazi Rahman"
                className="input input-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuGraduationCap className="text-primary text-xs" /> Applying Grade Level
              </label>
              <select
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                className="select select-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs font-semibold"
              >
                <option value="Early Years / Kindergarten">Early Years / Kindergarten</option>
                <option value="Primary Grade 1-5">Primary Grade 1-5</option>
                <option value="Middle School Grade 6-8">Middle School Grade 6-8</option>
                <option value="Cambridge O-Level (Grade 9-10)">Cambridge O-Level (Grade 9-10)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuPhone className="text-accent text-xs" /> Contact Phone
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+880 1712-000000"
                className="input input-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs"
              />
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuMail className="text-primary text-xs" /> Guardian Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="guardian@example.com"
                className="input input-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs"
              />
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-base-content/80">
                Additional Academic Background & Extracurricular Interests
              </label>
              <textarea
                rows="3"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention any special interests in robotics, swimming, debate, or languages..."
                className="textarea textarea-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs"
              />
            </div>

          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn btn-primary btn-block rounded-xl font-bold gap-2 text-xs sm:text-sm shadow-md shadow-primary/20"
            >
              <LuSend />
              <span>Submit Admission Application</span>
            </button>
          </div>
        </form>

      </div>

      {/* Confirmation Modal */}
      <PopupModal
        isOpen={submitted}
        onClose={() => setSubmitted(false)}
        title="Admission Application Received"
        type="success"
      >
        <div className="space-y-2">
          <p>
            Thank you, <strong>{formData.parentName}</strong>. Your application for <strong>{formData.studentName}</strong> ({formData.grade}) has been safely logged in our admissions portal.
          </p>
          <p className="text-xs text-base-content/60">
            Our admissions registrar will call you at <strong>{formData.phone}</strong> within 24 hours to schedule the campus tour and student readiness assessment.
          </p>
        </div>
      </PopupModal>
    </div>
  );
}
