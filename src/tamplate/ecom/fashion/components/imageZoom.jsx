import React, { useState } from 'react';
import { LuZoomIn, LuX, LuRotateCcw } from 'react-icons/lu';

export default function ImageZoom({
  src = '/images/item-1.jpg',
  alt = 'Image preview',
  aspectRatio = 'aspect-4/3'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y });
  };

  return (
    <div className="relative group">
      <div
        className={`relative ${aspectRatio} overflow-hidden rounded-2xl bg-base-200 cursor-zoom-in border border-base-300`}
        onMouseMove={handleMouseMove}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-3 right-3 bg-base-100/80 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-sm">
          <LuZoomIn className="text-xs" />
          <span>Click to Zoom</span>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4">
          <div className="relative max-w-4xl w-full bg-base-100 rounded-2xl p-4 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-base-300 pb-2">
              <span className="font-bold text-sm text-base-content">{alt}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setScale((s) => (s === 1 ? 1.8 : 1))}
                  className="btn btn-ghost btn-xs gap-1"
                >
                  <LuRotateCcw className="text-xs" />
                  <span>{scale === 1 ? '1.8x' : '1x'}</span>
                </button>
                <button
                  onClick={() => { setIsOpen(false); setScale(1); }}
                  className="btn btn-circle btn-ghost btn-xs"
                >
                  <LuX className="text-sm" />
                </button>
              </div>
            </div>
            <div className="overflow-hidden max-h-[75vh] flex items-center justify-center">
              <img
                src={src}
                alt={alt}
                style={{ transform: `scale(${scale})` }}
                className="max-h-[70vh] object-contain transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
