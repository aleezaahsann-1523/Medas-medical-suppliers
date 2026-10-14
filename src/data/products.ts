import HERO_BANNER from '../assets/brand/Banner.png';
import ABOUT_PHOTO from '../assets/brand/about-medical-equipment.jpg';
import { FeatureGroup, VOLTA_FEATURE_GROUPS, VOLTA_KEY_HIGHLIGHTS, VSONIC_FEATURE_GROUPS, VSONIC_KEY_HIGHLIGHTS } from './voltaFeatures';
import IMG_VOLTA_NOTEPAD_345 from '../assets/products/volta-notepad-345.jpeg';
import IMG_VOLTA_VSONIC_295 from '../assets/products/volta-vsonic-295.jpeg';
import IMG_VOLTA_SONOBOOK from '../assets/products/volta-sonobook.jpeg';
import IMG_YOUKI_D8_WIRELESS_VET_COLOUR from '../assets/products/youki-d8-wireless-vet-colour.jpeg';
import IMG_EMPROROR_N2_VET from '../assets/products/emproror-n2-vet.jpeg';
import IMG_APOLLO_9_PLUS from '../assets/products/apollo-9-plus.jpeg';
import IMG_GE_LOGIC_100_PRO_ULTRASOUND from '../assets/products/ge-logic-100-pro-ultrasound.jpeg';
import IMG_Q_10_VET_ULTRASOUND from '../assets/products/q-10-vet-ultrasound.jpeg';
import IMG_VOLTA_VSONIC_PLUS12 from '../assets/products/volta-vsonic-plus12.jpeg';
import IMG_VET_ULTRASOUND_MACHINE from '../assets/products/vet-ultrasound-machine.jpeg';
import IMG_NYRO_10_VET_LATEST_MODEL from '../assets/products/nyro-10-vet-latest-model.jpeg';
import IMG_NOVADEX_N3_PLUS from '../assets/products/novadex-n3-plus.jpeg';
import IMG_VET_FOR_SCAN_SMART_ULTRASOUND from '../assets/products/vet-for-scan-smart-ultrasound.jpeg';
import IMG_EMPROR_N2_LATEST_DIGITAL from '../assets/products/empror-n2-latest-digital.jpeg';
import IMG_SONONOTE_BOOK from '../assets/products/sononote-book.jpeg';
import IMG_YONKAR_7 from '../assets/products/yonkar-7.jpeg';
import IMG_ORIAL_NOTE_BOOK from '../assets/products/orial-note-book.jpeg';

export type ProductCategory = 'Clinical Systems' | 'Portable & Notebook' | 'Veterinary Systems';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  catalogNumber: number;
  name: string;
  verifiedModelNote?: string;
  priceDisplay: string;
  priceNumeric: number | null;
  category: ProductCategory;
  formFactor: string;
  image: string;
  secondaryImage?: string;
  shortDescription: string;
  description: string;
  specifications: ProductSpec[];
  features?: FeatureGroup[];
  keyHighlights?: string[];
  featuredOnHome: boolean;
}

export const WHATSAPP_NUMBER = '923214500997';
export const WHATSAPP_DISPLAY = '+92 321 4500997';
export const BUSINESS_EMAIL = 'medasmedicalsuppliers@gmail.com';
export const BUSINESS_ADDRESS = 'Iqbal Avenue Housing Society, Lahore, Pakistan';

export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) {
    return `${baseUrl}?text=${encodeURIComponent(
      'Hello Medas Medical Suppliers, I would like to inquire about your ultrasound machines, wholesale pricing, and availability.'
    )}`;
  }
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

const IMG_TROLLEY = '/src/assets/images/product_trolley_ultrasound_1791666233675.jpg';
const IMG_NOTEBOOK = '/src/assets/images/product_notebook_ultrasound_1791666249837.jpg';
const IMG_VET = '/src/assets/images/product_vet_ultrasound_1791666265156.jpg';
const IMG_SHOWROOM = '/src/assets/images/about_medical_supply_1791666217653.jpg';
const IMG_CLINIC = '/src/assets/images/hero_ultrasound_clinic_1791666200123.jpg';

export const HERO_IMAGE = HERO_BANNER;
export const ABOUT_IMAGE = ABOUT_PHOTO;
export const CONTACT_IMAGE = IMG_TROLLEY;

export const PRODUCTS_CATALOGUE: Product[] = [
  {
    id: 'volta-notepad-345',
    catalogNumber: 1,
    name: 'VOLTA NOTEPAD',
    priceDisplay: 'PKR 345,000',
    priceNumeric: 345000,
    category: 'Portable & Notebook',
    formFactor: 'Portable Notebook Ultrasound System',
    image: IMG_VOLTA_NOTEPAD_345,
    shortDescription: 'Volta Notepad portable ultrasound unit at PKR 345,000 for general diagnostic and outpatient clinical use.',
    description:
      'The VOLTA NOTEPAD is available at a listed catalogue price of PKR 345,000. Designed in a portable laptop form factor, it provides straightforward operation for routine clinical imaging. Contact our team in Lahore for availability, probe options, and specification details. This model offers 150 features and functions, including a 32-channel digital main board, a 96-element digital convex probe, digital beamforming, multi-frequency imaging, B-mode scanning, image optimization, measurements, obstetric calculations, report and patient data management, and wide clinical application coverage. See the complete list below.',
    specifications: [
      { label: 'Catalogue Entry', value: '#01 — Medas Medical Equipment Catalogue' },
      { label: 'Model Name', value: 'VOLTA NOTEPAD' },
      { label: 'Listed Price', value: 'PKR 345,000' },
      { label: 'Form Factor', value: 'Portable Notebook Ultrasound' },
      { label: 'Detailed Specifications', value: 'Available upon request via WhatsApp or email inquiry' },
    ],
    features: VOLTA_FEATURE_GROUPS,
    keyHighlights: VOLTA_KEY_HIGHLIGHTS,
    featuredOnHome: true,
  },
  {
    id: 'volta-vsonic-295',
    catalogNumber: 2,
    name: 'VOLTA VSONIC',
    priceDisplay: 'PKR 295,000',
    priceNumeric: 295000,
    category: 'Clinical Systems',
    formFactor: 'Digital Diagnostic Ultrasound System',
    image: IMG_VOLTA_VSONIC_295,
    shortDescription: 'Volta VSonic diagnostic ultrasound machine listed at PKR 295,000 in the Medas catalogue.',
    description:
      'The VOLTA VSONIC is listed at PKR 295,000 in the Medas Medical Equipment Catalogue. Suitable for routine clinical ultrasonography, please contact our Lahore office or message us on WhatsApp to confirm the exact configuration and included transducers for this priced unit. This model offers 150 features and functions, including a 32-channel digital main board, a 80-element digital convex probe, digital beamforming, multi-frequency imaging, B-mode scanning, image optimization, measurements, obstetric calculations, report and patient data management, and wide clinical application coverage. See the complete list below.',
    specifications: [
      { label: 'Catalogue Entry', value: '#02 — Medas Medical Equipment Catalogue' },
      { label: 'Model Name', value: 'VOLTA VSONIC' },
      { label: 'Listed Price', value: 'PKR 295,000' },
      { label: 'Equipment Classification', value: 'Clinical Diagnostic Ultrasound' },
      { label: 'Detailed Specifications', value: 'Available upon request via WhatsApp or email inquiry' },
    ],
    features: VSONIC_FEATURE_GROUPS,
    keyHighlights: VSONIC_KEY_HIGHLIGHTS,
    featuredOnHome: true,
  },
  {
    id: 'volta-sonobook',
    catalogNumber: 3,
    name: 'VOLTA SONOBOOK',
    priceDisplay: 'Contact for Price',
    priceNumeric: null,
    category: 'Portable & Notebook',
    formFactor: 'Portable SonoBook Ultrasound System',
    image: IMG_VOLTA_SONOBOOK,
    secondaryImage: IMG_SHOWROOM,
    shortDescription: 'Portable SonoBook series ultrasound system combining a lightweight laptop profile with clinical imaging controls.',
    description:
      'The VOLTA SONOBOOK is a portable laptop-style ultrasound machine built for practitioners who require convenient transport between examination rooms or satellite clinics without sacrificing dedicated ultrasound keyboard controls. Contact Medas Medical Suppliers for complete technical specifications and pricing.',
    specifications: [
      { label: 'Catalogue Entry', value: '#03 — Medas Medical Equipment Catalogue' },
      { label: 'Model Name', value: 'VOLTA SONOBOOK' },
      { label: 'Form Factor', value: 'Portable Notebook Ultrasound' },
      { label: 'Equipment Classification', value: 'Portable Diagnostic Ultrasound' },
      { label: 'Detailed Specifications', value: 'Available upon request via WhatsApp or email inquiry' },
    ],
    featuredOnHome: true,
  },
  {
    id: 'youki-d8-wireless-vet-colour',
    catalogNumber: 4,
    name: 'YOUKI D8 WIRELESS VET COLOUR',
    priceDisplay: 'PKR 925,000',
    priceNumeric: 925000,
    category: 'Veterinary Systems',
    formFactor: 'Wireless Color Doppler Veterinary Ultrasound',
    image: IMG_YOUKI_D8_WIRELESS_VET_COLOUR,
    shortDescription: 'Wireless color veterinary ultrasound system designed for mobile animal diagnostics and field veterinary practice.',
    description:
      'The YOUKI D8 WIRELESS VET COLOUR is a wireless color veterinary ultrasound system listed at PKR 925,000 in the Medas catalogue. Built for veterinary practitioners, livestock specialists, and companion animal clinics requiring cable-free mobility and color imaging capability. Contact us to confirm compatible display devices, probe frequencies, and availability.',
    specifications: [
      { label: 'Catalogue Entry', value: '#04 — Medas Medical Equipment Catalogue' },
      { label: 'Listed Price', value: 'PKR 925,000' },
      { label: 'Application Domain', value: 'Veterinary Diagnostic Imaging (Color)' },
      { label: 'Connectivity / Format', value: 'Wireless Veterinary Ultrasound System' },
      { label: 'Detailed Specifications', value: 'Available upon request via WhatsApp or email inquiry' },
    ],
    featuredOnHome: true,
  },
  {
    id: 'emproror-n2-vet',
    catalogNumber: 5,
    name: 'EMPROROR N2 VET',
    verifiedModelNote: 'Emperor N2 Veterinary Digital Ultrasound System',
    priceDisplay: 'PKR 725,000',
    priceNumeric: 725000,
    category: 'Veterinary Systems',
    formFactor: 'Portable Veterinary Digital Ultrasound',
    image: IMG_EMPROROR_N2_VET,
    shortDescription: 'Dedicated veterinary ultrasound unit (Emperor N2 Vet series) for clinical and field animal reproductive and abdominal exams.',
    description:
      'The EMPROROR N2 VET (Emperor N2 Veterinary Digital Ultrasound System) is offered at PKR 725,000 in the Medas Medical Equipment Catalogue. It is designed for veterinary hospitals, livestock farms, and mobile veterinary practitioners. Contact Medas Medical Suppliers for veterinary transducer options and full technical specifications.',
    specifications: [
      { label: 'Catalogue Entry', value: '#05 — Medas Medical Equipment Catalogue' },
      { label: 'Catalogue Title', value: 'EMPROROR N2 VET' },
      { label: 'Verified Series', value: 'Emperor N2 Veterinary Ultrasound System' },
      { label: 'Listed Price', value: 'PKR 725,000' },
      { label: 'Application Domain', value: 'Veterinary Diagnostic Ultrasound' },
    ],
    featuredOnHome: true,
  },
  {
    id: 'apollo-9-plus',
    catalogNumber: 6,
    name: 'APOLLO 9 PLUS',
    priceDisplay: 'Contact for Price',
    priceNumeric: null,
    category: 'Clinical Systems',
    formFactor: 'Stationary / Trolley Diagnostic Ultrasound System',
    image: IMG_APOLLO_9_PLUS,
    secondaryImage: IMG_CLINIC,
    shortDescription: 'Apollo 9 Plus clinical ultrasound platform engineered for comprehensive diagnostic imaging workflows.',
    description:
      'The APOLLO 9 PLUS is a clinical diagnostic ultrasound system suited for hospitals, maternity clinics, and diagnostic imaging centers. Please contact Medas Medical Suppliers on WhatsApp or via the inquiry form to receive the complete technical datasheet, probe options, and current wholesale price.',
    specifications: [
      { label: 'Catalogue Entry', value: '#06 — Medas Medical Equipment Catalogue' },
      { label: 'Model Name', value: 'APOLLO 9 PLUS' },
      { label: 'Equipment Classification', value: 'Clinical Diagnostic Ultrasound System' },
      { label: 'Pricing Basis', value: 'Contact for Price' },
      { label: 'Detailed Specifications', value: 'Available upon request via WhatsApp or email inquiry' },
    ],
    featuredOnHome: true,
  },
  {
    id: 'ge-logic-100-pro-ultrasound',
    catalogNumber: 7,
    name: 'GE LOGIC 100 PRO ULTRASOUND',
    verifiedModelNote: 'GE Logiq 100 Pro Diagnostic Ultrasound System',
    priceDisplay: 'PKR 220,000',
    priceNumeric: 220000,
    category: 'Clinical Systems',
    formFactor: 'Compact Console Diagnostic Ultrasound',
    image: IMG_GE_LOGIC_100_PRO_ULTRASOUND,
    shortDescription: 'Practical B/W diagnostic ultrasound system from the GE Logiq 100 Pro line at an accessible wholesale price.',
    description:
      'The GE LOGIC 100 PRO ULTRASOUND (GE Logiq 100 Pro series) is listed in our catalogue at PKR 220,000. Known as a dependable, straightforward diagnostic ultrasound unit for routine abdominal and obstetric examinations, it offers clinics an economical entry point. Contact us to verify unit availability, included probes, and condition details.',
    specifications: [
      { label: 'Catalogue Entry', value: '#07 — Medas Medical Equipment Catalogue' },
      { label: 'Catalogue Title', value: 'GE LOGIC 100 PRO ULTRASOUND' },
      { label: 'Verified Series', value: 'GE Logiq 100 Pro Diagnostic Ultrasound' },
      { label: 'Listed Price', value: 'PKR 220,000' },
      { label: 'Equipment Classification', value: 'Clinical Diagnostic Ultrasound' },
    ],
    featuredOnHome: true,
  },
  {
    id: 'q-10-vet-ultrasound',
    catalogNumber: 8,
    name: 'Q 10 VET ULTRASOUND',
    priceDisplay: 'PKR 615,000',
    priceNumeric: 615000,
    category: 'Veterinary Systems',
    formFactor: 'Veterinary Diagnostic Ultrasound System',
    image: IMG_Q_10_VET_ULTRASOUND,
    shortDescription: 'Q 10 Vet ultrasound machine configured for veterinary clinics and animal reproductive ultrasonography.',
    description:
      'The Q 10 VET ULTRASOUND is listed at PKR 615,000 in the Medas Medical Equipment Catalogue. Built specifically for veterinary ultrasonography, it supports small and large animal diagnostic evaluations. Contact Medas Medical Suppliers for detailed probe compatibility and specification sheets.',
    specifications: [
      { label: 'Catalogue Entry', value: '#08 — Medas Medical Equipment Catalogue' },
      { label: 'Model Name', value: 'Q 10 VET ULTRASOUND' },
      { label: 'Listed Price', value: 'PKR 615,000' },
      { label: 'Application Domain', value: 'Veterinary Diagnostic Imaging' },
      { label: 'Detailed Specifications', value: 'Available upon request via WhatsApp or email inquiry' },
    ],
    featuredOnHome: true,
  },
  {
    id: 'volta-vsonic-plus12',
    catalogNumber: 9,
    name: 'VOLTA VSONIC +12',
    priceDisplay: 'PKR 345,000',
    priceNumeric: 345000,
    category: 'Clinical Systems',
    formFactor: 'Digital Diagnostic Ultrasound Machine',
    image: IMG_VOLTA_VSONIC_PLUS12,
    shortDescription: 'Volta VSonic +12 diagnostic ultrasound machine listed at PKR 345,000 for clinical imaging centers.',
    description:
      'The VOLTA VSONIC +12 is offered at PKR 345,000 in the Medas Medical Equipment Catalogue. Part of the Volta VSonic clinical lineup, this machine is suited for general diagnostic scanning in clinics and medical centers. Contact us for full display, imaging mode, and transducer specifications.',
    specifications: [
      { label: 'Catalogue Entry', value: '#09 — Medas Medical Equipment Catalogue' },
      { label: 'Model Name', value: 'VOLTA VSONIC +12' },
      { label: 'Listed Price', value: 'PKR 345,000' },
      { label: 'Equipment Classification', value: 'Clinical Diagnostic Ultrasound' },
      { label: 'Detailed Specifications', value: 'Available upon request via WhatsApp or email inquiry' },
    ],
    featuredOnHome: true,
  },
  {
    id: 'vet-ultrasound-machine',
    catalogNumber: 10,
    name: 'VET ULTRASOUND MACHINE',
    priceDisplay: 'PKR 735,000',
    priceNumeric: 735000,
    category: 'Veterinary Systems',
    formFactor: 'Professional Veterinary Ultrasound System',
    image: IMG_VET_ULTRASOUND_MACHINE,
    shortDescription: 'Dedicated veterinary diagnostic ultrasound machine listed at PKR 735,000 for animal hospitals and livestock care.',
    description:
      'Listed as VET ULTRASOUND MACHINE at PKR 735,000 in the Medas catalogue, this veterinary ultrasound unit is supplied for professional animal diagnostic imaging. Contact Medas Medical Suppliers to request the exact model datasheet, available rectal/convex/linear veterinary probes, and wholesale delivery terms.',
    specifications: [
      { label: 'Catalogue Entry', value: '#10 — Medas Medical Equipment Catalogue' },
      { label: 'Catalogue Title', value: 'VET ULTRASOUND MACHINE' },
      { label: 'Listed Price', value: 'PKR 735,000' },
      { label: 'Application Domain', value: 'Veterinary Diagnostic Ultrasound' },
      { label: 'Detailed Specifications', value: 'Available upon request via WhatsApp or email inquiry' },
    ],
    featuredOnHome: false,
  },
  {
    id: 'nyro-10-vet-latest-model',
    catalogNumber: 11,
    name: 'NYRO 10 VET LATEST MODEL',
    verifiedModelNote: 'Nyro 10 Vet Digital Veterinary Ultrasound System (Latest Model)',
    priceDisplay: 'PKR 470,000',
    priceNumeric: 470000,
    category: 'Veterinary Systems',
    formFactor: 'Digital Veterinary Ultrasound Unit',
    image: IMG_NYRO_10_VET_LATEST_MODEL,
    shortDescription: 'Nyro 10 Vet latest model digital veterinary ultrasound system listed at PKR 470,000.',
    description:
      'The NYRO 10 VET LATEST MODEL (Nyro 10 Vet Digital Veterinary Ultrasound System) is listed at PKR 470,000 in the Medas Medical Equipment Catalogue. Designed for modern veterinary practices requiring portable, reliable animal imaging, full specifications and probe configurations are available upon inquiry.',
    specifications: [
      { label: 'Catalogue Entry', value: '#11 — Medas Medical Equipment Catalogue' },
      { label: 'Catalogue Title', value: 'NYRO 10 VET LATEST MODEL' },
      { label: 'Verified Series', value: 'Nyro 10 Vet Digital Veterinary Ultrasound System' },
      { label: 'Listed Price', value: 'PKR 470,000' },
      { label: 'Application Domain', value: 'Veterinary Diagnostic Ultrasound' },
    ],
    featuredOnHome: false,
  },
  {
    id: 'novadex-n3-plus',
    catalogNumber: 12,
    name: 'NOVADEX N3 PLUS',
    priceDisplay: 'PKR 225,000',
    priceNumeric: 225000,
    category: 'Portable & Notebook',
    formFactor: 'Compact Digital Ultrasound Machine',
    image: IMG_NOVADEX_N3_PLUS,
    shortDescription: 'Novadex N3 Plus digital ultrasound machine listed at PKR 225,000 for cost-effective clinical diagnostics.',
    description:
      'The NOVADEX N3 PLUS is listed at PKR 225,000 in the Medas Medical Equipment Catalogue. Offering a budget-conscious ultrasound solution for private clinics and primary diagnostic setups, complete technical specifications and included accessories can be requested directly from our sales team.',
    specifications: [
      { label: 'Catalogue Entry', value: '#12 — Medas Medical Equipment Catalogue' },
      { label: 'Model Name', value: 'NOVADEX N3 PLUS' },
      { label: 'Listed Price', value: 'PKR 225,000' },
      { label: 'Equipment Classification', value: 'Compact Diagnostic Ultrasound' },
      { label: 'Detailed Specifications', value: 'Available upon request via WhatsApp or email inquiry' },
    ],
    featuredOnHome: false,
  },
  {
    id: 'vet-for-scan-smart-ultrasound',
    catalogNumber: 13,
    name: 'VET FOR SCAN SMART ULTRASOUND',
    verifiedModelNote: '4Scan / ForScan Smart Portable Veterinary Ultrasound System',
    priceDisplay: 'PKR 427,000',
    priceNumeric: 427000,
    category: 'Veterinary Systems',
    formFactor: 'Smart Portable Veterinary Scanner',
    image: IMG_VET_FOR_SCAN_SMART_ULTRASOUND,
    shortDescription: 'Smart portable veterinary ultrasound scanner listed at PKR 427,000 for rapid field and clinic animal exams.',
    description:
      'The VET FOR SCAN SMART ULTRASOUND (4Scan / ForScan Smart Portable Veterinary Ultrasound System) is listed at PKR 427,000 in the Medas catalogue. Built for veterinary professionals seeking a compact smart ultrasound scanner, contact Medas Medical Suppliers to confirm probe options and full specification details.',
    specifications: [
      { label: 'Catalogue Entry', value: '#13 — Medas Medical Equipment Catalogue' },
      { label: 'Catalogue Title', value: 'VET FOR SCAN SMART ULTRASOUND' },
      { label: 'Verified Series', value: 'ForScan Smart Portable Veterinary Ultrasound' },
      { label: 'Listed Price', value: 'PKR 427,000' },
      { label: 'Application Domain', value: 'Veterinary Diagnostic Ultrasound' },
    ],
    featuredOnHome: false,
  },
  {
    id: 'empror-n2-latest-digital',
    catalogNumber: 14,
    name: 'EMPROR N2 LATEST DIGITAL',
    verifiedModelNote: 'Emperor N2 Latest Digital Ultrasound System',
    priceDisplay: 'PKR 680,000',
    priceNumeric: 680000,
    category: 'Clinical Systems',
    formFactor: 'Digital Ultrasound System',
    image: IMG_EMPROR_N2_LATEST_DIGITAL,
    shortDescription: 'Emperor N2 Latest Digital ultrasound machine listed at PKR 680,000 for high-clarity digital ultrasonography.',
    description:
      'The EMPROR N2 LATEST DIGITAL (Emperor N2 Latest Digital Ultrasound System) is available at a catalogue price of PKR 680,000. Supplied by Medas Medical Suppliers for digital diagnostic imaging, contact our team via WhatsApp to request the full specification brochure and probe compatibility list.',
    specifications: [
      { label: 'Catalogue Entry', value: '#14 — Medas Medical Equipment Catalogue' },
      { label: 'Catalogue Title', value: 'EMPROR N2 LATEST DIGITAL' },
      { label: 'Verified Series', value: 'Emperor N2 Latest Digital Ultrasound System' },
      { label: 'Listed Price', value: 'PKR 680,000' },
      { label: 'Equipment Classification', value: 'Digital Diagnostic Ultrasound' },
    ],
    featuredOnHome: false,
  },
  {
    id: 'sononote-book',
    catalogNumber: 15,
    name: 'SONONOTE BOOK',
    verifiedModelNote: 'SonoNote Book Portable Notebook Ultrasound System',
    priceDisplay: 'PKR 265,000',
    priceNumeric: 265000,
    category: 'Portable & Notebook',
    formFactor: 'Portable Notebook Ultrasound Machine',
    image: IMG_SONONOTE_BOOK,
    shortDescription: 'SonoNote Book portable laptop-format ultrasound machine listed at PKR 265,000.',
    description:
      'The SONONOTE BOOK (SonoNote Book Portable Notebook Ultrasound) is listed at PKR 265,000 in the Medas Medical Equipment Catalogue. Its slim notebook enclosure allows easy portability for clinics and visiting sonographers. Contact Medas Medical Suppliers for full specifications and availability.',
    specifications: [
      { label: 'Catalogue Entry', value: '#15 — Medas Medical Equipment Catalogue' },
      { label: 'Catalogue Title', value: 'SONONOTE BOOK' },
      { label: 'Verified Series', value: 'SonoNote Book Portable Ultrasound' },
      { label: 'Listed Price', value: 'PKR 265,000' },
      { label: 'Form Factor', value: 'Portable Notebook Ultrasound' },
    ],
    featuredOnHome: false,
  },
  {
    id: 'yonkar-7',
    catalogNumber: 16,
    name: 'YONKAR 7',
    verifiedModelNote: 'Yonker YK-7 / Yonkar 7 Portable Digital Ultrasound System',
    priceDisplay: 'PKR 290,000',
    priceNumeric: 290000,
    category: 'Portable & Notebook',
    formFactor: 'Portable Digital Ultrasound System',
    image: IMG_YONKAR_7,
    shortDescription: 'Yonkar 7 (Yonker 7 series) portable digital ultrasound machine listed at PKR 290,000.',
    description:
      'The YONKAR 7 (Yonker 7 series portable digital ultrasound) is offered at PKR 290,000 in the Medas Medical Equipment Catalogue. Imported and supplied for clinics seeking a reliable, compact digital ultrasound machine at competitive wholesale pricing. Contact us for complete technical specifications.',
    specifications: [
      { label: 'Catalogue Entry', value: '#16 — Medas Medical Equipment Catalogue' },
      { label: 'Catalogue Title', value: 'YONKAR 7' },
      { label: 'Verified Series', value: 'Yonker 7 / Yonkar 7 Digital Ultrasound' },
      { label: 'Listed Price', value: 'PKR 290,000' },
      { label: 'Form Factor', value: 'Portable Digital Ultrasound' },
    ],
    featuredOnHome: false,
  },
  {
    id: 'orial-note-book',
    catalogNumber: 17,
    name: 'ORIAL NOTE BOOK',
    verifiedModelNote: 'Orial Notebook Portable Digital Ultrasound System',
    priceDisplay: 'PKR 265,000',
    priceNumeric: 265000,
    category: 'Portable & Notebook',
    formFactor: 'Portable Notebook Ultrasound Machine',
    image: IMG_ORIAL_NOTE_BOOK,
    shortDescription: 'Orial Note Book portable ultrasound unit listed at PKR 265,000 for clinical and point-of-care scanning.',
    description:
      'The ORIAL NOTE BOOK is listed at PKR 265,000 in the Medas Medical Equipment Catalogue. Designed in a convenient notebook format for clinical portability, please contact Medas Medical Suppliers via WhatsApp or email to request full specifications, probe options, and ordering details.',
    specifications: [
      { label: 'Catalogue Entry', value: '#17 — Medas Medical Equipment Catalogue' },
      { label: 'Catalogue Title', value: 'ORIAL NOTE BOOK' },
      { label: 'Listed Price', value: 'PKR 265,000' },
      { label: 'Form Factor', value: 'Portable Notebook Ultrasound' },
      { label: 'Detailed Specifications', value: 'Available upon request via WhatsApp or email inquiry' },
    ],
    featuredOnHome: false,
  },
];

export const HOME_FEATURED_PRODUCTS: Product[] = PRODUCTS_CATALOGUE.filter((p) => p.featuredOnHome).slice(0, 9);