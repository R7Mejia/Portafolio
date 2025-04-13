
import { useEffect, useRef } from 'react';

const About = () => {
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

  return (
    <section ref={sectionRef} id="about" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading reveal">
          <span className="text-highlight font-mono mr-2">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="text-slate mb-4 reveal">
              Hello! My name is Your Name, and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            
            <p className="text-slate mb-4 reveal" style={{ transitionDelay: '100ms' }}>
              Fast-forward to today, and I've had the privilege of working at 
              <span className="text-highlight"> an advertising agency</span>, 
              <span className="text-highlight"> a start-up</span>, 
              <span className="text-highlight"> a huge corporation</span>, and 
              <span className="text-highlight"> a student-led design studio</span>. 
              My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
            
            <p className="text-slate mb-6 reveal" style={{ transitionDelay: '200ms' }}>
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8 reveal" style={{ transitionDelay: '300ms' }}>
              {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"].map((tech, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-highlight mr-2">▹</span>
                  <span className="text-slate text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal" style={{ transitionDelay: '400ms' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-highlight rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-white">
                <div className="absolute inset-0 bg-navy/10 z-10"></div>
                {/* Replace with your image */}
                <div className="w-full h-full bg-slate/20 flex items-center justify-center">
                  <p className="text-navy font-medium">Your Image Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
