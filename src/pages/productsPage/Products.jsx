import ProductCard from "./ProductCard";
import { supabase } from "../../lib/supabase";
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12 ">
        <h1 className="text-5xl text-white md:text-6xl font-extrabold uppercase tracking-tighter italic text-center">
          VİBES SAAT <span className="text-red-600">Products</span>
        </h1>
        <div className="flex justify-center mt-6 mb-10">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-full border border-gray-700 bg-black text-white focus:outline-none focus:border-red-600 transition"
          />
        </div>
        <div className="h-1 w-32 bg-red-600 mx-auto mt-6"></div>
        <div className="text-center mb-12 mt-5">
          <a
            href="https://www.tiktok.com/@saat.vibes?_r=1&_t=ZS-95MeDlhvGQq"
            className="text-gray-500"
            target="_blank"
            rel="noreferrer"
          >
            By Tofiq
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
  <p className="text-white">Loading...</p>
) : filteredProducts.length === 0 ? (
  <p className="text-gray-400">No products found</p>
) : (
  filteredProducts
    .slice(0, 3)
    .map((post) => <ProductCard key={post.id} post={post} />)
)}
        </div>
      </div>
    </div>
  );
}
