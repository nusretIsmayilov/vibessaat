import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "contact": "Contact",
      "contact_information": "Contact Information",
      "contact_us_text_1": "This store is for product demostration. To shop, connect with us on sosial media.",
      "telephone": "Telephone",
      "email": "Email",
      "contact_us_text_2": "Every second is precious.",
      "read_more": "Read more",
      "vibes": "VİBES",
      "saat": "SAAT",
      "home_description": "Official web store",
      "start_your_journey": "Look at the watches",
      "learn_more": "Learn More",
      "featured_articles": "Featured Articles",
      "latest_insights_from_our_fitness_experts": "Trendy & Premium Watches",
      "view_all": "VIEW ALL",
      "home": "Home",
      "products": "Products",
      "contactUs": "Contact Us",
      "searchProducts": "Search products...",
      "loading": "Loading...",
      "no_products_found": "No products found.",
    }
  },
  az: {
    translation: {
      "contact": "Bizimlə",
      "us": "Əlaqə",
      "contact_us_text_1": "Bu mağaza məhsulların nümayişi üçündür. Alış-veriş etmək üçün sosial şəbəkələrdən bizimlə əlaqə saxlayın.",
      "contact_information": "Əlaqə Məlumatları",
      "telephone": "Telefon",
      "email": "Email",
      "contact_us_text_2": "Hər saniyə dəyərlidir.",
      "read_more": "Davamını oxu",
      "vibes": "VİBES",
      "saat": "SAAT",
      "home_description": "Rəsmi web mağaza",
      "start_your_journey": "Saatlara Bax",
      "featured_articles": "Seçilmiş Məhsullar",
      "latest_insights_from_our_fitness_experts": "Trend & Premium saatlar",
      "view_all": "HAMISINA BAXIN",
      "home": "Ana səhifə",
      "products": "Məhsullar",
      "contactUs": "Əlaqə",
      "searchProducts": "Məhsullarda axtar...",
      "loading": "Yüklənir...",
      "no_products_found": "Məhsul tapılmadı.",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;