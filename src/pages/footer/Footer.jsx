import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="py-6 md:py-8 border-t border-gray-900 bg-black px-6 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.tiktok.com/@saat.vibes?_r=1&_t=ZS-95MeDlhvGQq"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; 2026 VİBES SAAT. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
