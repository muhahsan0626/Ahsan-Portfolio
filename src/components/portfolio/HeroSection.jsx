import React from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Code2,
} from "lucide-react";

const skillIcons = {
  JavaScript: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
      <path d="M9 23.3l2.3-1.4c.45.8.86 1.47 1.84 1.47.94 0 1.54-.37 1.54-1.82V12.5h2.84v9.08c0 3-1.76 4.34-4.32 4.34-2.32 0-3.66-1.2-4.2-2.62z" fill="#323330"/>
      <path d="M19.3 23l2.3-1.35c.62 1.01 1.42 1.74 2.84 1.74 1.2 0 1.96-.6 1.96-1.42 0-.99-.78-1.34-2.1-1.92l-.72-.31c-2.08-.88-3.46-2-3.46-4.34 0-2.16 1.64-3.8 4.22-3.8 1.84 0 3.14.64 4.08 2.3l-2.24 1.44c-.5-.88-1.02-1.24-1.84-1.24-.84 0-1.38.54-1.38 1.24 0 .86.54 1.22 1.78 1.74l.72.31c2.46 1.05 3.84 2.12 3.84 4.54 0 2.6-2.04 4.02-4.78 4.02-2.68 0-4.42-1.28-5.22-2.95z" fill="#323330"/>
    </svg>
  ),
  TypeScript: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#3178C6"/>
      <path d="M7 17h3v8h2.4v-8h3v-2H7v2zm11.5 8.2c.7.4 1.54.63 2.44.63 2.42 0 3.84-1.26 3.84-3.14 0-1.68-.96-2.48-2.8-3.16l-.58-.22c-.9-.36-1.28-.58-1.28-1.16 0-.46.36-.82.96-.82.58 0 .96.24 1.3.82l1.52-.98c-.64-1.12-1.52-1.56-2.82-1.56-1.78 0-2.92 1.14-2.92 2.64 0 1.64.96 2.42 2.38 2.96l.58.22c.98.4 1.56.66 1.56 1.32 0 .56-.52.98-1.36.98-1.02 0-1.58-.52-2.02-1.2l-1.58.92c.58 1.14 1.66 2.02 3.42 2.02v-.27z" fill="#fff"/>
    </svg>
  ),
  Python: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M15.9 3C14.1 3 12.5 3.2 11 3.5 8.2 4 7.3 5.2 7.3 7v3.3h8.7v1.1H7.3 5.3c-1.8 0-3.5 1.1-4 3.3-.5 2.5-.6 4.1 0 6.7.4 1.9 1.4 3.3 3.2 3.3H7V21.3c0-2.1 1.8-3.9 4-4h8c1.8 0 3.3-1.5 3.3-3.3V7c0-1.7-1.4-2.9-3.3-3.3-1.2-.2-2.5-.4-3.7-.4l.6-.3zM11 5.5c.8 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3z" fill="#306998"/>
      <path d="M24.7 11.4v3c0 2.2-1.9 4.1-4 4.1h-8c-1.7 0-3.3 1.6-3.3 3.3v6c0 1.7 1.5 2.7 3.3 3.1 2.2.6 4.4.7 7 0 1.8-.5 3.3-1.4 3.3-3.1v-2.3h-6.7v-1.1h10c1.9 0 2.6-1.3 3.4-3.3.8-2 .8-3.8 0-6.4-.6-1.9-1.7-3.3-3.4-3.3h-1.6zm-4 15c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3-.8 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3z" fill="#FFD43B"/>
    </svg>
  ),
  Java: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M12.3 23.7s-1.2.7.9 1c2.5.3 3.9.2 6.7-.3 0 0 .7.5 1.8.9-6.3 2.7-14.3-.2-9.4-1.6z" fill="#5382A1"/>
      <path d="M11.3 20.5s-1.4 1 .7 1.2c2.7.3 4.9.3 8.6-.4 0 0 .5.5 1.3.8-7.6 2.2-16.2.2-10.6-1.6z" fill="#5382A1"/>
      <path d="M17.6 14.5c1.5 1.8-.4 3.4-.4 3.4s4-2 2.2-4.6c-1.7-2.4-3-3.6 4-7.7 0 0-11 2.7-5.8 8.9z" fill="#E76F00"/>
      <path d="M25.3 26s.9.8-1 1.4c-3.6 1.1-15.1 1.4-18.3 0-1.2-.5 1-1.2 1.7-1.3.7-.2 1.1-.1 1.1-.1-1.3-.9-8.3 1.8-3.6 2.5 12.9 2.1 23.5-.9 20.1-2.5z" fill="#5382A1"/>
      <path d="M12.9 17.1s-5.9 1.4-2.1 1.9c1.6.2 4.8.2 7.8-.1 2.4-.2 4.8-.7 4.8-.7s-.8.4-1.5.8c-6 1.6-17.4.8-14.1-.8 2.8-1.3 5.1-.9 5.1-.9z" fill="#5382A1"/>
      <path d="M22.5 22.1c6.1-3.2 3.3-6.2 1.3-5.8-.5.1-.7.2-.7.2s.2-.3.5-.4c3.9-1.4 6.9 4-1.3 6.2 0 0 .1-.1.2-.2z" fill="#5382A1"/>
      <path d="M19.4 3s3.4 3.4-3.2 8.5c-5.3 4.1-1.2 6.5 0 9.2-3.1-2.8-5.3-5.2-3.8-7.5C14.6 10.2 20.8 8.7 19.4 3z" fill="#E76F00"/>
    </svg>
  ),
  SQL: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="8" rx="10" ry="4" fill="#00BCF2" opacity="0.2"/>
      <ellipse cx="16" cy="8" rx="10" ry="4" stroke="#00BCF2" strokeWidth="1.5" fill="none"/>
      <path d="M6 8v8c0 2.2 4.5 4 10 4s10-1.8 10-4V8" stroke="#00BCF2" strokeWidth="1.5" fill="none"/>
      <path d="M6 16v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8" stroke="#00BCF2" strokeWidth="1.5" fill="none"/>
      <ellipse cx="16" cy="16" rx="10" ry="4" stroke="#00BCF2" strokeWidth="1" fill="none" opacity="0.4"/>
    </svg>
  ),
  React: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="3" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.3" fill="none"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  ),
  "Node.js": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M16 3l11.3 6.5v13L16 29 4.7 22.5v-13L16 3z" fill="#68A063" opacity="0.15"/>
      <path d="M16 3l11.3 6.5v13L16 29 4.7 22.5v-13L16 3z" stroke="#68A063" strokeWidth="1.5" fill="none"/>
      <path d="M16 3v13l11.3 6.5" stroke="#68A063" strokeWidth="1.2" fill="none" opacity="0.5"/>
      <path d="M16 16L4.7 9.5" stroke="#68A063" strokeWidth="1.2" fill="none" opacity="0.5"/>
      <path d="M20 19.5v-6L16 11l-4 2.5v6L16 22l4-2.5z" fill="#68A063"/>
    </svg>
  ),
  Express: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M4 24h2l2.7-6.7L11.4 24h2L9.7 16l3.4-8h-2L8.7 14.5 6.3 8H4.2l3.4 8L4 24z" fill="currentColor" opacity="0.85"/>
      <path d="M15 24h2V18l5.6 6h2.4L19.5 16 25 8h-2.3L17 14.2V8h-2v16z" fill="currentColor" opacity="0.85"/>
    </svg>
  ),
  Django: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#092E20"/>
      <path d="M13 6h4v14.8c-2 .5-3.5.6-5.2.6-3.8 0-5.8-1.7-5.8-5.2 0-3.3 2.1-5.5 5.4-5.5.6 0 1.1.1 1.6.2V6zm0 8.8c-.5-.2-.9-.3-1.5-.3-1.8 0-2.8 1.1-2.8 3.1 0 1.9 1 3 2.8 3 .5 0 .9 0 1.5-.2v-5.6z" fill="#fff"/>
      <rect x="20" y="6" width="4" height="3.5" rx="0.5" fill="#fff"/>
      <rect x="20" y="11" width="4" height="10" rx="0.5" fill="#fff"/>
    </svg>
  ),
  "Next.js": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="13" fill="currentColor"/>
      <path d="M13 11v10l8.5-5.5v-1.5L13 11z" fill="var(--background, #0a0a0a)"/>
      <rect x="21" y="11" width="2" height="10" rx="0.7" fill="var(--background, #0a0a0a)"/>
    </svg>
  ),
  Git: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M30.4 14.6L17.4 1.6a2 2 0 0 0-2.8 0L11.8 4.4l3.6 3.6c.8-.3 1.8-.1 2.4.5.7.7.8 1.7.5 2.5l3.4 3.4c.8-.3 1.8-.1 2.5.5a2 2 0 1 1-2.8 2.8c-.7-.7-.9-1.8-.5-2.6l-3.2-3.2V21c.2.1.4.3.6.5a2 2 0 1 1-2.8 0c.2-.2.4-.4.7-.5v-8.7c-.2-.1-.5-.3-.7-.5a2 2 0 0 1-.4-2.2L11.5 6.2 1.6 16.1a2 2 0 0 0 0 2.8l13 13a2 2 0 0 0 2.8 0L30.4 17.4a2 2 0 0 0 0-2.8z" fill="#F05033"/>
    </svg>
  ),
  Docker: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M18.6 14.4h2.8v-2.5h-2.8v2.5zm-3.4 0h2.8v-2.5h-2.8v2.5zm-3.4 0h2.8v-2.5h-2.8v2.5zm-3.4 0h2.8v-2.5H8.4v2.5zm3.4-3h2.8V8.8h-2.8v2.5zm3.4 0h2.8V8.8h-2.8v2.5zm3.4 0h2.8V8.8h-2.8v2.5zm0-3.1h2.8V5.8h-2.8v2.5zm3.4 3.1h2.8V8.8H22v2.5z" fill="#2496ED"/>
      <path d="M31 15c-.9-.6-2.9-.8-4.4-.5-.2-1.4-1-2.7-2.5-3.8l-.8-.6-.6.9c-.7 1-1.1 2.5-1 3.9.1.5.2 1.5.8 2.3-.5.3-1.6.7-3.1.7H.8c-.4 2.1.2 4.8 1.7 6.7 1.4 1.8 3.5 2.7 6.2 2.7 5.9 0 10.3-2.7 12.3-7.7.8 0 2.5 0 3.4-1.7l.1-.1.8-1.5-1-.6-.3.2z" fill="#2496ED"/>
    </svg>
  ),
  AWS: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M9.2 16.5l-.9 3L7.4 16.5H5.8l1.7 5h1.6l.9-2.9.9 2.9h1.6l1.7-5h-1.5l-.9 3-.9-3H9.2z" fill="#FF9900"/>
      <path d="M14.7 19.6c0 1.3 1 2 2.3 2 .8 0 1.4-.2 1.9-.7v.6h1.4v-3.3c0-1.4-1-2.1-2.3-2.1-1 0-1.8.3-2.4.9l.7.9c.4-.4 1-.6 1.5-.6.7 0 1 .3 1 .8v.3h-.8c-1.6 0-3.3.3-3.3 2v.2zm1.4-.1c0-.6.7-.9 1.5-.9h.8v.4c0 .7-.6 1.2-1.4 1.2-.6 0-.9-.3-.9-.7z" fill="#FF9900"/>
      <path d="M21.6 19.8c.5.4 1.2.6 1.9.6 1.3 0 2.2-.6 2.2-1.6 0-.8-.6-1.3-1.6-1.5l-.5-.1c-.5-.1-.7-.2-.7-.5 0-.3.3-.5.7-.5.5 0 .9.2 1.3.4l.6-.9c-.4-.4-1.1-.6-1.8-.6-1.2 0-2 .6-2 1.6 0 .8.5 1.3 1.5 1.5l.5.1c.5.1.7.3.7.5 0 .3-.3.5-.8.5-.6 0-1.1-.2-1.5-.5l-.5.9v.1z" fill="#FF9900"/>
      <path d="M8 23.5c3 1.9 6.2 2.5 9.9 1.2.5-.2 1-.5 1.3-.6l.3-.2-.9-.8c-3.2 1.8-7 2.1-10.2.7l-.4-.3z" fill="#FF9900"/>
      <path d="M22.8 22.6c-.4.4-.3.5.2.3 2.7-1.4 4.6-3.2 5.6-5.8l.1-.2c.1-.4.1-.5-.3-.3-1.3.8-3.5 2-3.5 2" fill="#FF9900"/>
    </svg>
  ),
  PostgreSQL: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M22.8 4.2c-2-.2-3.7.4-4.9 1.2a7 7 0 0 0-3.6-.9c-1.2 0-2.4.3-3.2.9-1.2-.6-2.8-1-4.2-.6-1.9.6-3.3 2.3-3.6 4.4-.6 3.1.5 7.2 2.2 9.9.7 1.3 1.8 2.6 3.1 2.6 1 0 1.5-.4 2.2-1 .5.2 1.1.4 1.8.4-.2.5-.3 1.1-.3 1.8v4.5c0 .9.7 1.6 1.6 1.6h4.2c.9 0 1.6-.7 1.6-1.6v-.3l.2 0c.9 0 1.6-.7 1.6-1.6v-2.6c0-.2.2-.5.5-.9.8-1 1.9-2.4 2.2-4.6.1-.8.1-1.6 0-2.4.9-1.1 1.5-2.2 1.5-3.7 0-3.1-1.4-6.1-3.9-6.8z" stroke="#336791" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="1.3" fill="#336791"/>
      <circle cx="19" cy="12" r="1.3" fill="#336791"/>
    </svg>
  ),
  Redis: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="9.5" rx="12" ry="3.5" fill="#D82C20" opacity="0.15"/>
      <ellipse cx="16" cy="9.5" rx="12" ry="3.5" stroke="#D82C20" strokeWidth="1.3" fill="none"/>
      <path d="M4 9.5v6.5c0 1.9 5.4 3.5 12 3.5s12-1.6 12-3.5V9.5" stroke="#D82C20" strokeWidth="1.3" fill="none"/>
      <path d="M4 16v6.5c0 1.9 5.4 3.5 12 3.5s12-1.6 12-3.5V16" stroke="#D82C20" strokeWidth="1.3" fill="none"/>
      <path d="M16 6.5l3 2h-2.3l-.7 2-.7-2H13l3-2z" fill="#D82C20"/>
    </svg>
  ),
  "CI/CD": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="8" cy="8" r="3.5" stroke="#06B6D4" strokeWidth="1.5" fill="none"/>
      <circle cx="24" cy="8" r="3.5" stroke="#06B6D4" strokeWidth="1.5" fill="none"/>
      <circle cx="16" cy="24" r="3.5" stroke="#06B6D4" strokeWidth="1.5" fill="none"/>
      <path d="M8 11.5v4a3 3 0 0 0 3 3h3" stroke="#06B6D4" strokeWidth="1.5"/>
      <path d="M24 11.5v4a3 3 0 0 1-3 3h-3" stroke="#06B6D4" strokeWidth="1.5"/>
      <path d="M16 20.5v-3" stroke="#06B6D4" strokeWidth="1.5"/>
      <circle cx="8" cy="8" r="1.2" fill="#06B6D4"/>
      <circle cx="24" cy="8" r="1.2" fill="#06B6D4"/>
      <circle cx="16" cy="24" r="1.2" fill="#06B6D4"/>
    </svg>
  ),
};

const skills = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "SQL", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Git", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "CI/CD", category: "DevOps" },
];

export default function HeroSection({ onNavigate }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 tech-grid-bg opacity-40"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>

      {/* Floating Code Elements */}
      <div className="hidden lg:block absolute top-20 right-10 text-primary/20 font-mono text-sm animate-pulse">
        {"{ code }"}
      </div>
      <div className="hidden lg:block absolute bottom-40 left-10 text-primary/20 font-mono text-sm animate-pulse delay-300">
        {"</>"}
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight">
                Hi, I'm <span className="text-primary">Muhammad Ahsan</span>
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mt-2 font-semibold">
                Software Engineer
              </p>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm a Software Engineer with over <span className="text-primary font-semibold">3 years</span> of
              professional experience at <span className="text-primary font-semibold">Contact Software GmbH</span> and{" "}
              <span className="text-primary font-semibold">Netsol Technologies</span>. I specialize in building
              scalable web applications, RESTful APIs, and distributed systems using{" "}
              <span className="text-primary font-semibold">React</span>,{" "}
              <span className="text-primary font-semibold">Node.js</span>, and{" "}
              <span className="text-primary font-semibold">cloud architecture</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => onNavigate("projects")}
                className="bg-primary hover:bg-primary/90 text-background font-semibold rounded-lg px-8 h-12 lg:h-14 text-base lg:text-lg glow-cyan transition-all"
              >
                <Code2 className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-lg px-8 h-12 lg:h-14 text-base lg:text-lg border-primary/50 text-foreground hover:bg-primary/10 font-semibold"
              >
                <a href="/Muhammad_Ahsan-Resume.pdf" download>
                  <FileText className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://github.com/muhahsan0626"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhahsan0626/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:muhahsan0626@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl border-2 border-primary/40 shadow-2xl shadow-primary/20 overflow-hidden bg-card backdrop-blur-sm glow-cyan-subtle">
                <img
                  src="/profile_pic.jpeg"
                  alt="Muhammad Ahsan - Software Engineer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-primary/40 font-mono text-6xl">{ }</div>';
                    }
                  }}
                />
              </div>
              {/* Decorative Corner Element */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/10 border-2 border-primary rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-primary font-mono text-lg font-bold">{'</>'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="bg-card/30 border border-primary/20 rounded-xl p-5 sm:p-6 lg:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3 sm:gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-1.5 p-3 sm:p-4 rounded-xl border border-primary/10 bg-secondary/40 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
              >
                <div className="opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-200">
                  {skillIcons[skill.name]}
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground text-center leading-tight">
                  {skill.name}
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground/70 font-mono">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
