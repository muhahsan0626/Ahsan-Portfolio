import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import AchievementsSection from '@/components/portfolio/AchievementsSection';
import BlogSection from '@/components/portfolio/BlogSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 64; // navbar height
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'experience', 'certifications', 'achievements', 'blog', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // navbar + 1/3 viewport

      // Find which section we're currently in
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Check if scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Listen to scroll events with throttling
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-background min-h-screen relative">
      {/* Tech background pattern */}
      <div className="fixed inset-0 tech-grid-bg opacity-20 pointer-events-none"></div>

      <div className="relative z-10">
        <Navbar onNavigate={scrollToSection} activeSection={activeSection} />
        <HeroSection onNavigate={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <AchievementsSection />
        <BlogSection />
        <ContactSection />
        <Footer onNavigate={scrollToSection} />
      </div>
    </div>
  );
}