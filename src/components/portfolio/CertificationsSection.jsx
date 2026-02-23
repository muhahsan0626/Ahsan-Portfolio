import React from 'react';
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Mastering Full Stack Development: From Frontend to Backend",
    org: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/UC-7ef8a5a3-f306-4d44-818b-082518ce7f8f/"
  },
  {
    title: "Become a Data Science Expert with Python Django Tutorial",
    org: "Skill Up",
    year: "2023",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMTMwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDQ5MzMwMl8xNjkzODYwNTM2LnBuZyIsInVzZXJuYW1lIjoiTXVoYW1tYWQgQWhzYW4ifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&refe"
  },
  {
    title: "JavaScript Essentials",
    org: "Cisco",
    year: "2023",
    link: "https://www.credly.com/badges/92ca0b37-9a03-4d50-9ef5-6b0ab7edd279/linked_in_profile"
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <span className="text-primary font-mono text-base sm:text-lg">04.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">Certifications</h2>
          <div className="hidden sm:block flex-1 h-px bg-primary/30 ml-4" />
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {certifications.map((cert, index) => {
            const CardContent = (
              <>
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base leading-snug">{cert.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mt-2">{cert.org}</p>
                <div className="mt-3 sm:mt-4 flex items-center justify-between">
                  <span className="text-xs text-primary font-mono">{cert.year}</span>
                  {cert.link && (
                    <ExternalLink className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
              </>
            );

            return cert.link ? (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-primary/20 rounded-xl p-5 sm:p-6 hover:border-primary hover:bg-card/80 hover:glow-cyan-sm transition-all duration-300 group cursor-pointer"
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={index}
                className="bg-card border border-primary/20 rounded-xl p-5 sm:p-6 hover:border-primary hover:bg-card/80 hover:glow-cyan-sm transition-all duration-300 group"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}