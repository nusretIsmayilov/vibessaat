import { useState } from "react";
import { FaTiktok, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ProductCard({ post }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaItems = post.media || [];
  const currentMedia = mediaItems[currentIndex];

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:scale-[1.02] transition-transform">
      <div className="relative aspect-[4/3] overflow-hidden bg-black">
        {currentMedia?.type === "video" ? (
          <video
            src={currentMedia.url}
            className="w-full h-full object-cover"
            controls 
            autoPlay={false}
            loop
            playsInline
          />
        ) : (
          <img
            src={currentMedia?.url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        )}

        {mediaItems.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                prevMedia();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                nextMedia();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        <a
          href={post.TikTokUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-pink-600 transition-colors z-10"
        >
          <FaTiktok size={20} />
        </a>
      </div>

      <div className="p-5">
        <span className="text-xs font-bold text-orange-500 uppercase">
          {post.category}
        </span>
        <h3 className="text-xl font-bold mt-2 text-gray-800">{post.title}</h3>
        <p className="text-gray-600 mt-3 text-sm line-clamp-3">
          {post.description}
        </p>
        <button className="mt-4 text-black font-semibold border-b-2 border-black hover:text-gray-600 hover:border-gray-600 transition-all">
          {t('read_more')}
        </button>
      </div>
    </div>
  );
}
