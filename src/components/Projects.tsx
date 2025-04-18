import { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Project Name",
    description:
      "A feature-rich application that demonstrates your skills in building modern, responsive web applications. Include details about the problem it solves and your role in its development.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "./assets/imagenes/dragon.jpg", // Updated image path
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Project II",
    description:
      "A web application showcasing your ability to implement complex features and APIs. Describe the technical challenges you overcame and the impact of your solution.",
    technologies: ["TypeScript", "Next.js"],
    image: "./assets/imagenes/haloj.jpeg", // Updated image path
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Another Project",
    description:
      "A web application showcasing your ability to implement complex features and APIs. Describe the technical challenges you overcame and the impact of your solution.",
    technologies: ["TypeScript", "Next.js"],
    image: "./assets/imagenes/haloj.jpeg", // Updated image path
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Side Project",
    description:
      "A personal project that demonstrates your passion for coding and learning new technologies. Share what you learned and how it improved your skills.",
    technologies: ["Vue.js", "Express", "Firebase"],
    image: "./assets/imagenes/haloj.jpeg", // Updated image path
    github: "#",
    live: "#",
    featured: false,
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
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

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading reveal">
          <span className="text-highlight font-mono mr-2"></span> Projects
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`relative md:grid md:grid-cols-12 md:gap-4 items-center reveal ${
                index % 2 === 0 ? '' : 'md:text-right'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div 
                className={`md:col-span-7 ${
                  index % 2 === 0 ? 'md:col-start-6' : 'md:col-start-1'
                }`}
              >
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block relative group"
                >
                  <div className="absolute inset-0 bg-highlight/20 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"></div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center bg-slate-100"
                      style={{ minHeight: '300px' }}
                    />
                  </div>
                </a>
              </div>

              {/* Project Content */}
              <div 
                className={`md:col-span-6 md:z-10 ${
                  index % 2 === 0 ? 'md:col-start-1 md:text-left' : 'md:col-start-7 md:text-right'
                }`}
              >
                <p className="text-highlight font-mono mb-1 mt-4 md:mt-0">Featured Project</p>
                <h3 className="text-2xl font-heading font-semibold text-navy mb-4">{project.title}</h3>
                
                <div className="bg-white md:p-6 rounded-lg shadow-lg mb-4">
                  <p className="text-slate">{project.description}</p>
                </div>
                
                <ul className={`flex flex-wrap gap-2 mb-4 text-xs ${
                  index % 2 === 0 ? '' : 'md:justify-end'
                }`}>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="tech-pill">{tech}</li>
                  ))}
                </ul>
                
                <div className={`flex gap-4 text-navy ${
                  index % 2 === 0 ? '' : 'md:justify-end'
                }`}>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-highlight transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-highlight transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="reveal" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-heading font-medium text-center mb-8">
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div key={index} className="project-card flex flex-col h-full p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-heading font-semibold text-navy">{project.title}</h4>
                    <div className="flex gap-3 text-navy">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-highlight transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-highlight transition-colors"
                          aria-label="View live project"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-slate text-sm flex-grow">{project.description}</p>
                  <ul className="flex flex-wrap gap-2 mt-4 text-xs">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="tech-pill">{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
