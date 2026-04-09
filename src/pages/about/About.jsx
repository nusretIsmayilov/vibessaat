import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import foto1 from "../../images/about/foto1.jpg";
import foto2 from "../../images/about/foto2.jpg";
import foto3 from "../../images/about/foto3.jpg";
import foto4 from "../../images/about/foto4.jpg";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <motion.img
          src={foto1}
          alt="coach"
          className="w-40 h-40 mx-auto rounded-full object-cover mb-6 border-4 border-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        />

        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter italic">
            {t("helping_your_build")}{" "}
            <span className="text-red-500">{t("stronger_healthier_body")}</span>
          </span>
          <div className="h-1 w-64 bg-red-600 mx-auto mt-6"></div>
        </motion.h1>

        <p className="text-white mt-4 max-w-2xl mx-auto">
          {t("i_create_simple")}
        </p>
      </section>

      {/* STORY */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {t("my_story")}
        </motion.h2>

        <motion.p
          className="text-gray-300 leading-7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {t("my_story_text_1")}
          <br />
          <br />
          {t("my_story_text_2")}
          <br />
          <br />
          {t("my_story_text_3")}
        </motion.p>
      </section>

      {/* MISSION */}
      <section className="py-16 px-6 bg-gray-300 text-black text-center">
        <h2 className="text-3xl font-bold">{t("my_mission")}</h2>

        <p className="mt-4 max-w-3xl mx-auto text-gray-700">
          {t("my_mission_text")}
        </p>
      </section>

      {/* WHY ME */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          {t("why_choose_my_programs")}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: t("why_choose_my_programs_title_1"),
              desc: t("why_choose_my_programs_text_1"),
            },
            {
              title: t("why_choose_my_programs_title_2"),
              desc: t("why_choose_my_programs_text_2"),
            },
            {
              title: t("why_choose_my_programs_title_3"),
              desc: t("why_choose_my_programs_text_3"),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-300 text-black p-6 rounded-xl shadow-lg"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-16 px-6 bg-gray-300 text-black text-center">
        <h2 className="text-3xl font-bold">{t("real_results")}</h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-700">
          {t("real_results_text")}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <img src={foto2} alt={foto2.title} className="rounded-xl" />
          <img src={foto3} alt={foto3.title} className="rounded-xl" />
          <img src={foto4} alt={foto4.title} className="rounded-xl" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          {t("ready_start_your_transformation")}
        </h2>

        <Link
          to="/survey"
          className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          {t("start_your_free_survey")}
        </Link>
      </section>
    </div>
  );
}
