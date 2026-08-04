import React, { useState } from 'react';
import { ActivePage } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { Materials } from './components/Materials';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { QuoteCalculator } from './components/QuoteCalculator';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { X } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Custom 3D Printing');

  const openQuoteModal = (serviceOrProjectName?: string) => {
    if (serviceOrProjectName) {
      setSelectedServiceForQuote(serviceOrProjectName);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Sticky Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        openQuoteModal={() => openQuoteModal()}
      />

      {/* Main View Content */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <>
            <Hero setActivePage={setActivePage} openQuoteModal={() => openQuoteModal()} />
            <Features />
            <Services openQuoteModal={openQuoteModal} />
            <Industries openQuoteModal={openQuoteModal} />
            <Materials openQuoteModal={openQuoteModal} />
            <Gallery openQuoteModal={openQuoteModal} />
            <About />
            <Testimonials />
            <QuoteCalculator initialService={selectedServiceForQuote} />
            <FAQ />
            <Contact />
          </>
        )}

        {activePage === 'services' && (
          <div className="pt-20">
            <Services openQuoteModal={openQuoteModal} />
            <Features />
            <QuoteCalculator initialService={selectedServiceForQuote} />
          </div>
        )}

        {activePage === 'industries' && (
          <div className="pt-20">
            <Industries openQuoteModal={openQuoteModal} />
            <Gallery openQuoteModal={openQuoteModal} />
          </div>
        )}

        {activePage === 'materials' && (
          <div className="pt-20">
            <Materials openQuoteModal={openQuoteModal} />
            <QuoteCalculator initialService={selectedServiceForQuote} />
          </div>
        )}

        {activePage === 'gallery' && (
          <div className="pt-20">
            <Gallery openQuoteModal={openQuoteModal} />
          </div>
        )}

        {activePage === 'about' && (
          <div className="pt-20">
            <About />
            <Testimonials />
            <Features />
          </div>
        )}

        {activePage === 'faq' && (
          <div className="pt-20">
            <FAQ />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="pt-20">
            <Contact />
          </div>
        )}

        {activePage === 'quote' && (
          <div className="pt-20">
            <QuoteCalculator initialService={selectedServiceForQuote} />
          </div>
        )}
      </main>

      {/* Floating AI Chatbot */}
      <Chatbot openQuoteModal={() => openQuoteModal()} />

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* Footer */}
      <Footer setActivePage={setActivePage} openQuoteModal={() => openQuoteModal()} />

      {/* Quote Request Modal Popup */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
          <div className="relative w-full max-w-4xl my-8 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
            <button
              type="button"
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <QuoteCalculator
              initialService={selectedServiceForQuote}
              isModal={true}
              onClose={() => setQuoteModalOpen(false)}
            />
          </div>
        </div>
      )}

    </div>
  );
}
