import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/hospitalData';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import asjadClinicHero from '../assets/images/asjad_clinic_hero.webp';
import asjadClinicInterior from '../assets/images/gallery_pharmacy.webp';
import petShopImg from '../assets/images/gallery_pet_shop.webp';
import petGroomingImg from '../assets/images/gallery_grooming.webp';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Blend in clinic photos, shop, and grooming
  const allGalleryList: GalleryItem[] = [
    {
      id: 'gen-interior',
      title: 'Hygienic Clinical Consultation & Exam Room',
      category: 'clinical',
      imageUrl: asjadClinicInterior,
      caption: 'Sanitary, calm, and fear-free consultation environment designed for accurate pet diagnoses.',
    },
    {
      id: 'gen-shop',
      title: 'In-Hospital Pet Shop & Authentic Nutrition',
      category: 'shop',
      imageUrl: petShopImg,
      caption: 'Genuine imported pet food brands (Royal Canin, Reflex, Fluffy), supplements, and daily essentials.',
    },
    {
      id: 'gen-grooming',
      title: 'Professional Pet Grooming & Spa Facility',
      category: 'grooming',
      imageUrl: petGroomingImg,
      caption: 'Gentle bathing, de-shedding, nail clipping, and sanitary grooming under veterinary supervision.',
    },
    {
      id: 'gen-hero',
      title: 'Doctor Examination & Patient Care',
      category: 'clinical',
      imageUrl: asjadClinicHero,
      caption: 'Compassionate hands-on veterinary checkups by our experienced clinical team.',
    },
    ...GALLERY_ITEMS,
  ];

  const filteredItems =
    activeCategory === 'all'
      ? allGalleryList
      : allGalleryList.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') {
        setSelectedItem(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#F1F5F9] border-y border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#134074] border border-[#BFDBFE] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Visual Facility Tour</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2545] mb-4">
            A Glimpse Inside Hospital & Pet Shop
          </h2>
          <p className="text-[#475569] text-base sm:text-lg">
            Experience our clean hospital facilities, genuine pet food shelves, diagnostic ultrasound unit, and patient care.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Photographs' },
            { id: 'shop', label: 'Pet Shop & Food' },
            { id: 'clinical', label: 'Clinical Care' },
            { id: 'diagnostics', label: 'Diagnostics & Ultrasound' },
            { id: 'grooming', label: 'Grooming & Spa' },
            { id: 'boarding', label: 'Pet Boarding' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#134074] text-white shadow-sm'
                  : 'bg-white text-[#475569] hover:bg-[#E2E8F0] border border-[#CBD5E1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-[#E2E8F0] hover:border-[#134074]/40 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E2E8F0]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  width={900}
                  height={675}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white flex items-center justify-between w-full">
                    <span className="text-xs font-semibold flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-sky-400" />
                      Click to view full photo
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white">
                <div className="flex items-center justify-between text-[11px] text-[#0284C7] font-bold uppercase tracking-wider mb-1">
                  <span>{item.category}</span>
                  <span className="text-emerald-700 font-semibold">Asjad Hospital</span>
                </div>
                <h4 className="font-serif text-base font-bold text-[#0B2545] group-hover:text-[#134074] transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Accessible Interactive Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview"
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in cursor-pointer"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 z-50"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors focus:outline-none z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors focus:outline-none z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-[#0F172A] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col cursor-default"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
                decoding="async"
              />
            </div>

            <div className="p-4 sm:p-6 bg-[#0B2545] text-[#F0F9FF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-0.5">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-sky-100/90 mt-1 max-w-xl">
                  {selectedItem.caption}
                </p>
              </div>

              <div className="text-xs text-sky-300/80 shrink-0">
                Press Esc to close • Use ← / → to navigate
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
