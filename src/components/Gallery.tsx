import React, { useState } from 'react';
import { GALLERY, PARTS_IMAGE, HERO_IMAGE, MATERIALS_IMAGE } from '../data/companyData';
import { GalleryItem } from '../types';
import { Eye, Clock, Layers, Maximize2, Tag, ArrowRight } from 'lucide-react';

interface GalleryProps {
  openQuoteModal: (projectName?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ openQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Mechanical Parts', 'Functional Prototypes', 'Product Mockups', 'Replacement Components', 'Engineering Prints', 'Consumer Products'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY
    : GALLERY.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-[#0f1115] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Printed Parts & Prototyping Work
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Explore recent 3D printing and precision engineering projects completed at our Lake Elsinore facility.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-[#1a1d23] border border-white/5 text-gray-400 hover:text-white hover:bg-[#252a33]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl bg-[#1a1d23] border border-white/5 overflow-hidden shadow-2xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative overflow-hidden h-60 bg-[#252a33]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Overlay Eye Button */}
                <button
                  type="button"
                  onClick={() => setActiveItem(item)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs"
                >
                  <span className="px-4 py-2.5 rounded-md bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center gap-2">
                    <Maximize2 className="w-4 h-4" /> View Details
                  </span>
                </button>

                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-[#0f1115]/90 text-blue-400 border border-blue-500/30">
                  {item.category}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] font-mono text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-500" />
                    <span>{item.material}</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-end">
                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                    <span>{item.turnaround}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 font-mono">
                    Industry: <strong className="text-gray-300">{item.industry}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => openQuoteModal(item.title)}
                    className="text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    Similar Print Quote <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1a1d23] border border-white/10 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 text-white bg-[#252a33] hover:bg-[#2e3440] p-2 rounded-full border border-white/10"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-full bg-black relative">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    {activeItem.category}
                  </span>

                  <h3 className="text-2xl font-bold text-white">{activeItem.title}</h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{activeItem.description}</p>

                  <div className="space-y-2 bg-[#252a33] p-4 rounded-2xl border border-white/5 text-xs font-mono">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Material Used:</span>
                      <span className="text-blue-400 font-bold">{activeItem.material}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Turnaround Time:</span>
                      <span className="text-white font-bold">{activeItem.turnaround}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-400">Target Industry:</span>
                      <span className="text-white font-bold">{activeItem.industry}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveItem(null)}
                    className="px-4 py-2.5 rounded-md bg-[#252a33] text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const title = activeItem.title;
                      setActiveItem(null);
                      openQuoteModal(title);
                    }}
                    className="px-6 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                  >
                    Request Similar Part
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
