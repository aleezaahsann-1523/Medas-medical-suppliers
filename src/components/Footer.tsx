import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import {
  WHATSAPP_DISPLAY,
  BUSINESS_EMAIL,
  BUSINESS_ADDRESS,
  HOME_FEATURED_PRODUCTS,
  getWhatsAppUrl,
} from '../data/products';
import { NavSection } from './Header';

interface FooterProps {
  onNavigateHomeSection: (section: NavSection) => void;
  onNavigateAllProducts: () => void;
  onSelectProduct: (productId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHomeSection,
  onNavigateAllProducts,
  onSelectProduct,
}) => {
  const handleSectionClick = (e: React.MouseEvent, section: NavSection) => {
    e.preventDefault();
    onNavigateHomeSection(section);
  };

  const handleAllProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigateAllProducts();
  };

  return (
    <footer className="bg-[#0B1F3A] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Short Description */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleSectionClick(e, 'home')}
              className="inline-block focus-visible:outline-2 focus-visible:outline-[#3977C3] rounded"
            >
              <BrandLogo variant="light" />
            </a>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Medas Medical Suppliers imports and supplies diagnostic and veterinary ultrasound machines, including brand-new models from China, with competitive wholesale pricing and dedicated sales and service support.
            </p>
            <div className="pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with Medas Medical Suppliers on WhatsApp (${WHATSAPP_DISPLAY})`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#155EEF] hover:bg-[#3977C3] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-[#3977C3]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleSectionClick(e, 'home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSectionClick(e, 'about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={handleAllProductsClick}
                  className="hover:text-white transition-colors"
                >
                  All Products (17)
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleSectionClick(e, 'why-us')}
                  className="hover:text-white transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  onClick={(e) => handleSectionClick(e, 'faqs')}
                  className="hover:text-white transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSectionClick(e, 'contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Catalogue Products Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-[#3977C3]">
              Featured Ultrasound Models
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {HOME_FEATURED_PRODUCTS.slice(0, 5).map((prod) => (
                <li key={prod.id}>
                  <a
                    href={`?product=${prod.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectProduct(prod.id);
                    }}
                    className="hover:text-white transition-colors block truncate"
                  >
                    {prod.name}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="?page=products"
                  onClick={handleAllProductsClick}
                  className="text-[#3977C3] hover:text-white font-semibold transition-colors inline-flex items-center gap-1"
                >
                  View Full Catalogue →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-[#3977C3]">
              Contact Details
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#3977C3] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="tabular-nums">{WHATSAPP_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="flex items-start gap-2.5 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#3977C3] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{BUSINESS_EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3977C3] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{BUSINESS_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Medas Medical Suppliers. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp Support
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="?page=products"
              onClick={handleAllProductsClick}
              className="hover:text-white transition-colors"
            >
              Equipment Catalogue
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
