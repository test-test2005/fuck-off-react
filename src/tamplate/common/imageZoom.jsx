import React, { useState } from 'react';
import { LuZoomIn, LuX, LuRotateCcw } from 'react-icons/lu';

/**
 * Common Image Zoom / Lightbox Component
 * Supports:
 * - Magnifier mouse-tracking zoom preview
 * - Full-screen click-to-expand lightbox
 */
export default function ImageZoom({
  src,
  alt = "Product Image",
  className = "w-full h-full object-cover",
  aspectRatio = "aspect-square"
}) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1.5);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="relative group select-none">
      {/* Main Image Container */}
      <div 
        className={`relative ${aspectRatio} overflow-hidden rounded-2xl bg-base-200 border border-base-300 cursor-zoom-in`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={() => setIsLightboxOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className={`${className} transition-transform duration-200`}
          style={
            isHovered
              ? {
                  transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                  transform: `scale(${zoomLevel})`
                }
              : { transform: 'scale(1)' }
          }
        />

        {/* Zoom Hint Badge */}
        <div className="absolute bottom-3 right-3 bg-base-100/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-base-content flex items-center gap-1 shadow-md opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none">
          <LuZoomIn />
          <span>Hover to Zoom</span>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-neutral/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-base-100 rounded-3xl overflow-hidden shadow-2xl border border-base-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Controls */}
            <div className="flex items-center justify-between p-4 border-b border-base-200 bg-base-200/50">
              <span className="font-bold text-sm text-base-content truncate pr-4">{alt}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel((z) => (z === 1.5 ? 2.2 : 1.5))}
                  className="btn btn-xs btn-outline rounded-lg gap-1"
                >
                  <LuRotateCcw className="text-xs" />
                  <span>Toggle Zoom</span>
                </button>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="btn btn-xs btn-circle btn-ghost"
                  aria-label="Close"
                >
                  <LuX className="text-base" />
                </button>
              </div>
            </div>

            {/* High-Res View */}
            <div className="overflow-auto p-4 flex items-center justify-center bg-base-300/30">
              <img
                src={src}
                alt={alt}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
