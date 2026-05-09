"use client";

import React from "react";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-12">
          {/* Left Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Amanu</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm text-lg">
              I design and build fast, reliable digital products with clear user-focused experiences.
            </p>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => scrollToSection(e, item)}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize text-lg inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Contact</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-lg">
              <li>
                <a 
                  href="mailto:amanu235689@gmail.com"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  amanu235689@gmail.com
                </a>
              </li>
              <li>+251994960505</li>
              <li>Bahir Dar, Ethiopia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center flex flex-col items-center gap-4">
          <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Get In Touch</h4>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            Share your idea, timeline, and goals. I can help you turn it into a polished product.
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-4">
            &copy; {new Date().getFullYear()} Amanu Muhammed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
