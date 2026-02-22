import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-card border border-primary/20 rounded-xl p-4 sm:p-5 md:p-6 hover:border-primary hover:glow-cyan-sm transition-all duration-300 overflow-hidden">
      {/* Background Image with Blur Effect */}
      {project.image && (
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            style={{ filter: 'blur(8px)' }}
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 group-hover:from-background/90 group-hover:via-background/85 group-hover:to-background/90 transition-all duration-300"></div>
        </div>
      )}

      {/* Content - positioned above background */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <Code2 className="w-4 sm:w-5 h-4 sm:h-5 text-primary/60 group-hover:text-primary transition-colors" />
          <div className="flex gap-2">{project.github_url && (
              <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </a>
            )}
            {project.live_url && (
              <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="mt-2 sm:mt-3 text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
          {project.short_description}
        </p>

        {project.tech_stack?.length > 0 && (
          <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium font-mono text-primary bg-primary/10 border border-primary/30 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 sm:mt-6">
          <Link to={createPageUrl("ProjectDetail") + `?id=${project.id}`}>
            <Button
              variant="outline"
              size="sm"
              className="w-full rounded-lg text-xs sm:text-sm h-8 sm:h-9 border-primary/50 hover:bg-primary/10 hover:border-primary font-medium"
            >
              View Details
              <ExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}