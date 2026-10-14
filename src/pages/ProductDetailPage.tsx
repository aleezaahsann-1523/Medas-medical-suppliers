import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, FileText } from 'lucide-react';
import {
  Product,
  PRODUCTS_CATALOGUE,
  WHATSAPP_DISPLAY,
  getWhatsAppUrl,
} from '../data/products';
import { ResilientImage } from '../components/ResilientImage';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailPageProps {
  product: Product;
  onBackToCatalogue: () => void;
  onSelectProduct: (productId: string) => void;
  onBuyNowInquiry: (productId: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBackToCatalogue,
  onSelectProduct,
  onBuyNowInquiry,
}) => {
  const [activeImage, setActiveImage] = useState<string>(product.image);

  // Reset active image when switching products
  React.useEffect(() => {
    setActiveImage(product.image);
  }, [product]);

  // Exact prefilled WhatsApp message specified in the prompt
  const whatsappMessage = `Hello Medas Medical Suppliers, I would like to know more about ${product.name}. Please share the price, specifications, and availability.`;
  const whatsappProductUrl = getWhatsAppUrl(whatsappMessage);

  const isPriceListed = product.priceNumeric !== null;

  // Related products from same category
  const relatedProducts = PRODUCTS_CATALOGUE.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const galleryImages = product.secondaryImage
    ? [product.image, product.secondaryImage]
    : [product.image];

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Top Breadcrumb / Back Navigation Bar */}
      <div className="bg-[#F4F7FB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackToCatalogue}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B1F3A] hover:text-[#155EEF] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to All Products</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Medas Catalogue</span>
            <span aria-hidden="true">/</span>
            <span>{product.category}</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#0B1F3A] font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      {/* Main Two-Column Desktop Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT SIDE: Product Image Presentation */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 space-y-4">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 bg-[#F4F7FB]">
              <ResilientImage
                src={activeImage}
                alt={`${product.name} — ${product.formFactor}`}
                fallbackLabel={product.name}
                loading="eager"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3">
                {galleryImages.map((imgUrl, idx) => (
                  <button
                    key={imgUrl}
                    type="button"
                    onClick={() => setActiveImage(imgUrl)}
                    aria-label={`View image ${idx + 1} of ${product.name}`}
                    className={`w-24 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === imgUrl
                        ? 'border-[#155EEF] ring-2 ring-[#155EEF]/20'
                        : 'border-slate-200 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <ResilientImage
                      src={imgUrl}
                      alt={`${product.name} view ${idx + 1}`}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE: Product Information in Exact Specified Order */}
          <div className="lg:col-span-6 space-y-6">
            {/* Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="text-[#155EEF]">{product.category}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">
                Catalogue Entry #{String(product.catalogNumber).padStart(2, '0')}
              </span>
              <span aria-hidden="true">·</span>
              <span>{product.formFactor}</span>
            </div>

            {/* 1. Prominent Product Name */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
                {product.name}
              </h1>
              {product.verifiedModelNote && (
                <p className="mt-1.5 text-sm font-medium text-slate-500">
                  Reference Identification: {product.verifiedModelNote}
                </p>
              )}
            </div>

            {/* 2. Price in PKR or Contact for Price */}
            <div className="p-5 rounded-xl bg-[#F4F7FB] border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="block text-xs font-semibold text-slate-500">
                  Listed Catalogue Price
                </span>
                <span
                  className={`text-2xl sm:text-3xl font-extrabold tabular-nums ${
                    isPriceListed ? 'text-[#0B1F3A]' : 'text-[#155EEF]'
                  }`}
                >
                  {product.priceDisplay}
                </span>
              </div>
              <span className="text-xs text-slate-500 max-w-xs">
                {isPriceListed
                  ? 'Wholesale catalogue pricing in PKR. Contact us to confirm current stock and transducer bundle.'
                  : 'Price depends on probe selection and configuration. Request a direct quote on WhatsApp.'}
              </span>
            </div>

            {/* 3. Product Description */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-[#0B1F3A]">Product Overview</h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* 3b. Complete Features & Functions (Volta Notepad / Volta VSonic only) */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-5">
                <h2 className="text-base font-bold text-[#0B1F3A]">
                  Complete Features &amp; Functions (
                  {product.features.reduce((total, group) => total + group.items.length, 0)})
                </h2>

                {product.keyHighlights && product.keyHighlights.length > 0 && (
                  <div className="p-4 rounded-xl bg-[#EAF3FF] border border-[#3977C3]/30">
                    <h3 className="text-sm font-bold text-[#0B1F3A] mb-3">Key Highlights</h3>
                    <ul className="flex flex-wrap gap-2">
                      {product.keyHighlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="px-3 py-1.5 rounded-full bg-white border border-[#3977C3]/30 text-xs font-semibold text-[#0B1F3A]"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.features.map((group) => (
                  <div key={group.title} className="space-y-2">
                    <h3 className="text-sm font-bold text-[#155EEF] uppercase tracking-wide">
                      {group.title}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-600 leading-snug break-words"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#155EEF] shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* 4. Verified Specifications */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-[#0B1F3A]">
                Verified Catalogue Information & Specifications
              </h2>
              <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200">
                {product.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="px-4 py-3 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm"
                  >
                    <span className="font-semibold text-slate-600">{spec.label}</span>
                    <span className="text-[#0B1F3A] font-medium sm:text-right tabular-nums">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Need complete manufacturer datasheets, imaging mode details, or probe frequency compatibility? Contact our sales team below to request full technical documentation.
              </p>
            </div>

            {/* 5. Two CTA Buttons: Contact Us & Buy Now */}
            <div className="pt-2 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Button 1: Contact Us (Direct WhatsApp with prefilled product message) */}
                <a
                  href={whatsappProductUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#155EEF] hover:bg-[#0B1F3A] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155EEF]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Contact Us</span>
                </a>

                {/* Button 2: Buy Now (Navigates to inquiry form with current product preselected) */}
                <button
                  type="button"
                  onClick={() => onBuyNowInquiry(product.id)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-[#0B1F3A] bg-[#EAF3FF] hover:bg-[#3977C3] hover:text-white border border-[#3977C3]/40 rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155EEF]"
                >
                  <FileText className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Buy Now (Inquiry Form)</span>
                </button>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                <strong>Contact Us</strong> opens WhatsApp ({WHATSAPP_DISPLAY}) with {product.name} prefilled.{' '}
                <strong>Buy Now</strong> takes you to our purchase inquiry form with {product.name} automatically selected so you can include your contact details or add additional machines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Models from Catalogue */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A]">
                More in {product.category}
              </h2>
              <p className="text-sm text-slate-600">
                Compare other ultrasound machines from our catalogue.
              </p>
            </div>
            <button
              type="button"
              onClick={onBackToCatalogue}
              className="text-sm font-bold text-[#155EEF] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
            >
              View All 17 Models →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard
                key={rel.id}
                product={rel}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
