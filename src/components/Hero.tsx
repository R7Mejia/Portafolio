
import { ArrowDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="hero">
      <div className="container">
        <div style={{ maxWidth: isMobile ? '100%' : '48rem' }}>
          <p style={{
            color: 'var(--highlight)',
            fontFamily: 'JetBrains Mono, monospace',
            marginBottom: isMobile ? '0.75rem' : '1.25rem',
            opacity: '0',
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: '0.2s',
            fontSize: isMobile ? '0.9rem' : '1rem'
          }}>
            <span className="code-font">{">"}</span> Hi, my name is
          </p>
          <h1 style={{
            fontSize: 'clamp(2rem, 8vw, 3.75rem)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            color: 'var(--foreground)',
            marginBottom: isMobile ? '0.75rem' : '1rem',
            opacity: '0',
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: '0.4s',
            lineHeight: isMobile ? '1.2' : '1.3'
          }}>
            <span style={{ display: 'block' }} className="typing-effect">Roberto Mejia</span>
            <span style={{ 
              display: 'block', 
              color: 'var(--slate)', 
              marginTop: isMobile ? '0.3rem' : '0.5rem',
              fontSize: isMobile ? 'clamp(1.25rem, 6vw, 1.75rem)' : 'clamp(1.5rem, 5vw, 2.25rem)'
            }}>I build things for the web.</span>
          </h1>
          <p style={{
            color: 'var(--slate-light)',
            fontSize: isMobile ? '0.95rem' : 'clamp(1rem, 3vw, 1.25rem)',
            maxWidth: isMobile ? '100%' : '36rem',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            opacity: '0',
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: '0.6s',
            lineHeight: '1.6'
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
              <span className="code-font">{"</"}</span> Check out my work <span className="code-font">{">"}</span>
            </a>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: isMobile ? '1.5rem' : '2rem',
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
          <ArrowDown size={isMobile ? 20 : 24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
