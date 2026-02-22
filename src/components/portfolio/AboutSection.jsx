import React from 'react';

const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"]
  },
  {
    label: "Frameworks",
    skills: ["React", "Node.js", "Express", "Django", "Next.js", "React", "Node.js", "Express", "Django", "Next.js"]
  },
  {
    label: "Tools & Tech",
    skills: ["Git", "Docker", "AWS", "PostgreSQL", "Redis", "CI/CD"]
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <span className="text-primary font-mono text-base sm:text-lg">01.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">About Me</h2>
          <div className="hidden sm:block flex-1 h-px bg-primary/30 ml-4" />
        </div>

        <div className="mt-8 sm:mt-10 bg-card/50 border border-primary/20 rounded-xl p-5 sm:p-6 md:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
            {/* Profile Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl border-2 border-primary/30 shadow-lg shadow-primary/10 overflow-hidden bg-card backdrop-blur-sm">
                  <img
                    src="/profile_pic.jpeg"
                    alt="Muhammad Ahsan - Full Stack Software Engineer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-primary/40 font-mono text-5xl">{ }</div>';
                      }
                    }}
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-primary/10 border-2 border-primary rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-primary font-mono text-xs font-bold">{'</>'}</span>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="md:col-span-2">
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                I'm <span className="text-primary font-semibold">Muhammad Ahsan</span>, a Full Stack Software Engineer with over <span className="text-primary font-semibold">3 years</span> of professional experience at
                <span className="text-primary font-semibold"> Contact Software GmbH</span> and
                <span className="text-primary font-semibold"> Netsol Technologies</span>.
                As a proud <span className="text-primary font-semibold">Netsolian</span> and
                <span className="text-primary font-semibold"> Comsian</span> alumnus, I specialize in designing
                and building scalable web applications, RESTful APIs, and distributed systems.
                I focus on <span className="text-primary font-semibold">React</span>,
                <span className="text-primary font-semibold"> Node.js</span>, and
                <span className="text-primary font-semibold"> cloud architecture</span>, delivering performance-driven solutions
                that create real business value.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3 sm:mb-4 font-mono">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-foreground bg-secondary border border-primary/30 rounded-lg hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}