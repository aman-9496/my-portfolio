"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Food Ordering",
    description:
      "A fully responsive and interactive food ordering web application. Features a modern UI allowing users to browse menus, customize orders, and experience a smooth checkout process across all devices.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    live: "https://github.com/aman-9496/food_ordering",
    github: "https://github.com/aman-9496/food_ordering"
  },
  {
    title: "Mosque Website",
    description:
      "A full-stack mosque and madrasa management platform to digitize community services — prayer times, donations, events, Iʿtikāf registration, futsal booking, and admin dashboards. Fully deployed with domain and HTTPS.",
    tags: ["Django", "Python", "React", "PostgreSQL", "Docker", "AWS"],
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80",
    live: "https://github.com/aman-9496/Mosque_website",
    github: "https://github.com/aman-9496/Mosque_website",
  },
  {
    title: "E-commerce Website",
    description:
      "A modern full-stack e-commerce platform — browse products, add to cart, secure purchases, order management, authentication, payment integration, and admin dashboard. Scalable backend with responsive frontend.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    live: "https://your-ecommerce-site.com",         // TODO: replace with live deploy URL
    github: "https://github.com/aman-9496/ecommerce-website",
  },
  {
    title: "Ethio_HRMS_System",
    description:
      "A Human Resource Management System designed for Ethiopian organizations. Manages employees, departments, attendance, and HR-related processes through a modern web interface built for real-world organizational needs.",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    live: "https://ethio-hrms-system-l4bk.vercel.app",
    github: "https://github.com/aman-9496/Ethio_HRMS_System",
  },
];

function ProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${idx * 100}ms` }}
      className={`group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm flex flex-col
        transition-all duration-500
        hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10
        hover:border-blue-400/50 dark:hover:border-blue-500/50
        hover:-translate-y-1
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Glow border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(59,130,246,0.3)" }} />

      {/* Image */}
      <a href={project.github} target="_blank" rel="noopener noreferrer"
        className="relative w-full h-48 sm:h-52 overflow-hidden block flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="flex items-center gap-2 text-white font-semibold text-sm bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            View Code
          </span>
        </div>
      </a>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center justify-center mb-3 flex-shrink-0">
          {idx + 1}
        </div>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span key={tag}
              className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95">
            <ExternalLink className="w-4 h-4" />
            View Project
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 active:scale-95">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          Projects
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Real-world applications I&apos;ve designed, built, and deployed from scratch.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>
    </div>
  );
}
