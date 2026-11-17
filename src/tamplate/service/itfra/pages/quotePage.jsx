import React, { useState } from 'react';
import Breadcrumbs from './breadcrumbs.jsx';
import PopupModal from './popupModal.jsx';
import { LuTerminal, LuServer, LuSend, LuMail, LuPhone, LuBuilding, LuShieldCheck } from 'react-icons/lu';

/**
 * Enterprise IT Project Quote / RFP Form
 * Located at: pages/service/itfirm/quote.jsx
 */
export default function ItFirmQuotePage({ onNavigate }) {
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
    <div className="space-y-6 pb-16">
      <Breadcrumbs
        customCrumbs={[
          { label: 'IT Firm', to: '/pages/service/itfirm' },
          { label: 'Request Technical Quote', to: '/pages/service/itfirm/quote', isCurrent: true }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="border-b border-base-300 pb-4 text-center space-y-2">
          <span className="badge badge-primary badge-outline text-xs font-bold uppercase gap-1">
            <LuShieldCheck className="text-xs" />
            <span>Enterprise SLA Consultation</span>
          </span>
          <h1 className="text-3xl font-black text-base-content">Request an Architecture Proposal (RFP)</h1>
          <p className="text-xs sm:text-sm text-base-content/70 max-w-xl mx-auto">
            Speak directly with our senior cloud architects. Receive a comprehensive scope of work, migration roadmap, and fixed SLA cost breakdown within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-base-100 border border-base-300 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content uppercase tracking-wider flex items-center gap-1.5">
                <LuBuilding className="text-primary text-xs" />
                <span>Organization / Company Name</span>
              </label>
              <input
                type="text"
                required
                placeholder="Acme Financial Technologies"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="input input-bordered input-sm sm:input-md w-full rounded-xl text-xs sm:text-sm bg-base-200/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content uppercase tracking-wider flex items-center gap-1.5">
                <LuTerminal className="text-primary text-xs" />
                <span>Lead Engineering Contact</span>
              </label>
              <input
                type="text"
                required
                placeholder="Jane Doe, VP Engineering"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                className="input input-bordered input-sm sm:input-md w-full rounded-xl text-xs sm:text-sm bg-base-200/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content uppercase tracking-wider flex items-center gap-1.5">
                <LuMail className="text-primary text-xs" />
                <span>Corporate Email</span>
              </label>
              <input
                type="email"
                required
                placeholder="j.doe@acme.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input input-bordered input-sm sm:input-md w-full rounded-xl text-xs sm:text-sm bg-base-200/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content uppercase tracking-wider flex items-center gap-1.5">
                <LuPhone className="text-primary text-xs" />
                <span>Direct Phone / Mobile</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+880 1718-000000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="input input-bordered input-sm sm:input-md w-full rounded-xl text-xs sm:text-sm bg-base-200/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content uppercase tracking-wider">
                Target Architecture Domain
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="select select-bordered select-sm sm:select-md w-full rounded-xl text-xs sm:text-sm bg-base-200/50 font-medium"
              >
                <option value="Multi-Cloud Migration & Kubernetes">Multi-Cloud Migration & Kubernetes</option>
                <option value="SOC Operations & Penetration Testing">SOC Operations & Penetration Testing</option>
                <option value="High-Throughput Distributed Microservices">High-Throughput Distributed Microservices</option>
                <option value="CI/CD DevSecOps Automation Pipelines">CI/CD DevSecOps Automation Pipelines</option>
                <option value="Zero-Downtime Database Clustering">Zero-Downtime Database Clustering</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-base-content uppercase tracking-wider">
                Allocated Implementation Budget
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="select select-bordered select-sm sm:select-md w-full rounded-xl text-xs sm:text-sm bg-base-200/50 font-medium"
              >
                <option value="Under $5,000">Under $5,000 (Assessment & Audit)</option>
                <option value="$5,000 - $15,000">$5,000 - $15,000 (Targeted Migration)</option>
                <option value="$15,000 - $50,000">$15,000 - $50,000 (Full Infrastructure Revamp)</option>
                <option value="$50,000+">$50,000+ (Multi-Region Enterprise SRE Retainer)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-base-content uppercase tracking-wider">
              System Architecture & Workload Requirements
            </label>
            <textarea
              rows={4}
              required
              placeholder="Describe current hosting environment (AWS, GCP, on-premise), daily traffic volumes, compliance requirements (HIPAA, PCI-DSS, SOC-2), and target completion timeframe..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="textarea textarea-bordered w-full rounded-xl text-xs sm:text-sm bg-base-200/50"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn btn-primary btn-md w-full rounded-xl font-bold shadow-md shadow-primary/20 gap-2"
            >
              <LuSend />
              <span>Submit Request for Proposal (RFP)</span>
            </button>
          </div>
        </form>
      </div>

      <PopupModal
        isOpen={submitted}
        onClose={() => setSubmitted(false)}
        title="Architecture Request Logged"
        type="success"
      >
        <div className="space-y-2">
          <p>
            Thank you, <strong>{formData.contactName}</strong> from <strong>{formData.companyName}</strong>.
          </p>
          <p className="text-xs text-base-content/70">
            Your request for <strong>{formData.serviceType}</strong> has been assigned ticket <strong>#CYBER-{Math.floor(1000 + Math.random() * 9000)}</strong>. A Principal Infrastructure Architect will initiate technical discovery within 24 hours.
          </p>
        </div>
      </PopupModal>
    </div>
  );
}
