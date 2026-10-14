/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { PRODUCTS_CATALOGUE } from './data/products';
import { Header, NavSection } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AllProductsPage } from './pages/AllProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';

type RouteView = 'home' | 'products' | 'product-detail';

function parseRouteFromUrl(): { view: RouteView; productId: string | null } {
  const params = new URLSearchParams(window.location.search);
  const productParam = params.get('product');
  const pageParam = params.get('page');

  if (productParam) {
    const exists = PRODUCTS_CATALOGUE.some((p) => p.id === productParam);
    if (exists) {
      return { view: 'product-detail', productId: productParam };
    }
  }

  if (pageParam === 'products') {
    return { view: 'products', productId: null };
  }

  return { view: 'home', productId: null };
}

export default function App() {
  const initialRoute = parseRouteFromUrl();
  const [currentView, setCurrentView] = useState<RouteView>(initialRoute.view);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(initialRoute.productId);
  const [preselectedInquiryIds, setPreselectedInquiryIds] = useState<string[]>([]);

  // Synchronize browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseRouteFromUrl();
      setCurrentView(parsed.view);
      setSelectedProductId(parsed.productId);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamically update document title and meta description per active view
  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (currentView === 'products') {
      document.title = 'All Ultrasound Machines (17 Models) – Medas Medical Suppliers';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Browse all 17 clinical, portable, and veterinary ultrasound machines in the Medas Medical Equipment Catalogue with PKR wholesale pricing.'
        );
      }
    } else if (currentView === 'product-detail' && selectedProductId) {
      const product = PRODUCTS_CATALOGUE.find((p) => p.id === selectedProductId);
      if (product) {
        document.title = `${product.name} (${product.priceDisplay}) – Medas Medical Suppliers`;
        if (metaDesc) {
          metaDesc.setAttribute('content', product.shortDescription);
        }
      }
    } else {
      document.title = 'Medas Medical Suppliers – Wholesale Ultrasound Machines & Equipment';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Medas Medical Suppliers imports and supplies diagnostic and veterinary ultrasound machines in Lahore, Pakistan, including brand-new models from China at competitive wholesale prices.'
        );
      }
    }
  }, [currentView, selectedProductId]);

  const scrollToSection = useCallback((sectionId: string) => {
    requestAnimationFrame(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }, []);

  const handleNavigateHomeSection = useCallback(
    (section: NavSection) => {
      if (currentView !== 'home') {
        window.history.pushState({}, '', window.location.pathname);
        setCurrentView('home');
        setSelectedProductId(null);
        setTimeout(() => {
          scrollToSection(section);
        }, 60);
      } else {
        scrollToSection(section);
      }
    },
    [currentView, scrollToSection]
  );

  const handleNavigateAllProducts = useCallback(() => {
    window.history.pushState({}, '', '?page=products');
    setCurrentView('products');
    setSelectedProductId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectProduct = useCallback((productId: string) => {
    window.history.pushState({}, '', `?product=${encodeURIComponent(productId)}`);
    setCurrentView('product-detail');
    setSelectedProductId(productId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBuyNowInquiry = useCallback(
    (productId: string) => {
      setPreselectedInquiryIds((prev) =>
        prev.includes(productId) ? prev : [...prev, productId]
      );
      window.history.pushState({}, '', `${window.location.pathname}#contact`);
      setCurrentView('home');
      setSelectedProductId(null);
      setTimeout(() => {
        scrollToSection('contact');
        const nameInput = document.getElementById('inquiry-full-name');
        if (nameInput) {
          nameInput.focus({ preventScroll: true });
        }
      }, 90);
    },
    [scrollToSection]
  );

  const activeProduct = selectedProductId
    ? PRODUCTS_CATALOGUE.find((p) => p.id === selectedProductId) || null
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] overflow-x-hidden">
      <Header
        currentRoute={currentView}
        onNavigateHomeSection={handleNavigateHomeSection}
        onNavigateAllProducts={handleNavigateAllProducts}
      />

      <div className="flex-1">
        {currentView === 'products' && (
          <AllProductsPage
            onSelectProduct={handleSelectProduct}
            onBackHome={() => handleNavigateHomeSection('home')}
          />
        )}

        {currentView === 'product-detail' && activeProduct && (
          <ProductDetailPage
            product={activeProduct}
            onBackToCatalogue={handleNavigateAllProducts}
            onSelectProduct={handleSelectProduct}
            onBuyNowInquiry={handleBuyNowInquiry}
          />
        )}

        {(currentView === 'home' || (currentView === 'product-detail' && !activeProduct)) && (
          <HomePage
            onNavigateAllProducts={handleNavigateAllProducts}
            onSelectProduct={handleSelectProduct}
            preselectedProductIds={preselectedInquiryIds}
            onUpdateSelectedProducts={setPreselectedInquiryIds}
          />
        )}
      </div>

      <Footer
        onNavigateHomeSection={handleNavigateHomeSection}
        onNavigateAllProducts={handleNavigateAllProducts}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}

