import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ActivePage } from '../types';
import { Layers, Phone, Mail, MapPin, ArrowRight, Shield, FileText } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  openQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, openQuoteModal }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleLinkClick = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f1115] text-gray-400 pt-16 pb-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 p-0.5 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <div className="w-full h-full bg-[#0f1115] rounded-[10px] flex items-center justify-center">
                  <Layers className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  LOOP<span className="text-blue-400">MOLD</span>
                </span>
                <p className="text-[10px] text-gray-400 tracking-wider uppercase font-medium">
                  Lake Elsinore, California
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Loop Mold specializes in high-precision 3D printing, rapid prototyping, functional parts, replacement components, and custom engineering manufacturing.
            </p>

            <div className="space-y-2 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-blue-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-blue-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['home', 'services', 'industries', 'materials', 'gallery', 'about', 'faq', 'contact'].map((pg) => (
                <li key={pg}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(pg as ActivePage)}
                    className="hover:text-blue-400 capitalize transition-colors flex items-center gap-1"
                  >
                    <span className="text-blue-500 font-bold">›</span>
                    <span>{pg}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-blue-400">
              Key Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>• Custom 3D Printing</li>
              <li>• Rapid Prototyping (24-48hr)</li>
              <li>• Functional Mechanical Parts</li>
              <li>• Product Development</li>
              <li>• DFM CAD Assistance</li>
              <li>• Reverse Engineering</li>
              <li>• Small Batch Production</li>
              <li>• Replacement Components</li>
            </ul>
          </div>

          {/* Call To Action Box */}
          <div className="lg:col-span-3 space-y-4 bg-[#1a1d23] p-6 rounded-2xl border border-white/5">
            <h4 className="text-sm font-bold text-white">Need a Fast Quote?</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Upload your 3D CAD files (.STL / .STEP) for an immediate technical evaluation and cost estimate.
            </p>
            <button
              type="button"
              onClick={openQuoteModal}
              className="w-full py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar & Developed By Attribution */}
        <div className="pt-8 flex flex-col items-center justify-center text-center space-y-4 text-xs text-gray-400">
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400 font-medium">
            <span>© {new Date().getFullYear()} Loop Mold. All rights reserved.</span>
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setModalType('terms')}
              className="hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </button>
          </div>

          {/* Developed By iWebNext */}
          <div className="text-gray-400 font-medium pt-2 border-t border-white/5 w-full max-w-xs text-center">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-bold">iWebNext</a>
          </div>

        </div>

      </div>

      {/* Privacy Policy / Terms Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#1a1d23] border border-white/10 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-4 relative text-xs sm:text-sm text-gray-300 shadow-2xl">
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-white capitalize">{modalType} Policy</h3>
            <p>
              Loop Mold values client confidentiality. All submitted CAD designs, drawings, models, and personal details are handled under strict non-disclosure guidelines.
            </p>
            <p>
              We do not share, sell, or distribute your intellectual property to third parties without prior written consent.
            </p>
            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider"
              >
                Understand & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
