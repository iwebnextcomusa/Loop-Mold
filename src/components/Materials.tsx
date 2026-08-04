import React, { useState } from 'react';
import { MATERIALS, MATERIALS_IMAGE } from '../data/companyData';
import { MaterialItem } from '../types';
import { Check, Flame, Shield, Zap, Info, Filter } from 'lucide-react';

interface MaterialsProps {
  openQuoteModal: (materialName?: string) => void;
}

export const Materials: React.FC<MaterialsProps> = ({ openQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Standard Thermoplastic', 'Engineering Plastic', 'Composite Reinforcement', 'Flexible Elastomer', 'Ultra-High Precision'];

  const filteredMaterials = activeCategory === 'all'
    ? MATERIALS
    : MATERIALS.filter(m => m.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="materials" className="py-24 bg-[#0f1115] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            High Performance Polymer Stock
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Advanced 3D Printing Materials & Composites
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            We stock industrial-grade thermoplastics, flexible elastomers, carbon fiber composites, and resins engineered for demanding mechanical and thermal applications.
          </p>
        </div>

        {/* Material Showcase Image Banner */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-white/5 bg-[#1a1d23] relative shadow-2xl">
          <img
            src={MATERIALS_IMAGE}
            alt="3D printing filaments and material test blocks"
            className="w-full h-48 sm:h-64 object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/60 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <div className="max-w-xl space-y-2">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">Material Consultation Included</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Not sure which filament fits your design?</h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Our California engineering team will evaluate your part’s operating environment (stress, heat, UV, chemical exposure) and recommend the ideal polymer.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-[#1a1d23] border border-white/5 text-gray-400 hover:text-white hover:bg-[#252a33]'
              }`}
            >
              {cat === 'all' ? 'All Materials' : cat}
            </button>
          ))}
        </div>

        {/* Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMaterials.map((mat) => (
            <div
              key={mat.id}
              className="p-6 rounded-3xl bg-[#1a1d23] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 uppercase font-bold">
                    {mat.shortName}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">
                    {mat.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {mat.name}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                  {mat.description}
                </p>

                {/* Rating Bar Charts */}
                <div className="space-y-2.5 pt-2 bg-[#252a33] p-3 rounded-2xl border border-white/5 text-xs">
                  <div>
                    <div className="flex justify-between text-[11px] mb-1 font-mono text-gray-300">
                      <span>Strength</span>
                      <span className="text-blue-400 font-bold">{mat.strength}/10</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1a1d23] rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600" style={{ width: `${mat.strength * 10}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1 font-mono text-gray-300">
                      <span>Durability</span>
                      <span className="text-blue-400 font-bold">{mat.durability}/10</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1a1d23] rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: `${mat.durability * 10}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1 font-mono text-gray-300">
                      <span>Print Resolution</span>
                      <span className="text-blue-400 font-bold">{mat.printQuality}/10</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1a1d23] rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400" style={{ width: `${mat.printQuality * 10}%` }} />
                    </div>
                  </div>
                </div>

                {/* Heat Resistance Pill */}
                <div className="flex items-center gap-2 text-xs font-mono text-gray-300 bg-[#252a33] px-3 py-1.5 rounded-xl border border-white/5">
                  <Flame className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Heat Deflect: <strong className="text-white">{mat.heatResistance}</strong></span>
                </div>

                {/* Applications list */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">Best Applications:</span>
                  <div className="flex flex-wrap gap-1">
                    {mat.applications.slice(0, 3).map((app, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-[#252a33] text-gray-300 border border-white/5">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div className="pt-5 mt-5 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => openQuoteModal(mat.name)}
                  className="w-full py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all text-center shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                >
                  Select {mat.shortName} For Quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
