import React, { useState } from 'react';
import { SERVICES } from '../data/companyData';
import { ServiceItem, ActivePage } from '../types';
import { Printer, Rocket, Cog, Lightbulb, PenTool, RefreshCw, Boxes, Wrench, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

interface ServicesProps {
  openQuoteModal: (serviceName?: string) => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  Printer: <Printer className="w-6 h-6 text-blue-500" />,
  Rocket: <Rocket className="w-6 h-6 text-blue-500" />,
  Cog: <Cog className="w-6 h-6 text-blue-500" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-blue-500" />,
  PenTool: <PenTool className="w-6 h-6 text-blue-500" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-blue-500" />,
  Boxes: <Boxes className="w-6 h-6 text-blue-500" />,
  Wrench: <Wrench className="w-6 h-6 text-blue-500" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-blue-500" />,
};

export const Services: React.FC<ServicesProps> = ({ openQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-[#0f1115] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Comprehensive Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our 3D Printing & Custom Fabrication Services
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            From single prototype validation to end-use small batch manufacturing, Loop Mold delivers high-precision solutions for engineers, inventors, and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-[#1a1d23] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#252a33] border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {serviceIcons[service.iconName] || <Layers className="w-6 h-6 text-blue-500" />}
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-[#252a33] text-gray-400 border border-white/5">
                    PRECISION
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">Key Benefits:</p>
                  <ul className="space-y-1.5">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <p className="text-[11px] font-mono text-gray-400">
                    <span className="text-gray-500">Industries:</span> {service.industriesServed.join(', ')}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => openQuoteModal(service.title)}
                  className="flex-1 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="px-3.5 py-2.5 rounded-md bg-[#252a33] hover:bg-[#2e3440] text-gray-300 hover:text-white border border-white/5 text-xs font-bold uppercase tracking-wider"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1a1d23] border border-white/10 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-[#252a33]"
            >
              ✕
            </button>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#252a33] border border-white/5 flex items-center justify-center">
                {serviceIcons[selectedService.iconName] || <Layers className="w-6 h-6 text-blue-500" />}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                <p className="text-xs text-blue-400 font-mono uppercase tracking-wider font-semibold">Loop Mold Engineering Service</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">{selectedService.detailedInfo}</p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">Key Service Advantages:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.benefits.map((b, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#252a33] border border-white/5 text-xs text-gray-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-md bg-[#252a33] text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  openQuoteModal(title);
                }}
                className="px-6 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                Quote This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
