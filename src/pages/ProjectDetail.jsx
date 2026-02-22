import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

// Mock project data
const mockProjects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    short_description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    tech_stack: ["React", "Node.js", "MongoDB", "Stripe"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    long_description: "This comprehensive e-commerce platform provides a complete solution for online retail businesses. Features include secure payment processing through Stripe, real-time inventory tracking, customer management, order processing, and detailed analytics dashboards. Built with modern technologies ensuring scalability and performance."
  },
  {
    id: "2",
    title: "Task Management App",
    short_description: "Collaborative task management tool with real-time updates, team features, and productivity analytics.",
    tech_stack: ["React", "Firebase", "Tailwind CSS"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    long_description: "A modern task management application designed for teams. Features real-time collaboration, task assignments, progress tracking, deadline management, and team productivity insights. Built with Firebase for real-time synchronization and Tailwind CSS for a beautiful, responsive interface."
  },
  {
    id: "3",
    title: "Weather Dashboard",
    short_description: "Real-time weather tracking application with interactive maps, forecasts, and location-based alerts.",
    tech_stack: ["React", "OpenWeather API", "Chart.js"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    long_description: "An intuitive weather dashboard that provides real-time weather information, 7-day forecasts, interactive weather maps, and customizable location-based alerts. Integrates with OpenWeather API and uses Chart.js for beautiful data visualizations."
  }
];

export default function ProjectDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  const navigate = useNavigate();

  // Find project from mock data
  const project = mockProjects.find(p => p.id === projectId);
  const isLoading = false;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto space-y-6">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-40 w-full rounded-xl" />
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-muted-foreground text-sm sm:text-base">Project not found.</p>
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="mt-4 rounded-lg border-primary/50 h-9 sm:h-10 text-sm"
          >
            <ArrowLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2" /> Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 sm:mb-8 -ml-2 sm:-ml-3 text-muted-foreground hover:text-primary rounded-lg h-9 text-sm"
        >
          <ArrowLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2" /> Back
        </Button>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">{project?.title}</h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{project?.short_description}</p>

        {project?.tech_stack?.length > 0 && (
          <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
            {project.tech_stack.map(tech => (
              <span key={tech} className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium font-mono text-primary bg-primary/10 border border-primary/30 rounded">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full rounded-lg border-primary/50 hover:bg-primary/10 hover:border-primary h-9 sm:h-10 text-sm">
                <Github className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2" /> GitHub
              </Button>
            </a>
          )}
          {project.live_url && (
            <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full bg-primary hover:bg-primary/90 text-background rounded-lg glow-cyan-sm h-9 sm:h-10 text-sm">
                <ExternalLink className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2" /> Live Demo
              </Button>
            </a>
          )}
        </div>

        <div className="mt-10 sm:mt-12 space-y-8 sm:space-y-10">
          {project?.long_description && (
            <div className="bg-card/40 border border-primary/20 rounded-xl p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
                <span className="text-primary font-mono mr-2 text-sm sm:text-base">{'>'}</span> Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.long_description}</p>
            </div>
          )}

          {project?.overview && (
            <div className="bg-card/40 border border-primary/20 rounded-xl p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
                <span className="text-primary font-mono mr-2 text-sm sm:text-base">{'>'}</span> Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.overview}</p>
            </div>
          )}

          {project.key_features?.length > 0 && (
            <div className="bg-card/40 border border-primary/20 rounded-xl p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
                <span className="text-primary font-mono mr-2 text-sm sm:text-base">{'>'}</span> Key Features
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {project.key_features.map((feature, i) => (
                  <li key={i} className="flex gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                    <span className="text-primary mt-0.5 font-mono text-xs sm:text-sm">{'>'}</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.architecture_notes && (
            <div className="bg-card/40 border border-primary/20 rounded-xl p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
                <span className="text-primary font-mono mr-2 text-sm sm:text-base">{'>'}</span> Architecture & Tech Decisions
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.architecture_notes}</p>
            </div>
          )}

          {project.screenshots?.length > 0 && (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
                <span className="text-primary font-mono mr-2 text-sm sm:text-base">{'>'}</span> Screenshots
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {project.screenshots.map((url, i) => (
                  <img key={i} src={url} alt={`Screenshot ${i + 1}`} className="rounded-xl border border-primary/30" />
                ))}
              </div>
            </div>
          )}

          {project.challenges_results && (
            <div className="bg-card/40 border border-primary/20 rounded-xl p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
                <span className="text-primary font-mono mr-2 text-sm sm:text-base">{'>'}</span> Challenges & Results
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.challenges_results}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}