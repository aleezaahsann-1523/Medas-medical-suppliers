import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { getWhatsAppUrl } from '../data/products';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What types of ultrasound machines do you offer?',
    answer:
      'We supply a comprehensive range of diagnostic ultrasound machines from our catalogue, including clinical console systems (such as the Volta VSonic series, Apollo 9 Plus, and GE Logic 100 Pro), portable notebook ultrasound units (Volta Notepad, Volta SonoBook, Yonkar 7, Orial Note Book, and SonoNote Book), and specialized veterinary ultrasound systems (such as the Youki D8 Wireless Vet Colour, Emperor N2 Vet, and Q 10 Vet series).',
  },
  {
    question: 'Do you supply brand-new ultrasound machines from China?',
    answer:
      'Yes. Medas Medical Suppliers imports and supplies ultrasound machines, including brand-new digital and portable ultrasound models sourced directly from manufacturers and suppliers in China.',
  },
  {
    question: 'Do you offer wholesale pricing?',
    answer:
      'Yes. We specialize in competitive wholesale ultrasound machine sales for hospitals, diagnostic clinics, veterinary practices, and medical equipment buyers across Pakistan.',
  },
  {
    question: 'How can I find out the price of a machine?',
    answer:
      'Many of our machines have their PKR prices listed directly in our online catalogue. For models listed as "Contact for Price" or for bulk wholesale quotations, you can message us directly on WhatsApp at +92 321 4500997 or submit an inquiry through our contact form.',
  },
  {
    question: 'Can I request product specifications?',
    answer:
      'Yes. You can view verified catalogue details on each product page and contact our team via WhatsApp or email to request complete technical specifications, compatible transducer options, and configuration details for any model.',
  },
  {
    question: 'Do you provide ultrasound machine sales and services?',
    answer:
      'Yes. In addition to importing and wholesale supply, Medas Medical Suppliers supports customers with ultrasound machine sales, product selection guidance, and service inquiries.',
  },
  {
    question: 'How can I inquire about multiple products?',
    answer:
      'Use the "Products of Interest" multi-select dropdown in our Contact Us section to select as many ultrasound machines from our 17-item catalogue as you would like to compare. When you submit the form, all selected models will be included in your prefilled WhatsApp inquiry.',
  },
  {
    question: 'How can I contact Medas Medical Suppliers?',
    answer:
      'You can reach us directly on WhatsApp or phone at +92 321 4500997, email us at medasmedicalsuppliers@gmail.com, or visit our office at Iqbal Avenue Housing Society, Lahore, Pakistan.',
  },
];

export const FAQSection: React.FC = () => {
  // First question open by default (index 0); only one question open at a time
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const whatsappHelpUrl = getWhatsAppUrl(
    'Hello Medas Medical Suppliers, I have a question regarding your ultrasound machines and pricing.'
  );

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading, Description, Contact Us Link */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p className="text-xs font-bold tracking-wider text-[#155EEF] mb-2">
              Need Information?
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Find clear answers to common questions about our ultrasound machine catalogue, wholesale pricing in PKR, imported models from China, and how to submit single or multi-product inquiries.
            </p>
            <div className="p-5 rounded-xl bg-[#F4F7FB] border border-slate-200">
              <p className="text-sm font-semibold text-[#0B1F3A] mb-1">
                Need personal assistance with model selection?
              </p>
              <p className="text-sm text-slate-600 mb-4">
                Speak directly with our team regarding specifications, availability, or service requirements.
              </p>
              <a
                href={whatsappHelpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-[#155EEF] hover:bg-[#0B1F3A] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155EEF]"
              >
                Contact Us on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Vertical Accordion */}
          <div className="lg:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const contentId = `faq-answer-${idx}`;
              const buttonId = `faq-question-${idx}`;

              return (
                <div key={item.question} className="py-1">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => toggleItem(idx)}
                      className="w-full py-4 sm:py-5 flex items-start justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155EEF] rounded group"
                    >
                      <span
                        className={`text-base sm:text-lg font-bold transition-colors ${
                          isOpen ? 'text-[#155EEF]' : 'text-[#0B1F3A] group-hover:text-[#155EEF]'
                        }`}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-md shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#155EEF] text-white'
                            : 'bg-[#F4F7FB] text-[#0B1F3A] group-hover:bg-[#EAF3FF] group-hover:text-[#155EEF]'
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className={`overflow-hidden transition-opacity duration-150 ${
                      isOpen ? ' pb-5 opacity-100' : 'opacity-0 h-0'
                    }`}
                  >
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed pr-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
