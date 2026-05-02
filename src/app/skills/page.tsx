"use client";

import { useState, useEffect, useRef } from "react";
import {
  Server,
  Settings,
  Smartphone,
  Database,
  Layout,
  Bot,
  ArrowRight,
  Code2,
  Wrench,
  Users,
  PenTool,
  Layers,
  ChevronDown,
} from "lucide-react";

function SkillBar({ name, animate }: { name: string; animate: boolean }) {
  return (
    <div>
      <div className="flex justify-between items-end mb-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {name}
        </span>
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
          50%
        </span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full bg-slate-500 dark:bg-slate-400 transition-all duration-1000 ease-out"
          style={{ width: animate ? "50%" : "0%" }}
        />
      </div>
    </div>
  );
}

function CategoryCard({
  icon,
  name,
  skills,
}: {
  icon: React.ReactNode;
  name: string;
  skills: string[];
}) {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(t);
    } else {
      setAnimate(false);
    }
  }, [open]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
            {icon}
          </div>
          <span className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
            {name}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 flex flex-col gap-4 border-t border-slate-200 dark:border-slate-700 pt-4">
          {skills.map((skill) => (
            <SkillBar key={skill} name={skill} animate={animate} />
          ))}
        </div>
      )}
    </div>
  );
}

function ServiceCard({
  icon,
  tags,
  title,
  description,
}: {
  icon: React.ReactNode;
  tags: string[];
  title: string;
  description: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
          {title}
        </h3>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
        {expanded ? description : `${description.slice(0, 80)}...`}
      </p>

      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white mt-auto w-fit"
      >
        {expanded ? "Show Less" : "Learn More"}
        <ArrowRight
          className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-90" : "group-hover:translate-x-1"
            }`}
        />
      </button>
    </div>
  );
}

export default function SkillsPage() {
  const services = [
    {
      icon: <Server className="w-6 h-6" />,
      tags: ["Node.js", "Express.js", "NestJS", "+6"],
      title: "Backend & Systems Development",
      description:
        "Secure authentication & authorization, scalable backend systems, RESTful API design, business logic implementation, and third-party payment integrations.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      tags: ["Linux (Ubuntu)", "Nginx", "Docker", "+5"],
      title: "Integration & DevOps",
      description:
        "Deploy, automate, and optimize systems for production environments with reliability, CI/CD, and performance in mind.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      tags: ["React Native", "Expo", "REST APIs", "+3"],
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications that connect seamlessly with backend systems for both iOS and Android.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      tags: ["PostgreSQL", "MySQL", "MongoDB", "+4"],
      title: "Database Architecture",
      description:
        "Structured, optimized, and secure databases to ensure data integrity, quick query times, and system performance.",
    },
    {
      icon: <Layout className="w-6 h-6" />,
      tags: ["React.js", "Next.js", "TypeScript", "+5"],
      title: "Frontend Engineering",
      description:
        "Responsive, modern, and conversion-focused user interfaces with clean UX, rich animations, and optimized load performance.",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      tags: ["OpenAI API", "Hugging Face", "Logic Design", "+3"],
      title: "AI Automation & Business",
      description:
        "Practical AI-driven solutions to automate operations, analyze data, and dramatically improve customer engagement.",
    },
  ];

  const categories = [
    {
      id: "tools",
      name: "Tools",
      icon: <Wrench className="w-4 h-4" />,
      skills: [
        "IDE workflow, Vibe coding and intermediate prompting AI",
        "Git & GitHub",
        "Docker",
        "AWS",
        "CDN",
        "Figma / Adobe XD",
        "Linux Ubuntu (basic)",
        "Postman, Swagger (API documentation)",
      ],
    },
    {
      id: "soft-skills",
      name: "Soft Skills",
      icon: <Users className="w-4 h-4" />,
      skills: [
        "Independent & self-driven learner",
        "Clear technical communication",
        "Business-oriented thinking (Accounting + IS background)",
        "Strong problem-solving mindset",
      ],
    },
    {
      id: "design",
      name: "Design",
      icon: <PenTool className="w-4 h-4" />,
      skills: [
        "System design & documentation",
        "Requirement Analysis and Architecture Design",
        "Database Schema Design",
      ],
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: <Layout className="w-4 h-4" />,
      skills: [
        "HTML5, CSS3, JavaScript (ES6+)",
        "API Integration",
        "Performance Optimization",
        "Responsive Design",
        "TypeScript, JavaScript",
        "State Management (Zustand, TanStack Query)",
        "React, Next.js (React), Angular",
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="w-4 h-4" />,
      skills: [
        "RESTful API Development",
        "Authentication & Authorization (JWT, OAuth)",
        "Role-Based Access Control (RBAC)",
        "API Security & Validation",
        "Golang, Node.js (Express), NestJS, Django (Python)",
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="w-4 h-4" />,
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "SQL Queries & Optimization",
        "ORM Tools (Prisma, TypeORM)",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          Services &amp; Skills
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Comprehensive development services and technical expertise to bring your ideas to life.
        </p>
      </div>

      <div className="mb-24">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
          <Code2 className="text-slate-500 w-7 h-7" />
          Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              icon={service.icon}
              tags={service.tags}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
          <Layers className="text-slate-500 w-7 h-7" />
          Technical skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              icon={cat.icon}
              name={cat.name}
              skills={cat.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
