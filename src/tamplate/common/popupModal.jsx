import React from 'react';
import { LuX, LuCircleCheck, LuTriangleAlert, LuInfo } from 'react-icons/lu';

/**
 * Common Popup Modal Component
 * Used for appointment confirmations, quick views, checkout alerts
 */
export default function PopupModal({
  isOpen,
  onClose,
  title = "Notice",
  type = "success", // success, info, warning
  children
}) {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case "success":
        return <LuCircleCheck className="text-success text-2xl" />;
      case "warning":
        return <LuTriangleAlert className="text-warning text-2xl" />;
      default:
        return <LuInfo className="text-info text-2xl" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-base-100 rounded-3xl border border-base-300 shadow-2xl max-w-md w-full p-6 space-y-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="btn btn-xs btn-circle btn-ghost absolute top-4 right-4"
          aria-label="Close"
        >
          <LuX className="text-base" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-base-200 flex items-center justify-center shrink-0">
            {getIcon()}
          </div>
          <div>
            <h3 className="text-lg font-black text-base-content leading-snug">{title}</h3>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-base-content/80 leading-relaxed">
          {children}
        </div>

        <div className="pt-2 flex justify-end">
          <button 
            onClick={onClose}
            className="btn btn-sm btn-primary rounded-xl font-bold"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
}
