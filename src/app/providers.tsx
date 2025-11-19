"use client";

import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/navbar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}