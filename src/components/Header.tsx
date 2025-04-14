
import { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#home" style={{ 
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            color: 'var(--foreground)',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Code size={22} style={{ color: 'var(--highlight)', marginRight: '8px' }} />
            <span style={{ color: 'var(--highlight)', marginRight: '4px' }}>{'<'}</span>
            <span>Dev</span>
            <span style={{ color: 'var(--highlight)', marginLeft: '4px' }}>{'>'}</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                className="nav-item"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span style={{ color: 'var(--highlight)', marginRight: '4px', fontFamily: 'JetBrains Mono, monospace' }}>
                  {`0${index + 1}.`}
                </span> {item.label}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button-primary"
              style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            style={{ 
              background: 'none',
              border: 'none',
              color: 'var(--foreground)',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav style={{
          background: 'var(--navy-light)',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
          position: 'fixed',
          inset: '0',
          zIndex: '50',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)'
        }} className="mobile-nav">
          <button 
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'none',
              border: 'none',
              color: 'var(--foreground)',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                className="nav-item"
                style={{ fontSize: '1.125rem' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                <span style={{ 
                  color: 'var(--highlight)', 
                  marginRight: '8px', 
                  fontFamily: 'JetBrains Mono, monospace' 
                }}>
                  {`0${index + 1}.`}
                </span> {item.label}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button-primary"
              style={{ marginTop: '1rem' }}
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
