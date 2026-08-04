import React, { useState } from 'react';
import { FAQS } from '../data/companyData';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'turnaround', label: 'Turnaround' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'materials', label: 'Materials' },
    { id: 'files', label: 'File Formats' },
    { id: 'shipping', label: 'Shipping' },
    { id: 'general', label: 'General' },
  ];

  const filteredFaqs = FAQS.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-[#0f1115] relative border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Everything you need to know about our 3D printing capabilities, file submissions, materials, pricing, and shipping in Lake Elsinore, California.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search FAQs (e.g., STL files, turnaround, carbon fiber)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#1a1d23] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-blue-500 focus:outline-none shadow-lg"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-[#1a1d23] border border-white/5 text-gray-400 hover:text-white hover:bg-[#252a33]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-[#1a1d23] rounded-2xl border border-white/5 text-gray-400 text-sm">
              No matching questions found for "{searchQuery}". Call us directly at (949) 350-7410!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#1a1d23] border-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.1)]'
                      : 'bg-[#1a1d23] border-white/5 hover:border-white/10'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? '' : faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? 'text-blue-400' : 'text-gray-500'}`} />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-gray-300 text-sm leading-relaxed border-t border-white/5 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
