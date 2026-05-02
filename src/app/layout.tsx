/*
 * የፕሮጀክቱ ዋና ማብራሪያ (MAIN TOPIC):
 * ይህ ፕሮጀክት ዘመናዊ የዴቨሎፐር ፖርትፎሊዮ (Developer Portfolio) ነው። 
 * ዋና አላማው የእርስዎን ችሎታዎች፣ የሰሩዋቸውን ስራዎች እና የስራ ልምድዎን ለቀጣሪዎች ማሳየት ነው።
 * የተሰራው በ Next.js 14 (App Router)፣ React፣ እና Tailwind CSS ነው።
 * 
 * ኮድ መሮጥ የሚጀምረው ከየት ነው? (EXECUTION START & CALL FLOW):
 * 1. መነሻ (Execution Start): በ Next.js App Router ውስጥ፣ `src/app/layout.tsx` የፕሮጀክቱ ዋና መነሻ (Root) ነው።
 *    አንድ ሰው ዌብሳይትዎን ሲከፍት (ለምሳሌ localhost:3000)፣ Next.js መጀመሪያ ይህንን ፋይል ያነባል።
 * 2. ማዕቀፍ (Wrapping Content): ይህ layout ሁሉንም የዌብሳይቱን ገፆች (Pages) ይጠቀልላል። `children` የሚባለው 
 *    ተለዋዋጭ (Variable) እያነበቡት ያለውን የተለየ ገፅ (ለምሳሌ Home Page) ይወክላል።
 * 3. ሌሎች አካላትን መጥራት (Component Calls): እዚህ ጋር `<ThemeProvider>` (የዳርክ ሞድ ማስተካከያን) እና 
 *    `<Navbar>` (የላይኛውን ሜኑ) እንጠራለን። ይህ ማለት ኔቪጌሽን ሜኑው በሁሉም ገፆች ላይ ሁልጊዜ ይታያል ማለት ነው።
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Using relative paths to ensure imports resolve correctly.
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Modern personal portfolio built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300 flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
