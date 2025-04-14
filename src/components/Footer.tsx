
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex flex-col items-center space-y-3">
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight transition-colors">
              <Github size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          <p>
            <span className="code-font">/* </span>
            Designed & Built by <span style={{ color: 'var(--highlight)' }}>Your Name</span>
            <span className="code-font"> */</span>
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
