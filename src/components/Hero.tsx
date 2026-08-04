import React from 'react';
import { ActivePage } from '../types';
import { COMPANY_INFO, HERO_IMAGE } from '../data/companyData';
import { ArrowRight, ShieldCheck, Zap, MapPin, Sparkles, Layers } from 'lucide-react';

interface HeroProps {
  setActivePage: (page: ActivePage) => void;
  openQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setActivePage, openQuoteModal }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0f1115] border-b border-white/5">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="3D Printing Hero Background"
          className="w-full h-full object-cover object-center opacity-25 scale-105 filter brightness-90 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115]/90 via-[#0f1115]/80 to-[#0f1115]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115] via-transparent to-[#0f1115]" />
      </div>

      {/* Background Animated Glow Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      
      {/* Radial Blue Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Precision Engineering / Lake Elsinore, CA</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Professional 3D Printing &{' '}
            <span className="text-blue-500">
              Rapid Prototyping
            </span>{' '}
            Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
            {COMPANY_INFO.subheadline}
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={openQuoteModal}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 active:scale-95 group"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => {
                setActivePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-4 bg-[#252a33] hover:bg-[#2e3440] text-gray-200 border border-white/10 rounded-md font-semibold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-blue-400" />
              <span>View Our Services</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-[#252a33] rounded-xl flex items-center justify-center text-blue-500 border border-white/5 flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-tight">Fast Turnaround</p>
                <p className="text-sm font-semibold text-white">24-48h Delivery</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-[#252a33] rounded-xl flex items-center justify-center text-blue-500 border border-white/5 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-tight">Precision</p>
                <p className="text-sm font-semibold text-white">50μm Tolerance</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-[#252a33] rounded-xl flex items-center justify-center text-blue-500 border border-white/5 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-tight">Location</p>
                <p className="text-sm font-semibold text-white">Lake Elsinore, CA</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
