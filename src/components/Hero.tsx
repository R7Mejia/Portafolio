
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-10 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="text-highlight font-mono mb-5 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <span className="text-balance block">Your Name.</span>
            <span className="text-slate text-balance block mt-2">I build things for the web.</span>
          </h1>
          <p className="text-slate-light text-lg md:text-xl max-w-xl mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating accessible, human-centered products.
          </p>
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <a 
              href="#projects" 
              className="button-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Check out my work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll down"
        >
          <ArrowDown className="text-highlight" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
