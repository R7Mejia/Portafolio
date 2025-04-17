
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Code, Upload } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/components/ui/use-toast";

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

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

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu after clicking
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf') {
        // Here you would typically handle the file upload
        // For now, we'll just show a success message
        toast({
          title: "Resume uploaded successfully!",
          description: `File name: ${file.name}`,
        });
      } else {
        toast({
          title: "Error",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
      }
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  // Hidden file input
  const fileInput = (
    <input
      type="file"
      ref={fileInputRef}
      onChange={handleFileUpload}
      accept=".pdf"
      style={{ display: 'none' }}
    />
  );

  const resumeButton = (
    <button 
      onClick={triggerFileUpload}
      className="button-primary"
      style={{ fontSize: '0.875rem', padding: '0.5rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
    >
      <Upload size={16} />
      Upload Resumè
    </button>
  );

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: isMobile ? '0.75rem 0.5rem' : '1rem 0',
          width: '100%'
        }}>
          <a href="#home" style={{ 
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 'bold',
            fontSize: isMobile ? '1rem' : '1.25rem',
            color: 'var(--foreground)',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Code size={isMobile ? 16 : 22} style={{ color: 'var(--highlight)', marginRight: '6px' }} />
            <span style={{ color: 'var(--highlight)', marginRight: '3px' }}>{'<'}</span>
            <span>Dev</span>
            <span style={{ color: 'var(--highlight)', marginLeft: '3px' }}>{'>'}</span>
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
                  handleNavClick(item.href);
                }}
              >
                <span style={{ color: 'var(--highlight)', marginRight: '4px', fontFamily: 'JetBrains Mono, monospace' }}>
                  {`0${index + 1}.`}
                </span> {item.label}
              </a>
            ))}
            {resumeButton}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button 
                style={{ 
                  background: 'none',
                  border: 'none',
                  color: 'var(--foreground)',
                  cursor: 'pointer',
                  padding: '0.5rem',
<<<<<<< HEAD
                  marginRight: '1.5rem' // Move it a bit to the left
=======
                  marginLeft: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
>>>>>>> f766ae40d906dd4d98367084703b693a8f46029b
                }}
                className="mobile-menu-button"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[var(--navy)] border-[var(--border)] w-[80%] sm:w-[300px] p-0">
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '1.5rem',
                gap: '1rem'
              }} className="mobile-menu-nav">
                {navItems.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href}
                    style={{
                      fontSize: '1rem',
                      color: 'var(--slate-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 0',
                      width: '100%',
                      justifyContent: 'center',
                      borderBottom: index !== navItems.length - 1 ? '1px solid var(--navy-lighter)' : 'none'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <span style={{ color: 'var(--highlight)', fontFamily: 'JetBrains Mono, monospace' }}>
                      {`0${index + 1}.`}
                    </span> {item.label}
                  </a>
                ))}
                {resumeButton}
              </nav>
            </SheetContent>
          </Sheet>
          {fileInput}
        </div>
      </div>
    </header>
  );
};

export default Header;
