
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div style={{ maxWidth: '48rem' }}>
          <p style={{
            color: 'var(--highlight)',
            fontFamily: 'Fira Code, monospace',
            marginBottom: '1.25rem',
            opacity: '0',
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: '0.2s'
          }}>
            Hi, my name is
          </p>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            color: 'var(--navy)',
            marginBottom: '1rem',
            opacity: '0',
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: '0.4s'
          }}>
            <span style={{ display: 'block' }}>Your Name.</span>
            <span style={{ 
              display: 'block', 
              color: 'var(--slate)', 
              marginTop: '0.5rem' 
            }}>I build things for the web.</span>
          </h1>
          <p style={{
            color: 'var(--slate-light)',
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            maxWidth: '36rem',
            marginBottom: '2rem',
            opacity: '0',
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: '0.6s'
          }}>
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating accessible, human-centered products.
          </p>
          <div style={{
            opacity: '0',
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: '0.8s'
          }}>
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

      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite'
      }}>
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll down"
          style={{
            color: 'var(--highlight)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
