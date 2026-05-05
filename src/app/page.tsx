"use client";

import Image from "next/image";
import { ArrowRight, Code2 } from "lucide-react";
import AboutPage from "./about/page";
import SkillsPage from "./skills/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import FooterPage from "./footer/page";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <section id="home">
        <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-blue-900/20 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-400/20 dark:bg-teal-900/20 blur-[120px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm mb-6">
                  <Code2 className="w-4 h-4" />
                  <span>Available for new opportunities</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                  Hi, I&apos;m{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
                    Developer
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-4">
                  Building digital experiences that matter.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
                  I&apos;m a passionate full-stack developer specializing in modern web technologies.
                  I craft responsive, accessible, and highly performant applications that solve real-world problems.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#projects"
                    onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl active:scale-95"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-md active:scale-95"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 to-teal-400 opacity-20 dark:opacity-40 group-hover:opacity-30 dark:group-hover:opacity-50 transition-opacity blur-2xl" />
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500 bg-slate-100 dark:bg-slate-900">
                    <Image
                      src="/aman.jpg"
                      alt="Amanu's Profile Picture"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-slate-100 dark:border-slate-800">
        <AboutPage />
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-slate-100 dark:border-slate-800">
        <SkillsPage />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-slate-100 dark:border-slate-800">
        <ProjectsPage />
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-slate-100 dark:border-slate-800">
        <ContactPage />
      </section>

      {/* FOOTER */}
      <FooterPage />
    </>
  );
}
