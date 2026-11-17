import React from 'react';
import Breadcrumbs from './breadcrumbs.jsx';
import SchoolAdmissionForm from './admissionForm.jsx';
import { LuGraduationCap } from 'react-icons/lu';

export default function SchoolAdmissionPage({ selectedCourse, onNavigate }) {
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

        <SchoolAdmissionForm
          selectedCourse={selectedCourse}
          onComplete={() => onNavigate && onNavigate('home')}
        />
      </div>
    </div>
  );
}
