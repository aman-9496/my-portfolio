"use client";
// The "use client" directive at the very top tells Next.js that this component
// should be rendered on the client side (in the browser) rather than on the server.
// This is required because we are using React hooks like `useState`, `useEffect`, 
// and `useTheme` which need browser interactivity and state management.

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  // `useTheme` gives us the current theme ("light" or "dark") and a function `setTheme` to change it.
  const { theme, setTheme } = useTheme();
  
  // `mounted` state keeps track of whether the component has been rendered in the browser yet.
  // This helps prevent hydration mismatches between server and client.
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client after the initial render.
  // Once it runs, we set `mounted` to true, meaning it's safe to show theme-specific UI.
  useEffect(() => {
    setMounted(true);
  }, []);

  // If the component hasn't mounted yet, we return a placeholder (an empty div of the same size).
  // This prevents layout shift and ensures the server HTML matches the initial client HTML.
  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to avoid layout shift
  }

  // The main UI returns a button that toggles the theme when clicked.
  return (
    <button
      // When clicked, check if current theme is dark. If so, switch to light. Otherwise switch to dark.
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center justify-center w-full text-left"
      aria-label="Toggle Dark Mode"
    >
      {/* Conditionally render the Light Mode or Dark Mode icon and text based on the active theme */}
      {theme === "dark" ? (
        <>
          <Sun className="h-4 w-4 mr-2" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 mr-2" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
}
