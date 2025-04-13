
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-slate-light text-sm">
          Designed & Built by <span className="text-highlight">Your Name</span>
        </p>
        <p className="text-slate text-xs mt-2">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
