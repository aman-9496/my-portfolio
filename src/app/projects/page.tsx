import Image from "next/image";
import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Mosque Website",
    description:
      "A full-stack mosque and madrasa management platform designed to digitize community services. The system includes prayer time management, donation tracking, event announcements, Iʿtikāf registration, futsal booking, and administrative dashboards. Built with a secure backend API and a responsive frontend, the platform is fully deployed with domain, HTTPS, and production-ready infrastructure, providing real-world functionality for Teqwa Masjid and its community.",
    tags: ["Django", "Python", "React", "PostgreSQL", "Docker", "AWS"],
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80",
    live: "https://your-mosque-site.com",
    github: "https://github.com/your_username/mosque-website",
  },
  {
    title: "E-commerce Website",
    description:
      "A modern full-stack e-commerce platform that allows users to browse products, add items to cart, make secure purchases, and manage orders. Includes authentication, product management, payment integration, and admin dashboard. Built with scalable backend and responsive frontend.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    live: "https://your-ecommerce-site.com",
    github: "https://github.com/your_username/ecommerce-website",
  },
];

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

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            {/* Image — click goes to GitHub */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-52 overflow-hidden block"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white font-semibold text-sm bg-black/50 px-4 py-2 rounded-full">
                  <GitBranch className="w-4 h-4" /> View Code
                </span>
              </div>
            </a>

            {/* Card Body */}
            <div className="p-8 flex flex-col flex-1">
              {/* Number badge */}
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-base flex items-center justify-center mb-4">
                {idx + 1}
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:bg-slate-700 dark:hover:bg-slate-100 transition-all shadow-sm hover:shadow-md active:scale-95"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95"
                >
                  <GitBranch className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
