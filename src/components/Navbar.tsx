import React, { useState, useEffect } from 'react';
import { ActivePage } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Menu, X, Layers, Cpu, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  openQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, openQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: ActivePage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'materials', label: 'Materials' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#14171d]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-[#14171d]/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center rotate-45 shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:bg-blue-500 transition-all">
              <div className="w-5 h-5 border-2 border-white -rotate-45 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-2xl tracking-tighter text-white">
                  LOOP<span className="text-blue-500 font-black italic">MOLD</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold">
                  3D
                </span>
              </div>
              <p className="text-[10px] text-gray-400 tracking-wider uppercase font-medium">
                Lake Elsinore, CA
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1a1d23] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] font-bold'
                      : 'text-gray-400 hover:text-blue-400 hover:bg-[#252a33]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-gray-300 hover:text-blue-400 hover:bg-[#252a33] transition-all border border-transparent hover:border-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              type="button"
              onClick={openQuoteModal}
              className="px-6 py-2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-1.5 active:scale-95"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={openQuoteModal}
              className="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/40 text-xs font-bold"
            >
              Quote
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#1a1d23] border border-white/10 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-blue-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#14171d]/95 border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-2 backdrop-blur-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-bold'
                      : 'bg-[#1a1d23] text-gray-300 border border-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1a1d23] border border-white/10 text-xs font-semibold text-blue-400"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: {COMPANY_INFO.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full py-3 rounded-md bg-blue-600 text-white font-bold text-xs uppercase tracking-wider text-center shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Get Instant Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
