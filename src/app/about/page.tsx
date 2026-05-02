"use client";

import { Award, Briefcase, Calendar, Code2, Users, Layers, CheckCircle2, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 animate-fade-in-up">
      {/* Page Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          About Me
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Software engineer focused on practical, high-quality products that are fast, clear, and built to scale.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { label: "Projects", value: "5+", icon: <Code2 className="w-5 h-5" /> },
          { label: "Clients", value: "3+", icon: <Users className="w-5 h-5" /> },
          { label: "Years Exp", value: "1+", icon: <Calendar className="w-5 h-5" /> },
          { label: "Technologies", value: "10+", icon: <Layers className="w-5 h-5" /> },
        ].map((stat, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Row 1: Story and Journey (2 Columns, 1 Row, Inside Boxes) */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">

        {/* Box 1: My Story */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-sm h-full">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">My Story</h2>
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400">
            <p className="leading-relaxed">
              I am a junior software engineer and Information Systems graduate specializing in backend development, system design, and AI-driven solutions. I have hands-on experience building secure, scalable web applications using modern technologies, with a strong focus on databases, authentication, and cloud deployment.
            </p>
            <p className="leading-relaxed mt-4">
              Alongside my academic background in Information Systems and Accounting, I actively work on real-world projects and freelance solutions, aiming to build reliable systems that solve practical business problems. My long-term goal is to grow as an independent, globally competitive developer and technology entrepreneur.
            </p>
          </div>

          <Link href="/" className="inline-flex items-center gap-2 mt-8 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group">
            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Box 2: My Journey */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-sm h-full">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">My Journey</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[1.15rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
            {/* Item 1 */}
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-1 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-bold mb-1">2026</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Web Development Student & Self-Learner</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Currently learning modern web development technologies including HTML, CSS, JavaScript, and React/Next.js. Building personal projects to improve problem-solving skills and practical development experience.</p>
            </div>

            {/* Item 2 */}
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-1 w-10 h-10 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-sm text-teal-600 dark:text-teal-400 font-bold mb-1">2025</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Information Systems Student</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">3rd year BSc student in Information Systems, studying software development, database systems, networking, and system analysis.</p>
            </div>

            {/* Item 3 */}
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-1 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-sm text-indigo-600 dark:text-indigo-400 font-bold mb-1">2025</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Personal Web Development Projects</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Developed several web projects to strengthen front-end skills, including a Personal Portfolio Website, Calculator App, Random Quote Generator, Rock Paper Scissors Game, and Color Flipper.</p>
            </div>

            {/* Item 4 */}
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-1 w-10 h-10 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-bold mb-1">2024</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Started Learning Programming</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Began learning programming fundamentals including HTML, CSS, JavaScript, Git, and GitHub while exploring how modern websites are built and deployed.</p>
            </div>

          </div>
        </div>

      </div>

      {/* Row 2: Core Strengths and Certificates */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* Core Strengths */}
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Core Strengths</h2>
          <div className="grid grid-cols-2 gap-4">
            {["Problem Solver", "Team Player", "Continuous Learner", "Innovation Focused"].map((trait, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span>{trait}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Certificates</h2>
          <div className="space-y-4">

            <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 rounded-2xl flex items-center gap-4 transition-transform hover:-translate-y-1">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <button onClick={() => setSelectedImage("/academic.jpg")} className="group/link block text-left outline-none">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight mb-1 group-hover/link:text-amber-600 dark:group-hover/link:text-amber-400 group-hover/link:underline transition-colors">
                    Academic integrity
                  </h3>
                </button>
                <p className="text-sm text-slate-500 dark:text-slate-400">e-SHE</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 rounded-2xl flex items-center gap-4 transition-transform hover:-translate-y-1">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <button onClick={() => setSelectedImage("/fundamental.jpg")} className="group/link block text-left outline-none">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight mb-1 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 group-hover/link:underline transition-colors">
                    Android Development Fundamental
                  </h3>
                </button>
                <p className="text-sm text-slate-500 dark:text-slate-400">Udacity</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Image Modal for Certificates */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Certificate View</h3>
              <button 
                onClick={() => setSelectedImage(null)}
                className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </button>
            </div>
            
            {/* Modal Body / Image Area */}
            <div className="relative w-full h-[70vh] bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-4">
              <Image 
                src={selectedImage}
                alt="Certificate"
                fill
                className="object-contain" // This ensures the image always fits perfectly inside without stretching!
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
