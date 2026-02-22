import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import ProjectCard from './ProjectCard';

// Mock project data - replace with your actual projects
const mockProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    short_description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    tech_stack: ["React", "Node.js", "MongoDB", "Stripe"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    image: "/src/assets/profile_pic.jpeg", // Add your project image here
    order: 1
  },
  {
    id: 2,
    title: "Task Management App",
    short_description: "Collaborative task management tool with real-time updates, team features, and productivity analytics.",
    tech_stack: ["React", "Firebase", "Tailwind CSS"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    image: "/project-2.jpg", // Add your project image here
    order: 2
  },
  {
    id: 3,
    title: "Weather Dashboard",
    short_description: "Real-time weather tracking application with interactive maps, forecasts, and location-based alerts.",
    tech_stack: ["React", "OpenWeather API", "Chart.js"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    image: "/project-3.jpg", // Add your project image here
    order: 3
  },
];

export default function ProjectsSection() {
  const isLoading = false;
  const projects = mockProjects;

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <span className="text-primary font-mono text-base sm:text-lg">02.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">Projects</h2>
          <div className="hidden sm:block flex-1 h-px bg-primary/30 ml-4" />
        </div>
        <p className="mt-4 text-muted-foreground max-w-2xl text-base sm:text-lg">
          A selection of projects I've built — focused on solving <span className="text-primary font-semibold">real problems</span> with clean, scalable code.
        </p>

        {isLoading ? (
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-card border border-primary/20 rounded-xl p-5 sm:p-6">
                <Skeleton className="h-5 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <div className="flex gap-2">
                  <Skeleton className="h-5 w-14 rounded" />
                  <Skeleton className="h-5 w-14 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <p className="mt-8 sm:mt-10 text-muted-foreground text-sm font-mono">{'> '} Projects coming soon...</p>
        ) : (
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}