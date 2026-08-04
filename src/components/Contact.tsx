import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0f1115] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact Loop Mold Engineering
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Have a question about a 3D printing project, CAD modeling, or material selection? Contact our Lake Elsinore team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-[#1a1d23] border border-white/5 space-y-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-white border-b border-white/5 pb-4">
                Direct Contact Information
              </h3>

              <div className="space-y-5">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#252a33] border border-white/5 hover:border-blue-500/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 block font-bold">Call or Text</span>
                    <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{COMPANY_INFO.phone}</span>
                    <p className="text-xs text-gray-400">Direct phone support for engineering inquiries</p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#252a33] border border-white/5 hover:border-blue-500/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 block font-bold">Email Quote Desk</span>
                    <span className="text-base font-bold text-white group-hover:text-blue-400 transition-colors break-all">{COMPANY_INFO.email}</span>
                    <p className="text-xs text-gray-400">Send CAD files or project specifications</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#252a33] border border-white/5">
                  <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 block font-bold">Facility Location</span>
                    <span className="text-base font-bold text-white">{COMPANY_INFO.location}</span>
                    <p className="text-xs text-gray-400">Riverside County, Southern California, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#252a33] border border-white/5">
                  <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 block font-bold">Operating Hours</span>
                    <span className="text-sm font-bold text-white">{COMPANY_INFO.hours}</span>
                    <p className="text-xs text-gray-400">After-hours emergency printing upon request</p>
                  </div>
                </div>
              </div>

              {/* Social Placeholders */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <span className="text-xs font-mono uppercase text-gray-400 font-bold block">Connect With Us:</span>
                <div className="flex gap-2">
                  {['LinkedIn', 'Instagram', 'YouTube', 'Facebook'].map((soc) => (
                    <a
                      key={soc}
                      href="#contact"
                      className="px-3 py-1.5 rounded-lg bg-[#252a33] border border-white/5 hover:border-blue-500/30 text-xs font-medium text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {soc}
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Form & Interactive Map Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Form */}
            <div className="p-8 rounded-3xl bg-[#1a1d23] border border-white/5 shadow-2xl">
              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                  <p className="text-gray-300 text-sm">
                    Thank you for reaching out to Loop Mold. An engineer will review your message and reply via email or phone within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-xs text-white font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-4">Send Us a Quick Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(949) 350-7410"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Your Message or Inquiry *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can Loop Mold help with your 3D printing or prototyping project?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-white/5 bg-[#1a1d23] h-64 relative shadow-2xl">
              <iframe
                title="Loop Mold Lake Elsinore Location Map"
                src="https://maps.google.com/maps?q=Lake%20Elsinore,%20California&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale opacity-70 border-0"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#0f1115]/90 border border-white/10 px-3 py-1.5 rounded-xl text-xs font-mono text-blue-400 font-bold">
                📍 Lake Elsinore, CA 92530
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
