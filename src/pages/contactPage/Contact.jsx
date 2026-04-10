import { FaPhone, FaEnvelope, FaTiktok } from "react-icons/fa";
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

      <div className="max-w-3xl mx-auto py-20 px-6 flex flex-col items-center justify-center">
        <div className="space-y-12 w-full flex flex-col items-center">
          <div className="bg-[#141414] p-10 rounded-3xl border border-gray-800 space-y-8 text-center md:text-left w-full max-w-md">
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
                icon={<FaTiktok />}
                label="TikTok"
                value="www.tiktok.com/saat.vibes"
              />
            </div>

            <div className="pt-8 border-t border-gray-800 flex gap-6 justify-center">
              <SocialIcon
                href="https://www.tiktok.com/@saat.vibes?_r=1&_t=ZS-95MeDlhvGQq"
                icon={<FaTiktok size={20} />}
              />
            </div>
          </div>

          <div className="h-80 w-full max-w-md bg-[#141414] rounded-3xl border border-gray-800 overflow-hidden relative group">
            <img
              src={ContactUsFoto}
              alt="Gym Motivation"
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-black/40">
              <p className="text-sm font-bold uppercase tracking-widest text-white/80">
                {t("contact_us_text_2")}
              </p>
            </div>
          </div>
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
