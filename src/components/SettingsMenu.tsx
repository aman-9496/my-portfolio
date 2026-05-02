"use client";
// "use client" is necessary here because we are using interactive React hooks
// (`useState`, `useRef`, `useEffect`) and browser DOM events (like clicking outside the menu).

import { useState, useRef, useEffect } from "react";
import { Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function SettingsMenu() {
  // `isOpen` tracks whether the dropdown menu is currently visible (true) or hidden (false).
  const [isOpen, setIsOpen] = useState(false);
  
  // `menuRef` is a reference to the main container div. We use this to detect
  // if a user clicks outside the menu so we can close it automatically.
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    // This function runs every time there is a mouse click on the document.
    function handleClickOutside(event: MouseEvent) {
      // If the menu is rendered (`menuRef.current` exists) AND the click target
      // is NOT inside the menu container, then we close the menu.
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    // Listen for mousedown events (clicks) on the entire page
    document.addEventListener("mousedown", handleClickOutside);
    
    // Cleanup function: When the component unmounts, remove the event listener
    // to prevent memory leaks or errors.
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    // We attach the `menuRef` to this wrapper div so we know its physical location on the screen.
    <div className="relative" ref={menuRef}>
      <button
        // Clicking the settings button toggles the `isOpen` state between true and false.
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Settings"
      >
        {/* Render a Settings gear icon */}
        <Settings className="h-5 w-5" />
      </button>

      {/* If `isOpen` is true, render the dropdown menu below the button. */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-slate-900 ring-1 ring-black ring-opacity-5 dark:ring-white/10 border border-slate-200 dark:border-slate-800 z-50">
          <div className="py-1 p-2" role="menu" aria-orientation="vertical">
            <div className="px-3 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Settings
            </div>
            <div className="mt-1">
              {/* Inside the settings menu, we render the ThemeToggle component we commented earlier. */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
