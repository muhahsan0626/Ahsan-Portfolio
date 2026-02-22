import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, FileText, Code2 } from "lucide-react";

export default function HeroSection({ onNavigate }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-24 lg:py-0 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 tech-grid-bg opacity-40"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>

      {/* Floating Code Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-10 text-primary/20 font-mono text-sm animate-pulse">{'{ code }'}</div>
      <div className="hidden md:block absolute bottom-40 left-10 text-primary/20 font-mono text-sm animate-pulse delay-300">{'</>'}</div>

      <div className="relative z-10 max-w-7xl w-full mx-auto lg:pt-36">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-bold text-foreground leading-tight tracking-tight mb-0 sm:mb-0 lg:mb-0 px-2">
            Hi, I'm <span className="text-primary">Muhammad Ahsan</span>
            <br />
            <span className="text-muted-foreground">Full Stack Software Engineer</span>
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-8 sm:mt-10 lg:mt-12 xl:mt-14 justify-center px-4">
            <div className="text-center min-w-[80px] lg:min-w-[100px] xl:min-w-[120px]">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary font-mono">3+</div>
              <div className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-1 lg:mt-2">Years Experience</div>
            </div>
            <div className="text-center min-w-[80px] lg:min-w-[100px] xl:min-w-[120px]">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary font-mono">20+</div>
              <div className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-1 lg:mt-2">Projects Built</div>
            </div>
            <div className="text-center min-w-[80px] lg:min-w-[100px] xl:min-w-[120px]">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary font-mono">120K+</div>
              <div className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-1 lg:mt-2">Lines of Code</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 lg:mt-12 xl:mt-14 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 lg:gap-5 justify-center w-full px-4 max-w-md sm:max-w-none">
            <Button
              onClick={() => onNavigate('projects')}
              className="bg-primary hover:bg-primary/90 text-background font-semibold rounded-lg px-6 sm:px-8 lg:px-10 h-11 sm:h-12 lg:h-14 text-sm sm:text-base lg:text-lg glow-cyan transition-all w-full sm:w-auto"
            >
              <Code2 className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 mr-2" />
              View Projects
            </Button>
<Button
  asChild
  variant="outline"
  className="rounded-lg px-6 sm:px-8 lg:px-10 h-11 sm:h-12 lg:h-14 text-sm sm:text-base lg:text-lg border-primary/50 text-foreground hover:bg-primary/10 font-semibold w-full sm:w-auto"
>
  <a href="/Muhammad_Ahsan-Resume.pdf" download>
    <FileText className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 mr-2" />
    Download Resume
  </a>
</Button>
          </div>

          {/* Social Links */}
          <div className="mt-10 sm:mt-12 lg:mt-14 xl:mt-16 flex gap-4 sm:gap-6 lg:gap-8 justify-center">
            <a
              href="https://github.com/muhahsan0626"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 sm:w-12 lg:w-14 xl:w-16 h-10 sm:h-12 lg:h-14 xl:h-16 flex items-center justify-center rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Github className="w-4 sm:w-5 lg:w-6 xl:w-7 h-4 sm:h-5 lg:h-6 xl:h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhahsan0626/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 sm:w-12 lg:w-14 xl:w-16 h-10 sm:h-12 lg:h-14 xl:h-16 flex items-center justify-center rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Linkedin className="w-4 sm:w-5 lg:w-6 xl:w-7 h-4 sm:h-5 lg:h-6 xl:h-7" />
            </a>
            <a
              href="mailto:muhahsan0626@gmail.com"
              className="w-10 sm:w-12 lg:w-14 xl:w-16 h-10 sm:h-12 lg:h-14 xl:h-16 flex items-center justify-center rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all cursor-pointer"
              aria-label="Send email"
            >
              <Mail className="w-4 sm:w-5 lg:w-6 xl:w-7 h-4 sm:h-5 lg:h-6 xl:h-7" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => onNavigate('about')}
            className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ArrowDown className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7" />
          </button>
        </div>
      </div>
    </section>
  );
}