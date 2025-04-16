import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
     
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 65 },
      { name: "CI/CD", level: 60 },
      { name: "Testing", level: 70 },
    ]
  }
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mb-3 md:mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-slate-lighter font-medium text-xs md:text-sm">{name}</span>
        <span className="text-highlight font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 md:h-2 bg-navy-lighter rounded-full overflow-hidden">
        <div 
          className="h-full bg-highlight transition-all duration-1000 ease-out rounded-full" 
          style={{ width: '0%' }}
          data-width={`${level}%`}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Animate skill bars when section becomes visible
            const skillBars = entry.target.querySelectorAll('.bg-highlight');
            skillBars.forEach((bar: Element) => {
              if (bar instanceof HTMLElement) {
                setTimeout(() => {
                  const width = bar.dataset.width || '0%';
                  bar.style.width = width;
                }, 300);
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElements = sectionRef.current?.querySelectorAll('.reveal');
    if (currentElements) {
      currentElements.forEach(el => observer.observe(el));
    }

    return () => {
      if (currentElements) {
        currentElements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section bg-navy py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-white reveal text-2xl md:text-3xl mb-8 md:mb-12">
          <span className="text-highlight font-mono mr-2"></span>Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="reveal bg-navy-light p-4 md:p-6 rounded-lg border border-highlight/10" 
              style={{ 
                transitionDelay: `${categoryIndex * (isMobile ? 50 : 100)}ms`,
              }}
            >
              <h3 className="text-white text-lg md:text-xl font-heading font-medium mb-4 md:mb-6 pb-2 border-b border-highlight/30">
                {category.category}
              </h3>
              <div className="space-y-2 md:space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex}
                    name={skill.name} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
