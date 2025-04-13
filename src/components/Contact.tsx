
import { useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
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
    <section ref={sectionRef} id="contact" className="section bg-navy">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-highlight font-mono mb-2 reveal">
            04. What's Next?
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-6 reveal" style={{ transitionDelay: '100ms' }}>
            Get In Touch
          </h2>
          <p className="text-slate-light mb-8 reveal" style={{ transitionDelay: '200ms' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="mb-8 reveal" style={{ transitionDelay: '300ms' }}>
            <a 
              href="mailto:your-email@example.com" 
              className="button-primary"
            >
              <Mail size={18} />
              Say Hello
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 text-white reveal" style={{ transitionDelay: '400ms' }}>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-highlight transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-highlight transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
