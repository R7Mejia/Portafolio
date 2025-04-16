
import { useEffect, useRef } from 'react';

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
      { name: "SQL", level: 60 },
      { name: "GraphQL", level: 60 },
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
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-slate-lighter font-medium text-sm">{name}</span>
        <span className="text-highlight font-mono text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-navy-lighter rounded-full overflow-hidden">
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
    <section ref={sectionRef} id="skills" className="section bg-navy">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-white reveal">
{/*           made a change here */}
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="reveal" 
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-white text-xl font-heading font-medium mb-6 pb-2 border-b border-highlight/30">
                {category.category}
              </h3>
              <div>
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
