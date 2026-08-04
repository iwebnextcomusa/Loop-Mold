import React from 'react';
import { FEATURES } from '../data/companyData';
import { Target, Zap, Layers, Cpu, DollarSign, MapPin } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-6 h-6 text-blue-500" />,
  Zap: <Zap className="w-6 h-6 text-blue-500" />,
  Layers: <Layers className="w-6 h-6 text-blue-500" />,
  Cpu: <Cpu className="w-6 h-6 text-blue-500" />,
  DollarSign: <DollarSign className="w-6 h-6 text-blue-500" />,
  MapPin: <MapPin className="w-6 h-6 text-blue-500" />,
};

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f1115] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Why Choose Loop Mold
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Precision & Speed You Can Rely On
          </h2>
          <p className="text-gray-400 text-base">
            We combine state-of-the-art additive manufacturing hardware, engineering expertise, and dedicated customer service to bring your designs to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group relative p-8 rounded-3xl bg-[#1a1d23] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#252a33] border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {iconMap[feature.icon] || <Zap className="w-6 h-6 text-blue-500" />}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-blue-400">
                <span>VERIFIED ADVANTAGE</span>
                <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-ping" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
