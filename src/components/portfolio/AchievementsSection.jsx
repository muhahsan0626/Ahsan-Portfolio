import React from 'react';
import { Trophy, Code2, BookOpen, Mic, ExternalLink } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "1st place at TechHacks 2023 — built an AI-powered accessibility tool in 48 hours",
    link: "https://github.com/muhahsan0626" // Add your achievement link here (e.g., certificate, article, etc.)
  },
  {
    icon: Code2,
    title: "Open Source Contributor",
    description: "Active contributor to React ecosystem libraries with 200+ GitHub stars on personal projects",
    link: "https://github.com/muhahsan0626" // Replace with your GitHub profile
  },
  {
    icon: BookOpen,
    title: "Technical Writer",
    description: "Published articles on system design and best practices reaching 10K+ monthly readers",
    link: "" // Add link to your blog or articles
  },
  {
    icon: Mic,
    title: "Conference Speaker",
    description: "Presented on microservices architecture at local developer meetups and tech events",
    link: "" // Add link to presentation slides or video
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <span className="text-primary font-mono text-base sm:text-lg">05.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">Achievements</h2>
          <div className="hidden sm:block flex-1 h-px bg-primary/30 ml-4" />
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            const CardContent = (
              <>
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">{item.title}</h3>
                    {item.link && (
                      <ExternalLink className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-2 leading-relaxed">{item.description}</p>
                </div>
              </>
            );

            return item.link ? (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 sm:gap-4 bg-card/40 border border-primary/20 rounded-xl p-4 sm:p-5 md:p-6 hover:border-primary/40 hover:bg-card/60 transition-all group cursor-pointer"
              >
                {CardContent}
              </a>
            ) : (
              <div key={index} className="flex gap-3 sm:gap-4 bg-card/40 border border-primary/20 rounded-xl p-4 sm:p-5 md:p-6 hover:border-primary/40 hover:bg-card/60 transition-all group">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}