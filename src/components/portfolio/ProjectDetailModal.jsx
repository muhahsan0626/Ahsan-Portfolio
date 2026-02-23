import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X, Github, ExternalLink } from "lucide-react";

export default function ProjectDetailModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    // Prevent body scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Close when clicking backdrop
  const handleBackdropClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!project) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Modal Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card border border-primary/30 rounded-2xl shadow-2xl shadow-primary/10 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-20 w-9 h-9 flex items-center justify-center rounded-lg bg-secondary/80 border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight pr-10">
            {project.title}
          </h2>

          {/* Short description */}
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {project.short_description}
          </p>

          {/* Tech stack */}
          {project.tech_stack?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs sm:text-sm font-medium font-mono text-primary bg-primary/10 border border-primary/30 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Action buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="w-full rounded-lg border-primary/50 hover:bg-primary/10 hover:border-primary h-10 text-sm"
                >
                  <Github className="w-4 h-4 mr-2" /> View on GitHub
                </Button>
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-background rounded-lg glow-cyan-sm h-10 text-sm">
                  <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                </Button>
              </a>
            )}
          </div>

          {/* Detailed sections */}
          <div className="mt-8 space-y-6">
            {project.long_description && (
              <div className="bg-secondary/30 border border-primary/15 rounded-xl p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center">
                  <span className="text-primary font-mono mr-2 text-sm">
                    {">"}
                  </span>
                  Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {project.long_description}
                </p>
              </div>
            )}

            {project.key_features?.length > 0 && (
              <div className="bg-secondary/30 border border-primary/15 rounded-xl p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center">
                  <span className="text-primary font-mono mr-2 text-sm">
                    {">"}
                  </span>
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.key_features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-muted-foreground text-sm sm:text-base"
                    >
                      <span className="text-primary mt-0.5 font-mono text-xs">
                        {">"}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.architecture_notes && (
              <div className="bg-secondary/30 border border-primary/15 rounded-xl p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center">
                  <span className="text-primary font-mono mr-2 text-sm">
                    {">"}
                  </span>
                  Architecture & Tech Decisions
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {project.architecture_notes}
                </p>
              </div>
            )}

            {project.screenshots?.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 flex items-center">
                  <span className="text-primary font-mono mr-2 text-sm">
                    {">"}
                  </span>
                  Screenshots
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.screenshots.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt={`Screenshot ${i + 1}`}
                      className="rounded-xl border border-primary/30"
                    />
                  ))}
                </div>
              </div>
            )}

            {project.challenges_results && (
              <div className="bg-secondary/30 border border-primary/15 rounded-xl p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center">
                  <span className="text-primary font-mono mr-2 text-sm">
                    {">"}
                  </span>
                  Challenges & Results
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {project.challenges_results}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
