import React from 'react';
import { COMPANY_INFO, HERO_IMAGE } from '../data/companyData';
import { MapPin, ShieldCheck, Zap, Award, Users, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0f1115] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#1a1d23] shadow-2xl group">
              <img
                src={HERO_IMAGE}
                alt="Loop Mold 3D Printing Facility in Lake Elsinore, California"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent" />

              {/* Location Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1a1d23]/90 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Lake Elsinore, California</h4>
                    <p className="text-xs text-gray-300">Serving Riverside County & Southern California</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
              About Loop Mold
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Trusted Local Partner for Precision 3D Printing & Custom Mold Prototyping
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Founded in <strong>Lake Elsinore, California</strong>, <strong>Loop Mold</strong> was created to bridge the gap between initial digital 3D CAD design and physical high-performance hardware.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Whether you are an aerospace engineer validating flight bracket tolerances, an automotive restoration expert recreating an obsolete dash clip, or an entrepreneur launching a new consumer invention, Loop Mold provides hands-on engineering guidance, premium polymer stock, and rapid turnaround times.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#1a1d23] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  <span>Uncompromising Precision</span>
                </div>
                <p className="text-gray-400 text-xs">
                  Every part is measured with digital calipers and inspected for layer adhesion and dimensional tolerance.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#1a1d23] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-wide">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span>Rapid 24-48hr Delivery</span>
                </div>
                <p className="text-gray-400 text-xs">
                  We operate a farm of calibrated additive manufacturing systems to meet aggressive project deadlines.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#1a1d23] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-wide">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>Local California Support</span>
                </div>
                <p className="text-gray-400 text-xs">
                  Direct phone and email consultation with engineers based right here in Lake Elsinore, CA.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#1a1d23] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-wide">
                  <Award className="w-4 h-4 text-blue-500" />
                  <span>Rigorous Quality Control</span>
                </div>
                <p className="text-gray-400 text-xs">
                  Clean support removal, post-curing, and surface prep ensure your part is ready for immediate deployment.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-6 text-xs text-gray-300 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span>Phone: {COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span>Email: {COMPANY_INFO.email}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
