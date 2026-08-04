import React from 'react';
import { TESTIMONIALS } from '../data/companyData';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0f1115] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Client Success Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Engineers, Designers & Local Businesses
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            See why companies throughout California rely on Loop Mold for fast, high-accuracy 3D printed prototypes and replacement components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-[#1a1d23] border border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-2xl flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-base font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-blue-400 font-mono font-semibold">{t.role} • <span className="text-gray-400">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
