"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import SettingsMenu from "./SettingsMenu";

const NAV_ITEMS = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "skills", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function scrollTo(href: string) {
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        >
          <div className="bg-gradient-to-br from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 p-1.5 rounded-lg text-white shadow-md">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
            Amanu Muhammed
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                active === item.href.slice(1)
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pl-2 ml-2 border-l border-slate-200 dark:border-slate-800">
            <SettingsMenu />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center space-x-2 md:hidden">
          <SettingsMenu />
          <button
            type="button"
            className="inline-flex items-center rounded-md p-2 text-slate-600 dark:text-slate-300 transition hover:bg-slate-100 dark:hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  active === item.href.slice(1)
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
