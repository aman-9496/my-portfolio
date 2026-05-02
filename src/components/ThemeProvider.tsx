"use client";
// "use client" is required here because `next-themes` relies on React Context, 
// which only works in Client Components. It accesses the browser's `localStorage`
// and DOM (`document.documentElement`) to apply the theme.

import * as React from "react";
// We import the actual ThemeProvider from "next-themes" and rename it to NextThemesProvider
// so we don't have naming conflicts with our own exported ThemeProvider.
import { ThemeProvider as NextThemesProvider } from "next-themes";

// This is a wrapper component that wraps our entire application in the NextThemesProvider.
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // It passes all props (like default theme, storage key, attribute to change) down to NextThemesProvider
  // and renders the children inside it so they can access the theme context.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
