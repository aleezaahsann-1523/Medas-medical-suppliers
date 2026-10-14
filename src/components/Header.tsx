
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { getWhatsAppUrl } from '../data/products';

export type NavSection =
  | 'home'
  | 'about'
  | 'products-section'
  | 'why-us'
  | 'faqs'
  | 'contact';

interface HeaderProps {
  currentRoute: 'home' | 'products' | 'product-detail';
  onNavigateHomeSection: (sectionId: NavSection) => void;
  onNavigateAllProducts: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigateHomeSection,
  onNavigateAllProducts,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent,
    target: NavSection | 'all-products'
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (target === 'all-products') {
      onNavigateAllProducts();
    } else {
      onNavigateHomeSection(target);
    }
  };

  const navItems: {
    label: string;
    target: NavSection | 'all-products';
    href: string;
  }[] = [
    { label: 'Home', target: 'home', href: '#home' },
    { label: 'About Us', target: 'about', href: '#about' },
    { label: 'Products', target: 'all-products', href: '#products' },
    { label: 'Why Choose Us', target: 'why-us', href: '#why-us' },
    { label: 'FAQs', target: 'faqs', href: '#faqs' },
    { label: 'Contact', target: 'contact', href: '#contact' },
  ];

  const whatsappContactUrl = getWhatsAppUrl(
    'Hello Medas Medical Suppliers, I would like to inquire about your ultrasound machines and wholesale pricing.'
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-8">
          {/* Zone 1: Left Official Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#155EEF] rounded"
            aria-label="Medas Medical Suppliers — Home"
          >
            <BrandLogo variant="dark" />
          </a>

          {/* Zone 2: Center Navigation Menu */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#111827]"
          >
            {navItems.map((item) => {
              const isProductsActive =
                item.target === 'all-products' &&
                (currentRoute === 'products' ||
                  currentRoute === 'product-detail');

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.target)}
                  className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#155EEF] ${
                    isProductsActive
                      ? 'border-[#155EEF] text-[#155EEF]'
                      : 'border-transparent text-[#111827] hover:text-[#155EEF] hover:border-[#155EEF]/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Right Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsappContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#155EEF] hover:bg-[#0B1F3A] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155EEF]"
            >
              Contact Us
            </a>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={
                mobileMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#0B1F3A] hover:bg-[#F4F7FB] focus-visible:outline-2 focus-visible:outline-[#155EEF] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-menu"
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 shadow-lg"
          >
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col space-y-1"
            >
              {navItems.map((item) => {
                const isProductsActive =
                  item.target === 'all-products' &&
                  (currentRoute === 'products' ||
                    currentRoute === 'product-detail');

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.target)}
                    className={`px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                      isProductsActive
                        ? 'bg-[#EAF3FF] text-[#155EEF]'
                        : 'text-[#111827] hover:bg-[#F4F7FB] hover:text-[#155EEF]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href={whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-[#155EEF] hover:bg-[#0B1F3A] rounded-lg transition-colors"
                >
                  Contact Us on WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Reserve space so the fixed header does not cover page content */}
      <div aria-hidden="true" className="h-16 sm:h-[72px]" />
    </>
  );
};
