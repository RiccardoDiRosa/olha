import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  'https://picsum.photos/seed/studio1/800/800',
  'https://picsum.photos/seed/studio2/800/1200',
  'https://picsum.photos/seed/studio3/1200/800',
  'https://picsum.photos/seed/studio4/800/800',
  'https://picsum.photos/seed/studio5/800/1200',
  'https://picsum.photos/seed/studio6/1200/800',
  'https://picsum.photos/seed/studio7/800/800',
  'https://picsum.photos/seed/studio8/800/1200',
  'https://picsum.photos/seed/studio9/1200/800',
];

export function Gallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="galleria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest uppercase text-stone-500 mb-3">Galleria</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight mb-6">
            L'atmosfera dello studio
          </h3>
          <p className="text-lg text-stone-600 font-light">
            Un ambiente accogliente, caldo e rilassante, pensato per farti staccare 
            la spina e dedicarti completamente al tuo benessere.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo}
                alt={`Studio massaggi ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-950/95 flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-50"
              onClick={prevPhoto}
            >
              <ChevronLeft size={48} />
            </button>

            <button
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-50"
              onClick={nextPhoto}
            >
              <ChevronRight size={48} />
            </button>

            <motion.img
              key={selectedPhotoIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={photos[selectedPhotoIndex]}
              alt={`Studio massaggi ${selectedPhotoIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
              {selectedPhotoIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
