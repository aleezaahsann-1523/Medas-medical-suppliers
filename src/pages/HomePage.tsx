import React from 'react';
import { Banknote, Globe, Wrench, UserCheck } from 'lucide-react';
import {
  HERO_IMAGE,
  ABOUT_IMAGE,
  HOME_FEATURED_PRODUCTS,
  getWhatsAppUrl,
} from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ResilientImage } from '../components/ResilientImage';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onNavigateAllProducts: () => void;
  onSelectProduct: (productId: string) => void;
  preselectedProductIds: string[];
  onUpdateSelectedProducts: (ids: string[]) => void;
}

const WHY_CHOOSE_US_CARDS = [
  {
    icon: Banknote,
    title: 'Competitive Wholesale Pricing',
    description: 'We offer wholesale-focused pricing for customers exploring ultrasound equipment.',
  },
  {
    icon: Globe,
    title: 'Imported Ultrasound Equipment',
    description:
      'Explore ultrasound machines sourced through international suppliers, including brand-new models from China.',
  },
  {
    icon: Wrench,
    title: 'Sales and Service Support',
    description:
      'Contact our team regarding machine purchases, product details, and service requirements.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Product Assistance',
    description:
      'Get help comparing available models and identifying equipment suitable for your requirements.',
  },
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateAllProducts,
  onSelectProduct,
  preselectedProductIds,
  onUpdateSelectedProducts,
}) => {
  const whatsappUrl = getWhatsAppUrl(
    'Hello Medas Medical Suppliers, I would like to inquire about your ultrasound machines and wholesale pricing.'
  );

  return (
    <main>
      {/* 1. HERO SECTION — Full-Width Background Image with Measured Deep Navy Scrim */}
      <section
        id="home"
        className="relative w-full min-h-[520px] sm:min-h-[600px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-[#0B1F3A]"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Modern diagnostic ultrasound machine in a clinical examination room"
        />
        {/* Semi-transparent deep navy/black overlay ensuring strong contrast while keeping background visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/80 via-[#0B1F3A]/75 to-[#0B1F3A]/88" />

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center text-white">
          <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-[#EAF3FF] mb-4">
            MEDAS MEDICAL SUPPLIERS
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Reliable Ultrasound Machines at Competitive Wholesale Prices
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-9">
            We import and supply ultrasound machines, including brand-new models from China, with competitive wholesale pricing and support for product selection, sales, and service inquiries.
          </p>

          {/* Exactly Two Primary Hero Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onNavigateAllProducts}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-[#155EEF] hover:bg-[#3977C3] rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View All Products
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white hover:text-[#0B1F3A] border border-white/35 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION — Text Left, Image Right */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-bold tracking-wider text-[#155EEF]">
                About Medas Medical Suppliers
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
                Medical Equipment Supply You Can Rely On
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Based in Iqbal Avenue Housing Society, Lahore, Medas Medical Suppliers is a dedicated medical equipment supplier focused on diagnostic and veterinary ultrasound machines. We work directly with clinics, diagnostic centers, hospitals, and veterinary professionals looking for practical imaging solutions.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Our core specialization includes importing ultrasound machines and supplying brand-new ultrasound systems from China at competitive wholesale prices. From stationary clinical consoles like the Volta VSonic and Apollo 9 Plus to portable notebook scanners and specialized wireless veterinary units, our catalogue covers diverse clinical needs.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Beyond wholesale equipment supply, we assist customers with model comparisons, technical specification inquiries, and ongoing ultrasound machine sales and service support.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onNavigateAllProducts}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#155EEF] hover:bg-[#0B1F3A] rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155EEF]"
                >
                  Explore Products
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-[#0B1F3A] bg-[#F4F7FB] hover:bg-[#EAF3FF] hover:text-[#155EEF] border border-slate-200 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155EEF]"
                >
                  Contact Us on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-slate-200 bg-[#F4F7FB]">
                <ResilientImage
                  src={ABOUT_IMAGE}
                  alt="Clinical console and portable notebook ultrasound systems at Medas Medical Suppliers"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOMEPAGE PRODUCTS SECTION — Exactly Nine Products */}
      <section id="products-section" className="py-16 sm:py-24 bg-[#F4F7FB] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading & Description */}
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14">
            <p className="text-xs font-bold tracking-wider text-[#155EEF] mb-2">
              Official Equipment Catalogue
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] tracking-tight mb-4">
              Explore Our Ultrasound Machines
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Browse our catalogue of ultrasound machines and contact us for pricing, product specifications, and availability.
            </p>
          </div>

          {/* 9-Product Grid: 3 columns desktop, 2 columns tablet, 1 column mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {HOME_FEATURED_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>

          {/* Centered View All Products Button */}
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={onNavigateAllProducts}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-[#155EEF] hover:bg-[#0B1F3A] rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155EEF]"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION — Four Factual Cards */}
      <section id="why-us" className="py-16 sm:py-24 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14">
            <p className="text-xs font-bold tracking-wider text-[#3977C3] mb-2">
              Why Work With Medas Medical Suppliers
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              Focused on Wholesale Ultrasound Supply & Support
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              We provide straightforward access to imported clinical, portable, and veterinary ultrasound systems with direct support for your procurement and service needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US_CARDS.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-[#3977C3]/60 transition-colors"
                >
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-[#155EEF] text-white flex items-center justify-center mb-5">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION — Left Content, Right Accordion */}
      <FAQSection />

      {/* 6. CONTACT US SECTION — Information Left, Image Right */}
      <ContactSection
        preselectedProductIds={preselectedProductIds}
        onUpdateSelectedProducts={onUpdateSelectedProducts}
      />
    </main>
  );
};
