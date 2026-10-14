import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../data/products';
import { ResilientImage } from './ResilientImage';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    onSelectProduct(product.id);
  };

  const isPriceListed = product.priceNumeric !== null;

  return (
    <article className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md hover:border-[#3977C3]/60">
      <div>
        {/* Product Image — Clickable */}
        <a
          href={`?product=${product.id}`}
          onClick={handleOpen}
          className="block relative aspect-[4/3] w-full bg-[#F4F7FB] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#155EEF]"
          aria-label={`View details for ${product.name}`}
        >
          <ResilientImage
            src={product.image}
            alt={`${product.name} — ${product.formFactor}`}
            fallbackLabel={product.name}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover object-center transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </a>

        {/* Product Info */}
        <div className="p-5 sm:p-6">
          {/* Unboxed clean metadata with typographic separator */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{product.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">Cat. #{String(product.catalogNumber).padStart(2, '0')}</span>
          </div>

          {/* Product Name — Clickable, never clipped */}
          <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A] leading-snug mb-2">
            <a
              href={`?product=${product.id}`}
              onClick={handleOpen}
              className="hover:text-[#155EEF] transition-colors focus-visible:outline-2 focus-visible:outline-[#155EEF] rounded"
            >
              {product.name}
            </a>
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Price & View Details Footer */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
        <div>
          <span className="block text-[11px] font-medium text-slate-500">
            Catalogue Price
          </span>
          <span
            className={`text-base sm:text-lg font-extrabold tabular-nums ${
              isPriceListed ? 'text-[#0B1F3A]' : 'text-[#155EEF]'
            }`}
          >
            {product.priceDisplay}
          </span>
        </div>

        <a
          href={`?product=${product.id}`}
          onClick={handleOpen}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#155EEF] bg-[#EAF3FF] hover:bg-[#155EEF] hover:text-white rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155EEF]"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};
