import { useState } from "react";
import { Button, Burger, Drawer, ScrollArea } from "@mantine/core";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [opened, setOpened] = useState(false);

  const { t } = useTranslation();

  const navLinks = [
    { label: t("home"), path: "/home" },
    { label: t("products"), path: "/products" },
    { label: t("contactUs"), path: "/contact" },
    // { label: t("about"), path: "/about" },
  ];

  return (
    <header className="w-full shadow-sm bg-[#F8F2EE]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/home" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="logo" className="w-8 rounded-[50%]" />
          <span className="text-2xl font-semibold text-[#1d2b3a] ">
            VİBES SAAT
          </span>
        </NavLink>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-red-500 font-medium text-2xl border-b-2 pb-1 transition ${
                  isActive ? "border-red-500 text-red-500" : "border-transparent"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher/>
        </div>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <Burger opened={opened} onClick={() => setOpened(true)} />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        size="80%"
        title="Menu"
      >
        <ScrollArea className="h-full">
          <div className="flex flex-col gap-6 mt-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setOpened(false)}
                className={({ isActive }) =>
                  `text-lg font-medium border-b pb-1 ${
                    isActive ? "text-red-500 border-red-500" : "text-gray-700 border-transparent"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <LanguageSwitcher/>
          </div>
        </ScrollArea>
      </Drawer>
    </header>
  );
}