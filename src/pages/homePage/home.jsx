import { FaChevronRight } from "react-icons/fa";
import ProductCard from "../productsPage/ProductCard";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Link } from "react-router-dom";
import homeHero from "../../images/home/homeHero.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
    } else {
      const formatted = data.map((item) => ({
        ...item,
        media: [
          item.image_url ? { type: "image", url: item.image_url } : null,
          item.media ? { type: "video", url: item.media } : null,
        ].filter(Boolean),
        TikTokUrl: item.tiktok_url,
      }));

      setProducts(formatted);
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col bg-[#F8F2EE] min-h-screen">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src={homeHero}
            alt="Gym Hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 uppercase italic text-white">
            {t("stay_on_track")}{" "}
            <span className="text-red-600">{t("stay_on_diet")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {t("home_description")}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/products">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
                {t("start_your_journey")}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- FEATURED ARTICLES (PRODUCTS PREVIEW) --- */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold uppercase text-white">
                {t("featured_articles")}
              </h2>
              <p className="text-gray-500 mt-2">
                {t("latest_insights_from_our_fitness_experts")}
              </p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-red-600 font-bold hover:gap-4 transition-all uppercase"
            >
              {t("view_all")} <FaChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loading ? (
              <p className="text-white">Loading...</p>
            ) : (
              products
                .slice(0, 3)
                .map((post) => <ProductCard key={post.id} post={post} />)
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
