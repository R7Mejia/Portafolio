
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          Designed & Built by <span style={{ color: 'var(--highlight)' }}>Your Name</span>
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
