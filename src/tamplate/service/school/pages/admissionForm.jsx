import React, { useState } from 'react';
import { LuGraduationCap, LuCircleCheck, LuUser, LuPhone, LuMail, LuCalendar, LuFileText, LuArrowRight } from 'react-icons/lu';

export default function SchoolAdmissionForm({ selectedCourse, onComplete }) {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: 'Male',
    grade: selectedCourse ? selectedCourse.title : 'Cambridge Primary (Grades 1-5)',
    parentName: '',
    phone: '',
    email: '',
    previousSchool: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onComplete) onComplete(formData);
  };

  if (submitted) {
    return (
      <div className="card bg-base-100 border border-success/30 p-8 sm:p-12 text-center rounded-2xl shadow-sm max-w-2xl mx-auto space-y-4">
        <div className="w-16 h-16 rounded-full bg-success/10 text-success mx-auto flex items-center justify-center text-3xl">
          <LuCircleCheck />
        </div>
        <h3 className="text-2xl font-black text-base-content">Admission Application Received</h3>
        <p className="text-sm text-base-content/70 max-w-md mx-auto">
          Thank you for applying to Cambridge International Academy. Your application reference code is <strong className="text-primary font-mono">CAM-2026-{Math.floor(1000 + Math.random() * 9000)}</strong>.
          Our admissions committee will contact you within 24 business hours for the entrance interview.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setSubmitted(false)}
            className="btn btn-outline btn-sm font-semibold"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 border border-base-300 p-6 sm:p-10 rounded-2xl shadow-xs max-w-3xl mx-auto">
      <div className="border-b border-base-200 pb-5 mb-6">
        <div className="badge badge-primary badge-sm font-bold tracking-wider mb-2">ONLINE ADMISSIONS PORTAL</div>
        <h2 className="text-2xl font-black text-base-content tracking-tight">Student Enrollment Application</h2>
        <p className="text-xs sm:text-sm text-base-content/70 mt-1">
          Complete the official registration form for the 2026-2027 Academic Session.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Student Information Section */}
        <div>
          <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">1. Student Details</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label py-1 text-xs font-semibold text-base-content">Student Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Jonathan Edwards"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                className="input input-sm input-bordered text-xs"
              />
            </div>

            <div className="form-control">
              <label className="label py-1 text-xs font-semibold text-base-content">Date of Birth *</label>
              <input
                type="date"
                required
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="input input-sm input-bordered text-xs"
              />
            </div>

            <div className="form-control">
              <label className="label py-1 text-xs font-semibold text-base-content">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="select select-sm select-bordered text-xs"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label py-1 text-xs font-semibold text-base-content">Applying Grade / Level *</label>
              <select
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                className="select select-sm select-bordered text-xs"
              >
                <option>Cambridge Early Years (Ages 3-5)</option>
                <option>Cambridge Primary (Grades 1-5)</option>
                <option>Cambridge Lower Secondary (Grades 6-8)</option>
                <option>IGCSE O-Level Qualification (Grades 9-10)</option>
                <option>Advanced Level / A-Levels (Grades 11-12)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Parent / Guardian Section */}
        <div>
          <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">2. Parent / Guardian Contact</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label py-1 text-xs font-semibold text-base-content">Parent / Guardian Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Robert Edwards"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="input input-sm input-bordered text-xs"
              />
            </div>

            <div className="form-control">
              <label className="label py-1 text-xs font-semibold text-base-content">Contact Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+880 1712-000000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="input input-sm input-bordered text-xs"
              />
            </div>

            <div className="form-control sm:col-span-2">
              <label className="label py-1 text-xs font-semibold text-base-content">Email Address *</label>
              <input
                type="email"
                required
                placeholder="parent@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input input-sm input-bordered text-xs"
              />
            </div>

            <div className="form-control sm:col-span-2">
              <label className="label py-1 text-xs font-semibold text-base-content">Previous School Attended (If Any)</label>
              <input
                type="text"
                placeholder="Previous Institution name and city"
                value={formData.previousSchool}
                onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                className="input input-sm input-bordered text-xs"
              />
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button type="submit" className="btn btn-primary w-full font-bold gap-2 shadow-xs">
            <LuGraduationCap /> Submit Application for Enrollment
          </button>
        </div>
      </form>
    </div>
  );
}
