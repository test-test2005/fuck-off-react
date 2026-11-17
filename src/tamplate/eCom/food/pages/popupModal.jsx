import React from 'react';
import { LuX, LuCircleCheck, LuTriangleAlert, LuInfo } from 'react-icons/lu';

export default function PopupModal({
  isOpen = false,
  onClose,
  title = "Notification",
  message = "",
  details = null,
  type = "success"
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
      <div className="relative w-full max-w-md bg-base-100 rounded-3xl p-6 shadow-2xl border border-base-300 space-y-4 text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 btn btn-circle btn-ghost btn-xs text-base-content/60"
        >
          <LuX className="text-base" />
        </button>

        <div className="flex justify-center">
          {type === 'success' && (
            <div className="w-12 h-12 rounded-full bg-success/10 text-success flex items-center justify-center text-2xl font-bold">
              <LuCircleCheck />
            </div>
          )}
          {type === 'warning' && (
            <div className="w-12 h-12 rounded-full bg-warning/10 text-warning flex items-center justify-center text-2xl font-bold">
              <LuTriangleAlert />
            </div>
          )}
          {type === 'info' && (
            <div className="w-12 h-12 rounded-full bg-info/10 text-info flex items-center justify-center text-2xl font-bold">
              <LuInfo />
            </div>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-black text-base-content">{title}</h3>
          {message && <p className="text-xs text-base-content/70">{message}</p>}
        </div>

        {details && typeof details === 'object' && (
          <div className="bg-base-200/60 rounded-2xl p-4 text-left space-y-2 text-xs">
            {Object.entries(details).map(([k, v]) => (
              <div key={k} className="flex justify-between items-center py-1 border-b border-base-300/40 last:border-none">
                <span className="text-base-content/60 font-medium">{k}:</span>
                <span className="font-bold text-base-content font-mono">{String(v)}</span>
              </div>
            ))}
          </div>
        )}

        <button onClick={onClose} className="btn btn-primary btn-sm w-full font-bold shadow-xs">
          Close
        </button>
      </div>
    </div>
  );
}
