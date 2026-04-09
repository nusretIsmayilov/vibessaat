import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTiktok,
} from "react-icons/fa";
import ContactUsFoto from "../../images/ContactUs/contactUsFoto.jpg";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col bg-black min-h-screen">
      <div className="py-20 px-6 text-center bg-[#0f0f0f] border-b border-gray-900">
        <h1 className="text-5xl text-white md:text-6xl font-extrabold uppercase tracking-tighter italic">
          {t("contact")} <span className="text-red-600">{t("us")}</span>
        </h1>
        <div className="h-1 w-24 bg-red-600 mx-auto mt-6"></div>
        <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
          {t("contact_us_text_1")}
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="bg-[#141414] p-10 rounded-3xl border border-gray-800 space-y-8">
            <h3 className="text-2xl font-bold uppercase italic tracking-tight text-white">
              {t("contact_information")}
            </h3>

            <div className="space-y-6 text-gray-300">
              <ContactInfoItem
                icon={<FaPhone />}
                label={t("telephone")}
                value="+994 51 340 43 61"
              />
              <ContactInfoItem
                icon={<FaEnvelope />}
                label={t("email")}
                value="saatvibes@gmail.com"
              />
              <ContactInfoItem
                icon={<FaMapMarkerAlt />}
                label={t("studio")}
                value="Levent, İstanbul, Türkiye"
              />
            </div>

            <div className="pt-8 border-t border-gray-800 flex gap-6 justify-center">
              <SocialIcon
                href="https://www.tiktok.com/@saat.vibes?_r=1&_t=ZS-95MeDlhvGQq"
                icon={<FaTiktok size={20} />}
              />
              {/* <SocialIcon
                href="https://www.facebook.com/tural.sultanov.564"
                icon={<FaFacebookF size={20} />}
              /> */}
            </div>
          </div>

          <div className="h-80 bg-[#141414] rounded-3xl border border-gray-800 overflow-hidden relative group">
            <img
              src={ContactUsFoto}
              alt="Gym Motivation"
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-black/40">
              <p className="text-sm font-bold uppercase tracking-widest text-white/80">
                {t("discipline_foundation_everything")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#141414] p-12 rounded-3xl border border-gray-800 shadow-2xl">
          <h2 className="text-3xl font-bold uppercase italic tracking-tight mb-10 text-white">
            {t("send_message")}
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormInput label={t("name")} placeholder="Çağatay" type="text" />
              <FormInput
                label={t("last_name")}
                placeholder="Yılmaz"
                type="text"
              />
            </div>

            <FormInput
              label={t("email")}
              placeholder="yilmaz@email.com"
              type="email"
            />

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {t("your_main_goal")}
              </label>
              <select className="w-full bg-[#1a1a1a] border border-gray-800 text-white rounded-lg p-4 text-sm focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all outline-none appearance-none">
                <option>{t("weight_loss")}</option>
                <option>{t("muscle_mass_growth")}</option>
                <option>{t("toning_fitness")}</option>
                <option>{t("healthy_eating_habits")}</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {t("your_message")}
              </label>
              <textarea
                rows="6"
                placeholder={t("how_can_we_help")}
                className="w-full bg-[#1a1a1a] border border-gray-800 text-white rounded-lg p-4 text-sm focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] uppercase tracking-widest text-sm"
            >
              {t("send_message")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactInfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-5">
    <div className="text-red-600 text-xl bg-[#1a1a1a] p-3 rounded-full border border-gray-800">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
        {label}
      </p>
      <p className="text-base text-white font-semibold mt-1">{value}</p>
    </div>
  </div>
);

const FormInput = ({ label, placeholder, type }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-[#1a1a1a] border border-gray-800 text-white rounded-lg p-4 text-sm focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all outline-none"
    />
  </div>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-white bg-[#1a1a1a] p-4 rounded-full border border-gray-800 transition-all hover:border-red-600 hover:scale-110"
  >
    {icon}
  </a>
);

export default Contact;
