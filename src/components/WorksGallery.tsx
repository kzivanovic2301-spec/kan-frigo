import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from 'lucide-react';

export const WorksGallery: React.FC = () => {
  const { works } = useApp();
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % works.length : null));
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + works.length) % works.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, works.length]);

  return (
    <section id="nasi-radovi" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-2">
            Direktno sa terena
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Galerija Radova
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Fotografije izvedenih radova: rashladne komore, agregati, klima uređaji, toplotne pumpe i multi-sistemi.
          </p>
        </div>

        {/* Gallery Grid - Only pure images without metadata/extra text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {works.map((work, idx) => (
            <div
              key={work.id || idx}
              onClick={() => setActivePhotoIndex(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={work.imageUrl}
                alt="Rad KAN frigo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/90 text-slate-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal - Only image display without text */}
        {activePhotoIndex !== null && works[activePhotoIndex] && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none animate-in fade-in duration-200"
            onClick={() => setActivePhotoIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Zatvori"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev button */}
            {works.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + works.length) % works.length : null));
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Prethodna slika"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next button */}
            {works.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % works.length : null));
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Sledeća slika"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Main Image Container */}
            <div
              className="max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={works[activePhotoIndex].imageUrl}
                alt="Rad KAN frigo"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
