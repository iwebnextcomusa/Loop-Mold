import React, { useState } from 'react';
import { QuoteFormData } from '../types';
import { SERVICES, MATERIALS, COMPANY_INFO } from '../data/companyData';
import { Upload, Calculator, FileCheck, CheckCircle2, Send, AlertCircle, ArrowRight, Layers, Clock, DollarSign } from 'lucide-react';

interface QuoteCalculatorProps {
  initialService?: string;
  initialMaterial?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  initialService = 'Custom 3D Printing',
  initialMaterial = 'PLA (Polylactic Acid)',
  isModal = false,
  onClose,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceNeeded: initialService,
    materialPreference: initialMaterial,
    cadFile: null,
    projectDescription: '',
    quantity: 1,
    infillDensity: 20,
    deadline: 'Standard (24-48 Hours)',
  });

  const [dragActive, setDragActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState<{ min: number; max: number } | null>({ min: 25, max: 45 });

  // Material cost multipliers
  const materialMultipliers: Record<string, number> = {
    'PLA': 1.0,
    'PETG': 1.25,
    'ABS': 1.35,
    'TPU': 1.6,
    'Nylon': 2.1,
    'Carbon Fiber': 2.8,
    'Resin': 2.2,
    'Polycarbonate': 3.0,
  };

  const calculateEstimate = (matName: string, qty: number, infill: number, speed: string) => {
    let base = 25; // base setup and file inspection
    let multiplier = 1.2;

    Object.keys(materialMultipliers).forEach((key) => {
      if (matName.includes(key)) {
        multiplier = materialMultipliers[key];
      }
    });

    const infillFactor = 0.8 + (infill / 100) * 0.6;
    const speedFactor = speed.includes('Rush') || speed.includes('Same') ? 1.5 : 1.0;

    const singleCost = base * multiplier * infillFactor * speedFactor;
    const totalMin = Math.round(singleCost * qty * 0.9);
    const totalMax = Math.round(singleCost * qty * 1.2);

    setEstimatedPrice({ min: totalMin, max: totalMax });
  };

  const handleInputChange = (field: keyof QuoteFormData, value: any) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);

    if (field === 'materialPreference' || field === 'quantity' || field === 'infillDensity' || field === 'deadline') {
      calculateEstimate(
        field === 'materialPreference' ? value : formData.materialPreference,
        field === 'quantity' ? Number(value) : formData.quantity,
        field === 'infillDensity' ? Number(value) : formData.infillDensity,
        field === 'deadline' ? value : formData.deadline
      );
    }
  };

  const handleFileUpload = (file: File) => {
    handleInputChange('cadFile', file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`relative ${isModal ? '' : 'py-20 bg-[#0f1115] border-b border-white/5'}`}>
      <div className={`${isModal ? 'p-6 sm:p-8' : 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        {/* Header */}
        {!isModal && (
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
              Instant 3D Printing Quote
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Request Your Custom Prototyping Quote
            </h2>
            <p className="text-gray-400 text-base">
              Upload your CAD file (.STL, .STEP, .OBJ) or describe your project. Our California engineering team will review your specs and provide a firm quote within hours.
            </p>
          </div>
        )}

        <div className="bg-[#1a1d23] border border-white/5 rounded-3xl shadow-2xl overflow-hidden">
          
          {submitted ? (
            <div className="p-10 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Quote Request Received!</h3>
              <p className="text-gray-300 max-w-lg mx-auto text-sm leading-relaxed">
                Thank you, <strong>{formData.name || 'Valued Customer'}</strong>! We have logged your project specifications for <strong>{formData.serviceNeeded}</strong>. Our engineers in Lake Elsinore, CA are reviewing your details and will contact you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> shortly.
              </p>

              <div className="p-5 rounded-2xl bg-[#252a33] border border-white/5 max-w-md mx-auto text-left text-xs space-y-2 font-mono">
                <div className="text-blue-400 font-bold border-b border-white/5 pb-2 uppercase tracking-wider">PROJECT REFERENCE SUMMARY</div>
                <div className="flex justify-between"><span className="text-gray-400">Selected Material:</span> <span className="text-white">{formData.materialPreference}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Quantity:</span> <span className="text-white">{formData.quantity} unit(s)</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Target Timeline:</span> <span className="text-white">{formData.deadline}</span></div>
                {formData.cadFile && (
                  <div className="flex justify-between"><span className="text-gray-400">CAD File Attached:</span> <span className="text-blue-300">{formData.cadFile.name}</span></div>
                )}
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    if (onClose) onClose();
                  }}
                  className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                >
                  {isModal ? 'Close Window' : 'Submit Another Quote'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              
              {/* Live Cost Estimator Banner */}
              <div className="p-5 rounded-2xl bg-[#252a33] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Instant Cost Range Estimator</h4>
                    <p className="text-xs text-gray-400">Calculated based on material, quantity, and infill %</p>
                  </div>
                </div>

                <div className="text-right sm:text-right w-full sm:w-auto">
                  <span className="text-xs font-mono text-gray-400 block uppercase tracking-wider">ESTIMATED PRODUCTION COST</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">
                    ${estimatedPrice?.min} – ${estimatedPrice?.max}
                  </span>
                  <span className="text-[10px] text-gray-500 block">Exact quote verified upon CAD review</span>
                </div>
              </div>

              {/* Grid 1: Customer Info */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                  <span>1. Contact & Business Details</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Vance Dynamics or Private"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (949) 350-7410"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Grid 2: Service & Material Requirements */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                  <span>2. Technical Specifications</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Service Needed *</label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => handleInputChange('serviceNeeded', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Material Preference *</label>
                    <select
                      value={formData.materialPreference}
                      onChange={(e) => handleInputChange('materialPreference', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none"
                    >
                      {MATERIALS.map((m) => (
                        <option key={m.id} value={m.name}>{m.name} ({m.category})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Quantity Required ({formData.quantity} unit{formData.quantity > 1 ? 's' : ''})
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="1000"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange('quantity', Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Infill Density: <strong className="text-blue-400">{formData.infillDensity}%</strong>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      step="5"
                      value={formData.infillDensity}
                      onChange={(e) => handleInputChange('infillDensity', parseInt(e.target.value))}
                      className="w-full accent-blue-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                      <span>10% (Light)</span>
                      <span>50% (Rigid)</span>
                      <span>100% (Solid)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid 3: File Dropzone */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                  <span>3. Upload CAD File (.STL, .STEP, .OBJ)</span>
                </h3>

                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
                    dragActive
                      ? 'border-blue-500 bg-blue-600/10'
                      : formData.cadFile
                      ? 'border-emerald-500/60 bg-emerald-950/10'
                      : 'border-white/10 bg-[#0f1115] hover:border-white/20'
                  }`}
                >
                  {formData.cadFile ? (
                    <div className="flex items-center justify-between p-3 bg-[#252a33] rounded-xl border border-emerald-500/30 text-left">
                      <div className="flex items-center gap-3">
                        <FileCheck className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-white">{formData.cadFile.name}</p>
                          <p className="text-[10px] text-gray-400 font-mono">
                            {(formData.cadFile.size / 1024).toFixed(1)} KB • Ready for geometry analysis
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleInputChange('cadFile', null)}
                        className="text-xs text-rose-400 hover:text-rose-300 font-semibold px-2 py-1 rounded bg-[#1a1d23]"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 mx-auto flex items-center justify-center">
                        <Upload className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-white">Drag & drop your 3D CAD file here</p>
                        <p className="text-[11px] text-gray-400">Supports STL, STEP, STP, OBJ, IGES, 3MF up to 50MB</p>
                      </div>
                      <label className="inline-block px-4 py-2 rounded-xl bg-[#252a33] hover:bg-[#2e3440] text-xs font-semibold text-blue-300 cursor-pointer border border-white/10">
                        <span>Browse Files</span>
                        <input
                          type="file"
                          accept=".stl,.step,.stp,.obj,.iges,.3mf"
                          className="hidden"
                          onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Grid 4: Project Notes & Timeline */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Desired Production Deadline</label>
                    <select
                      value={formData.deadline}
                      onChange={(e) => handleInputChange('deadline', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none"
                    >
                      <option value="Standard (24-48 Hours)">Standard (24-48 Hours)</option>
                      <option value="Same Day Expedited (Rush)">Same Day Expedited (Rush)</option>
                      <option value="Flexible (3-5 Days)">Flexible (3-5 Days)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Project Description & Special Specs</label>
                    <textarea
                      rows={2}
                      placeholder="Mention dimensional tolerances, threaded inserts, color preferences, or environmental conditions..."
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0f1115] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Strict NDA Confidentiality Guaranteed</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {onClose && (
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-3 rounded-md bg-[#252a33] hover:bg-[#2e3440] text-gray-300 font-bold text-xs uppercase tracking-wider"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Quote Request</span>
                  </button>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
