import React, { useState, useMemo } from 'react';
import { Search, X, ArrowLeft } from 'lucide-react';
import {
  PRODUCTS_CATALOGUE,
  ProductCategory,
  getWhatsAppUrl,
} from '../data/products';
import { ProductCard } from '../components/ProductCard';

interface AllProductsPageProps {
  onSelectProduct: (productId: string) => void;
  onBackHome: () => void;
}

const CATEGORIES: ('All' | ProductCategory)[] = [
  'All',
  'Clinical Systems',
  'Portable & Notebook',
  'Veterinary Systems',
];

export const AllProductsPage: React.FC<AllProductsPageProps> = ({
  onSelectProduct,
  onBackHome,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProductCategory>('All');
  const [priceFilter, setPriceFilter] = useState<'all' | 'priced' | 'contact'>('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOGUE.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      const matchesPrice =
        priceFilter === 'all' ||
        (priceFilter === 'priced' && product.priceNumeric !== null) ||
        (priceFilter === 'contact' && product.priceNumeric === null);

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        (product.verifiedModelNote && product.verifiedModelNote.toLowerCase().includes(q)) ||
        product.category.toLowerCase().includes(q) ||
        product.priceDisplay.toLowerCase().includes(q) ||
        String(product.catalogNumber).includes(q);

      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [searchQuery, selectedCategory, priceFilter]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setPriceFilter('all');
  };

  return (
    <main className="min-h-screen bg-[#F4F7FB] pb-20">
      {/* Page Header Banner */}
      <section className="bg-[#0B1F3A] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#EAF3FF] hover:text-white mb-5 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Home</span>
          </button>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Complete Ultrasound Machine Catalogue
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Browse all 17 ultrasound machines from the Medas Medical Equipment Catalogue. Compare listed PKR wholesale prices, filter by clinical or veterinary systems, and select any model to view full details or request a quotation on WhatsApp.
          </p>
        </div>
      </section>

      {/* Search & Filter Controls Bar */}
      <section aria-label="Catalogue Search and Filters" className="bg-white border-b border-slate-200 sticky top-16 sm:top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by model name (e.g. Volta, Youki, Q 10, GE)..."
                aria-label="Search products by model name"
                className="w-full pl-10 pr-9 py-2.5 text-sm bg-[#F4F7FB] border border-slate-300 rounded-lg text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category & Pricing Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <div
                role="group"
                aria-label="Filter by equipment category"
                className="flex flex-wrap items-center gap-1 p-1 bg-[#F4F7FB] rounded-lg border border-slate-200"
              >
                {CATEGORIES.map((category) => {
                  const active = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        active
                          ? 'bg-[#155EEF] text-white shadow-xs'
                          : 'text-slate-600 hover:text-[#0B1F3A]'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as 'all' | 'priced' | 'contact')}
                aria-label="Filter by pricing type"
                className="px-3 py-2 text-xs font-semibold bg-[#F4F7FB] border border-slate-200 rounded-lg text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
              >
                <option value="all">All Pricing ({PRODUCTS_CATALOGUE.length})</option>
                <option value="priced">Listed PKR Price (17)</option>
                <option value="contact">Contact for Price (6)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <p className="text-sm font-medium text-slate-600 tabular-nums">
            Showing <span className="font-bold text-[#0B1F3A]">{filteredProducts.length}</span> of{' '}
            <span className="font-bold text-[#0B1F3A]">{PRODUCTS_CATALOGUE.length}</span> catalogue entries
          </p>
          {(searchQuery || selectedCategory !== 'All' || priceFilter !== 'all') && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs font-semibold text-[#155EEF] hover:underline self-start sm:self-auto cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center max-w-lg mx-auto my-8">
            <h2 className="text-lg font-bold text-[#0B1F3A] mb-2">
              No Matching Ultrasound Machines Found
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              We couldn&apos;t find any catalogue entries matching &ldquo;{searchQuery}&rdquo; in the selected filter. Try clearing your filters or message us directly on WhatsApp for custom model sourcing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={resetFilters}
                className="px-4 py-2.5 text-sm font-semibold text-white bg-[#155EEF] hover:bg-[#0B1F3A] rounded-lg transition-colors cursor-pointer"
              >
                Show All 17 Products
              </button>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-sm font-semibold text-[#0B1F3A] bg-[#F4F7FB] hover:bg-[#EAF3FF] border border-slate-200 rounded-lg transition-colors"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
