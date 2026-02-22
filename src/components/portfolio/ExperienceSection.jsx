import React from 'react';
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Company Name",
    logo: "/company-logo-1.png", // Add your company logo here
    duration: "Jan 2023 — Present",
    achievements: [
      "Led development of a microservices architecture serving 50K+ daily users",
      "Reduced API response times by 40% through query optimization and caching",
      "Mentored 2 junior developers and established code review best practices",
      "Built CI/CD pipelines that cut deployment time from 2 hours to 15 minutes"
    ]
  },
  {
    title: "Junior Software Engineer",
    company: "Previous Company",
    logo: "/company-logo-2.png", // Add your company logo here
    duration: "Jun 2021 — Dec 2022",
    achievements: [
      "Developed and maintained 5+ RESTful APIs used by mobile and web clients",
      "Implemented automated testing suite achieving 85% code coverage",
      "Collaborated with product team to deliver features on tight deadlines",
      "Migrated legacy codebase to modern React stack, improving performance 3x"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Tech Startup",
    logo: "/company-logo-3.png", // Add your company logo here
    duration: "Jan 2021 — May 2021",
    achievements: [
      "Built internal dashboard for monitoring system metrics in real-time",
      "Wrote Python scripts to automate data pipeline processes",
      "Participated in daily standups and agile sprint planning"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <span className="text-primary font-mono text-base sm:text-lg">03.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">Experience</h2>
          <div className="hidden sm:block flex-1 h-px bg-primary/30 ml-4" />
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 pb-10 sm:pb-12 last:pb-0">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[13px] sm:left-[15px] top-8 bottom-0 w-px bg-primary/30" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-[26px] sm:w-[30px] h-[26px] sm:h-[30px] rounded-lg bg-primary/10 border-2 border-primary flex items-center justify-center glow-cyan-sm">
                <Briefcase className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" />
              </div>

              <div className="bg-card/40 border border-primary/20 rounded-xl p-4 sm:p-5 md:p-6 hover:border-primary/40 transition-all">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium text-sm sm:text-base font-mono">{exp.company}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">{exp.duration}</p>
                  </div>
                  {/* Company Logo */}
                  {exp.logo && (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-card border border-primary/30 flex items-center justify-center p-2 flex-shrink-0 overflow-hidden">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          if (target.parentElement) {
                            target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-primary/40 font-mono text-lg">{ }</div>';
                          }
                        }}
                      />
                    </div>
                  )}
                </div>
                <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex gap-2 sm:gap-3">
                      <span className="text-primary mt-0.5 flex-shrink-0 font-mono text-xs">{'>'}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}