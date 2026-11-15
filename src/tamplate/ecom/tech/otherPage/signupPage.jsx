import React, { useState } from 'react';
import { useOutletContext, useNavigate, Link } from 'react-router-dom';
import { DOMAINS } from '../../../../data/domainData.js';
import Breadcrumbs from '../../../common/breadcrumbs.jsx';
import PopupModal from '../../../common/popupModal.jsx';
import { LuUserPlus } from 'react-icons/lu';

/**
 * E-Commerce Sign-Up Page with React Router
 */
export default function SignupPage() {
  const outlet = useOutletContext() || {};
  const data = outlet.currentData || outlet.currentJob || DOMAINS.tech;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agree: true
  });

  const [modalDetails, setModalDetails] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setModalDetails({
      Username: formData.username,
      Name: `${formData.firstName} ${formData.lastName}`,
      Email: formData.email,
      Phone: formData.phone,
      Status: "Account Created & Verified"
    });
  };

  return (
    <div className="space-y-8 pb-14">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs
        items={[{ label: "User Registration / Sign Up", active: true }]}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-8 space-y-6">
        
        <div className="text-center space-y-2">
          <span className="badge badge-secondary badge-outline text-xs font-bold uppercase">Member Access</span>
          <h1 className="text-3xl font-black text-base-content">Create Customer Account</h1>
          <p className="text-xs sm:text-sm text-base-content/70">
            Sign up to track purchases, store wishlist items, and unlock member discounts.
          </p>
        </div>

        <div className="bg-base-100 border border-base-300 rounded-3xl p-6 sm:p-10 shadow-sm">
          
          {error && (
            <div className="alert alert-error text-xs font-bold text-white rounded-2xl mb-4 py-2">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="label text-xs font-bold">First Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tanvir"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="input input-sm input-bordered w-full rounded-xl bg-base-100"
                />
              </div>

              <div>
                <label className="label text-xs font-bold">Last Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ahmed"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="input input-sm input-bordered w-full rounded-xl bg-base-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="label text-xs font-bold">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="01712-XXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input input-sm input-bordered w-full rounded-xl bg-base-100"
                />
              </div>

              <div>
                <label className="label text-xs font-bold">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input input-sm input-bordered w-full rounded-xl bg-base-100"
                />
              </div>
            </div>

            <div>
              <label className="label text-xs font-bold">Username *</label>
              <input
                type="text"
                required
                placeholder="choose_username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="input input-sm input-bordered w-full rounded-xl bg-base-100"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="label text-xs font-bold">Password *</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="input input-sm input-bordered w-full rounded-xl bg-base-100"
                />
              </div>

              <div>
                <label className="label text-xs font-bold">Confirm Password *</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="input input-sm input-bordered w-full rounded-xl bg-base-100"
                />
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="checkbox checkbox-secondary checkbox-xs rounded-md"
                />
                <span>I agree to the Terms of Service & Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-secondary btn-block btn-sm rounded-xl font-bold shadow-md shadow-secondary/20 gap-2 mt-4"
            >
              <LuUserPlus />
              <span>Create Account & Register (Triggers Popup)</span>
            </button>

            <div className="text-center pt-2 text-xs text-base-content/60">
              Already have an account?{' '}
              <Link 
                to="/login"
                className="text-secondary font-bold hover:underline"
              >
                Log In
              </Link>
            </div>

          </form>

        </div>

      </div>

      {/* POPUP MODAL */}
      <PopupModal
        isOpen={!!modalDetails}
        onClose={() => {
          setModalDetails(null);
          navigate('/login');
        }}
        title="Account Registered!"
        message="Your customer profile has been validated. You can now log in and complete your checkout."
        details={modalDetails || {}}
      />
    </div>
  );
}
