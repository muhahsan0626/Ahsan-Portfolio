import React from 'react';
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const navLinks = ["Home", "About", "Projects", "Experience", "Certifications", "Blog", "Contact"];

export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-sm py-10 sm:py-12 px-4 sm:px-6 mt-16 sm:mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-6 sm:gap-8">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <Terminal className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
            <span className="font-mono text-base sm:text-lg font-bold">~/portfolio<span className="text-primary">_</span></span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-md">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => onNavigate(link.toLowerCase())}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Github className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Linkedin className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Mail className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-primary/20">
          <p className="text-center text-xs sm:text-sm text-muted-foreground font-mono">
            <span className="text-primary">{'>'}</span> <span className="hidden sm:inline">Built with React + Tailwind CSS</span>
            <span className="hidden sm:inline mx-3 text-primary/50">|</span>
            © {new Date().getFullYear()} <span className="text-primary">Muhammad Ahsan</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}