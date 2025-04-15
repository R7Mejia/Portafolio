
import { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <Sheet>
            <SheetTrigger asChild>
              <button 
                style={{ 
                  background: 'none',
                  border: 'none',
                  color: 'var(--foreground)',
                  cursor: 'pointer',
                  padding: '0.5rem'
                }}
                className="mobile-menu-button"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[var(--navy)] border-[var(--border)] w-[300px] p-0">
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '2rem'
              }}>
                {navItems.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href}
                    style={{
                      fontSize: '1.125rem',
                      margin: '1rem 0',
                      color: 'var(--slate-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span style={{ color: 'var(--highlight)', fontFamily: 'JetBrains Mono, monospace' }}>
                      {`0${index + 1}.`}
                    </span> {item.label}
                  </a>
                ))}
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button-primary"
                  style={{ marginTop: '2rem' }}
                >
                  Resume
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
