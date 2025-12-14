import React, { useState } from 'react';
import { useOutletContext, useNavigate, Link } from 'react-router-dom';
import { DOMAINS } from '../../../../data/domainData.js';
import Breadcrumbs from '../../../common/breadcrumbs.jsx';
import PopupModal from '../../../common/popupModal.jsx';
import { LuLock, LuUser, LuLogIn, LuShieldCheck, LuSparkles } from 'react-icons/lu';

/**
 * Dedicated E-Commerce Login Page (Page 5 of 5)
 * Satisfies Exam Specification:
 *   e. Login Page:
 *      i. Form (Username, Password).
 * Includes breadcrumb, form validation, and confirmation popup.
 */
export default function LoginPage() {
  const outlet = useOutletContext() || {};
  const data = outlet.currentData || outlet.currentJob || DOMAINS.tech;
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [modalDetails, setModalDetails] = useState(null);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Please provide both username and password.');
      return;
    }

    // Trigger confirmation popup window (Exam requirement)
    setModalDetails({
      Username: username,
      AccountType: "Verified Member",
      Status: "Authenticated Successfully",
      Session: "Active (24h)"
    });
  };

  return (
    <div className="space-y-8 pb-14">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs
        items={[{ label: "User Login", active: true }]}
      />

      <div className="max-w-md mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl mx-auto border border-secondary/20 shadow-sm">
            <LuLock />
          </div>
          <span className="badge badge-secondary badge-outline text-xs font-bold uppercase">
            Authentication
          </span>
          <h1 className="text-3xl font-black text-base-content">Welcome Back</h1>
          <p className="text-xs sm:text-sm text-base-content/70">
            Sign in to access your {data.brand} orders, wishlist, and exclusive discounts.
          </p>
        </div>

        {/* 2. Login Form Card */}
        <div className="bg-base-100 border border-base-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          
          {error && (
            <div className="alert alert-error text-xs font-bold text-white rounded-2xl py-2">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm">
            
            {/* Username Field (Exam Specification) */}
            <div>
              <label className="label text-xs font-bold">Username or Email *</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Enter your username..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input input-sm input-bordered w-full rounded-xl pl-9 text-xs bg-base-100 focus:border-secondary"
                />
                <LuUser className="absolute left-3 top-2.5 text-base-content/40 text-sm" />
              </div>
            </div>

            {/* Password Field (Exam Specification) */}
            <div>
              <label className="label text-xs font-bold">Password *</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-sm input-bordered w-full rounded-xl pl-9 text-xs bg-base-100 focus:border-secondary"
                />
                <LuLock className="absolute left-3 top-2.5 text-base-content/40 text-sm" />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox checkbox-secondary checkbox-xs rounded-md"
                />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="text-secondary hover:underline">Forgot password?</a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-secondary btn-block btn-sm rounded-xl font-bold shadow-md shadow-secondary/20 gap-2 mt-2"
            >
              <LuLogIn />
              <span>Log In (Triggers Confirmation)</span>
            </button>

            {/* Switch to Signup Link */}
            <div className="text-center pt-2 text-xs text-base-content/60 border-t border-base-200 mt-4">
              Don't have an account?{' '}
              <Link 
                to="/signup" 
                className="text-secondary font-bold hover:underline"
              >
                Sign Up here
              </Link>
            </div>

          </form>

        </div>

        {/* Security Trust Indicators */}
        <div className="p-4 rounded-2xl bg-base-200/60 border border-base-300 text-xs flex items-center justify-center gap-4 text-base-content/70">
          <div className="flex items-center gap-1.5 font-medium">
            <LuShieldCheck className="text-success text-sm" />
            <span>256-Bit SSL Encrypted</span>
          </div>
          <div>•</div>
          <div>Strict Privacy Protection</div>
        </div>

      </div>

      {/* CONFIRMATION POPUP MODAL (Exam Condition #3) */}
      <PopupModal
        isOpen={!!modalDetails}
        onClose={() => {
          setModalDetails(null);
          navigate('/');
        }}
        title="Login Successful!"
        message={`Welcome back, @${username}! You have successfully authenticated your session.`}
        details={modalDetails || {}}
      />
    </div>
  );
}
