import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, ChevronDown, Check, X, Search } from 'lucide-react';
import {
  PRODUCTS_CATALOGUE,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  BUSINESS_EMAIL,
  BUSINESS_ADDRESS,
  CONTACT_IMAGE,
  getWhatsAppUrl,
} from '../data/products';
import { ResilientImage } from './ResilientImage';

interface ContactSectionProps {
  preselectedProductIds: string[];
  onUpdateSelectedProducts: (ids: string[]) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedProductIds,
  onUpdateSelectedProducts,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productSearch, setProductSearch] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [whatsappReadyNote, setWhatsappReadyNote] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close multi-select dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleProductSelection = (productId: string) => {
    if (preselectedProductIds.includes(productId)) {
      onUpdateSelectedProducts(preselectedProductIds.filter((id) => id !== productId));
    } else {
      onUpdateSelectedProducts([...preselectedProductIds, productId]);
    }
  };

  const removeProductSelection = (productId: string) => {
    onUpdateSelectedProducts(preselectedProductIds.filter((id) => id !== productId));
  };

  const selectedProducts = PRODUCTS_CATALOGUE.filter((p) =>
    preselectedProductIds.includes(p.id)
  );

  const filteredDropdownProducts = PRODUCTS_CATALOGUE.filter((p) => {
    const q = productSearch.trim().toLowerCase();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.priceDisplay.toLowerCase().includes(q) ||
      String(p.catalogNumber).includes(q)
    );
  });

  const validateForm = () => {
    const nextErrors: { fullName?: string; phone?: string } = {};
    if (!fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!phone.trim()) {
      nextErrors.phone = 'Please enter a valid phone or WhatsApp number.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const productLines =
      selectedProducts.length > 0
        ? selectedProducts
            .map(
              (p) =>
                `• ${p.name} (Cat. #${String(p.catalogNumber).padStart(2, '0')} — ${p.priceDisplay})`
            )
            .join('\n')
        : '• General Ultrasound Equipment Inquiry';

    const lines = [
      'Hello Medas Medical Suppliers, I would like to submit an inquiry:',
      '',
      `Name: ${fullName.trim()}`,
      `Phone: ${phone.trim()}`,
      email.trim() ? `Email: ${email.trim()}` : null,
      '',
      'Products of Interest:',
      productLines,
      message.trim() ? `\nMessage / Requirements:\n${message.trim()}` : null,
    ].filter((line) => line !== null);

    const formattedMessage = lines.join('\n');
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    setWhatsappReadyNote(true);

    // Use an anchor element click for reliable navigation to WhatsApp in all environments
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F4F7FB] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Contact Information & Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <p className="text-xs font-bold tracking-wider text-[#155EEF] mb-2">
              Direct Sales & Service Inquiry
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              Let&apos;s Find the Right Ultrasound Machine for You
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Contact Medas Medical Suppliers to ask about ultrasound machine models, wholesale pricing, availability, technical specifications, and service requirements.
            </p>

            {/* Business Contact Details Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#F4F7FB] border border-slate-200/80 mb-8">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group focus-visible:outline-2 focus-visible:outline-[#155EEF] rounded"
              >
                <span className="w-9 h-9 rounded-lg bg-[#EAF3FF] text-[#155EEF] flex items-center justify-center shrink-0 group-hover:bg-[#155EEF] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium text-slate-500">Phone / WhatsApp</span>
                  <span className="block text-sm font-bold text-[#0B1F3A] group-hover:text-[#155EEF] transition-colors tabular-nums">
                    {WHATSAPP_DISPLAY}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="flex items-start gap-3 group focus-visible:outline-2 focus-visible:outline-[#155EEF] rounded"
              >
                <span className="w-9 h-9 rounded-lg bg-[#EAF3FF] text-[#155EEF] flex items-center justify-center shrink-0 group-hover:bg-[#155EEF] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium text-slate-500">Email</span>
                  <span className="block text-sm font-bold text-[#0B1F3A] group-hover:text-[#155EEF] transition-colors break-all">
                    {BUSINESS_EMAIL}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-[#EAF3FF] text-[#155EEF] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium text-slate-500">Location</span>
                  <span className="block text-xs sm:text-sm font-bold text-[#0B1F3A] leading-snug">
                    {BUSINESS_ADDRESS}
                  </span>
                </span>
              </div>
            </div>

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="inquiry-full-name"
                    className="block text-sm font-semibold text-[#0B1F3A] mb-1.5"
                  >
                    Full Name <span className="text-[#155EEF]">*</span>
                  </label>
                  <input
                    id="inquiry-full-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="Dr. Ahmed Khan / Clinic Name"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#155EEF] transition-colors ${
                      errors.fullName ? 'border-red-600' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs font-medium text-red-600" role="alert">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="inquiry-phone"
                    className="block text-sm font-semibold text-[#0B1F3A] mb-1.5"
                  >
                    Phone Number <span className="text-[#155EEF]">*</span>
                  </label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="+92 300 0000000"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#155EEF] transition-colors tabular-nums ${
                      errors.phone ? 'border-red-600' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs font-medium text-red-600" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Address (Optional) */}
              <div>
                <label
                  htmlFor="inquiry-email"
                  className="block text-sm font-semibold text-[#0B1F3A] mb-1.5"
                >
                  Email Address <span className="text-xs font-normal text-slate-500">(Optional)</span>
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@clinic-or-hospital.com"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#155EEF] transition-colors"
                />
              </div>

              {/* Products of Interest — Searchable Multi-Select Dropdown */}
              <div ref={dropdownRef} className="relative">
                <label
                  id="products-multiselect-label"
                  className="block text-sm font-semibold text-[#0B1F3A] mb-1.5"
                >
                  Products of Interest{' '}
                  <span className="text-xs font-normal text-slate-500">
                    (Select one or multiple models)
                  </span>
                </label>

                {/* Removable Selected Product Items */}
                {selectedProducts.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2.5">
                    {selectedProducts.map((item) => (
                      <span
                        key={item.id}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#EAF3FF] text-[#0B1F3A] border border-[#3977C3]/30"
                      >
                        <span>
                          #{String(item.catalogNumber).padStart(2, '0')} {item.name} (
                          {item.priceDisplay})
                        </span>
                        <button
                          type="button"
                          onClick={() => removeProductSelection(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="p-0.5 rounded hover:bg-[#155EEF] hover:text-white text-[#0B1F3A] transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </span>
                    ))}
                    {selectedProducts.length > 1 && (
                      <button
                        type="button"
                        onClick={() => onUpdateSelectedProducts([])}
                        className="text-xs font-semibold text-[#155EEF] hover:underline px-1.5 py-1"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                )}

                {/* Selector Trigger Button */}
                <button
                  type="button"
                  aria-labelledby="products-multiselect-label"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="listbox"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-left flex items-center justify-between gap-2 focus:outline-none focus:ring-2 focus:ring-[#155EEF] hover:border-slate-400 transition-colors"
                >
                  <span
                    className={
                      selectedProducts.length === 0
                        ? 'text-slate-400'
                        : 'text-[#0B1F3A] font-semibold'
                    }
                  >
                    {selectedProducts.length === 0
                      ? 'Select Products'
                      : `${selectedProducts.length} ${
                          selectedProducts.length === 1 ? 'Product' : 'Products'
                        } Selected`}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-150 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown Panel */}
                {dropdownOpen && (
                  <div className="absolute z-30 mt-1.5 w-full bg-white border border-slate-300 rounded-xl shadow-xl overflow-hidden">
                    {/* Search input inside dropdown */}
                    <div className="p-2.5 border-b border-slate-200 bg-[#F4F7FB]">
                      <div className="relative">
                        <Search
                          className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                          aria-hidden="true"
                        />
                        <input
                          type="text"
                          value={productSearch}
                          onChange={(e) => setProductSearch(e.target.value)}
                          placeholder="Search all 17 catalogue models..."
                          aria-label="Filter products by name"
                          className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                        />
                      </div>
                    </div>

                    {/* Product Options List */}
                    <ul
                      role="listbox"
                      aria-multiselectable="true"
                      className="max-h-64 overflow-y-auto divide-y divide-slate-100"
                    >
                      {filteredDropdownProducts.length === 0 ? (
                        <li className="px-4 py-6 text-center text-sm text-slate-500">
                          No matching ultrasound models found.
                        </li>
                      ) : (
                        filteredDropdownProducts.map((prod) => {
                          const isSelected = preselectedProductIds.includes(prod.id);
                          return (
                            <li
                              key={prod.id}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => toggleProductSelection(prod.id)}
                              className={`px-3.5 py-2.5 text-sm cursor-pointer flex items-center justify-between gap-3 transition-colors ${
                                isSelected
                                  ? 'bg-[#EAF3FF] text-[#0B1F3A]'
                                  : 'hover:bg-[#F4F7FB] text-[#111827]'
                              }`}
                            >
                              <div className="min-w-0">
                                <span className="text-xs font-mono text-slate-500 mr-2 tabular-nums">
                                  #{String(prod.catalogNumber).padStart(2, '0')}
                                </span>
                                <span className="font-semibold text-[#0B1F3A]">{prod.name}</span>
                                <span className="block sm:inline sm:ml-2 text-xs text-slate-500 tabular-nums">
                                  — {prod.priceDisplay}
                                </span>
                              </div>
                              <span
                                className={`w-5 h-5 rounded flex items-center justify-center border shrink-0 transition-colors ${
                                  isSelected
                                    ? 'bg-[#155EEF] border-[#155EEF] text-white'
                                    : 'border-slate-300 bg-white'
                                }`}
                                aria-hidden="true"
                              >
                                {isSelected && <Check className="w-3.5 h-3.5" />}
                              </span>
                            </li>
                          );
                        })
                      )}
                    </ul>

                    <div className="px-3.5 py-2 bg-[#F4F7FB] border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                      <span className="tabular-nums">
                        Showing {filteredDropdownProducts.length} of {PRODUCTS_CATALOGUE.length} models
                      </span>
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(false)}
                        className="font-semibold text-[#155EEF] hover:underline"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Message / Requirements */}
              <div>
                <label
                  htmlFor="inquiry-message"
                  className="block text-sm font-semibold text-[#0B1F3A] mb-1.5"
                >
                  Message / Requirements{' '}
                  <span className="text-xs font-normal text-slate-500">(Optional)</span>
                </label>
                <textarea
                  id="inquiry-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share any specific questions about pricing, probes, wholesale quantities, or service support..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#155EEF] transition-colors"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#155EEF] hover:bg-[#0B1F3A] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155EEF]"
                >
                  Send Inquiry on WhatsApp
                </button>
                <p className="mt-2.5 text-xs text-slate-500">
                  Clicking above opens WhatsApp ({WHATSAPP_DISPLAY}) with your inquiry details prefilled so you can review and send your message directly to our team.
                </p>
                {whatsappReadyNote && (
                  <p className="mt-2 text-xs font-semibold text-[#155EEF]" role="status">
                    WhatsApp has been opened in a new tab with your prefilled inquiry. Please press Send in WhatsApp to complete your message.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Right Column: Balanced Medical Equipment Visual */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#0B1F3A] rounded-2xl overflow-hidden border border-[#0B1F3A] text-white">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:flex-1 w-full min-h-[260px]">
              <ResilientImage
                src={CONTACT_IMAGE}
                alt="Diagnostic ultrasound system supplied by Medas Medical Suppliers in Lahore"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/25 to-transparent" />
            </div>

            <div className="p-6 sm:p-8 bg-[#0B1F3A]">
              <p className="text-xs font-bold tracking-wider text-[#3977C3] mb-2">
                Medas Medical Suppliers — Lahore
              </p>
              <h3 className="text-xl font-bold text-white mb-2">
                Wholesale Ultrasound Supply & Support
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Whether you are equipping a private clinic, diagnostic center, or veterinary practice, we assist you in comparing available models and wholesale pricing across our catalogue.
              </p>
              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300">
                <span>Iqbal Avenue Housing Society, Lahore</span>
                <span className="tabular-nums font-semibold text-white">{WHATSAPP_DISPLAY}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
