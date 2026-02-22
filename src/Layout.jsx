import React, { useEffect } from 'react';
import { Toaster } from "sonner";

export default function Layout({ children }) {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="font-sans antialiased bg-background text-foreground min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap&display=swap');
        :root {
          --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }
        body {
          font-family: var(--font-sans);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Toaster position="top-right" richColors theme="dark" />
      {children}
    </div>
  );
}