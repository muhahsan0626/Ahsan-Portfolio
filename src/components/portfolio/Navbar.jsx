import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Menu, X, Terminal } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  // { label: "Certifications", id: "certifications" },
  // { label: "Achievements", id: "achievements" },
  // { label: "Blog", id: "blog" },
  { label: "Contact Me", id: "contact" },
];

export default function Navbar({ onNavigate, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/80 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-1.5 sm:gap-2 text-base sm:text-lg font-bold text-foreground tracking-tight group"
        >
          <Terminal className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
          <span className="font-mono text-base sm:text-lg font-bold">MA</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? "text-primary bg-primary/10 border border-primary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent border border-transparent"
              }`}
            >
              <span
                className={`mr-1 ${activeSection === item.id ? "text-primary" : "text-transparent"}`}
              >
                {">"}
              </span>
              {item.label}
            </button>
          ))}
          {/* <Button
            size="sm"
            className="ml-3 bg-primary hover:bg-primary/90 text-background font-semibold rounded-lg px-4 h-9 border border-primary/50 glow-cyan-sm transition-all"
          >
            <FileText className="w-3.5 h-3.5 mr-1.5" />
            <a href="/Muhammad_Ahsan-Resume.pdf" download>
            Resume
            </a>
          </Button> */}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-1.5 sm:p-2 hover:bg-accent rounded-lg transition-colors"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-primary/20 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                  activeSection === item.id
                    ? "text-primary bg-primary/10 border border-primary/30"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground border border-transparent"
                }`}
              >
                <span
                  className={`mr-2 ${activeSection === item.id ? "text-primary" : "text-transparent"}`}
                >
                  {">"}
                </span>
                {item.label}
              </button>
            ))}
            {/* <div className="pt-2">
              <Button
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-background font-semibold rounded-lg h-10 sm:h-11 text-sm"
              >
                <FileText className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2" />
                 <a href="/Muhammad_Ahsan-Resume.pdf" download>
                Download Resume
                 </a>
              </Button>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
}
