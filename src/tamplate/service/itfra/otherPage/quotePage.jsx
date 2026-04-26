import React, { useState } from 'react';
import Breadcrumbs from '../../../common/breadcrumbs.jsx';
import PopupModal from '../../../common/popupModal.jsx';
import { LuTerminal, LuServer, LuSend, LuMail, LuPhone, LuBuilding } from 'react-icons/lu';

/**
 * Enterprise IT Project Quote / RFP Form
 * Located at: pages/service/itfirm/quote.jsx
 */
export default function ItFirmQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: 'Multi-Cloud Migration & Kubernetes',
    budget: '$5,000 - $15,000',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'IT Firm', to: '/pages/service/itfirm' },
          { label: 'Get Technical Quote', to: '/pages/service/itfirm/quote', isCurrent: true }
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6">
        
        <div className="text-center space-y-2">
          <span className="badge badge-primary badge-outline text-xs font-bold uppercase gap-1">
            <LuTerminal className="text-xs" />
            <span>Enterprise RFP Portal</span>
          </span>
          <h1 className="text-3xl font-black text-base-content">Request Technical Proposal & SLA Quote</h1>
          <p className="text-xs sm:text-sm text-base-content/70">
            Tell our Solutions Architects about your cloud infrastructure, security audits, or software requirements.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card bg-base-100 border border-base-300 p-6 sm:p-8 rounded-3xl shadow-xs space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuBuilding className="text-primary text-xs" /> Organization / Company Name
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="e.g. Apex FinTech Ltd"
                className="input input-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80">
                Technical Lead / Contact Person
              </label>
              <input
                type="text"
                required
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                placeholder="e.g. Kazi Fahim (VP Engineering)"
                className="input input-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuMail className="text-secondary text-xs" /> Corporate Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tech-lead@company.com"
                className="input input-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuPhone className="text-accent text-xs" /> Phone / WhatsApp
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+880 1718-000000"
                className="input input-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80 flex items-center gap-1">
                <LuServer className="text-primary text-xs" /> Primary Scope of Work
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="select select-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs font-semibold"
              >
                <option value="Multi-Cloud Migration & Kubernetes">Multi-Cloud Migration & Kubernetes</option>
                <option value="Zero-Trust Cybersecurity & Pentest">Zero-Trust Cybersecurity & Pentest</option>
                <option value="Custom High-Concurrency Web/Mobile App">Custom High-Concurrency Web/Mobile App</option>
                <option value="PostgreSQL & Redis Performance Tuning">PostgreSQL & Redis Performance Tuning</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content/80">Estimated Budget Range</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="select select-sm bg-base-200/50 border-base-300 rounded-xl w-full text-xs font-semibold"
              >
                <option value="$3,000 - $8,000">$3,000 - $8,000</option>
                <option value="$8,000 - $20,000">$8,000 - $20,000</option>
                <option value="$20,000 - $50,000">$20,000 - $50,000</option>
                <option value="$50,000+ Enterprise">$50,000+ Enterprise Tier</option>
              </select>
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-base-content/80">
                Technical Stack & Infrastructure Details
              </label>
              <textarea
                rows="3"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Mention current cloud provider, monthly active users, database size, or compliance requirements..."
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
              <span>Submit RFP for Architecture Review</span>
            </button>
          </div>
        </form>

      </div>

      <PopupModal
        isOpen={submitted}
        onClose={() => setSubmitted(false)}
        title="Technical RFP Logged"
        type="success"
      >
        <div className="space-y-2">
          <p>
            Thank you, <strong>{formData.contactName}</strong> from <strong>{formData.companyName}</strong>. Your inquiry for <strong>{formData.serviceType}</strong> has been assigned to a Principal Cloud Architect.
          </p>
          <p className="text-xs text-base-content/60">
            A comprehensive NDA, architectural questionnaire, and initial estimate will be delivered to <strong>{formData.email}</strong> within 12 business hours.
          </p>
        </div>
      </PopupModal>
    </div>
  );
}
