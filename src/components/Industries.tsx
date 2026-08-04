import React from 'react';
import { INDUSTRIES } from '../data/companyData';
import { Car, Plane, Activity, ShoppingBag, Cpu, Building, GraduationCap, Factory, Bot, ArrowUpRight } from 'lucide-react';

interface IndustriesProps {
  openQuoteModal: (industryName?: string) => void;
}

const industryIcons: Record<string, React.ReactNode> = {
  Car: <Car className="w-6 h-6 text-blue-500" />,
  Plane: <Plane className="w-6 h-6 text-blue-500" />,
  Activity: <Activity className="w-6 h-6 text-blue-500" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-blue-500" />,
  Cpu: <Cpu className="w-6 h-6 text-blue-500" />,
  Building: <Building className="w-6 h-6 text-blue-500" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-blue-500" />,
  Factory: <Factory className="w-6 h-6 text-blue-500" />,
  Bot: <Bot className="w-6 h-6 text-blue-500" />,
};

export const Industries: React.FC<IndustriesProps> = ({ openQuoteModal }) => {
  return (
    <section id="industries" className="py-24 bg-[#0f1115] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Sectors We Serve
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tailored 3D Printing Solutions By Industry
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            We partner with leading engineers, automotive restorers, medical device innovators, and manufacturers across California and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="p-8 rounded-3xl bg-[#1a1d23] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#252a33] border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {industryIcons[ind.iconName] || <Cpu className="w-6 h-6 text-blue-500" />}
                  </div>
                  <button
                    type="button"
                    onClick={() => openQuoteModal(ind.name)}
                    className="p-2 rounded-xl bg-[#252a33] text-gray-400 hover:text-blue-400 hover:bg-[#2e3440] transition-colors border border-white/5"
                    title="Get Industry Quote"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {ind.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {ind.description}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">Common Applications:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.useCases.map((uc, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#252a33] text-[11px] font-medium text-gray-300 border border-white/5">
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500 uppercase">Popular Materials:</span>
                <span className="text-blue-400 font-bold">{ind.popularMaterials.slice(0, 2).join(', ')}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
