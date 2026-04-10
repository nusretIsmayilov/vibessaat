import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 p-4">
      <button
        onClick={() => changeLanguage("az")}
        className={`px-3 py-1 rounded ${i18n.language === "az" ? "bg-orange-500 text-white" : "bg-gray-200"}`}
      >
        AZ
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded ${i18n.language === "en" ? "bg-orange-500 text-white" : "bg-gray-200"}`}
      >
        EN
      </button>
    </div>
  );
}
